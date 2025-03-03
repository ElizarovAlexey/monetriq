import { createAction, props } from '@ngrx/store';
import { storeType } from '../../shared/helpers';
import { storeName } from './auth.config';
import {
  GoogleAuth,
  SignIn,
  SignInResponse,
  SignUp,
  SignUpResponse,
} from './auth.type';

const type = storeType(storeName);

export const actions = {
  initState: createAction(type('init state')),
  initStateSuccess: createAction(
    type('init state success'),
    props<SignInResponse>(),
  ),
  initStateError: createAction(
    type('init state error'),
    props<{ error: Record<string, string> }>(),
  ),

  signIn: createAction(type('signIn'), props<SignIn>()),
  signInError: createAction(
    type('signIn error'),
    props<{ error: Record<string, string> }>(),
  ),
  signInSuccess: createAction(type('signIn success'), props<SignInResponse>()),

  signUp: createAction(type('signUp'), props<SignUp>()),
  signUpError: createAction(
    type('signUp error'),
    props<{ error: Record<string, string> }>(),
  ),
  signUpSuccess: createAction(type('signUp success'), props<SignUpResponse>()),

  googleAuth: createAction(type('googleAuth'), props<GoogleAuth>()),
  googleAuthError: createAction(
    type('googleAuth error'),
    props<{ error: Record<string, string> }>(),
  ),
  googleAuthSuccess: createAction(
    type('googleAuth success'),
    props<SignUpResponse>(),
  ),
};
