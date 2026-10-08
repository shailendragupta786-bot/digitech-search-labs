import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import EngineeringAdvantage from './components/EngineeringAdvantage'
import Disciplines from './components/Disciplines'
import CaseStudy from './components/CaseStudy'
import AuditForm from './components/AuditForm'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import JsonLd from './components/JsonLd'

export default function App() {
  const [showForm, setShowForm] = useState(false)

  const scrollToForm = () => {
    setShowForm(true)
    setTimeout(() => {
      document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <JsonLd />
      <Header onAuditClick={scrollToForm} />
      <main>
        <Hero onAuditClick={scrollToForm} />
        <EngineeringAdvantage />
        <Disciplines />
        <CaseStudy />
        <AuditForm id="audit-form" />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
