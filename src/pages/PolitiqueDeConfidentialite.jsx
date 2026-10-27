import Seo from '../components/Seo'

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Seo
        path="/politique-confidentialite"
        title="Politique de confidentialité — Synergie Athlétique"
        description="Politique de confidentialité et protection des données personnelles (RGPD) du site Synergie Athlétique."
      />

      <header className="page-hero">
        <div className="wrap-narrow">
          <p className="kicker">Protection des données (RGPD)</p>
          <h1>Politique de Confidentialité</h1>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap-narrow" style={{ lineHeight: '1.7' }}>
          <h2>1. Traitement des données du Test de Personnalité</h2>
          <p>
            Le test de personnalité sportive proposé sur le site (150 items) est conçu pour respecter strictement votre vie privée :
          </p>
          <ul className="card-list" style={{ marginTop: 12, marginBottom: 20 }}>
            <li>
              <strong>Traitement local exclusif :</strong> L'ensemble de vos réponses et les informations saisies (nom, discipline) sont calculés en temps réel <em>directement dans votre navigateur web</em>.
            </li>
            <li>
              <strong>Aucun stockage sur serveur :</strong> Vos données et vos scores ne sont transmis à aucun serveur, ni enregistrés dans aucune base de données.
            </li>
            <li>
              <strong>Confidentialité totale :</strong> Dès que vous fermez ou rafraîchissez la page de votre navigateur, vos réponses au test sont définitivement effacées.
            </li>
          </ul>

          <div className="gold-rule" style={{ margin: '30px 0' }} />

          <h2>2. Formulaire de contact et Prise de Rendez-vous</h2>
          <p>
            Lorsque vous utilisez le formulaire de contact ou le module de réservation en ligne, nous collectons les données strictement nécessaires au traitement de votre demande :
          </p>
          <ul className="card-list" style={{ marginTop: 12, marginBottom: 20 }}>
            <li>Nom, prénom, adresse e-mail, numéro de téléphone.</li>
            <li>Motif ou type de rendez-vous souhaité (Massage sportif / Préparation mentale).</li>
          </ul>
          <p>
            Ces données sont destinées uniquement à <strong>Synergie Athlétique</strong> pour la gestion de nos échanges et la confirmation de vos créneaux. Elles ne sont <strong>jamais vendues, louées ni transmises à des tiers</strong> à des fins commerciales.
          </p>

          <div className="gold-rule" style={{ margin: '30px 0' }} />

          <h2>3. Cookies et Traqueurs</h2>
          <p>
            Ce site n'utilise **aucun cookie publicitaire, marketing ni traqueur tiers** (pas de Google Analytics ni de Pixel Facebook). Seuls des cookies techniques strictement nécessaires au fonctionnement de la navigation peuvent être déposés.
          </p>

          <div className="gold-rule" style={{ margin: '30px 0' }} />

          <h2>4. Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données personnelles vous concernant (dans le cadre de nos échanges par e-mail ou réservation).
          </p>
          <p>
            Pour exercer ce droit, vous pouvez nous contacter par e-mail à : <strong>synergie.athletique@gmail.com</strong>.
          </p>
        </div>
      </section>
    </>
  )
}