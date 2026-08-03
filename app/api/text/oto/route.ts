import { logMessage } from "@/app/utils/helpers";
import { client as twilioClient } from "@/app/utils/twilio";
import { Client as qStashClient } from "@upstash/qstash";

export const dynamic = "force-dynamic";
const messageQueue = new qStashClient({ token: process.env.QSTASH_TOKEN! });

export async function POST(request: Request) {
  try {
    const { id, to, body } = await request.json(); // Parse JSON body from the request

    logMessage({ id, state: "call" });
    if (!to || !body) {
      logMessage({ id, state: "failed" });
      return new Response(
        JSON.stringify({ error: "❔ Missing 'to' or 'body' field" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    logMessage({ id, state: "send" });
    const message = await twilioClient.messages.create({
      body,
      from: process.env.FROM_NUMBER,
      to,
    });
    logMessage({ id, state: "success" });
    return new Response(
      JSON.stringify({ success: true, messageSid: message.sid }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.error("❌ Error sending SMS:", e);

    return new Response(JSON.stringify({ error: e || "Failed to send SMS" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
