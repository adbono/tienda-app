import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFichaCardioComponent } from './components/create-ficha-cardio/create-ficha-cardio.component';
import { ListFichaCardioComponent } from './components/list-ficha-cardio/list-ficha-cardio.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto.component';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'producto/listado', component: ListaProductoComponent},
  { path: 'producto/nuevo', component: NuevoProductoComponent},
  { path: 'home', component: ListFichaCardioComponent},
  { path: 'create/:id', component: CreateFichaCardioComponent},
  { path: 'items', component: ListItemsComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
