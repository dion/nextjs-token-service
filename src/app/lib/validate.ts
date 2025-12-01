import { CreateTokenRequest } from "./types";

export function validateCreateInput(data: unknown): data is CreateTokenRequest {
  if (typeof data !== "object" || data === null) return false;

  const obj = data as Record<string, unknown>;

  return (
    typeof obj.userId === "string" &&
    obj.userId.trim().length > 0 &&
    Array.isArray(obj.scopes) &&
    obj.scopes.every(s => typeof s === "string") &&
    typeof obj.expiresInMinutes === "number" &&
    Number.isInteger(obj.expiresInMinutes) &&
    obj.expiresInMinutes > 0
  );
}
