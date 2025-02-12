import { User } from '../../shared/types';

export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export interface SignInResponse {
  credentials: User;
  token: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SignUpResponse extends SignInResponse {}

export interface State {
  credentials: User | null;
  token: string | null;
  error: Record<string, string> | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
