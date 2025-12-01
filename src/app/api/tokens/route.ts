import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { validateCreateInput } from "../../lib/validate";
import { addToken, getActiveTokensForUser } from "../../lib/tokenStore";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!validateCreateInput(body)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const createdAt = new Date();
  const expiresAt = new Date(
    createdAt.getTime() + body.expiresInMinutes * 60000
  );

  const tokenRecord = {
    id: "token_" + crypto.randomUUID(),
    userId: body.userId,
    scopes: body.scopes,
    createdAt: createdAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
    token: crypto.randomUUID(),
  };

  addToken(tokenRecord);

  return NextResponse.json(tokenRecord, { status: 201 });
}

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { error: "userId is required" },
      { status: 400 }
    );
  }

  return NextResponse.json(getActiveTokensForUser(userId));
}
