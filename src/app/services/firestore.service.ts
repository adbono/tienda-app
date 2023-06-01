import { Injectable } from '@angular/core';
import { Action, AngularFirestore, DocumentChangeAction, DocumentReference, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface orderBy {
  campo: string,
  ordenamiento: 'asc' | 'desc'
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  table: string = '';

  constructor(private firestore: AngularFirestore) { }

  add(data: any): Promise<DocumentReference<any>>{
    return this.firestore.collection(this.table).add(data)
  }

  getAll(orderBy: orderBy): Observable<DocumentChangeAction<any>[]>{
    return this.firestore.collection(this.table, ref => ref.orderBy(orderBy.campo, orderBy.ordenamiento)).snapshotChanges()
  }

  delete(id: string): Promise<void>{
    return this.firestore.collection(this.table).doc(id).delete();
  }

  get(id: string): Observable<Action<DocumentSnapshot<any>>>{
    return this.firestore.collection(this.table).doc(id).snapshotChanges()
  }

  update(id: string, data: any): Promise<void>{
    return this.firestore.collection(this.table).doc(id).update(data);
  }

}
