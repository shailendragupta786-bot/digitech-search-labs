import { Zap, MessageCircle } from 'lucide-react'

export default function Hero({ onAuditClick }) {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#dc2626_1px,transparent_1px),linear-gradient(0deg,#dc2626_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="badge">
            <Zap size={16} />
            Built on 24 Years of Enterprise IT & Systems Engineering (Est. 1997, Delhi/NCR)
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up leading-tight">
          Search Engines Run on Code,
          <span className="text-crimson-600"> Not Canva</span>.
          <br />
          We Engineer Your Visibility.
        </h1>

        {/* Sub-headline */}
        <p className="text-center text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          We build 100% crawl-healthy websites, lock in Google 3-Pack Map dominance, and optimize your brand for AI retrieval engines so local high-intent customers find you first.
        </p>

        {/* Trust Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-center text-slate-400 text-sm md:text-base animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div>24+ Years Technology Heritage</div>
          <div>100% Crawl Health Standard</div>
          <div>Custom Medical & Local Schema</div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={onAuditClick}
            className="btn-primary"
          >
            Request Free 48-Hour Technical Audit
          </button>
          <a
            href="https://wa.me/918368889393"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Additional Trust Info */}
        <div className="text-center text-slate-400 text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p>Delhi/NCR Focus | Medical, Local, & Enterprise</p>
        </div>
      </div>
    </section>
  )
}
