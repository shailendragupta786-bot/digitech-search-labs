import { Check, X } from 'lucide-react'

export default function EngineeringAdvantage() {
  const comparison = [
    {
      category: 'Crawl Architecture',
      typical: 'Broken 404s ignored',
      digitech: 'Zero-error crawl audit & purge',
    },
    {
      category: 'Local Presence',
      typical: 'Vanity metrics & social posts',
      digitech: 'Synced GBP hours & 3-pack dominance',
    },
    {
      category: 'Schema & Markup',
      typical: 'Generic or missing',
      digitech: 'Custom JSON-LD for Medical/Local',
    },
    {
      category: 'Conversion Tracking',
      typical: 'Website analytics only',
      digitech: 'Direct phone & form lead attribution',
    },
    {
      category: 'AI Optimization',
      typical: 'Not addressed',
      digitech: 'Gemini, ChatGPT, Perplexity ready',
    },
    {
      category: 'Performance',
      typical: 'Often ignored',
      digitech: '95+ Core Web Vitals score',
    },
  ]

  return (
    <section id="why-us" className="section-container">
      <div className="text-center mb-12">
        <h2 className="mb-4">The Engineering Advantage</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          We don't build for vanity. We engineer for crawlers, customers, and algorithms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Typical Creative Agencies */}
        <div className="card">
          <h3 className="text-2xl font-bold text-slate-300 mb-6">Typical Creative Agencies</h3>
          <div className="space-y-4">
            {comparison.map((item) => (
              <div key={item.category} className="flex gap-3 items-start">
                <X className="text-slate-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-300">{item.category}</p>
                  <p className="text-slate-400 text-sm">{item.typical}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digitech Search Labs */}
        <div className="card border-crimson-600 bg-gradient-to-br from-slate-900 to-slate-950">
          <h3 className="text-2xl font-bold text-crimson-600 mb-6">Digitech Search Labs</h3>
          <div className="space-y-4">
            {comparison.map((item) => (
              <div key={item.category} className="flex gap-3 items-start">
                <Check className="text-crimson-600 flex-shrink-0 mt-1 font-bold" size={20} />
                <div>
                  <p className="font-semibold text-white">{item.category}</p>
                  <p className="text-slate-300 text-sm">{item.digitech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
