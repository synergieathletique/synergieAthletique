import { Link } from 'react-router-dom'
import HeroVideos from '../components/HeroVideos'
import Seo from '../components/Seo'
import { site } from '../config'

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Massage sportif & préparation mentale"
        description="Synergie Athlétique accompagne les sportifs : massage sportif ciblé pour la récupération et préparation mentale avec test de personnalité offert."
      />

      {/* HERO SECTION */}
      <section className="hero">
        <HeroVideos />
        <div className="hero-copy">
          <div className="eyebrow">Massage sportif · Accompagnement mental</div>
          <h1>Écouter son corps, libérer sa pratique.</h1>
          <p>
            Synergie Athlétique accompagne tous les sportifs — du pratiquant régulier au passionné engagé —
            pour mieux récupérer, dépasser des blocages ou des peurs, et retrouver un équilibre juste entre
            exigence personnelle et bien-être.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/massage">
              Découvrir le massage
            </Link>
            <Link className="btn btn-ghost" to="/preparation-mentale">
              La préparation mentale
            </Link>
          </div>
        </div>
      </section>

      {/* BLOC 01 : LE MASSAGE SPORTIF */}
      <section className="section">
        <div className="wrap split">
          <div className="copy">
            <div className="section-head">
              <span className="index-num">01</span>
              <div>
                <p className="kicker">Soin & Récupération</p>
                <h2>Le massage sportif</h2>
              </div>
            </div>
            <p className="lede">
              Un travail ciblé et profond sur les tissus musculaires pour libérer les tensions accumulées lors de l'entraînement. 
              Que vous cherchiez à accélérer votre récupération, à prévenir les blessures ou simplement à retrouver de la mobilité, ce soin adapte sa pression à vos besoins réels.
            </p>
            <ul className="card-list">
              <li>Relâchement des chaînes musculaires sursollicitées.</li>
              <li>Prévention des raideurs et des blessures de fatigue.</li>
              <li>Sensation de légèreté et disponibilité corporelle immédiate.</li>
            </ul>
            <Link className="btn btn-dark" to="/massage">
              Tarifs, intérêts et rendez-vous
            </Link>
          </div>
          <div className="media">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80"
              alt="Massage sportif et soins des tissus"
            />
            <span className="media-caption">Récupération · Prévention</span>
          </div>
        </div>
      </section>

      {/* BLOC 02 : LA PRÉPARATION MENTALE */}
      <section className="section sand">
        <div className="wrap split reverse">
          <div className="copy">
            <div className="section-head">
              <span className="index-num">02</span>
              <div>
                <p className="kicker">Accompagnement mental</p>
                <h2>La préparation mentale</h2>
              </div>
            </div>
            <p className="lede">
              Apprivoiser la pression, surmonter la peur de l'échec ou retrouver du plaisir dans votre pratique. 
              Avant tout premier rendez-vous, nous commençons systématiquement par un{' '}
              <Link to="/test-personnalite" style={{ color: 'var(--gold, #c5a059)', fontWeight: 'bold', textDecoration: 'underline' }}>
                test de personnalité complet
              </Link>{' '}
              afin d’identifier précisément vos mécanismes psychosomatiques et d'adapter 100 % de notre suivi à vos objectifs.
            </p>
            <ul className="card-list">
              <li>Premier rendez-vous adossé à votre bilan personnalisé.</li>
              <li>Gestion des peurs, du perfectionnisme et de l'anxiété.</li>
              <li>Routines simples et concrètes applicables à chaque séance.</li>
            </ul>
            <Link className="btn btn-dark" to="/preparation-mentale">
              Découvrir la préparation mentale
            </Link>
          </div>
          <div className="media">
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1400&q=80"
              alt="Moment de concentration et préparation mentale"
            />
            <span className="media-caption">Sérénité · Objectifs personnels</span>
          </div>
        </div>
      </section>

      {/* BLOC 03 : CARTE CADEAU / BONUS TEST DE PERSONALITÉ (DESIGN DIFFÉRENT) */}
      <section className="section" style={{ background: '#1A202C', color: '#FFFFFF', padding: '60px 20px', borderRadius: '16px', margin: '40px auto', maxWidth: '1100px' }}>
        <div className="wrap split" style={{ alignItems: 'center' }}>
          <div className="copy">
            <div style={{ display: 'inline-block', background: '#C5A059', color: '#1A202C', fontWeight: 'bold', fontSize: '0.75rem', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', tracking: '1px', marginBottom: '12px' }}>
              🎁 C'est cadeau
            </div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.8rem', marginTop: '0' }}>
              Envie de mieux vous connaître ? Faites le test gratuitement !
            </h2>
            <p style={{ color: '#E2E8F0', fontSize: '1rem', lineHeight: '1.6' }}>
              Même si vous ne prévoyez pas de suivi mental tout de suite, l'auto-évaluation psychosomatique en 150 items est accessible à tous. 
              C'est 100 % gratuit, immédiat et sans aucun engagement. Téléchargez votre rapport PDF et découvrez vos points forts en quelques minutes.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link className="btn btn-light" to="/test-personnalite" style={{ background: '#C5A059', color: '#1A202C', border: 'none', fontWeight: 'bold' }}>
                Accéder au test offert ➔
              </Link>
            </div>
          </div>
          <div className="media" style={{ border: '2px solid #C5A059', borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80"
              alt="Test de personnalité offert"
            />
            <span className="media-caption" style={{ background: '#C5A059', color: '#1A202C', fontWeight: 'bold' }}>
              Bonus offert · Sans engagement
            </span>
          </div>
        </div>
      </section>

      {/* BLOC À PROPOS */}
      <section className="section about sand" id="a-propos">
        <div className="wrap split">
          <div className="portrait">
            {site.practitioner.photo ? (
              <img src={site.practitioner.photo} alt={site.practitioner.firstName} />
            ) : (
              <div>
                <div className="portrait-mark">{site.practitioner.firstName.charAt(0)}</div>
                <p>Ajoutez votre photo dans la configuration du site.</p>
              </div>
            )}
          </div>
          <div>
            <p className="kicker">Le praticien</p>
            <h2 style={{color:'black'}}>
              {site.practitioner.firstName},
              <br />
              {site.practitioner.role.toLowerCase()}
            </h2>
            <div className="gold-rule" />
            <p className="lede">
              J’accompagne chaque sportif dans son épanouissement personnel, qu'il s'agisse d'optimiser sa récupération musculaire avec le massage ou d'aborder sa pratique avec sérénité grâce à la préparation mentale.
            </p>
            <p className="lede">
              Chaque suivi mental démarre par un état des lieux offert via notre test de personnalité, pour construire une alliance claire et adaptée à votre réalité.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-light" to="/massage">
                Réserver un massage
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                M'écrire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}