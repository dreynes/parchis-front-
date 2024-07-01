  import { Component } from '@angular/core';
  import { AuthService } from '../shared-services/auth.service';
  import { RegisterCredentials } from '../auth-credentials';
  import { Router } from "@angular/router";

  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../login/login.component.css']
  })
  export class RegisterComponent {
    form: RegisterCredentials = {
      username: '',
      password: '',
      passwordConf: ''
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit(): void {
      if (this.form.password !== this.form.passwordConf) {
        this.isSuccessful = false;
        this.isSignUpFailed = true;
        this.errorMessage = "Las contraseñas deben coincidir";
        this.isSignUpFailed = true;
        return;
      }
      this.authService.register(this.form).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/login']);
        },
        err => {
          this.errorMessage = "El usuario ya existe";
          this.isSignUpFailed = true;
        }
      );
    }
  }
