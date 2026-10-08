import { ArrowRight, CheckCircle } from 'lucide-react'

export default function CaseStudy() {
  return (
    <section id="case-study" className="section-container">
      <div className="text-center mb-12">
        <h2 className="mb-4">Live Case Study</h2>
        <p className="text-lg text-slate-300">Real Results in Real Time</p>
      </div>

      <div className="card border-crimson-600 bg-gradient-to-br from-slate-900 to-slate-950 lg:p-12">
        <h3 className="text-2xl font-bold text-crimson-600 mb-8">
          Gupta Computerised Homeopathic & Skin Clinic
        </h3>
        <p className="text-slate-400 text-sm mb-8">
          Shakarpur, Delhi & Vaishali, Ghaziabad
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Challenge */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-slate-500">01</span> The Challenge
            </h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-crimson-600 flex-shrink-0">•</span>
                <span>Accumulated 404 errors across clinic pages</span>
              </li>
              <li className="flex gap-2">
                <span className="text-crimson-600 flex-shrink-0">•</span>
                <span>Critical pages unindexed by Google</span>
              </li>
              <li className="flex gap-2">
                <span className="text-crimson-600 flex-shrink-0">•</span>
                <span>Desynced clinic hours (patient confusion)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-crimson-600 flex-shrink-0">•</span>
                <span>Missing medical schema & structured data</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-crimson-600">02</span> Digitech Solution
            </h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-crimson-600 flex-shrink-0 mt-0.5" />
                <span>100% crawl health score audit & fixes</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-crimson-600 flex-shrink-0 mt-0.5" />
                <span>Hours sync across both clinic locations</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-crimson-600 flex-shrink-0 mt-0.5" />
                <span>Custom Medical Business JSON-LD</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-crimson-600 flex-shrink-0 mt-0.5" />
                <span>Local 3-pack optimization</span>
              </li>
            </ul>
          </div>

          {/* Outcome */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-crimson-600">03</span> Outcome
            </h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-crimson-600 font-bold flex-shrink-0">→</span>
                <span>Locked local 3-pack dominance in both areas</span>
              </li>
              <li className="flex gap-2">
                <span className="text-crimson-600 font-bold flex-shrink-0">→</span>
                <span>Steady increase in patient inquiry calls</span>
              </li>
              <li className="flex gap-2">
                <span className="text-crimson-600 font-bold flex-shrink-0">→</span>
                <span>95+ Core Web Vitals performance score</span>
              </li>
              <li className="flex gap-2">
                <span className="text-crimson-600 font-bold flex-shrink-0">→</span>
                <span>Visible in Gemini & ChatGPT local results</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-center text-sm">
            This case study demonstrates the impact of engineering excellence combined with medical SEO expertise. 
            No vanity metrics. Only measurable, sustainable growth.
          </p>
        </div>
      </div>
    </section>
  )
}
