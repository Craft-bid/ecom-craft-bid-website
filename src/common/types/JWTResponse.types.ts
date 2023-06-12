export type JWTResponse = {
  token: string;
};

export type DecodedToken = {
  sub: string;
  iat: number;
  exp: number;
};
