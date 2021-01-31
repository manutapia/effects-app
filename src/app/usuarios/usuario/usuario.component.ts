import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as usuarioActions from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
  
  user:Usuario;
  loading:boolean;
  error:any;

  constructor(private router:ActivatedRoute, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      const id = params['id'];
      this.store.dispatch( new usuarioActions.CargarUsuario(id));
    });

    this.store.select('usuario').subscribe(usuario=>{
      this.user  = usuario.user;
      this.loading = usuario.loading;
      console.log("ERROR: ",usuario.error);
      this.error = usuario.error;
    })
  }

}
