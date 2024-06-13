import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  hidePassword: boolean = true;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, public authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {validators: this.passwordMatchValidator});
  }

  passwordMatchValidator(control: AbstractControl) {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    const password: string = passwordControl.value;
    const confirmPassword: string = confirmPasswordControl.value;

    if (password !== confirmPassword) {
      confirmPasswordControl.setErrors({passwordMismatch: true});
      return {passwordMismatch: true};
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      const formData = this.signupForm.value;
      this.authService.signup({email: formData.email, password: formData.password})
        .subscribe(result => {
          if (result == 200) {
            this.isLoading = false;
            this.toastr.success('Rejestracja przebiegła pomyslnie')
            this.router.navigate(['/signin'])

          } else {
            this.isLoading = false;
            this.toastr.error("Błąd podczas rejestracji użytkownika")
          }
        }, error => {
          this.isLoading = false;
          console.error('Błąd podczas rejestracji: ', error.message);
          this.toastr.error("Błąd podczas rejestracji użytkownika")
        })
    }
  }
}
