import { Link } from 'react-router-dom'
import { site } from '../config'

export default function BookingBlock({ service }) {
  if (site.bookingUrl) {
    return (
      <section className="section">
        <div className="wrap">
          <p className="kicker">Réservation</p>
          <h2>Choisir un créneau — {service}</h2>
          <p className="lede">Choisissez un horaire. La confirmation arrive ensuite par e-mail.</p>
          <div className="booking">
            <iframe title={`Réservation ${service}`} src={site.bookingUrl} />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Réservation</p>
        <h2>Prendre rendez-vous</h2>
        <p className="lede">
          Le module de réservation est prêt à recevoir votre agenda. En attendant, le plus simple est
          d’écrire : on s’accorde sur un créneau à la main.
        </p>
        <div className="booking">
          <h3 className="serif">{service}</h3>
          <p className="muted">
            Pour l’intégration, deux outils tiennent particulièrement bien sur un site vitrine :
          </p>
          <div className="tips">
            <div className="tip">
              <strong>Cal.com (recommandé)</strong>
              Créez un compte gratuit, un type d’événement « Massage » et un autre « Préparation
              mentale », puis collez le lien dans <code>src/config.js</code> (<code>bookingUrl</code>
              ). L’agenda s’affiche ici, sans backend.
            </div>
            <div className="tip">
              <strong>Calendly</strong>
              Même principe, un peu plus grand public. Collez l’URL de votre événement : l’iframe
              se met en place automatiquement.
            </div>
          </div>
          <div className="hero-actions">
            <Link className="btn btn-dark" to="/contact">
              Demander un créneau
            </Link>
            <a className="btn btn-outline" href={`mailto:${site.email}?subject=RDV ${service}`}>
              Écrire par e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
