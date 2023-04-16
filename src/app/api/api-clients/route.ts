import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

type AuthType = {
    clientName: string;
    clientEmail: string;
};

export async function POST(request: NextRequest) {
    const res: AuthType = await request.json();
    if (!res.clientName || !res.clientEmail)
        return NextResponse.json({ message: "Please Enter missing fields" });
}

export async function GET(request: NextRequest) {
    const result = 'Cannot GET /api-clients'
    return NextResponse.json(result);
}