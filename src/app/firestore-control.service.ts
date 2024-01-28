import { Injectable, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { UserControlService } from './user-control.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreControlService {
  firestore = inject(Firestore); // Exactamente lo mismo que importarlo en el constructor
  datosFS: any[] = [];
  db: any = getFirestore();

  constructor() {
    getDocs(collection(this.firestore, "portfolio")).then((response) => {
      this.datosFS = response.docs.map(doc => doc.data());
      console.log(this.datosFS);
    });
  }

  obtenerDatosFirestore() {
    getDocs(collection(this.firestore, "portfolio")).then((response) => {
      this.datosFS = response.docs.map(doc => doc.data());
      console.log(this.datosFS);
    });
  }

  followCrypto(id: any, uid: any) {
    addDoc(collection(this.db, "portfolio"), {
      id: id,
      uid: uid
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    });
  }
}
