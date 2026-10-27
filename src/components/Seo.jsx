import { Helmet } from 'react-helmet-async'
import { site } from '../config'

export default function Seo({ title, description, path = '/', type = 'website' }) {
  const url = `${site.url}${path}`
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
  const image = `${site.url}${site.logo}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${site.url}/#business`,
        name: site.name,
        image: image,
        email: site.email,
        url: site.url,
        inLanguage: 'fr-FR',
        description:
          'Massage sportif et préparation mentale pour sportifs amateurs et compétiteurs.',
        areaServed: 'FR',
        sameAs: [],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Accompagnement sportif',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Massage sportif' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Préparation mentale' } },
          ],
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: fullTitle,
        description,
        isPartOf: { '@id': `${site.url}/#website` },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: 'fr-FR',
      },
    ],
  }

  return (
    <Helmet>
      <html lang="fr" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="massage sportif, préparation mentale, récupération, performance, coaching mental, sportif, Synergie Athlétique"
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
