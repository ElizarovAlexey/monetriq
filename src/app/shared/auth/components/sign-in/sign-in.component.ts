import { Component, inject } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { matchValidator } from '../../../helpers';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  form: FormGroup<{
    login: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }>;

  private _formBuilder = inject(FormBuilder);

  constructor() {
    this.form = this._formBuilder.group(
      {
        login: this._formBuilder.control('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(3)],
        }),
        password: this._formBuilder.control('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(8)],
        }),
        confirmPassword: this._formBuilder.control('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(8)],
        }),
      },
      { validators: [matchValidator('password', 'confirmPassword')] }
    );

    this.form.valueChanges.pipe(
      tap((log) => {
        console.log(this.form.controls.login.errors);
        console.log(this.form.controls.password.errors);
        console.log(this.form.controls.confirmPassword.errors);
      })
    ).subscribe();
  }
}
