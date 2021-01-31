import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { UsuarioService } from "../../services/usuario.service";
import * as usuariosActions from '../actions'
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions, private _usuario:UsuarioService){}

    @Effect()
    cargarUsuarios$ = createEffect(()=> this.actions$.pipe(
        ofType(usuariosActions.CARGAR_USUARIOS),
        mergeMap(()=> {
            return this._usuario.getUser().pipe(
                map(users => new usuariosActions.CargarUsuariosSuccess(users)),
                catchError( error => of(new usuariosActions.CargarUsuariosFail(error)) )
            )
        })
    )); 
}