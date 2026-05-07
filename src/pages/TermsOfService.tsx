import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

export default function TermsOfService() {
    return (
        <div className="legal-page w-full min-w-0 max-w-full overflow-x-clip">
            <Navbar />
            <main className="legal-main">
                <div className="legal-bg-glow legal-bg-glow-1" aria-hidden />
                <div className="legal-bg-glow legal-bg-glow-2" aria-hidden />
                <div className="legal-inner">
                    <header className="legal-header">
                        <span className="legal-badge">Legal</span>
                        <h1>Terms of Service</h1>
                        <p className="last-updated">Last updated: 2026</p>
                    </header>

                    <div className="legal-sections">
                        <section className="legal-section" aria-labelledby="terms-intro">
                            <h2 id="terms-intro">1. Introduction</h2>
                            <p>
                                These Terms of Service govern your use of GPOS, a product developed by G-Tech Nexa. By
                                using our website or services, you agree to these terms.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="terms-use">
                            <h2 id="terms-use">2. Use of Service</h2>
                            <p>
                                You agree to use GPOS only for lawful business purposes. You must not misuse, disrupt,
                                or attempt to gain unauthorised access to the system or related infrastructure.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="terms-payments">
                            <h2 id="terms-payments">3. Payments</h2>
                            <p>
                                GPOS is offered at <strong className="text-[#032c7e]">€79 / month</strong> unless
                                otherwise agreed in writing. We do not apply hidden charges for the advertised package.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="terms-availability">
                            <h2 id="terms-availability">4. Availability</h2>
                            <p>
                                We aim to provide reliable service, but we do not guarantee uninterrupted or error-free
                                access. Maintenance, updates, or events outside our control may affect availability.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="terms-liability">
                            <h2 id="terms-liability">5. Limitation of Liability</h2>
                            <p>
                                To the extent permitted by law, G-Tech Nexa is not liable for indirect losses or
                                business damages arising from your use of GPOS. Your use of the product is at your own
                                risk.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="terms-changes">
                            <h2 id="terms-changes">6. Changes</h2>
                            <p>
                                We may update these terms from time to time. Continued use of the service after changes
                                constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="terms-contact">
                            <h2 id="terms-contact">7. Contact</h2>
                            <p>
                                For questions about these terms, please contact us through{' '}
                                <a href="/contact" className="text-[#032c7e] font-semibold underline underline-offset-2 hover:text-[#55a630]">
                                    our contact page
                                </a>{' '}
                                or{' '}
                                <a
                                    href="https://gtechnexa.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#032c7e] font-semibold underline underline-offset-2 hover:text-[#55a630]"
                                >
                                    G-Tech Nexa
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
