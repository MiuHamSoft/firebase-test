import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth = inject(Auth);
  private _router = inject(Router);

  constructor() { }

  async signInUser(email: string, password: string) {
    await signInWithEmailAndPassword(this._auth, email, password)
      .then((result: UserCredential) => {

        this._router.navigate(['/home']);
      })
      .catch((error: any) => {
        if (error.code == "auth/invalid-credential") {
          console.log("Email y/o contraseña incorrectos");
        } else if (error.code == "auth/user-not-found") {
          console.log("Usuario no encontrado, revisa tus credenciales");
        } else if (error.code == "auth/invalid-email") {
          console.log("Por favor introduce un email válido");
        }
        console.log(error);
      });
  }

  doLogout() {
    signOut(this._auth)
      .then(() => {
        this._router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
