import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment  } from "../environments/environment";

// nrgx
import { StoreModule } from '@ngrx/store';
import { appReducers } from "./store/app.reducer";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { effectsArray } from "./store/effects";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { UsuariosModule } from "./usuarios/usuarios.module";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effectsArray)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
