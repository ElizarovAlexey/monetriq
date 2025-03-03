import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../../store/auth';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrl: './google-auth.component.scss',
})
export class GoogleAuthComponent implements OnInit {
  private _auth = inject(AuthService);
  private _socialAuth = inject(SocialAuthService);
  private _router = inject(Router);

  isLoggedIn = false;

  ngOnInit(): void {
    this._socialAuth.authState.subscribe((user) => {
      this.isLoggedIn = !!user;

      if (user) {
        this._auth
          .googleAuth({ token: user.idToken })
          .pipe(tap(() => this._router.navigate(['/'])))
          .subscribe();
      }
    });
  }
}
