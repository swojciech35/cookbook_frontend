import {Component} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginForm: FormGroup;
  hidePassword: boolean = true;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, public authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const formData = this.loginForm.value;
    this.authService.signIn({email: formData.email, password: formData.password})
      .subscribe(result => {
        if (result == 200) {
          this.isLoading = false;
          this.toastr.success('Zalogowano')
          this.router.navigate(['/home'])

        } else {
          this.isLoading = false;
          this.toastr.error("Błąd podczas logowania,\n sprawdź dane\n lub zarejestruj się ")
        }
      }, error => {
        this.isLoading = false;
        console.error('Błąd podczas rejestracji: ', error.message);
        this.toastr.error("Błąd podczas logowania,\n sprawdź dane\n lub zarejestruj się")
      })
    }

  }

}
