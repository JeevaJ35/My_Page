import React, { useState } from "react"

// A lightweight local "AI" widget showcasing simple rule-based replies without any external API.
const rules = [
  { q: /(ai|ml|machine learning)/i, a: "I have 2.5 years working with AI automations using Yellow AI and Kore AI, plus hands-on with Azure and Node/Express for chat flows." },
  { q: /(frontend|react|angular)/i, a: "Strong in React, Tailwind, performance optimization and building responsive UI. Also experienced in Angular projects." },
  { q: /(backend|java|spring|spring boot)/i, a: "Built REST APIs with Spring Boot and Node/Express; integrated services with frontends, unit/integration testing included." },
  { q: /(contact|email)/i, a: "Use the Contact form below; it sends via a Node/Express API configured with Nodemailer." },
]

const AIWidget = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: "ai", content: "Hi! Ask me about my skills or projects." }])
  const [input, setInput] = useState("")

  const send = () => {
    const text = input.trim()
    if (!text) return
    const userMsg = { role: "user", content: text }
    const rule = rules.find(r => r.q.test(text))
    const reply = rule ? rule.a : "Thanks! I’ll get back to you soon — meanwhile, check my Projects and Experience sections."
    setMessages(m => [...m, userMsg, { role: "ai", content: reply }])
    setInput("")
  }

  return (
    <div className="fixed bottom-4 right-4">
      {open ? (
        <div className="card w-80 p-4">
          <div className="flex items-center justify-between">
            <strong>Ask Jeeva</strong>
            <button className="btn" onClick={() => setOpen(false)}>Close</button>
          </div>
          <div className="mt-3 h-56 overflow-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "ai" ? "text-foreground" : "text-muted"}>
                <b>{m.role === "ai" ? "AI" : "You"}:</b> {m.content}
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} className="card p-2 flex-1 outline-none" placeholder="Type a question..." />
            <button className="btn" onClick={send}>Send</button>
          </div>
        </div>
      ) : (
        <button className="btn shadow-soft" onClick={() => setOpen(true)}>Chat with me</button>
      )}
    </div>
  )
}

export default AIWidget
