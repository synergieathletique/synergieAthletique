import { useState, useRef } from 'react'
import Seo from '../components/Seo'
import { fullStructure } from '../data/fullQuizData'

export default function Quiz() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    sport: '',
    date: new Date().toISOString().split('T')[0],
  })

  // Stocke les réponses : { "1.1": [0, 5, 10, ...], "1.2": [...] }
  const [answers, setAnswers] = useState({})
  const [showDashboard, setShowDashboard] = useState(false)
  const reportRef = useRef(null)

  // Calcule le nombre total de questions répondues
  const answeredCount = Object.values(answers).reduce(
    (acc, arr) => acc + arr.filter((v) => v !== undefined && v !== null).length,
    0
  )

  function handleScoreSelect(subKey, qIndex, value) {
    setAnswers((prev) => {
      const currentSubAnswers = prev[subKey] ? [...prev[subKey]] : []
      currentSubAnswers[qIndex] = value
      return { ...prev, [subKey]: currentSubAnswers }
    })
  }

  function handleInputChange(e) {
    const { id, value } = e.target
    setUserInfo((prev) => ({ ...prev, [id]: value }))
  }

  function generateReport() {
    setShowDashboard(true)
    setTimeout(() => {
      reportRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  async function exportToPDF() {
    if (typeof window === 'undefined') return

    // Vérification du chargement via CDN ou import dynamique
    const html2canvas = window.html2canvas || (await import('html2canvas')).default
    const jsPDF = window.jspdf?.jsPDF || (await import('jspdf')).jsPDF

    if (!html2canvas || !jsPDF) {
      alert("Erreur lors du chargement du module PDF.")
      return
    }

    const element = reportRef.current
    if (!element) return

    const canvas = await html2canvas(element, { scale: 1.5, useCORS: true })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')

    const imgWidth = 210
    const pageHeight = 297
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    const name = userInfo.name ? userInfo.name.replace(/\s+/g, '_') : 'Sportif'
    pdf.save(`Bilan_Psychosomatique_${name}.pdf`)
  }

  // Calcul des totaux par sous-catégorie et par pôle
  const subCategoryScores = {}
  const poleTotals = {}

  Object.entries(fullStructure).forEach(([poleTitle, subTraits]) => {
    poleTotals[poleTitle] = 0

    subTraits.forEach(([subTitle]) => {
      const subKey = subTitle.split(' ')[0]
      const subAnswers = answers[subKey] || []
      const sum = subAnswers.reduce((a, b) => a + (b || 0), 0)

      subCategoryScores[subKey] = {
        title: subTitle,
        pole: poleTitle,
        score: sum,
      }

      poleTotals[poleTitle] += sum
    })
  })

  // Métadonnées structured data pour le SEO (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'Auto-Évaluation des Profils Psychosomatiques',
    description:
      'Évaluation interactive en 150 items pour mesurer l’impact du mental sur le corps chez le sportif.',
  }

  let globalQuestionIndex = 1

  return (
    <section className="section">
      <Seo
        path="/test-personnalite"
        title="Auto-Évaluation des Profils Psychosomatiques — Test Sportif 150 Items"
        description="Identifiez vos facteurs de stress, tensions et schémas d'épuisement grâce à notre bilan complet en 150 points. Téléchargez votre rapport PDF personnalisé."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Intégration directe des styles CSS dans le composant */}
      <style>{`
        :root {
          --quiz-primary: #1A365D;
          --quiz-secondary: #2B6CB0;
          --quiz-bg: #F7FAFC;
          --quiz-card-bg: #FFFFFF;
          --quiz-text: #2D3748;
          --quiz-border: #CBD5E0;
        }

        .quiz-wrapper {
          max-width: 950px;
          margin: 0 auto;
          padding: 0 12px;
          color: var(--quiz-text);
          font-family: system-ui, -apple-system, sans-serif;
        }

        .quiz-header {
          background: var(--quiz-card-bg);
          padding: 16px;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          margin-bottom: 16px;
          border-left: 6px solid var(--quiz-secondary);
        }

        .quiz-header h1 {
          color: var(--quiz-primary);
          font-size: 1.3rem;
          margin: 0 0 6px 0;
        }

        .quiz-subtitle {
          color: #718096;
          margin: 0 0 12px 0;
          font-size: 0.88rem;
        }

        .quiz-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 10px;
        }

        .quiz-info-grid input {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid var(--quiz-border);
          border-radius: 6px;
          font-size: 0.88rem;
        }

        .quiz-pole-card {
          background: var(--quiz-card-bg);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 16px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.03);
          border: 1px solid var(--quiz-border);
        }

        .quiz-pole-title {
          color: var(--quiz-primary);
          font-size: 1.15rem;
          border-bottom: 2px solid var(--quiz-secondary);
          padding-bottom: 6px;
          margin-top: 0;
          margin-bottom: 14px;
        }

        .quiz-sub-trait-card {
          background: #FAFAFA;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 14px;
          border: 1px solid #E2E8F0;
        }

        .quiz-sub-trait-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .quiz-sub-trait-title {
          color: var(--quiz-secondary);
          font-size: 0.98rem;
          font-weight: bold;
          margin: 0;
        }

        .quiz-sub-score-badge {
          background: #EDF2F7;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
          color: var(--quiz-primary);
          border: 1px solid var(--quiz-border);
        }

        .quiz-question-item {
          padding: 10px 0;
          border-bottom: 1px dashed #E2E8F0;
        }

        .quiz-question-item:last-child {
          border-bottom: none;
        }

        .quiz-question-text {
          font-size: 0.88rem;
          margin-bottom: 8px;
        }

        .quiz-scale-options {
          display: grid;
          grid-template-columns: repeat(11, minmax(0, 1fr));
          gap: 3px;
          width: 100%;
        }

        .quiz-scale-btn {
          width: 100%;
          height: 38px;
          border: 1px solid var(--quiz-border);
          background: #FFFFFF;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          font-size: 0.82rem;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease-in-out;
        }

        .quiz-scale-btn:hover {
          background: #E2E8F0;
        }

        .quiz-scale-btn.selected {
          background: var(--quiz-secondary);
          color: white;
          border-color: var(--quiz-secondary);
        }

        .quiz-sticky-footer {
          position: sticky;
          bottom: 12px;
          background: var(--quiz-primary);
          color: white;
          padding: 12px 16px;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.25);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          z-index: 100;
        }

        .quiz-btn-group {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .quiz-btn-action, .quiz-btn-pdf {
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .quiz-btn-action {
          background: #38A169;
          color: white;
        }

        .quiz-btn-action:hover {
          background: #2F855A;
        }

        .quiz-btn-pdf {
          background: #E53E3E;
          color: white;
        }

        .quiz-btn-pdf:hover {
          background: #C53030;
        }

        .quiz-dashboard {
          background: var(--quiz-card-bg);
          padding: 16px;
          border-radius: 12px;
          margin-top: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border: 1px solid var(--quiz-border);
          overflow-x: auto;
        }

        .quiz-summary-poles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 10px;
          margin-bottom: 20px;
        }

        .quiz-pole-summary-card {
          background: #F7FAFC;
          border: 1.5px solid var(--quiz-secondary);
          border-radius: 8px;
          padding: 10px;
          text-align: center;
        }

        .quiz-pole-summary-score {
          font-size: 1.4rem;
          font-weight: bold;
          color: var(--quiz-secondary);
        }

        .quiz-pole-summary-max {
          font-size: 0.75rem;
          color: #718096;
        }

        .quiz-table-responsive {
          width: 100%;
          overflow-x: auto;
        }

        .quiz-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          min-width: 480px;
        }

        .quiz-table th, .quiz-table td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #E2E8F0;
          font-size: 0.85rem;
        }

        .quiz-table th {
          background: var(--quiz-primary);
          color: white;
          font-weight: bold;
        }

        .badge-faible { background: #C6F6D5; color: #22543D; padding: 4px 8px; border-radius: 12px; font-weight: bold; display: inline-block; }
        .badge-modere { background: #FEFCBF; color: #744210; padding: 4px 8px; border-radius: 12px; font-weight: bold; display: inline-block; }
        .badge-eleve { background: #FED7D7; color: #742A2A; padding: 4px 8px; border-radius: 12px; font-weight: bold; display: inline-block; }

        @media (max-width: 600px) {
          .quiz-scale-btn {
            height: 34px;
            font-size: 0.75rem;
          }

          .quiz-sticky-footer {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }

          .quiz-btn-group {
            width: 100%;
            flex-direction: column;
          }

          .quiz-btn-action, .quiz-btn-pdf {
            width: 100%;
          }
        }
      `}</style>

      <div className="quiz-wrapper">
        <header className="quiz-header">
          <h1>Auto-Évaluation des Profils Psychosomatiques (150 items)</h1>
          <p className="quiz-subtitle">
            Évaluez chaque affirmation de 0 (Pas du tout d'accord) à 10 (Tout à fait d'accord).
          </p>
          <div className="quiz-info-grid">
            <input
              type="text"
              id="name"
              placeholder="Nom / Prénom"
              value={userInfo.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="sport"
              placeholder="Sport / Discipline"
              value={userInfo.sport}
              onChange={handleInputChange}
            />
            <input
              type="date"
              id="date"
              value={userInfo.date}
              onChange={handleInputChange}
            />
          </div>
        </header>

        {/* Liste des questions groupées par Pôles */}
        <div>
          {Object.entries(fullStructure).map(([poleTitle, subTraits]) => (
            <div key={poleTitle} className="quiz-pole-card">
              <h2 className="quiz-pole-title">{poleTitle}</h2>

              {subTraits.map(([subTitle, questions]) => {
                const subKey = subTitle.split(' ')[0]
                const subScore = subCategoryScores[subKey]?.score || 0

                return (
                  <div key={subTitle} className="quiz-sub-trait-card">
                    <div className="quiz-sub-trait-header">
                      <h3 className="quiz-sub-trait-title">{subTitle}</h3>
                      <span className="quiz-sub-score-badge">{subScore} / 50 pts</span>
                    </div>

                    {questions.map((qText, qIdx) => {
                      const currentIndex = globalQuestionIndex++
                      const selectedVal = answers[subKey]?.[qIdx]

                      return (
                        <div key={qIdx} className="quiz-question-item">
                          <div className="quiz-question-text">
                            <strong>{currentIndex}.</strong> {qText}
                          </div>
                          <div className="quiz-scale-options">
                            {Array.from({ length: 11 }, (_, i) => (
                              <button
                                key={i}
                                type="button"
                                className={`quiz-scale-btn ${selectedVal === i ? 'selected' : ''}`}
                                onClick={() => handleScoreSelect(subKey, qIdx, i)}
                              >
                                {i}
                              </button>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Footer Fixe */}
        <div className="quiz-sticky-footer">
          <div>
            <span style={{ fontSize: '0.88rem', opacity: 0.9 }}>Progression : </span>
            <strong style={{ fontSize: '1rem' }}>{answeredCount} / 150 réponse(s)</strong>
          </div>
          <div className="quiz-btn-group">
            <button className="quiz-btn-action" onClick={generateReport}>
              Générer Mon Bilan Complet
            </button>
            {showDashboard && (
              <button className="quiz-btn-pdf" onClick={exportToPDF}>
                Exporter en PDF 📄
              </button>
            )}
          </div>
        </div>

        {/* Dashboard de Bilan */}
        {showDashboard && (
          <div className="quiz-dashboard" ref={reportRef}>
            <div>
              <h2>Bilan Synthétique Global</h2>
              {userInfo.name && (
                <p>
                  <strong>Athlète :</strong> {userInfo.name} ({userInfo.sport || 'Discipline non spécifiée'})
                </p>
              )}
            </div>

            <h3>1. Score Global par Catégorie (Pôle)</h3>
            <div className="quiz-summary-poles-grid">
              {Object.entries(poleTotals).map(([pTitle, pScore]) => (
                <div key={pTitle} className="quiz-pole-summary-card">
                  <h3 style={{ fontSize: '0.85rem', margin: '0 0 4px 0' }}>
                    {pTitle.replace('PÔLE ', '')}
                  </h3>
                  <div className="quiz-pole-summary-score">{pScore}</div>
                  <div className="quiz-pole-summary-max">/ 250 points</div>
                </div>
              ))}
            </div>

            <h3>2. Détail par Sous-Catégorie (Sous-Facteur)</h3>
            <div className="quiz-table-responsive">
              <table className="quiz-table">
                <thead>
                  <tr>
                    <th style={{ width: '50%' }}>Sous-Catégorie</th>
                    <th style={{ width: '25%' }}>Score / 50</th>
                    <th style={{ width: '25%' }}>Niveau de Tension</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(subCategoryScores).map(([sKey, data]) => {
                    let badgeClass = 'badge-faible'
                    let levelText = 'Faible (0-15)'

                    if (data.score >= 16 && data.score <= 32) {
                      badgeClass = 'badge-modere'
                      levelText = 'Modéré (16-32)'
                    } else if (data.score >= 33) {
                      badgeClass = 'badge-eleve'
                      levelText = 'Élevé (33-50)'
                    }

                    return (
                      <tr key={sKey}>
                        <td><strong>{data.title}</strong></td>
                        <td><strong style={{ fontSize: '1.05rem' }}>{data.score} / 50</strong></td>
                        <td><span className={badgeClass}>{levelText}</span></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}