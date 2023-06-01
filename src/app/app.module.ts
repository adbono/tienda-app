import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateUsuarioComponent } from './components/create-usuario/create-usuario.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import localeEsAr from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsAr, 'es-AR');
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CreateFichaCardioComponent } from './components/create-ficha-cardio/create-ficha-cardio.component';
import { ListFichaCardioComponent } from './components/list-ficha-cardio/list-ficha-cardio.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto.component';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsuariosComponent,
    NavbarComponent,
    CreateUsuarioComponent,
    CreateFichaCardioComponent,
    ListFichaCardioComponent,
    ListItemsComponent,
    NuevoProductoComponent,
    ListaProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireAuthModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
