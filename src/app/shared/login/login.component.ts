import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  hidePassword: boolean = true;

  private _auth = inject(AuthService);

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.setValidators();
  }

  ngOnInit() {

  }

  onLogin(form: FormGroup) {
    var valid = form.valid;
    var value = form.value;
    if (valid) {
      this._auth.signInUser(value.username, value.password);
    }
  }

  private setValidators() {
    this.loginForm = this._formBuilder.group({
      username: ['correo@correo.com', Validators.compose([Validators.required])],
      password: ['123456', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])]
    });
  }
}
