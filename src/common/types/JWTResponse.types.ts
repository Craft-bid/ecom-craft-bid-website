export type JWTResponse = {
  token: string;
};

export type DecodedToken = {
  email: string;
  exp: number;
  iat: number;
  role: string;
};
