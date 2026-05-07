import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import gposLogo from '../assets/gpos.png';

/** Same surface tokens as Hero `Link` “Get started”: bg, shadow, transition (add `hover:bg-[#021b4b]` on `<a>`/`<button>` only). */
const heroGetStartedSurface = 'bg-[#032c7e] shadow-[0_10px_24px_rgba(3,44,126,0.35)] transition';

const OFFICE_ADDRESS = 'Barrack St, Bansha West, Bansha, Co. Tipperary, E34 X402, Ireland';
const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;
/** Embedded map (no API key); opens same place as OFFICE_MAPS_URL. */
const OFFICE_MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&hl=en&z=16&output=embed`;

/** Same-origin path; Vite dev server proxies `/gpos-auth` → `https://auth.gposapp.com` (see vite.config.js). Production must expose the same proxy. */
const NEWSLETTER_API_URL = '/gpos-auth/website/gposapp/subcribenewlatter';

/** Footer quick links (same routes as main nav where applicable). */
const FOOTER_QUICK_LINKS: { label: string; to: string }[] = [
    { label: 'Pricing', to: '/pricing' },
    { label: 'Features', to: '/restaurant_pos' },
    { label: 'Shop', to: '/shop' },
    { label: 'Contact Us', to: '/contact' },
];

export type FooterProps = {
    /** Hide the light “Ready to simplify…” CTA strip above the dark footer band. */
    hideTopCta?: boolean;
};

