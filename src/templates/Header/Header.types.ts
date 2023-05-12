export interface HeaderProps {
  onSignInClick: () => void;
  onSignUpClick: () => void;
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
}
