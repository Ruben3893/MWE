import { COMPANY } from '../config/constants';
import { useContactForm } from '../hooks/useContactForm';
import { Reveal } from './Reveal';
import { WhatsAppButton } from './WhatsAppButton';

export function Contact() {
  const {
    fields,
    status,
    errorMessage,
    firebaseEnabled,
    updateField,
    submit,
  } = useContactForm();

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-y border-slate-200 bg-slate-50 py-16 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-mew-orange">
                Get in touch
              </span>
              <h2
                id="contact-heading"
                className="mt-2 text-2xl font-bold text-mew-blue transition-colors dark:text-blue-400 sm:text-3xl"
              >
                Contact Us
              </h2>
              <p className="mt-3 text-slate-600 transition-colors dark:text-slate-350">
                Reach {COMPANY.proprietor} for project inquiries, site visits, and quotations.
              </p>

              <div className="mt-8 space-y-3">
                <a href={COMPANY.phoneTel} className="contact-tile group">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mew-blue/10 text-mew-blue transition-colors group-hover:bg-mew-blue group-hover:text-white dark:bg-mew-blue/20 dark:text-blue-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Mobile</p>
                    <p className="font-semibold text-mew-blue transition-colors dark:text-blue-400 group-hover:text-mew-orange dark:group-hover:text-mew-orange">
                      {COMPANY.phoneDisplay}
                    </p>
                  </div>
                </a>

                <div className="contact-tile">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mew-orange/10 text-mew-orange dark:bg-mew-orange/20">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Address</p>
                    <p className="text-sm font-medium text-mew-blue dark:text-blue-300">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="contact-tile">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Fax</p>
                    <p className="font-semibold text-mew-blue dark:text-blue-300">{COMPANY.fax}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton>Inquire Now</WhatsAppButton>
                <a
                  href={COMPANY.phoneTel}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-mew-blue px-5 py-2.5 text-sm font-semibold text-mew-blue transition-all duration-300 hover:-translate-y-0.5 hover:bg-mew-blue hover:text-white dark:border-mew-blue dark:text-blue-400 dark:hover:bg-mew-blue dark:hover:text-white"
                >
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={150}>
            <form
              onSubmit={submit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 focus-within:shadow-[0_12px_40px_rgba(0,112,187,0.15)] dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)] dark:focus-within:shadow-[0_12px_40px_rgba(0,112,187,0.3)] sm:p-8"
              noValidate
            >
              <h3 className="text-lg font-semibold text-mew-blue dark:text-blue-400">Send an Inquiry</h3>
              {!firebaseEnabled && (
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  For fastest response, use WhatsApp — we reply directly.
                </p>
              )}

              <div className="mt-5 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
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
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
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
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
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
                  className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-800 dark:bg-green-950/30 dark:text-green-300"
                  role="status"
                >
                  <span aria-hidden="true">✓</span>
                  Thank you — we received your inquiry
                  {firebaseEnabled ? ' and will follow up soon' : ''}.
                </p>
              )}
              {status === 'error' && errorMessage && (
                <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 dark:bg-red-950/30 dark:text-red-300" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-5 w-full rounded-lg bg-mew-blue px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005a96] hover:shadow-glow-blue dark:bg-mew-blue dark:hover:bg-mew-blue/90 dark:shadow-md dark:hover:shadow-[0_0_20px_rgba(0,112,187,0.4)] disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
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
