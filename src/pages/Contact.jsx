import { useState } from 'react'
import './Contact.css'

const contactPhoto = `${import.meta.env.BASE_URL}photos/paris/full/18.jpg`

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    )
    window.location.href = `mailto:williamwuisan@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="contact-page">
      <div className="contact-photo">
        <img src={contactPhoto} alt="" />
      </div>

      <div className="contact-info">
        <span className="contact-eyebrow">Contact</span>
        <h1 className="contact-heading">Get in touch</h1>
        <p className="contact-subtitle">
          Have a destination in mind, or just want to say hello? Send a
          message and I'll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={update('name')}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={update('email')}
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={update('message')}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            {sent ? 'Sent ✓' : 'Submit'}
            <span className="contact-submit-icon">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
