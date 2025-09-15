  import express from "express"
  import cors from "cors"
  import helmet from "helmet"
  import rateLimit from "express-rate-limit"
  import nodemailer from "nodemailer"
  import dotenv from "dotenv"

  dotenv.config()
  const app = express()
  const PORT = process.env.PORT || 8080

  app.use(helmet())
  app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173"] }))
  app.use(express.json({ limit: "1mb" }))

  const limiter = rateLimit({ windowMs: 60 * 1000, max: 10 })
  app.use("/api/", limiter)

  app.get("/api/health", (_, res) => res.json({ ok: true }))

  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body || {}
    if (!name || !email || !message) {
  return res.status(400).json({ error: "name, email, and message are required" })
}
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })

      const info = await transporter.sendMail({
        from: `"Portfolio" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
        to: process.env.TO_EMAIL || process.env.SMTP_USER,
        subject: subject || `New message from ${name}`,
        text: `From: ${name} <${email}>

${message}`,
        html: `<p><b>From:</b> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, "<br/>")}</p>`
      })

      res.json({ ok: true, id: info.messageId })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Failed to send email" })
    }
  })

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
