import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Massage from './pages/Massage'
import Mental from './pages/Mental'
import Quiz from './pages/Quiz'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueDeConfidentialite'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/preparation-mentale" element={<Mental />} />
        <Route path="/test-personnalite" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      </Route>
    </Routes>
  )
}
