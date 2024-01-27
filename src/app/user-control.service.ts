import { Injectable, OnInit } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserControlService implements OnInit {

  auth = getAuth();
  user: any = this.auth.currentUser;
  googleProvider = new GoogleAuthProvider();

  constructor(private router:Router) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in
        this.user = user;
      } else {
        // User is signed out
        this.user = null;
        this.router.navigate(["home"]);
      }
    });
  }

  ngOnInit(): void {

  }

  signInGoogle() {
    signInWithPopup(this.auth, this.googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          // The signed-in user info.
          this.user = result.user;
          console.log(this.user);
          // IdP data available using getAdditionalUserInfo(result)
          // ...


        } else {
          // Manejar el caso en que 'credential' sea nulo
          console.error("Error: credential is null");
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  signOut() {
    signOut(this.auth).then(() => {
      // Sign-out successful.
      this.user = null;
    }).catch((error) => {
      // An error happened.
      console.log("error: " + error);
    });
  }
}
