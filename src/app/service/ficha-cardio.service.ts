import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichaCardioService {

  constructor(private firestore: AngularFirestore) { }

  agregarFicha(ficha: any): Promise<any>{
    return this.firestore.collection('fichacardio').add(ficha)
  }

  getFichas(): Observable<any>{
    return this.firestore.collection('fichacardio', ref => ref.orderBy('fechaalta','asc')).snapshotChanges()
  }

  eliminarFicha(id: string): Promise<any>{
    return this.firestore.collection('fichacardio').doc(id).delete();
  }

  getFicha(id: string): Observable<any>{
    return this.firestore.collection('fichacardio').doc(id).snapshotChanges()
  }

  actualizarFicha(id: string, data: any){
    return this.firestore.collection('fichacardio').doc(id).update(data);
  }

  /*******************************************************/

  getFactoresRiesgo(): Observable<any>{
    return this.firestore.collection('factoresriesgo', ref => ref.orderBy('nombre','asc')).snapshotChanges()
  }

  agregarFactoresRiesgo(valor: any): Promise<any>{
    return this.firestore.collection('factoresriesgo').add(valor)
  }

  eliminarFactoresRiesgo(id: string): Promise<any>{
    return this.firestore.collection('factoresriesgo').doc(id).delete();
  }

  /*******************************************************/

  getAntecedentes(): Observable<any>{
    return this.firestore.collection('antecedentes', ref => ref.orderBy('nombre','asc')).snapshotChanges()
  }

  agregarAntecedentes(valor: any): Promise<any>{
    return this.firestore.collection('antecedentes').add(valor)
  }

  eliminarAntecedentes(id: string): Promise<any>{
    return this.firestore.collection('antecedentes').doc(id).delete();
  }

  /*******************************************************/

  getMedicacionHabitual(): Observable<any>{
    return this.firestore.collection('medicacionhabitual', ref => ref.orderBy('nombre','asc')).snapshotChanges()
  }

  agregarMedicacionHabitual(valor: any): Promise<any>{
    return this.firestore.collection('medicacionhabitual').add(valor)
  }

  eliminarMedicacionHabitual(id: string): Promise<any>{
    return this.firestore.collection('medicacionhabitual').doc(id).delete();
  }

  /*******************************************************/

  getTratamiento(): Observable<any>{
    return this.firestore.collection('tratamiento', ref => ref.orderBy('nombre','asc')).snapshotChanges()
  }

  agregarTratamiento(valor: any): Promise<any>{
    return this.firestore.collection('tratamiento').add(valor)
  }

  eliminarTratamiento(id: string): Promise<any>{
    return this.firestore.collection('tratamiento').doc(id).delete();
  }

  /*******************************************************/
}
