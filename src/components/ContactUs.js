import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact-us" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit" disabled={status==='loading'}>Send</button>
      </form>
      {status === 'success' && <p className="success">Message sent successfully!</p>}
      {status === 'error' && <p className="error">Failed to send message. Please try again.</p>}
    </section>
  );
};

export default ContactUs; 