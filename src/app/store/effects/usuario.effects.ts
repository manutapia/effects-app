import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { UsuarioService } from "../../services/usuario.service";
import * as usuarioActions from '../actions'
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class UsuarioEffects {
    constructor(private actions$: Actions, private _usuario:UsuarioService){}

    @Effect()
    cargarUsuario$ = createEffect(()=> this.actions$.pipe(
        ofType(usuarioActions.CARGAR_USUARIO),
        mergeMap((action)=> {
            const id = action['id'];
            console.log(action);
            return this._usuario.getUserById(id).pipe(
                map(user => new usuarioActions.CargarUsuarioSuccess(user)),
                catchError( error => of(new usuarioActions.CargarUsuarioFail(error)) )
            )
        })
    )); 
}