const Footer: React.FC<FooterProps> = ({ hideTopCta = false }) => {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
    const [newsletterError, setNewsletterError] = useState<string | null>(null);
    const [newsletterLoading, setNewsletterLoading] = useState(false);

    const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNewsletterStatus(null);
        setNewsletterError(null);

        const email = newsletterEmail.trim();
        if (!email) {
            setNewsletterError('Please enter your email.');
            return;
        }

        setNewsletterLoading(true);

        try {
            const response = await fetch(NEWSLETTER_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ email, sourseTxt: 'website-footer' }),
            });

            const contentType = response.headers.get('content-type');
            if (!contentType?.includes('application/json')) {
                throw new Error('Server returned an invalid response.');
            }

            const result = (await response.json()) as {
                success?: boolean;
                id?: number;
                message?: string;
            };

            if (result.success === true) {
                setNewsletterStatus('Thanks! Your subscription is active.');
                setNewsletterEmail('');
            } else {
                setNewsletterError(
                    typeof result.message === 'string' && result.message.trim()
                        ? result.message
                        : 'Subscription was not activated. Please try again.'
                );
            }
        } catch (error) {
            setNewsletterError(error instanceof Error ? error.message : 'Subscription failed');
        } finally {
            setNewsletterLoading(false);
        }
    };

    const font = "font-['Open_Sans',Arial,sans-serif]";

    const footerSectionTitleClass = `${font} mb-3 text-lg font-extrabold leading-snug tracking-tight text-white sm:text-xl`;
    const footerNewsletterTitleClass = `${font} mb-3 text-lg font-extrabold leading-snug tracking-tight text-[#0B1A3C] sm:text-xl`;

    return (
        <div className={`${font} w-full min-w-0 overflow-x-clip bg-[#F7F9FC] text-[#0f172a]`}>
            {!hideTopCta ? (
                <section
                    className="border-b border-slate-200/70 px-1 py-10 sm:px-2 sm:py-12 lg:px-3 lg:py-14"
                    aria-labelledby="footer-cta-heading"
                >
                    <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-screen-2xl lg:px-8 2xl:px-12">
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_-8px_rgba(11,26,60,0.08)] sm:rounded-[12px] sm:p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-12">
                            <div
                                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#E6F0FF]/90 blur-3xl"
                                aria-hidden
                            />
                            <div
                                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#E6F0FF]/60 blur-2xl"
                                aria-hidden
                            />
                            <div className="relative max-w-xl lg:min-w-0 lg:max-w-[28rem]">
                                <div className="mb-3 inline-flex items-center rounded-full bg-[#E6F0FF] px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-[#1E4B8A] sm:text-[13px]">
                                    GPOS for restaurants
                                </div>
                                <h2
                                    id="footer-cta-heading"
                                    className="text-2xl font-bold leading-snug tracking-[-0.02em] text-[#0B1A3C] sm:text-3xl lg:text-[2rem]"
                                >
                                    Ready to simplify your restaurant operations?
                                </h2>
                                <p className="mt-3 text-[16px] font-medium leading-8 text-[#55627A] sm:text-[17px] sm:leading-8">
                                    Book a free GPOS demo and see how orders, reports, inventory and staff management work
                                    together.
                                </p>
                            </div>
                            <div className="relative mt-8 flex min-w-0 w-full flex-row flex-nowrap items-stretch gap-2 sm:gap-3 lg:mt-0 lg:w-auto lg:max-w-none lg:flex-shrink-0 lg:flex-wrap lg:items-center lg:gap-3 lg:self-center xl:gap-4">
                                <a
                                    href="/get_demo"
                                    className={`inline-flex min-h-[48px] min-w-0 flex-1 basis-0 items-center justify-center rounded-[12px] px-2.5 py-3 text-[13px] font-bold leading-tight text-white no-underline ${heroGetStartedSurface} hover:bg-[#021b4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#032c7e] sm:min-h-[52px] sm:min-w-[190px] sm:flex-none sm:basis-auto sm:px-7 sm:py-3.5 sm:text-[18px] lg:flex-none lg:basis-auto lg:min-h-[52px] lg:min-w-[170px] lg:px-6 lg:py-3.5 lg:text-[19px] xl:min-w-[190px] xl:px-7`}
                                >
                                    <span className="text-center whitespace-normal sm:whitespace-nowrap">Book Free Demo</span>
                                </a>
                                <a
                                    href="/pricing"
                                    className="inline-flex min-h-[48px] min-w-0 flex-1 basis-0 items-center justify-center rounded-[12px] border border-[#1E63E9] bg-white px-2.5 py-3 text-[13px] font-bold leading-tight text-[#1E63E9] no-underline transition hover:bg-[#f1f6ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E63E9] sm:min-h-[52px] sm:min-w-[200px] sm:flex-none sm:basis-auto sm:px-7 sm:py-3.5 sm:text-[18px] lg:flex-none lg:basis-auto lg:min-h-[52px] lg:min-w-[170px] lg:px-6 lg:py-3.5 lg:text-[19px] xl:min-w-[200px] xl:px-7"
                                >
                                    <span className="text-center whitespace-normal sm:whitespace-nowrap">View Pricing</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}

            <footer className={`border-t border-white/10 text-white ${heroGetStartedSurface}`}>
                <div className="mx-auto w-full px-3 py-7 sm:px-4 sm:py-12 lg:max-w-[min(100%,1600px)] lg:px-6 lg:py-20 xl:px-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-start lg:gap-4 xl:gap-5">
                        <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-3 lg:flex-row lg:items-start lg:justify-start lg:gap-4 xl:gap-5">
                            <div className="col-span-1 mx-auto flex w-full min-w-0 max-w-[min(100%,26rem)] shrink-0 flex-col items-start gap-2 text-left md:col-span-3 sm:mx-0 sm:max-w-none lg:col-span-1 lg:max-w-md">
                                <Link
                                    to="/"
                                    className="inline-flex w-fit max-w-full shrink-0 self-start items-center justify-center rounded-lg bg-white px-3 py-2 shadow-md ring-1 ring-black/5 transition hover:bg-[#E6F0FF] sm:px-3.5 sm:py-2.5 md:px-4 md:py-3 lg:px-4 lg:py-3"
                                >
                                    <img
                                        src={gposLogo}
                                        alt="GPOS"
                                        className="block h-9 w-auto max-w-full object-contain object-center sm:h-10 sm:object-left md:h-11 lg:h-12"
                                        decoding="async"
                                    />
                                </Link>
                                <div className="flex w-full min-w-0 flex-row items-start gap-3 sm:gap-4 lg:flex-col lg:items-stretch lg:gap-5">
                                    <p className="min-w-0 flex-1 text-balance text-[15px] font-normal leading-relaxed text-white/90 sm:text-[17px] sm:leading-8 sm:text-pretty lg:max-w-none">
                                        Smart POS system designed for modern restaurants and takeaways. Fast, reliable, and
                                        easy to use.
                                    </p>
                                    <div className="-mt-1 w-[9.5rem] shrink-0 self-start overflow-hidden rounded-xl border border-white/15 bg-white shadow-md ring-1 ring-black/5 sm:w-[11.5rem] lg:mt-0 lg:w-full lg:max-w-[min(100%,20rem)] lg:self-start">
                                        <div className="bg-slate-100">
                                            <iframe
                                                title="GPOS office on Google Maps"
                                                src={OFFICE_MAPS_EMBED_SRC}
                                                className="block h-20 w-full border-0 sm:h-24 lg:h-28"
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                allowFullScreen
                                            />
                                        </div>
                                        <div className="border-t border-slate-200 bg-white px-2 py-1.5 text-center">
                                            <a
                                                href={OFFICE_MAPS_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[11px] font-medium text-[#032c7e] underline-offset-2 hover:underline"
                                            >
                                                Open in Google Maps
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex min-w-0 w-full flex-1 flex-row items-start gap-2 border-t border-white/10 pt-6 md:col-span-3 sm:gap-4 lg:col-span-2 lg:min-w-0 lg:items-stretch lg:gap-0 lg:border-t-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-2 xl:pl-3">
                                <div className="min-w-0 flex-1 basis-0 lg:min-w-0 lg:max-w-none lg:flex-[2] lg:pr-1 xl:pr-2">
                                    <h3 className={footerSectionTitleClass}>Contact</h3>
                                    <ul className="flex list-none flex-col gap-2 p-0 sm:gap-3">
                                        <li className="min-w-0">
                                            <a
                                                href="mailto:demo@gposapp.com"
                                                className="group inline-flex min-w-0 items-center gap-2 text-[12px] font-normal text-white no-underline transition-colors hover:text-[#93B4FF] sm:gap-3 sm:text-[17px]"
                                            >
                                                <span
                                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#032c7e] shadow-md transition group-hover:bg-[#E6F0FF] sm:h-12 sm:w-12 sm:rounded-xl"
                                                    aria-hidden
                                                >
                                                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={2.2} />
                                                </span>
                                                <span className="min-w-0 break-words">demo@gposapp.com</span>
                                            </a>
                                        </li>
                                        <li className="min-w-0">
                                            <a
                                                href="tel:+3532210200"
                                                className="group inline-flex min-w-0 items-center gap-2 text-[12px] font-normal text-white no-underline transition-colors hover:text-[#93B4FF] sm:gap-3 sm:text-[17px]"
                                            >
                                                <span
                                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#032c7e] shadow-md transition group-hover:bg-[#E6F0FF] sm:h-12 sm:w-12 sm:rounded-xl"
                                                    aria-hidden
                                                >
                                                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={2.2} />
                                                </span>
                                                <span className="min-w-0">+353 2210200</span>
                                            </a>
                                        </li>
                                        <li className="min-w-0">
                                            <a
                                                href={OFFICE_MAPS_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex w-full max-w-md items-start gap-2 text-[11px] font-normal leading-snug text-white no-underline transition-colors hover:text-[#93B4FF] sm:gap-3 sm:text-[17px] sm:leading-normal"
                                                aria-label={`Open address in Google Maps: ${OFFICE_ADDRESS}`}
                                            >
                                                <span
                                                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#032c7e] shadow-md transition group-hover:bg-[#E6F0FF] sm:h-12 sm:w-12 sm:rounded-xl"
                                                    aria-hidden
                                                >
                                                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={2.2} />
                                                </span>
                                                <span className="min-w-0 break-words">{OFFICE_ADDRESS}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="mx-1 w-px shrink-0 self-stretch bg-white/20 sm:mx-2 lg:mx-2 xl:mx-3"
                                    aria-hidden
                                />
                                <nav
                                    className="min-w-0 flex-1 basis-0 pt-0 text-center lg:min-w-0 lg:flex-1 lg:basis-0 lg:pt-0"
                                    aria-label="Quick Links"
                                >
                                    <h3 className={`${footerSectionTitleClass} text-left`}>Quick Links</h3>
                                    <ul className="flex list-none flex-col items-center gap-2 p-0 sm:gap-3">
                                        {FOOTER_QUICK_LINKS.map(({ label, to }) => (
                                            <li key={to + label} className="flex w-full justify-start">
                                                <Link
                                                    to={to}
                                                    className="text-[13px] font-medium leading-snug text-white/90 no-underline underline-offset-4 transition-colors hover:text-[#93B4FF] hover:underline sm:text-lg lg:text-xl"
                                                >
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="hidden w-full max-w-full min-w-0 shrink-0 border-t border-white/10 pt-6 lg:ml-5 lg:block lg:w-auto lg:max-w-lg xl:ml-6 xl:max-w-xl lg:self-start lg:border-t-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-2 xl:pl-3">
                            <div className="w-full rounded-xl border border-slate-200/90 bg-white p-3 pr-2.5 shadow-[0_12px_40px_-8px_rgba(11,26,60,0.08)] sm:rounded-[12px] sm:p-4 sm:pr-3">
                                <h3 className={`${footerNewsletterTitleClass} text-center sm:text-left`}>Newsletter</h3>
                                <p className="mt-1.5 text-center text-[15px] font-normal leading-relaxed text-[#334A70] sm:text-left sm:text-[16px] sm:leading-7">
                                    Get latest updates, new features, and important product news.
                                </p>
                                <form onSubmit={handleNewsletterSubmit} noValidate className="mt-3">
                                    <div className="flex flex-row flex-nowrap items-stretch gap-2">
                                        <input
                                            type="email"
                                            name="email"
                                            value={newsletterEmail}
                                            onChange={(event) => setNewsletterEmail(event.target.value)}
                                            placeholder="Enter your email"
                                            className="min-h-11 min-w-0 flex-1 rounded-[10px] border border-slate-200 bg-white px-2.5 py-2 text-sm text-[#0B1A3C] outline-none placeholder:text-slate-400 focus:border-[#032c7e]/35 focus:ring-2 focus:ring-[#032c7e]/15 sm:min-h-[44px] sm:px-3 sm:text-[15px]"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            disabled={newsletterLoading}
                                            className={`min-h-11 shrink-0 whitespace-nowrap rounded-[10px] px-3 py-2 text-sm font-bold text-white sm:min-h-[44px] sm:px-4 sm:text-[15px] lg:px-5 lg:text-base ${heroGetStartedSurface} hover:bg-[#021b4b] disabled:cursor-not-allowed disabled:opacity-60`}
                                        >
                                            {newsletterLoading ? 'Submitting...' : 'Subscribe'}
                                        </button>
                                    </div>
                                    {newsletterStatus && (
                                        <p className="mt-3 text-sm font-semibold text-emerald-700">{newsletterStatus}</p>
                                    )}
                                    {newsletterError && (
                                        <p className="mt-3 text-sm font-semibold text-red-600">{newsletterError}</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10">
                    <div className="mx-auto flex w-full max-w-[min(100%,1600px)] flex-col gap-4 px-3 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2 sm:px-4 lg:px-6 xl:px-8">
                        <p
                            className={`${font} text-base font-normal leading-relaxed text-white sm:text-[17px] lg:text-lg`}
                        >
                            © 2026 GPOS. Developed by <span className="font-bold text-white">G Tech Nexa</span>.
                        </p>
                        <nav
                            className={`${font} flex flex-wrap items-center gap-x-7 gap-y-2 sm:justify-end`}
                            aria-label="Legal"
                        >
                            <a
                                href="/privacy"
                                className="text-base font-normal text-white underline-offset-4 transition-colors hover:text-[#93B4FF] hover:underline sm:text-[17px] lg:text-lg"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="text-base font-normal text-white underline-offset-4 transition-colors hover:text-[#93B4FF] hover:underline sm:text-[17px] lg:text-lg"
                            >
                                Terms
                            </a>
                            <a
                                href="/cookies"
                                className="text-base font-normal text-white underline-offset-4 transition-colors hover:text-[#93B4FF] hover:underline sm:text-[17px] lg:text-lg"
                            >
                                Cookies
                            </a>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
