import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header({ onAuditClick }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Services', href: '#services' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'Audit', href: '#audit-form' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 backdrop-blur-sm bg-opacity-95">
      <nav className="section-container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img 
              src="/logo.png" 
              alt="Digitech Search Labs Logo" 
              width="40"
              height="40"
              fetchpriority="high"
              loading="eager"
              className="h-10 w-auto object-contain"
            />
          </picture>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold text-white">DIGITECH SEARCH LABS</h1>
            <p className="text-xs text-slate-400">A Specialized Unit of Digitech Computers (Est. 1997)</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-crimson-600 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onAuditClick}
            className="btn-primary"
          >
            Request Audit
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="section-container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-crimson-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onAuditClick()
                setIsOpen(false)
              }}
              className="btn-primary w-full"
            >
              Request Audit
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
