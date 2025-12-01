import { TokenRecord } from "./types";

const tokens: TokenRecord[] = [];

export function addToken(token: TokenRecord) {
  tokens.push(token);
}

export function getActiveTokensForUser(userId: string) {
  const now = new Date();
  return tokens.filter(t => 
    t.userId === userId && new Date(t.expiresAt) > now
  );
}
