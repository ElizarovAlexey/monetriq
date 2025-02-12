import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService, SignIn } from '../../../../store/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, catchError, EMPTY, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private _fb = inject(FormBuilder);
  private _auth = inject(AuthService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  form: FormGroup<{
    email: FormControl<SignIn['email']>;
    password: FormControl<SignIn['password']>;
  }>;

  isLoading$: Observable<boolean>;

  error$: BehaviorSubject<string | null>;

  constructor() {
    this.form = this._fb.group({
      email: this._fb.control<SignIn['email']>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: this._fb.control<SignIn['password']>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });

    this.isLoading$ = this._auth.isLoading;

    this.error$ = new BehaviorSubject<string | null>(null);
  }

  signIn(): void {
    if (this.form.invalid) return;

    this._auth
      .signIn(this.form.value as SignIn)
      .pipe(
        catchError((error: string) => this._errorSignIn(error)),
        tap(() => this._successSignIn()),
      )
      .subscribe();
  }

  private _successSignIn(): void {
    if (this.error$.value) {
      this.error$.next(null);
    }

    void this._router.navigate(['/']);
  }

  private _errorSignIn(error: string) {
    this.error$.next(error);

    return EMPTY;
  }

  navigateSignUp() {
    this._router.navigate(['sign-up'], { relativeTo: this._route.parent });
  }
}
