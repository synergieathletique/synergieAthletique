import { Link } from 'react-router-dom'
import { site } from '../config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-site">
      <style>{`
        .footer-site {
          background-color: #1A202C;
          color: #E2E8F0;
          padding: 48px 20px 24px;
          font-family: system-ui, -apple-system, sans-serif;
          border-top: 1px solid #2D3748;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-brand-title {
          color: #FFFFFF;
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0;
        }

        .footer-brand-subtitle {
          color: #A0AEC0;
          font-size: 0.85rem;
        }

        .footer-brand-desc {
          color: #A0AEC0;
          font-size: 0.88rem;
          line-height: 1.5;
          margin: 0;
        }

        .footer-column-title {
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0;
          margin-bottom: 16px;
          border-left: 3px solid var(--gold, #C5A059);
          padding-left: 8px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .footer-links a {
          color: #CBD5E0;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--gold, #C5A059);
          transform: translateX(3px);
        }

        .footer-email {
          color: var(--gold, #C5A059) !important;
          font-weight: 600;
          word-break: break-all;
        }

        .footer-bottom {
          max-width: 1100px;
          margin: 0 auto;
          padding-top: 24px;
          border-top: 1px solid #2D3748;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-size: 0.82rem;
          color: #A0AEC0;
        }

        .footer-legal-inline {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-legal-inline a {
          color: #A0AEC0;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal-inline a:hover {
          color: #FFFFFF;
        }

        @media (max-width: 640px) {
          .footer-site {
            padding: 36px 16px 20px;
          }
          
          .footer-container {
            gap: 28px;
            margin-bottom: 28px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
        }
      `}</style>

      {/* SECTION PRINCIPALE (COLONNES) */}
      <div className="footer-container">
        {/* COLONNE 1 : MARQUE */}
        <div className="footer-brand">
          <div className="footer-brand-header">
            {site.logo && (
              <img src={site.logo} alt={`Logo ${site.name}`} width="40" height="40" />
            )}
            <div>
              <h3 className="footer-brand-title">{site.name}</h3>
              <div className="footer-brand-subtitle">Massage sportif & Préparation mentale</div>
            </div>
          </div>
          <p className="footer-brand-desc">
            Accompagnement personnalisé pour l'écoute du corps, la récupération et la préparation mentale du sportif.
          </p>
        </div>

        {/* COLONNE 2 : NAVIGATION PRATIQUE */}
        <div>
          <h4 className="footer-column-title">Services</h4>
          <ul className="footer-links">
            <li>
              <Link to="/massage">Massage sportif</Link>
            </li>
            <li>
              <Link to="/preparation-mentale">Préparation mentale</Link>
            </li>
            <li>
              <Link to="/test-personnalite">Test de personnalité (Offert)</Link>
            </li>
          </ul>
        </div>

        {/* COLONNE 3 : CONTACT & ACCÈS */}
        <div>
          <h4 className="footer-column-title">Contact</h4>
          <ul className="footer-links">
            <li>
             06 16 66 61 86
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="footer-email">
                {site.email}
              </a>
            </li>
            <li>
              <Link to="/contact">Prendre rendez-vous / Écrire</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER BAS : COPYRIGHT & JURIDIQUE */}
      <div className="footer-bottom">
        <div>
          © {currentYear} {site.name}. Tous droits réservés.
        </div>
        <div className="footer-legal-inline">
          <Link to="/mentions-legales">Mentions légales</Link>
          <span>•</span>
          <Link to="/politique-confidentialite">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  )
}