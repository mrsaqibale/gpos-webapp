import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

export default function PrivacyPolicy() {
    return (
        <div className="legal-page w-full min-w-0 max-w-full overflow-x-clip">
            <Navbar />
            <main className="legal-main">
                <div className="legal-bg-glow legal-bg-glow-1" aria-hidden />
                <div className="legal-bg-glow legal-bg-glow-2" aria-hidden />
                <div className="legal-inner">
                    <header className="legal-header">
                        <span className="legal-badge">Legal</span>
                        <h1>Privacy Policy</h1>
                        <p className="last-updated">Last updated: 2026</p>
                    </header>

                    <div className="legal-sections">
                        <section className="legal-section" aria-labelledby="privacy-intro">
                            <h2 id="privacy-intro">1. Introduction</h2>
                            <p>
                                This Privacy Policy explains how GPOS, developed by G-Tech Nexa, collects and uses
                                your information when you use our website and services.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="privacy-collect">
                            <h2 id="privacy-collect">2. Information We Collect</h2>
                            <ul>
                                <li>Name, email, and phone number</li>
                                <li>Business details (for example, restaurant name)</li>
                                <li>Website usage and technical data</li>
                            </ul>
                        </section>

                        <section className="legal-section" aria-labelledby="privacy-use">
                            <h2 id="privacy-use">3. How We Use Data</h2>
                            <ul>
                                <li>To respond to demo and contact requests</li>
                                <li>To improve our product and website</li>
                                <li>To communicate with users about GPOS</li>
                            </ul>
                        </section>

                        <section className="legal-section" aria-labelledby="privacy-security">
                            <h2 id="privacy-security">4. Data Protection</h2>
                            <p>
                                We apply reasonable security measures to protect your data. No method of transmission or
                                storage is completely secure.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="privacy-contact">
                            <h2 id="privacy-contact">5. Contact</h2>
                            <p>
                                For questions about this policy, contact{' '}
                                <a
                                    href="https://gtechnexa.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#032c7e] font-semibold underline underline-offset-2 hover:text-[#55a630]"
                                >
                                    G-Tech Nexa
                                </a>{' '}
                                via our website.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
