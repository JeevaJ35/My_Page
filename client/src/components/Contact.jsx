import React, { useState } from "react"

const Contact = () => {
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")
    const form = new FormData(e.currentTarget)
    const body = Object.fromEntries(form.entries())
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      if (res.ok) setStatus("Message sent ✅")
      else setStatus(data?.error || "Something went wrong")
    } catch (err) {
      setStatus("Server not reachable")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={onSubmit} className="card p-6 mt-6 grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input required name="name" placeholder="Your name" className="card p-3 outline-none" />
          <input required type="email" name="email" placeholder="Email" className="card p-3 outline-none" />
        </div>
        <input name="subject" placeholder="Subject" className="card p-3 outline-none" />
        <textarea required name="message" rows="5" placeholder="Your message" className="card p-3 outline-none"></textarea>
        <div className="flex items-center gap-3">
          <button disabled={loading} className="btn" type="submit">{loading ? "Sending..." : "Send Message"}</button>
          {status && <span className="text-sm text-muted">{status}</span>}
        </div>
      </form>
    </section>
  )
}

export default Contact
