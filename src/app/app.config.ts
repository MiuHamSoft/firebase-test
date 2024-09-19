import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"fir-test-9e5e0","appId":"1:669980881535:web:6d4b21ee3df95afd39c54a","storageBucket":"fir-test-9e5e0.appspot.com","apiKey":"AIzaSyBgfpYuApcUgoINzyBUMPa3EOB0omUr-tA","authDomain":"fir-test-9e5e0.firebaseapp.com","messagingSenderId":"669980881535"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
