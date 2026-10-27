import { Link } from 'react-router-dom'
import BookingBlock from '../components/BookingBlock'
import Seo from '../components/Seo'

const tarifs = [
  { 
    title: 'Bilan 90 min', 
    price: '90 €', 
    text: 'Analyse approfondie de votre test de personnalité, histoire sportive, objectifs et plan d’accompagnement sur-mesure.' 
  },
  { 
    title: 'Séance 60 min', 
    price: '65 €', 
    text: 'Travail ciblé : gestion du stress, confiance, routines pré-effort, dépassement des peurs ou d’un blocage.' 
  },
  { 
    title: 'Parcours 8 séances', 
    price: '480 €', 
    text: 'Un accompagnement complet sur plusieurs semaines avec points d’étape réguliers. Économie de 40 €.' 
  },
]

export default function Mental() {
  return (
    <>
      <Seo
        path="/preparation-mentale"
        title="Préparation mentale & accompagnement du sportif : tarifs et démarche"
        description="Accompagnement mental pour apprivoiser le stress, surmonter les peurs et retrouver le plaisir de pratiquer. Test de personnalité offert avant le premier rendez-vous."
      />

      {/* HEADER PAGE */}
      <header className="page-hero">
        <div className="wrap-narrow">
          <p className="kicker">Préparation mentale</p>
          <h1>Retrouver de la clarté et du plaisir dans son sport.</h1>
          <p className="lede">
            La préparation mentale s'adresse à tout sportif, quel que soit son niveau. Ce n’est pas de la motivation de vestiaire : 
            c’est un entraînement de l’attention, des émotions et de l’intention pour dépasser un blocage, apprivoiser une peur ou simplement pratiquer avec plus de sérénité.
          </p>
        </div>
      </header>

      {/* SECTION EXPLICATION : LE TEST COMME ÉTAPE 1 */}
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="split">
            <div className="copy">
              <div className="section-head">
                <span className="index-num">01</span>
                <div>
                  <p className="kicker">Démarche & Méthode</p>
                  <h2>Comment se déroule l'accompagnement ?</h2>
                </div>
              </div>
              <p className="lede">
                Avant toute prise de rendez-vous ou première séance, nous commençons systématiquement par un{' '}
                <Link to="/test-personnalite" style={{ color: 'var(--gold, #c5a059)', fontWeight: 'bold', textDecoration: 'underline' }}>
                  test de personnalité complet (150 items)
                </Link>.
              </p>
              <p>
                Ce test est <strong>entièrement offert et sans engagement</strong>. Il permet d'établir un état des lieux précis de votre fonctionnement (gestion de la pression, perfectionnisme, ruminate, peurs, écoute du corps) pour construire un accompagnement 100 % personnalisé dès le bilan initial.
              </p>
              <div style={{ marginTop: 20 }}>
                <Link className="btn btn-dark" to="/test-personnalite">
                  Faire le test offert avant mon RDV ➔
                </Link>
              </div>
            </div>
            <div className="media">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80"
                alt="Test de personnalité et bilan de préparation mentale"
              />
              <span className="media-caption">Étape 1 · Auto-évaluation offerte</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION POURQUOI S'EN OCCUPER */}
      <section className="section sand">
        <div className="wrap">
          <div className="split reverse">
            <div>
              <h2>Pourquoi entamer cette démarche ?</h2>
              <div className="gold-rule" />
              <ul className="card-list">
                <li>
                  <strong>Apprivoiser la pression & l'anxiété</strong>
                  <div className="muted">
                    L’enjeu ou la peur de l'échec peuvent bloquer les moyens. On apprend à conserver son calme : respiration, focus utile et acceptation de l’inconfort.
                  </div>
                </li>
                <li>
                  <strong>Dépasser des peurs ou des blocages</strong>
                  <div className="muted">
                    Peur de se reblesser, d'échouer ou du regard des autres : on identifie les freins inconscients pour retrouver de la liberté dans le geste.
                  </div>
                </li>
                <li>
                  <strong>Construire des routines utiles</strong>
                  <div className="muted">
                    Un rituel trop complexe devient lourd, un rituel trop vague ne sert à rien. On construit le juste nécessaire adapté à votre quotidien.
                  </div>
                </li>
                <li>
                  <strong>Reconstruire une confiance durable</strong>
                  <div className="muted">
                    La confiance ne se décrète pas. Elle se rebâtit sur des preuves, des actions concrètes et une meilleure compréhension de soi.
                  </div>
                </li>
              </ul>
            </div>
            <div className="media">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80"
                alt="Concentration et sérénité"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOC BONUS / CARTE CADEAU TEST DE PERSONALITÉ (DESIGN SOMBRE) */}
      <section 
        className="section" 
        style={{ 
          background: '#1A202C', 
          color: '#FFFFFF', 
          padding: '50px 24px', 
          borderRadius: '16px', 
          margin: '40px auto', 
          maxWidth: '1100px' 
        }}
      >
        <div className="wrap split" style={{ alignItems: 'center' }}>
          <div className="copy">
            <div 
              style={{ 
                display: 'inline-block', 
                background: '#C5A059', 
                color: '#1A202C', 
                fontWeight: 'bold', 
                fontSize: '0.75rem', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                textTransform: 'uppercase', 
                marginBottom: '12px' 
              }}
            >
              🎁 Accessible à tous
            </div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.7rem', marginTop: '0' }}>
              Vous souhaitez juste faire le point sur votre profil ?
            </h2>
            <p style={{ color: '#E2E8F0', fontSize: '0.98rem', lineHeight: '1.6' }}>
              Le test de personnalité sportive est en libre accès pour tous. Même sans engagement dans un suivi mental, vous pouvez passer l'auto-évaluation et télécharger votre bilan synthétique en PDF gratuitement.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Link 
                className="btn btn-light" 
                to="/test-personnalite" 
                style={{ background: '#C5A059', color: '#1A202C', border: 'none', fontWeight: 'bold' }}
              >
                Passer le test gratuitement ➔
              </Link>
            </div>
          </div>
          <div className="media" style={{ border: '2px solid #C5A059', borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=80"
              alt="Bilan personnel gratuit"
            />
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="section sand">
        <div className="wrap">
          <p className="kicker">Tarifs</p>
          <h2>Un cadre clair & transparent</h2>
          <p className="lede">
            Les séances s'effectuent en présentiel ou en visioconférence. Le Bilan 90 min s'appuie directement sur votre test de personnalité rempli au préalable.
          </p>
          <div className="grid-3" style={{ marginTop: 28 }}>
            {tarifs.map((item) => (
              <article className="panel" key={item.title}>
                <h3>{item.title}</h3>
                <div className="price">
                  {item.price} <span>TTC</span>
                </div>
                <p className="muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE DE RÉSERVATION */}
      <BookingBlock service="Préparation mentale" />
    </>
  )
}