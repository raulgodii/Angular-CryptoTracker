import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestAJAXService } from '../request-ajax.service';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  auth = getAuth();
  provider = new GoogleAuthProvider();

  constructor(public requestAjax: RequestAJAXService) {

  }

  obtenerDatos() {
    this.requestAjax.obtenerDatosFirestore();
  }

  logGoogle() {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
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
}
