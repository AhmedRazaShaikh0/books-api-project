import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

type paramsType = {
    params: { id: string };
  };
  

export async function GET(request: NextRequest, { params }: paramsType ) {

    const conn = postgres({ ssl: require });
    const data = await conn.unsafe(`SELECT * FROM books WHERE id = ${params.id}`);

    if (data.length === 0) {
        return NextResponse.json({ message: "Book not available" });
    }

    return NextResponse.json(data);
}