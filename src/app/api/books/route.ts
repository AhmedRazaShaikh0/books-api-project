import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
    // const req: TBook = await request.json();

    const conn = postgres({ ssl: require });

    const data = await conn.unsafe(
        `SELECT id, name, type, available FROM books;`
    );
    console.log(data)

    return NextResponse.json(data);
}

