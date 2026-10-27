import { useState } from 'react'
import { site } from '../config'

const initial = {
  name: '',
  email: '',
  phone: '',
  subject: 'Massage sportif',
  message: '',
  website: '',
}

export default function ContactForm({ defaultSubject }) {
  const [values, setValues] = useState({
    ...initial,
    subject: defaultSubject || initial.subject,
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (values.website) return
    setStatus('loading')
    setError('')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          _subject: `Synergie Athlétique — ${values.subject}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Envoi impossible pour le moment.')
      }

      setStatus('success')
      setValues({ ...initial, subject: defaultSubject || initial.subject })
    } catch {
      setStatus('idle')
      setError(
        `L’envoi automatique n’a pas abouti. Écrivez-moi directement à ${site.email} — la première fois, FormSubmit peut demander une confirmation de la boîte Gmail.`,
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <h3 className="serif">Message envoyé</h3>
        <p>Merci. Je reviens vers vous rapidement à l’adresse indiquée.</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Nom
        <input name="name" value={values.name} onChange={update} required autoComplete="name" />
      </label>
      <label>
        E-mail
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={update}
          required
          autoComplete="email"
        />
      </label>
      <label>
        Téléphone
        <input name="phone" value={values.phone} onChange={update} autoComplete="tel" />
      </label>
      <label>
        Sujet
        <select name="subject" value={values.subject} onChange={update}>
          <option>Massage sportif</option>
          <option>Préparation mentale</option>
          <option>Les deux</option>
          <option>Test / question</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" value={values.message} onChange={update} required />
      </label>
      <input
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        name="website"
        value={values.website}
        onChange={update}
      />
      {error ? <p className="muted">{error}</p> : null}
      <button className="btn btn-dark" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi…' : 'Envoyer'}
      </button>
    </form>
  )
}
