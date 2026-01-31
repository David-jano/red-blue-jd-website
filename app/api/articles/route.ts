import { supabaseServer } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await supabaseServer.from("articles").insert([
      {
        title: body.title,
        author: body.author,
        label: body.label,
        image_url: body.imageUrl,
        content: body.content,
        description: body.description,
        button_text: "SOMA BIRAMBUYE",
      },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error occurred" },
      { status: 500 },
    );
  }
}
