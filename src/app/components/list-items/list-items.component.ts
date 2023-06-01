import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FichaCardioService } from 'src/app/service/ficha-cardio.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  antecedentes: any [] = []
  medicacionhabitual: any [] = []
  tratamiento: any [] = []
  factoresriesgo: any [] = []
  loading: boolean = true
  nombre = new FormControl('')

  constructor(private _fichaCardio: FichaCardioService, 
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getDatos()
    this.nombre.addValidators(Validators.required)
  }

  agregar(item: string){
    if(!this.nombre.invalid){
      switch (item) {
        case 'antecedentes':
          this._fichaCardio.agregarAntecedentes({nombre: this.nombre.value})
          .then(() => this.toastr.success('El item fue agregado', '', {positionClass: 'toast-bottom-center'}))
          .catch(() => this.toastr.error('Hubo un error al agregar', '', {positionClass: 'toast-bottom-center'}))
          break;
        case 'factoresriesgo':
          this._fichaCardio.agregarFactoresRiesgo({nombre: this.nombre.value})
          .then(() => this.toastr.success('El item fue agregado', '', {positionClass: 'toast-bottom-center'}))
          .catch(() => this.toastr.error('Hubo un error al agregar', '', {positionClass: 'toast-bottom-center'}))
          break;
        case 'tratamiento':
          this._fichaCardio.agregarTratamiento({nombre: this.nombre.value})
          .then(() => this.toastr.success('El item fue agregado', '', {positionClass: 'toast-bottom-center'}))
          .catch(() => this.toastr.error('Hubo un error al agregar', '', {positionClass: 'toast-bottom-center'}))
          break;
        case 'medicacionhabitual':
          this._fichaCardio.agregarMedicacionHabitual({nombre: this.nombre.value})
          .then(() => this.toastr.success('El item fue agregado', '', {positionClass: 'toast-bottom-center'}))
          .catch(() => this.toastr.error('Hubo un error al agregar', '', {positionClass: 'toast-bottom-center'}))
          break;
        default:
          break;
      }
    }else{
      this.toastr.error('No se puede agregar un item vacio', '', {positionClass: 'toast-bottom-center'})
    }
  }

  eliminar(item: string, id: string){
    switch (item) {
      case 'antecedentes':
        this._fichaCardio.eliminarAntecedentes(id)
        .then(() => this.toastr.error('El item fue eliminado', '', {positionClass: 'toast-bottom-center'}))
        .catch(() => this.toastr.error('Hubo un error al eliminar', '', {positionClass: 'toast-bottom-center'}))
        break;
      case 'factoresriesgo':
        this._fichaCardio.eliminarFactoresRiesgo(id)
        .then(() => this.toastr.error('El item fue eliminado', '', {positionClass: 'toast-bottom-center'}))
        .catch(() => this.toastr.error('Hubo un error al eliminar', '', {positionClass: 'toast-bottom-center'}))
        break;
      case 'tratamiento':
        this._fichaCardio.eliminarTratamiento(id)
        .then(() => this.toastr.error('El item fue eliminado', '', {positionClass: 'toast-bottom-center'}))
        .catch(() => this.toastr.error('Hubo un error al eliminar', '', {positionClass: 'toast-bottom-center'}))
        break;
      case 'medicacionhabitual':
        this._fichaCardio.eliminarMedicacionHabitual(id)
        .then(() => this.toastr.error('El item fue eliminado', '', {positionClass: 'toast-bottom-center'}))
        .catch(() => this.toastr.error('Hubo un error al eliminar', '', {positionClass: 'toast-bottom-center'}))
        break;
      default:
        break;
    }
  }

  getDatos(){
    this._fichaCardio.getAntecedentes().subscribe(data =>{
      this.antecedentes = []
      data.forEach((element: any) => {
        this.antecedentes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
    this._fichaCardio.getTratamiento().subscribe(data =>{
      this.tratamiento = []
      data.forEach((element: any) => {
        this.tratamiento.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
    this._fichaCardio.getMedicacionHabitual().subscribe(data =>{
      this.medicacionhabitual = []
      data.forEach((element: any) => {
        this.medicacionhabitual.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
    this._fichaCardio.getFactoresRiesgo().subscribe(data =>{
      this.factoresriesgo = []
      data.forEach((element: any) => {
        this.factoresriesgo.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      this.loading = false
    })
  }
}
