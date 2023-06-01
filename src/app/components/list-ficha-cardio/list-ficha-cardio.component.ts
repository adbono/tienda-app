import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { FichaCardioService } from 'src/app/service/ficha-cardio.service';
import * as XLSX from 'xlsx';  

@Component({
  selector: 'app-list-ficha-cardio',
  templateUrl: './list-ficha-cardio.component.html',
  styleUrls: ['./list-ficha-cardio.component.css']
})
export class ListFichaCardioComponent implements OnInit {

  fichas: any[] = []
  loading: boolean = true;

  constructor(private _listFichaCardio: FichaCardioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getFichas()
  }

  eliminar(id: string){
    this._listFichaCardio.eliminarFicha(id)
      .then(() => this.toastr.error('La ficha fue eliminada', '', {positionClass: 'toast-bottom-center'}))
      .catch(() => this.toastr.error('Hubo un error al eliminar', '', {positionClass: 'toast-bottom-center'}))
  }

  getFichas(){
    this._listFichaCardio.getFichas().subscribe(data =>{
      this.fichas = []
      data.forEach((element: any) => {
        this.fichas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      this.loading = false
    })
  }

  exportExcel(){
    var listfichas = this.fichas.map(e => {
      var nuevo = {
        'Nombre': e.nombre,
        'Edad': e.edad,
        'Sexo': e.sexo,
        'Dias de Internacion': e.diasinternacion,
        'Internaciones Previas': e.internacionesprevias,
        'Factores de Riesgo': e.factoresriesgo.toString().split(',').join(', '),
        'Antecedentes': e.antecedentes.toString().split(',').join(', '),
        'Clase Funcional': e.clasefuncional,
        'Medicacion Habitual': e.medicacionhabitual.toString().split(',').join(', '),
        'Forma de Presentacion': e.formapresentacion,
        'Causa Descompensante': e.causadescompensante,
        'Ritmo': e.ritmo,
        'Frecuencia': e.frecuencia,
        'BCRI': e.bcri,
        'FSVI': e.fsvi,
        'PSAP': e.psap,
        'Urea': e.urea,
        'HTO/HB': e.htohb,
        'Creatinina': e.creatinina,
        'Troponinaus': e.troponinaus,
        'Dimero D': e.dimerod,
        'PCR': e.pcr,
        'VSG': e.vsg,
        'Potasio': e.potasio,
        'Sodio': e.sodio,
        'Cloro': e.cloro,
        'Tratamiento': e.tratamiento.toString().split(',').join(', '),
        'BCIA': e.bcia,
        'IOT/ARM': e.iotarm,
        'Dialisis': e.dialisis,
        'CDI/TRC': e.cditrc,
        'PROBNP': e.probnp,
        'Obito': e.obito,
      }
      return nuevo
    });
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(listfichas)
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja1');  
    XLSX.writeFile(wb, 'Fichas_Cardio.xlsx');  
  }

}
