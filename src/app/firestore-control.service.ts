import { Injectable, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { Firestore, query, where } from '@angular/fire/firestore';
import { UserControlService } from './user-control.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreControlService {
  firestore = inject(Firestore); // Exactamente lo mismo que importarlo en el constructor
  portfolio: any[] = [];
  db: any = getFirestore();

  constructor() {

  }

  getPortfolio(uid: any) {
    const portfolioCollection = collection(this.firestore, "portfolio");
    const queryByUid = query(portfolioCollection, where('uid', '==', uid));
    getDocs(queryByUid).then((response) => {
      this.portfolio = response.docs.map(doc => doc.data());
      console.log(this.portfolio);
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

  unfollowCrypto(id: any) {

  }
}
