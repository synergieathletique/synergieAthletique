import Seo from '../components/Seo'
import { site } from '../config'

export default function MentionsLegales() {
  return (
    <>
      <Seo
        path="/mentions-legales"
        title="Mentions légales — Synergie Athlétique"
        description="Mentions légales du site Synergie Athlétique : éditeur, hébergement et propriété intellectuelle."
      />

      <header className="page-hero">
        <div className="wrap-narrow">
          <p className="kicker">Informations légales</p>
          <h1>Mentions Légales</h1>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap-narrow" style={{ lineHeight: '1.7' }}>
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>Synergie Athlétique</strong> est édité par :<br />
            <strong>Nom et Prénom :</strong> Bordet Maxime<br />
            <strong>SIRET :</strong> [Ton numéro SIRET ici]<br />
            <strong>Adresse :</strong> 7 Rue de l'hiver 40140 Magescq<br />
            <strong>Téléphone :</strong> 06 16 66 61 86<br />
            <strong>E-mail :</strong> synergie.athletique@gmail.com<br />
            <strong>Directeur de la publication :</strong> Bordet Maxime
          </p>

          <div className="gold-rule" style={{ margin: '30px 0' }} />

          <h2>2. Hébergement du site</h2>
          <p>
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong> (ou Netlify / ton hébergeur)<br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
          </p>

          <div className="gold-rule" style={{ margin: '30px 0' }} />

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus (textes, logos, images, structure du test de personnalité, éléments graphiques) présents sur ce site est protégé par le droit d'auteur. Toute reproduction, distribution ou représentation non autorisée de tout ou partie de ces éléments est strictement interdite sans l'accord écrit préalable de l'éditeur.
          </p>

          <div className="gold-rule" style={{ margin: '30px 0' }} />

          <h2>4. Avertissement concernant la pratique</h2>
          <p>
            Les prestations de massage sportif proposées ont pour objectif la récupération, la prévention et la détente corporelle. Elles ne constituent en aucun cas un acte médical, de kinésithérapie ou de rééducation. De même, la préparation mentale est un accompagnement au développement personnel et sportif qui ne se substitue pas à un suivi psychologique ou médical.
          </p>
        </div>
      </section>
    </>
  )
}