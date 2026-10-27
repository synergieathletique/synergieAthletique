import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'
import { site } from '../config'

export default function Contact() {
  return (
    <section className="section">
      <Seo
        path="/contact"
        title="Contact et rendez-vous"
        description={`Contactez Synergie Athlétique à ${site.email} pour un massage sportif ou un accompagnement en préparation mentale.`}
      />
      <div className="wrap split">
        <div>
          <p className="kicker">Contact</p>
          <h1>Écrire, puis se voir.</h1>
          <div className="gold-rule" />
          <p className="lede">
            Décrivez votre sport, où vous en êtes, ce que vous cherchez. Le message arrive
            directement sur {site.email}.
          </p>
          <p className="muted">
            Première utilisation : Gmail peut demander de confirmer FormSubmit (un e-mail unique).
            Ensuite, tout arrive dans la boîte.
          </p>
        </div>
        <div className="panel">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
