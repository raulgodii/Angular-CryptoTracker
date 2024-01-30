import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  spinner: boolean = false;
  auth: any = getAuth();
  email: string = "";
  pass1: string = "";
  pass2: string = "";
  signUpSucces:boolean = false;

  error: string | null = null;

  constructor(private scroll:ViewportScroller, private router:ActivatedRoute){

  }

  ngOnInit(): void {
    if(this.router.snapshot.fragment){
      this.scroll.scrollToAnchor(this.router.snapshot.fragment);
    } else {
      this.scroll.scrollToPosition([0, 0]);
    }
}

  signUp() {
    // Reset errors
    this.error = null;

    // Validate empty fields
    if (!this.email || !this.pass1 || !this.pass2) {
      this.error = "All fields are mandatory";
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.error = "Enter a valid email";
      return;
    }

    // Validate matching passwords
    if (this.pass1 !== this.pass2) {
      this.error = "Passwords do not match";
      return;
    }

    // Create user with Firebase Authentication
    this.spinner = true;
    createUserWithEmailAndPassword(this.auth, this.email, this.pass1)
      .then((userCredential) => {
        this.spinner = false;
        this.signUpSucces = true;
      })
      .catch((error) => {
        // Handle Firebase Authentication errors
        this.spinner = false;
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.error = "Email is already registered";
            break;
          case 'auth/invalid-email':
            this.error = "Invalid email";
            break;
          case 'auth/weak-password':
            this.error = "Weak password, it must be at least 6 characters";
            break;
          default:
            this.error = "Error while registering the user";
            console.error("Authentication error:", error);
        }
      });
  }

}
