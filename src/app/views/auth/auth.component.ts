import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  constructor() {
    this._router.navigate(['sign-in'], { relativeTo: this._route.parent });
  }
}
