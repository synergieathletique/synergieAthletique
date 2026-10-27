export const questions = [
  {
    id: 'pression',
    text: 'La veille d’une échéance importante, vous êtes plutôt…',
    options: [
      { label: 'Dans le détail : je revois le plan, les consignes, les scénarios.', axes: { strategie: 2, intensite: 0, recuperation: 0, ressenti: 0 } },
      { label: 'Chargé : j’ai envie d’en découdre, parfois trop tôt.', axes: { strategie: 0, intensite: 2, recuperation: 0, ressenti: 0 } },
      { label: 'À l’écoute : je sens le corps, le sommeil, l’humeur.', axes: { strategie: 0, intensite: 0, recuperation: 1, ressenti: 2 } },
      { label: 'En retrait : je ralentis pour arriver frais.', axes: { strategie: 0, intensite: 0, recuperation: 2, ressenti: 1 } },
    ],
  },
  {
    id: 'echec',
    text: 'Après une contre-performance, votre premier réflexe est de…',
    options: [
      { label: 'Analyser ce qui a fuité dans le plan de jeu ou la préparation.', axes: { strategie: 2, intensite: 0, recuperation: 0, ressenti: 0 } },
      { label: 'Remonter tout de suite à l’entraînement, plus fort.', axes: { strategie: 0, intensite: 2, recuperation: 0, ressenti: 0 } },
      { label: 'Laisser redescendre l’émotion avant d’en parler.', axes: { strategie: 0, intensite: 0, recuperation: 1, ressenti: 2 } },
      { label: 'Dormir, marcher, relâcher — le corps d’abord.', axes: { strategie: 0, intensite: 0, recuperation: 2, ressenti: 1 } },
    ],
  },
  {
    id: 'corps',
    text: 'Face à une douleur ou une fatigue inhabituelle, vous…',
    options: [
      { label: 'Cherchez une cause claire et un protocole.', axes: { strategie: 2, intensite: 0, recuperation: 1, ressenti: 0 } },
      { label: 'Continuez, en ajustant à peine l’intensité.', axes: { strategie: 0, intensite: 2, recuperation: 0, ressenti: 0 } },
      { label: 'Savez déjà ce que ça « raconte » émotionnellement.', axes: { strategie: 0, intensite: 0, recuperation: 0, ressenti: 2 } },
      { label: 'Coupez et récupérez, même si ça vous frustre.', axes: { strategie: 0, intensite: 0, recuperation: 2, ressenti: 1 } },
    ],
  },
  {
    id: 'routine',
    text: 'Votre rituel avant de performer ressemble à…',
    options: [
      { label: 'Une checklist précise, toujours dans le même ordre.', axes: { strategie: 2, intensite: 0, recuperation: 0, ressenti: 0 } },
      { label: 'De l’activation : musique, voix, montée d’adrénaline.', axes: { strategie: 0, intensite: 2, recuperation: 0, ressenti: 0 } },
      { label: 'Quelques respirations et une image intérieure.', axes: { strategie: 1, intensite: 0, recuperation: 0, ressenti: 2 } },
      { label: 'Peu de rituel : je me fie à l’état du jour.', axes: { strategie: 0, intensite: 0, recuperation: 1, ressenti: 1 } },
    ],
  },
  {
    id: 'motivation',
    text: 'Ce qui vous fait vraiment avancer, c’est…',
    options: [
      { label: 'Progresser selon un fil, des objectifs, des repères.', axes: { strategie: 2, intensite: 0, recuperation: 0, ressenti: 0 } },
      { label: 'Le défi, le duel, le dépassement visible.', axes: { strategie: 0, intensite: 2, recuperation: 0, ressenti: 0 } },
      { label: 'Le sens : pourquoi je fais ça, pour qui, vers où.', axes: { strategie: 1, intensite: 0, recuperation: 0, ressenti: 2 } },
      { label: 'Tenir dans la durée, sans me casser.', axes: { strategie: 0, intensite: 0, recuperation: 2, ressenti: 0 } },
    ],
  },
  {
    id: 'tension',
    text: 'Quand le mental s’emballe, le corps…',
    options: [
      { label: 'Attend des consignes : je dois lui dire quoi faire.', axes: { strategie: 2, intensite: 0, recuperation: 0, ressenti: 0 } },
      { label: 'Monte encore : mâchoire, épaules, rythme cardiaque.', axes: { strategie: 0, intensite: 2, recuperation: 0, ressenti: 1 } },
      { label: 'Envoie des signaux clairs, parfois avant la tête.', axes: { strategie: 0, intensite: 0, recuperation: 0, ressenti: 2 } },
      { label: 'Demande du calme, du sommeil, du relâchement.', axes: { strategie: 0, intensite: 0, recuperation: 2, ressenti: 1 } },
    ],
  },
  {
    id: 'equipe',
    text: 'En club ou en groupe, vous êtes plutôt…',
    options: [
      { label: 'Celui qui structure, rappelle le cadre, pose des questions.', axes: { strategie: 2, intensite: 0, recuperation: 0, ressenti: 0 } },
      { label: 'Celui qui entraîne les autres par l’exemple, parfois trop.', axes: { strategie: 0, intensite: 2, recuperation: 0, ressenti: 0 } },
      { label: 'Celui qui sent les ambiances et les non-dits.', axes: { strategie: 0, intensite: 0, recuperation: 0, ressenti: 2 } },
      { label: 'Celui qui protège son énergie pour être bon le jour J.', axes: { strategie: 0, intensite: 0, recuperation: 2, ressenti: 0 } },
    ],
  },
  {
    id: 'aide',
    text: 'Ce dont vous avez le plus besoin aujourd’hui, c’est…',
    options: [
      { label: 'Clarifier une méthode mentale (focus, routines, objectifs).', axes: { strategie: 2, intensite: 0, recuperation: 0, ressenti: 0 } },
      { label: 'Canaliser l’énergie pour qu’elle serve, pas qu’elle brûle.', axes: { strategie: 0, intensite: 2, recuperation: 1, ressenti: 0 } },
      { label: 'Mieux relier sensations, émotions et performance.', axes: { strategie: 0, intensite: 0, recuperation: 0, ressenti: 2 } },
      { label: 'Récupérer vraiment : tissus, sommeil, système nerveux.', axes: { strategie: 0, intensite: 0, recuperation: 2, ressenti: 0 } },
    ],
  },
]

