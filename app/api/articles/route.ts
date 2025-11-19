import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("📥 POST /api/articles payload:", body);

    const { data, error } = await supabase.from("articles").insert([
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
      console.error("❌ Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("✅ Supabase insert data:", data);
    return NextResponse.json(data, { status: 201 });
  } catch (err: any) {
    console.error("❌ Unexpected API error:", err);
    return NextResponse.json(
      { error: "Unexpected error occurred." },
      { status: 500 }
    );
  }
}
