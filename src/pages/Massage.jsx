import BookingBlock from '../components/BookingBlock'
import Seo from '../components/Seo'

const tarifs = [
  { title: 'Séance 45 min', price: '55 €', text: 'Ciblée : une zone, une chaîne, un objectif clair (avant ou après effort).' },
  { title: 'Séance 60 min', price: '70 €', text: 'Le format le plus demandé. Bilan court + travail des tissus en profondeur.' },
  { title: 'Séance 90 min', price: '95 €', text: 'Corps entier ou gros volume de charge. Idéal en récupération de bloc.' },
]

export default function Massage() {
  return (
    <>
      <Seo
        path="/massage"
        title="Massage sportif : tarifs, bienfaits et rendez-vous"
        description="Massage sportif pour récupérer, prévenir les blessures de surcharge et retrouver de l’amplitude. Tarifs, intérêts de la pratique et prise de rendez-vous."
      />
      <header className="page-hero">
        <div className="wrap-narrow">
          <p className="kicker">Massage sportif</p>
          <h1>Rendre le corps disponible.</h1>
          <p className="lede">
            Le massage sportif agit sur ce que l’entraînement laisse dans les tissus : raideurs,
            stases, points de tension, fatigue locale. Il ne remplace ni le kiné ni le médecin.
            Il complète la charge, accélère la récupération utile, et vous apprend à sentir plus
            tôt ce qui commence à coincer.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="split">
            <div>
              <h2>À quoi ça sert, vraiment</h2>
              <div className="gold-rule" />
              <ul className="card-list">
                <li>
                  <strong>Récupération</strong>
                  <div className="muted">
                    Circulation, relâchement du tonus, baisse de la charge perçue. Vous revenez
                    plus net à la séance suivante.
                  </div>
                </li>
                <li>
                  <strong>Prévention</strong>
                  <div className="muted">
                    Les blessures de surcharge s’annoncent souvent dans les tissus. Les travailler
                    tôt, c’est éviter qu’elles deviennent un arrêt.
                  </div>
                </li>
                <li>
                  <strong>Lecture du corps</strong>
                  <div className="muted">
                    Pendant la séance, on nomme ce qui se passe. Vous repartez avec des repères,
                    pas seulement un « ça va mieux ».
                  </div>
                </li>
                <li>
                  <strong>Performance</strong>
                  <div className="muted">
                    Un muscle qui glisse mieux, une amplitude plus franche, un système nerveux
                    moins en alerte : la technique a de la place.
                  </div>
                </li>
              </ul>
            </div>
            <div className="media">
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1400&q=80"
                alt="Espace de soin calme"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section sand">
        <div className="wrap">
          <p className="kicker">Tarifs</p>
          <h2>Des formats simples</h2>
          <p className="lede">Ajustables selon votre sport et votre calendrier. Forfait 5 séances : −10 %.</p>
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

      <BookingBlock service="Massage sportif" />
    </>
  )
}
