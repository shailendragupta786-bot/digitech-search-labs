import { Zap, MapPin, Code, TrendingUp } from 'lucide-react'

export default function Disciplines() {
  const disciplines = [
    {
      icon: Zap,
      title: 'Technical & Infrastructure SEO',
      description: 'Zero 404 errors, Core Web Vitals optimization, speed acceleration, crawl health audit, and XML sitemap mastery.',
    },
    {
      icon: MapPin,
      title: 'Hyper-Local SEO & Google Maps',
      description: 'Dominate the 3-pack, sync clinic hours, manage reviews, and lock local intent keywords across Delhi/NCR.',
    },
    {
      icon: Code,
      title: 'Generative Engine Optimization (GEO)',
      description: 'AI-ready schema for Gemini, ChatGPT, and Perplexity. Custom JSON-LD structured data for maximum AI retrieval visibility.',
    },
    {
      icon: TrendingUp,
      title: 'High-Intent Google Search Ads',
      description: 'Performance PPC campaigns, negative keyword architecture, direct phone lead tracking, and measurable ROI.',
    },
  ]

  return (
    <section id="services" className="section-container bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div className="text-center mb-12">
        <h2 className="mb-4">Core Disciplines</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Engineering excellence across four pillars of visibility and conversion.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {disciplines.map((discipline, idx) => {
          const Icon = discipline.icon
          return (
            <div key={idx} className="card">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-crimson-600 p-3 rounded-lg">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">{discipline.title}</h3>
              </div>
              <p className="text-slate-300">{discipline.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
