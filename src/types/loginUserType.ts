type ProviderData = {
  providerId: string;
  uid: string;
  displayName: string | null;
  email: string;
  phoneNumber: string | null;
  photoURL: string;
};

type StsTokenManager = {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
};

type User = {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  photoURL: string;
  providerData: ProviderData[];
  stsTokenManager: StsTokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};

type TokenResponse = {
  federatedId: string;
  providerId: string;
  email: string;
  emailVerified: boolean;
  photoUrl: string;
  localId: string;
  idToken: string;
  context: string;
  oauthAccessToken: string;
  refreshToken: string;
  expiresIn: string;
  screenName: string;
  rawUserInfo: string;
  kind: string;
};

export type LoginUser = {
  user: User;
  providerId: string;
  _tokenResponse: TokenResponse;
  operationType: string;
};
