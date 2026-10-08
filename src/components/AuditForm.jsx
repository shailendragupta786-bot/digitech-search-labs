import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function AuditForm({ id }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    websiteUrl: '',
    city: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate all required fields
    if (!formData.fullName || !formData.businessName || !formData.websiteUrl || !formData.city || !formData.phone) {
      setToastMessage('❌ Please fill in all required fields')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
      return
    }

    // Show loading state
    setToastMessage('🔄 Opening WhatsApp...')
    setShowToast(true)

    // Format the message with audit request details
    const message = `Hi Shailendra, I would like to request a Free 48-Hour Technical Audit for my business:

• Name: ${formData.fullName}

• Business: ${formData.businessName}

• Website: ${formData.websiteUrl}

• Location: ${formData.city}

• Phone: ${formData.phone}`

    // URL encode the message
    const encodedMessage = encodeURIComponent(message)
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/918368889393?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    // Clear form after successful submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setShowToast(false)
      setFormData({ fullName: '', businessName: '', websiteUrl: '', city: '', phone: '' })
    }, 4000)
  }

  return (
    <section id={id} className="section-container bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="text-center mb-12">
        <h2 className="mb-4">Request Your Free Technical Audit</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          48-hour crawl health analysis. Zero sales pressure. Pure technical insight.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="card">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:border-crimson-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Business / Clinic Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:border-crimson-600 focus:outline-none transition-colors"
                  placeholder="Your business"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Website URL *
                </label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:border-crimson-600 focus:outline-none transition-colors"
                  placeholder="https://yoursite.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    City / Locality *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:border-crimson-600 focus:outline-none transition-colors"
                    placeholder="Delhi / Ghaziabad"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:border-crimson-600 focus:outline-none transition-colors"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Send via WhatsApp
              </button>

              {showToast && (
                <div className={`rounded-lg p-4 text-sm ${
                  toastMessage.startsWith('✓') 
                    ? 'bg-green-900/30 border border-green-600 text-green-300'
                    : toastMessage.startsWith('❌')
                    ? 'bg-red-900/30 border border-red-600 text-red-300'
                    : 'bg-blue-900/30 border border-blue-600 text-blue-300'
                }`}>
                  {toastMessage}
                </div>
              )}

              {submitted && (
                <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 text-green-300 text-sm">
                  ✓ Your audit request has been sent via WhatsApp. We'll respond within 24 hours!
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Contact Sidebar */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="font-bold text-white mb-6">Contact Us Directly</h3>

            <div className="space-y-4">
              <a
                href="https://wa.me/918368889393"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <Phone className="text-crimson-600 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Phone / WhatsApp</p>
                  <p className="font-semibold text-white">+91 8368889393</p>
                </div>
              </a>

              <a
                href="mailto:contact@digitechsearchlabs.com"
                className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <Mail className="text-crimson-600 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Email</p>
                  <p className="font-semibold text-white">contact@digitechsearchlabs.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg">
                <MapPin className="text-crimson-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Base</p>
                  <p className="font-semibold text-white text-sm">1st Floor, WB-1, Shakarpur, Delhi - 110092</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg">
                <Clock className="text-crimson-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Hours</p>
                  <p className="font-semibold text-white text-sm">Mon–Sat, 9:30 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-crimson-600/20 to-slate-900 border-crimson-600/50">
            <p className="text-slate-300 text-sm">
              <strong className="text-crimson-600">24-Hour Response Time.</strong> We analyze your site structure, audit crawl errors, and provide technical insights within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