export const profiles = {
  stratege: {
    id: 'stratege',
    title: 'Le stratège',
    lead: 'Vous gagnez quand le plan est clair. Le risque, c’est de trop penser le jour J.',
    body: 'Votre force est la structure : objectifs, lecture de jeu, routines. En préparation mentale, on travaillera le basculement vers le ressenti — visualisations courtes, ancrages, acceptation de l’imprévu. Un massage sportif régulier aide le corps à sortir de la « tête » et à retrouver une disponibilité réelle.',
    offer: 'Les deux pratiques, avec un fil mental plus marqué.',
    links: [
      { to: '/preparation-mentale', label: 'Voir la préparation mentale' },
      { to: '/massage', label: 'Voir le massage sportif' },
    ],
  },
  guerrier: {
    id: 'guerrier',
    title: 'Le guerrier',
    lead: 'Vous avancez fort. Le risque, c’est de confondre intensité et qualité.',
    body: 'L’engagement est votre moteur — et parfois votre piège. La préparation mentale sert à doser l’activation, à sortir du « toujours plus ». Le massage sportif n’est pas un luxe : c’est ce qui empêche le système de s’user. On relâche les chaînes trop sollicitées et on apprend à récupérer sans culpabilité.',
    offer: 'Massage pour récupérer, mental pour canaliser.',
    links: [
      { to: '/massage', label: 'Voir le massage sportif' },
      { to: '/preparation-mentale', label: 'Voir la préparation mentale' },
    ],
  },
  intuitif: {
    id: 'intuitif',
    title: 'L’intuitif',
    lead: 'Vous lisez déjà beaucoup par le corps. Il reste à en faire un outil stable.',
    body: 'Votre sensibilité est une ressource de performance : signaux précoces, ambiance, timing. On la structure sans la museler — mots justes, routines sobres, écoute des tensions. Le massage devient un dialogue : ce que les tissus retiennent, ce que l’histoire sportive a laissé. La préparation mentale pose un cadre pour que l’intuition tienne sous pression.',
    offer: 'Un travail d’écoute, corps et mental.',
    links: [
      { to: '/massage', label: 'Voir le massage sportif' },
      { to: '/preparation-mentale', label: 'Voir la préparation mentale' },
    ],
  },
  reconstructeur: {
    id: 'reconstructeur',
    title: 'Le reconstructeur',
    lead: 'Vous savez que durer, c’est déjà performer. Attention à ne pas tout mettre en pause.',
    body: 'Vous protégez l’essentiel : sommeil, charge, signaux d’alerte. Le massage sportif vous convient particulièrement — récupération, circulation, relâchement du tonus. En préparation mentale, on travaille la confiance pour ré-accélérer au bon moment, sans basculer dans la peur de se blesser. Performance et préservation peuvent coexister.',
    offer: 'Massage en priorité, mental pour oser revenir.',
    links: [
      { to: '/massage', label: 'Voir le massage sportif' },
      { to: '/preparation-mentale', label: 'Voir la préparation mentale' },
    ],
  },
}

export function scoreQuiz(answers) {
  const totals = { strategie: 0, intensite: 0, recuperation: 0, ressenti: 0 }

  answers.forEach((optionIndex, questionIndex) => {
    const option = questions[questionIndex]?.options[optionIndex]
    if (!option) return
    Object.entries(option.axes).forEach(([key, value]) => {
      totals[key] += value
    })
  })

  const ranking = [
    ['stratege', totals.strategie],
    ['guerrier', totals.intensite],
    ['intuitif', totals.ressenti],
    ['reconstructeur', totals.recuperation],
  ].sort((a, b) => b[1] - a[1])

  return {
    totals,
    profile: profiles[ranking[0][0]],
  }
}
