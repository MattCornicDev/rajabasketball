"use client";

import { useState, type FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [notice, setNotice] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    const mailto = `mailto:teamtechmanager@aol.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setNotice('Votre application de messagerie va s’ouvrir pour envoyer votre message.');
    window.location.href = mailto;
  }

  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Nous sommes à votre écoute</p>
        <h1 className="page-title">Parlons Raja.</h1>
        <p className="page-intro">Une question sur le club, les équipes ou les prochaines rencontres ? Écrivez-nous.</p>
      </header>

      <div className="contact-layout">
        <section className="content-card contact-info-card" aria-labelledby="contact-details">
          <h2 id="contact-details">Coordonnées du club</h2>
          <p><strong>Téléphone</strong><br /><a href="tel:+212658618726">+212 (0)658-618726</a></p>
          <p><strong>E-mail</strong><br /><a href="mailto:teamtechmanager@aol.com">teamtechmanager@aol.com</a></p>
          <p><strong>Siège</strong><br />Complexe Sportif Raja-Oasis<br />Oasis, Casablanca, Maroc</p>
          <p>Le formulaire ouvre votre application de messagerie. Aucun message n’est transmis avant votre confirmation.</p>
        </section>

        <form className="content-card contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Nom complet</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            placeholder="Votre nom"
            required
          />

          <label htmlFor="contact-email">Adresse e-mail</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
            placeholder="vous@exemple.com"
            required
          />

          <label htmlFor="contact-subject">Sujet</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
            placeholder="Sujet de votre message"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={(event) => setFormData({ ...formData, message: event.target.value })}
            placeholder="Comment pouvons-nous vous aider ?"
            required
          />

          {notice && <p className="form-message" role="status">{notice}</p>}
          <button className="button button-primary" type="submit">Préparer mon e-mail</button>
        </form>
      </div>
    </main>
  );
}
