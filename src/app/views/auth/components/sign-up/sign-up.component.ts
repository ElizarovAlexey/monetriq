import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService, SignUp } from '../../../../store/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private _fb = inject(FormBuilder);
  private _auth = inject(AuthService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  form: FormGroup<{
    name: FormControl<SignUp['name']>;
    email: FormControl<SignUp['email']>;
    password: FormControl<SignUp['password']>;
  }>;

  isLoading$: Observable<boolean>;

  constructor() {
    this.form = this._fb.group({
      name: this._fb.control<SignUp['name']>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: this._fb.control<SignUp['email']>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: this._fb.control<SignUp['password']>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });

    this.isLoading$ = this._auth.isLoading;
  }

  signUp(): void {
    if (this.form.invalid) return;

    this._auth
      .signUp(this.form.value as SignUp)
      .pipe(tap(() => this._successSignUp()))
      .subscribe();
  }

  private _successSignUp(): void {
    void this._router.navigate(['/']);
  }

  navigateSignIn() {
    this._router.navigate(['sign-in'], { relativeTo: this._route.parent });
  }
}
