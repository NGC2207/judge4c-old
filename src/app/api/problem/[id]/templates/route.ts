// src/app/api/problem/[id]/templates/route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params; // 等待 params 解析完成

  try {
    const templates = await prisma.template.findMany({
      where: {
        problemId: id,
      },
    });

    return NextResponse.json(templates);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch templates" },
      { status: 500 }
    );
  }
}
