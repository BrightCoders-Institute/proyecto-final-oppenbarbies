export type btnSignInProps = {
  text: string;
  authProvider: 'google' | 'facebook';
  navigationFunction: () => void;
};

export type size = {
  width: number;
  height: number;
};
