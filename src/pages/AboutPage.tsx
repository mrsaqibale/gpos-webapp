import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutPage.css';

export default function AboutPage() {
    const navigate = useNavigate();

    const values = [
        {
            title: 'Built with Purpose',
            text: 'We create practical digital solutions that help businesses work better, faster, and smarter.',
            icon: '🎯',
        },
        {
            title: 'Modern by Design',
            text: 'Our products are designed with clean interfaces, strong usability, and a professional user experience.',
            icon: '✨',
        },
        {
            title: 'Business Focused',
            text: 'We build software that solves real business problems and supports day-to-day operations.',
            icon: '📈',
        },
    ];

    const highlights = [
        'GPOS is developed by G-Tech Nexa',
        'Modern software for restaurant operations',
        'Focused on usability, speed, and simplicity',
        'Clear monthly pricing with no hidden charges',
    ];

    return (
        <div className="about-page w-full min-w-0 max-w-full overflow-x-clip">
            <Navbar />

            {/* HERO */}
            <section className="about-hero">
                <div className="about-glow about-glow-1" aria-hidden />
                <div className="about-glow about-glow-2" aria-hidden />

                <div className="container about-hero-grid">
                    <div className="about-left">
                        <span className="page-badge">About Us</span>

                        <h1>
                            GPOS is Developed by
                            <span> G-Tech Nexa</span>
                        </h1>

                        <p>
                            G-Tech Nexa develops modern digital solutions for businesses, and GPOS is one of our
                            focused software products built for restaurant operations. Our goal is to create software
                            that is practical, easy to use, and designed for real business needs.
                        </p>

                        <div className="about-pills">
                            <div className="about-pill">Software Solutions</div>
                            <div className="about-pill">Modern UI</div>
                            <div className="about-pill">Business Focused</div>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="company-card">
                            <div className="company-card-top">
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="company-card-body">
                                <div className="company-badge">G-Tech Nexa</div>
                                <h3>Developer of GPOS</h3>
                                <p>
                                    Building modern digital products and business solutions with a focus on quality,
                                    usability, and growth.
                                </p>

                                <div className="company-points">
                                    {highlights.map((item, index) => (
                                        <div className="company-point" key={index}>
                                            <span className="tick">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://gtechnexa.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visit-btn"
                                >
                                    Visit G-Tech Nexa
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className="about-story">
                <div className="container">
                    <div className="section-heading center">
                        <span className="section-badge">Who We Are</span>
                        <h2>Technology Built Around Real Business Needs</h2>
                        <p>
                            G-Tech Nexa works on digital products and services with a strong focus on practical business
                            value. With GPOS, we bring that same mindset into the restaurant industry by offering a
                            smarter and more modern way to manage daily operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="about-values">
                <div className="container">
                    <div className="values-grid">
                        {values.map((item, index) => (
                            <div className="value-card" key={index}>
                                <div className="value-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GPOS + GTECH NEXA */}
            <section className="about-link-section">
                <div className="container">
                    <div className="about-link-box">
                        <div className="about-link-left">
                            <span className="section-badge">Our Product</span>
                            <h2>Why We Built GPOS</h2>
                            <p>
                                Restaurants need software that is simple, modern, and useful in real working
                                environments. GPOS was created to help restaurants manage billing, orders, tables,
                                staff, customers, and reports in one connected system.
                            </p>
                        </div>

                        <div className="about-link-right">
                            <div className="mini-stat">
                                <h4>GPOS</h4>
                                <p>Restaurant POS Product</p>
                            </div>
                            <div className="mini-stat">
                                <h4>G-Tech Nexa</h4>
                                <p>Product Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <div className="container">
                    <div className="about-cta-box">
                        <span className="section-badge">Get in Touch</span>
                        <h2>Want to Explore GPOS for Your Business?</h2>
                        <p>
                            Discover a modern restaurant POS product developed by G-Tech Nexa and designed for
                            practical daily use.
                        </p>

                        <div className="cta-actions">
                            <button type="button" className="primary-btn" onClick={() => navigate('/get_demo')}>
                                Book Demo
                            </button>
                            <a
                                className="secondary-btn"
                                href="https://dashboard-gpos.gtechnexa.com/login"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
