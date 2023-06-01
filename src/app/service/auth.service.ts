import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { first } from 'rxjs/operators'
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }
  
  login(email: string, pass: string){
    return this.auth.signInWithEmailAndPassword(email, pass)
  }

  signInGoogle(){
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  async register(email: string, pass: string){
    return await this.auth.createUserWithEmailAndPassword(email, pass)
  }

  async logout(){
    await this.auth.signOut()
  }

  getCurrentUser(){
    return this.auth.authState.pipe(first()).toPromise()
  }
}
