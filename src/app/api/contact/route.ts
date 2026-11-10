import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Log the contact inquiry for server telemetry
    console.log("[ECLOUDLAB_INQUIRY]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      projectType: projectType || "General Inquiry",
      messageLength: message.length,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry received. The Ecloudlab engineering team will reach out shortly.",
    });
  } catch (error) {
    console.error("[ECLOUDLAB_INQUIRY_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error. Please email directly at ecloudlatam@gmail.com" },
      { status: 500 }
    );
  }
}

