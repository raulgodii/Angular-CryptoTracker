import { Injectable, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { Firestore, query, where } from '@angular/fire/firestore';
import { UserControlService } from './user-control.service';
import { doc, deleteDoc } from "firebase/firestore";

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

    onSnapshot(queryByUid, (snapshot) => {
      this.portfolio = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });
      console.log(this.portfolio);
    });
  }

  followCrypto(rank: any, thumb: any, name: any, symbol: any, cid: any, uid: any) {
    const cryptoCollectionRef = collection(this.db, 'portfolio');

    // Realizar una consulta para verificar si ya existe un documento con el mismo 'cid'
    const q = query(cryptoCollectionRef, where('cid', '==', cid));

    getDocs(q).then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        // No hay documentos con los mismos 'cid' y 'uid', por lo que se puede agregar el documento
        addDoc(cryptoCollectionRef, {
          rank: rank,
          thumb: thumb,
          name: name,
          symbol: symbol,
          cid: cid,
          uid: uid
        }).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        });
      } else {
        // Ya existe un documento con los mismos 'cid' y 'uid'
        console.log("Document already exists");
      }
    });
  }

  unfollowCrypto(id: any) {

    deleteDoc(doc(this.db, "portfolio", id)).then(() => {
      console.log("ID: " + id)
    });
  }
}
