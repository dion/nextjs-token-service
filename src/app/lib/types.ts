export interface CreateTokenRequest {
  userId: string;
  scopes: string[];
  expiresInMinutes: number;
}

export interface TokenRecord {
  id: string;
  userId: string;
  scopes: string[];
  createdAt: string;
  expiresAt: string;
  token: string;
}
