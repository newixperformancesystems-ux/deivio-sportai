import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RECIPIENT_EMAIL = process.env.REGISTRATION_RECIPIENT || "parojus@inbox.lt";
const FROM_EMAIL = process.env.REGISTRATION_FROM || "Stride Forward <onboarding@resend.dev>";

type RegistrationPayload = {
  fullName?: string;
  birthDate?: string;
  email?: string;
  phone?: string;
  position?: string;
  trainingGroup?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmail(payload: RegistrationPayload) {
  const rows: Array<[string, string]> = [
    ["Vardas, Pavardė", payload.fullName || ""],
    ["Gimimo data", payload.birthDate || ""],
    ["El. paštas", payload.email || ""],
    ["Telefonas", payload.phone || ""],
    ["Pozicija", payload.position || ""],
    ["Treniruotės grupė", payload.trainingGroup || ""],
  ];
  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #ddd;background:#f7f7f7;font-weight:600">${escapeHtml(
          label,
        )}</td><td style="padding:8px 12px;border:1px solid #ddd">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;color:#111"><h2>Nauja Stride Forward registracija</h2><table style="border-collapse:collapse">${body}</table></body></html>`;
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  app.post("/api/register", async (req, res) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      res.status(500).json({ ok: false, error: "Email service not configured" });
      return;
    }

    const payload = (req.body ?? {}) as RegistrationPayload;
    if (!payload.fullName || !payload.birthDate || !payload.email || !payload.phone) {
      res.status(400).json({ ok: false, error: "Trūksta privalomų laukų" });
      return;
    }

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [RECIPIENT_EMAIL],
          reply_to: payload.email,
          subject: `Nauja registracija: ${payload.fullName}`,
          html: renderEmail(payload),
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Resend API error:", response.status, text);
        res.status(502).json({ ok: false, error: "Nepavyko išsiųsti el. laiško" });
        return;
      }

      res.json({ ok: true });
    } catch (err) {
      console.error("Registration error:", err);
      res.status(500).json({ ok: false, error: "Serverio klaida" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
