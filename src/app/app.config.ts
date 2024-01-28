import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptotracker-f9030","appId":"1:291546611865:web:1d3b9d9ee106942ea1f808","storageBucket":"cryptotracker-f9030.appspot.com","apiKey":"AIzaSyDEGHfj_iRpxozB1LuExZF8qO75o-77oU8","authDomain":"cryptotracker-f9030.firebaseapp.com","messagingSenderId":"291546611865","measurementId":"G-3K0Z169HF5"}))), 
    importProvidersFrom(provideAuth(() => getAuth())), 
    importProvidersFrom(provideFirestore(() => getFirestore()))]
};


// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getAuth, provideAuth } from '@angular/fire/auth';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), 
//     importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"criptoweb-53c89","appId":"1:397061805682:web:57076cdbb1bab41d26d4eb","storageBucket":"criptoweb-53c89.appspot.com","apiKey":"AIzaSyAnS8d5avOPkQlvZcdIG9xiTqpDSYLp6D8","authDomain":"criptoweb-53c89.firebaseapp.com","messagingSenderId":"397061805682","measurementId":"G-75ZWD4EGJ8"}))), 
//     importProvidersFrom(provideAuth(() => getAuth()))]
// };