import { COMPANY } from '../config/constants';
import { useContactForm } from '../hooks/useContactForm';
import { Reveal } from './Reveal';
import { WhatsAppButton } from './WhatsAppButton';

export function Contact() {
  const {
    fields,
    status,
    errorMessage,
    databaseEnabled,
    updateField,
    submit,
  } = useContactForm();

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-y border-white/10 bg-ind-surf-low py-16 transition-colors duration-200 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ind-primary-container">
                Get in touch
              </span>
              <h2
                id="contact-heading"
                className="mt-2 text-2xl font-bold uppercase tracking-wide text-ind-primary sm:text-3xl"
              >
                Contact Us
              </h2>
              <p className="mt-3 text-ind-on-surface/85">
                Reach {COMPANY.proprietor} for project inquiries, site visits, and quotations.
              </p>

              <div className="mt-8 space-y-3">
                <a href={COMPANY.phoneTel} className="contact-tile group">
                  <span className="flex h-10 w-10 items-center justify-center rounded bg-white/5 text-ind-primary transition-colors group-hover:bg-ind-primary-container group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-ind-on-surface/50">Mobile</p>
                    <p className="font-mono text-sm font-semibold text-ind-primary transition-colors group-hover:text-ind-primary-container">
                      {COMPANY.phoneDisplay}
                    </p>
                  </div>
                </a>

                <div className="contact-tile">
                  <span className="flex h-10 w-10 items-center justify-center rounded bg-white/5 text-ind-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-ind-on-surface/50">Address</p>
                    <p className="text-sm font-medium text-ind-on-surface/90">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="contact-tile">
                  <span className="flex h-10 w-10 items-center justify-center rounded bg-white/5 text-ind-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-ind-on-surface/50">Fax</p>
                    <p className="font-mono text-sm font-semibold text-ind-primary">{COMPANY.fax}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton>Inquire Now</WhatsAppButton>
                <a
                  href={COMPANY.phoneTel}
                  className="inline-flex items-center justify-center gap-2 rounded border border-white/25 bg-transparent px-5 py-2.5 text-sm font-semibold text-ind-on-surface transition-all duration-200 hover:bg-white/5"
                >
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={150}>
            <form
              onSubmit={submit}
              className="rounded border border-white/10 bg-ind-surf p-6 transition-all duration-200 sm:p-8"
              noValidate
            >
              <h3 className="font-sans text-lg font-bold text-ind-primary">Send an Inquiry</h3>
              {!databaseEnabled && (
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-ind-primary-container">
                  For fastest response, use WhatsApp — we reply directly.
                </p>
              )}

              <div className="mt-5 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-ind-on-surface/70">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={fields.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-ind-on-surface/70">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Your phone number"
                    value={fields.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-ind-on-surface/70">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your project or requirement…"
                    value={fields.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="input-field resize-y"
                  />
                </div>
              </div>

              {status === 'success' && (
                <p
                  className="mt-4 flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-ind-primary"
                  role="status"
                >
                  <span aria-hidden="true" className="text-ind-primary-container">✓</span>
                  Thank you — we received your inquiry
                  {databaseEnabled ? ' and will follow up soon' : ''}.
                </p>
              )}
              {status === 'error' && errorMessage && (
                <p className="mt-4 rounded border border-white/10 bg-red-950/25 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-ind-primary-container" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-5 w-full rounded bg-ind-primary-container px-5 py-3 text-sm font-semibold text-white border border-white/20 transition-all duration-200 hover:bg-[#e66000] disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
              >
                {status === 'submitting' ? 'Sending…' : 'Submit Inquiry'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
