import { Injectable, OnInit } from '@angular/core';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserControlService implements OnInit {

  spinner: boolean = false;
  auth = getAuth();
  user: any = this.auth.currentUser;
  googleProvider = new GoogleAuthProvider();

  constructor(private router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in
        console.log("user: " + user);
        this.user = user;
        console.log("ha iniciado sesion");
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
          this.router.navigate(["portfolio"]);
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
      this.router.navigate(["home"]);
    }).catch((error) => {
      // An error happened.
      console.log("error: " + error);
    });
  }

  async signInUserPass(email: string, password: string): Promise<{ success: boolean, error?: string }> {
    try {
      // Validaciones iniciales
      this.validateEmail(email);
      this.validatePassword(password);
  
      // Inicio de sesión con Firebase
      const userCredential: any = await signInWithEmailAndPassword(this.auth, email, password);
  
      // Éxito, el usuario ha iniciado sesión correctamente.
      this.user = userCredential.user;
      this.router.navigate(["portfolio"]);
      return { success: true, error: undefined };
  
    } catch (error: any) {
      // Manejo de errores
      const errorCode = error.code;
      const errorMessage = error.message;
  
      if (errorCode === 'auth/user-not-found') {
        return { success: false, error: 'User not found. Please check your email or sign up.' };
      } else if (errorCode === 'auth/wrong-password') {
        return { success: false, error: 'Incorrect password. Please try again.' };
      } else if (errorCode === 'auth/invalid-email') {
        return { success: false, error: 'Invalid email format. Please provide a valid email address.' };
      } else {
        // Otros errores no manejados específicamente
        return { success: false, error: `Error signing in: ${errorMessage}` };
      }
    }
  }
  
  private validateEmail(email: string): void {
    if (!email) {
      throw new Error('Please provide an email.');
    }
  
    // Verificar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please provide a valid email address.');
    }
  }
  
  private validatePassword(password: string): void {
    if (!password) {
      throw new Error('Please provide a password.');
    }
  
    // Puedes agregar más validaciones según tus requisitos.
  }
}
