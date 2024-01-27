import { Injectable,inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, onSnapshot } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreControlService {
  firestore = inject(Firestore); // Exactamente lo mismo que importarlo en el constructor
  datosFS: any[] = [];

  constructor() { }

  obtenerDatosFirestore() {
    getDocs(collection(this.firestore, "portfolio")).then((response) => {
      this.datosFS = response.docs.map(doc => doc.data());
      console.log(this.datosFS);
    });
  }
}
