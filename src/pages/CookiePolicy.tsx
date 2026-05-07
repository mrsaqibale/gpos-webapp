import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

export default function CookiePolicy() {
    return (
        <div className="legal-page w-full min-w-0 max-w-full overflow-x-clip">
            <Navbar />
            <main className="legal-main">
                <div className="legal-bg-glow legal-bg-glow-1" aria-hidden />
                <div className="legal-bg-glow legal-bg-glow-2" aria-hidden />
                <div className="legal-inner">
                    <header className="legal-header">
                        <span className="legal-badge">Legal</span>
                        <h1>Cookie Policy</h1>
                        <p className="last-updated">Last updated: 2026</p>
                    </header>

                    <div className="legal-sections">
                        <section className="legal-section" aria-labelledby="cookies-what">
                            <h2 id="cookies-what">1. What Are Cookies</h2>
                            <p>
                                Cookies are small text files stored on your device when you visit a website. They help
                                the site work properly, remember preferences, and understand how visitors use the site.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="cookies-use">
                            <h2 id="cookies-use">2. How We Use Cookies</h2>
                            <ul>
                                <li>To improve website performance and loading</li>
                                <li>To understand usage patterns (for example, analytics)</li>
                                <li>To remember preferences where applicable</li>
                            </ul>
                        </section>

                        <section className="legal-section" aria-labelledby="cookies-types">
                            <h2 id="cookies-types">3. Types of Cookies</h2>
                            <ul>
                                <li>
                                    <strong className="text-[#032c7e]">Essential</strong> — required for basic site
                                    functionality
                                </li>
                                <li>
                                    <strong className="text-[#032c7e]">Analytics</strong> — help us measure traffic and
                                    improve the experience
                                </li>
                                <li>
                                    <strong className="text-[#032c7e]">Performance</strong> — help the site run smoothly
                                </li>
                            </ul>
                        </section>

                        <section className="legal-section" aria-labelledby="cookies-control">
                            <h2 id="cookies-control">4. Controlling Cookies</h2>
                            <p>
                                You can control or delete cookies through your browser settings. Blocking some cookies may
                                affect how parts of the website work.
                            </p>
                        </section>

                        <section className="legal-section" aria-labelledby="cookies-contact">
                            <h2 id="cookies-contact">5. Contact</h2>
                            <p>
                                For questions about this policy, contact{' '}
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
