import React from 'react';
import {
    Phone,
    MessageSquare,
    Mail,
    Clock,
    Play,
    ArrowRight,
    ShieldCheck,
    Headset,
    Users,
    CheckCircle2
} from 'lucide-react';
import {
    PHONE_DISPLAY,
    PHONE_HREF,
    WHATSAPP_DISPLAY,
    WHATSAPP_HREF,
    EMAIL_DISPLAY,
    EMAIL_HREF
} from '../constants/contact';

const GetDemoHeroSection: React.FC = () => {
    return (
        <section className="get-demo-hero-v2 relative overflow-hidden bg-[#F8FAFC] pt-20 pb-16 lg:pt-32 lg:pb-24">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[#e0efff] rounded-full blur-[120px] opacity-50 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-5 max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="hero-content">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#e0efff] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0052FF]">
                            <Headset className="h-4 w-4" />
                            WE'RE HERE TO HELP
                        </div>

                        <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#0B1F3A]">
                            Talk to the <br />
                            <span className="text-[#0052FF]">GPOS Team</span>
                        </h1>

                        <p className="mt-6 text-xl leading-relaxed text-[#475569] max-w-[540px]">
                            Have questions or need a demo? We're here to help you find the perfect setup for your restaurant.
                        </p>

                        {/* Contact Cards Grid */}
                        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="contact-card group rounded-2xl bg-white p-5 shadow-sm border border-[#e2e8f0] transition-all hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF] mb-4">
                                    <MessageSquare className="h-6 w-6" />
                                </div>
                                <h4 className="text-base font-bold text-[#0B1F3A]">WhatsApp</h4>
                                <p className="mt-1 text-sm font-medium text-[#475569]">{WHATSAPP_DISPLAY}</p>
                                <div className="mt-2 flex items-center gap-1.5">
                                    <div className="h-2 w-2 rounded-full bg-[#10b981]" />
                                    <span className="text-[12px] font-bold text-[#10b981]">Online Now</span>
                                </div>
                            </div>

                            <div className="contact-card group rounded-2xl bg-white p-5 shadow-sm border border-[#e2e8f0] transition-all hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF] mb-4">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <h4 className="text-base font-bold text-[#0B1F3A]">Phone</h4>
                                <p className="mt-1 text-sm font-medium text-[#475569]">{PHONE_DISPLAY}</p>
                                <p className="mt-1 text-[11px] text-[#64748B]">Mon – Fri, 9AM – 6PM</p>
                            </div>

                            <div className="contact-card group rounded-2xl bg-white p-5 shadow-sm border border-[#e2e8f0] transition-all hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF] mb-4">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <h4 className="text-base font-bold text-[#0B1F3A]">Email</h4>
                                <p className="mt-1 text-sm font-medium text-[#475569] truncate" title={EMAIL_DISPLAY}>{EMAIL_DISPLAY}</p>
                                <p className="mt-1 text-[11px] text-[#10b981] font-bold">We reply fast</p>
                            </div>

                            <div className="contact-card group rounded-2xl bg-white p-5 shadow-sm border border-[#e2e8f0] transition-all hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF] mb-4">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <h4 className="text-base font-bold text-[#0B1F3A]">Business Hours</h4>
                                <p className="mt-1 text-sm font-medium text-[#475569]">Mon – Fri</p>
                                <p className="mt-1 text-[11px] text-[#64748B]">9AM – 6PM CET</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <button className="flex items-center justify-center gap-3 rounded-xl bg-[#0052FF] px-8 py-4 font-bold text-white shadow-lg shadow-[#0052ff2a] transition-all hover:bg-[#0041cc] hover:shadow-xl">
                                Book a Free Demo
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <button className="flex items-center gap-3 text-[17px] font-bold text-[#0052FF] transition-all hover:gap-4">
                                See GPOS in Action
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0052FF]">
                                    <Play className="h-4 w-4 fill-current" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Image Content — Support Agent as Main Visual */}
                    <div className="hero-visual relative mx-auto w-full max-w-[520px]">
                        {/* Soft blue backdrop circle behind the girl */}
                        <div
                            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[110%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                            style={{ background: "radial-gradient(circle at center, #DCEBFF 0%, #EAF3FF 55%, transparent 75%)" }}
                            aria-hidden
                        />

                        {/* Main Support Agent (girl) image */}
                        <div className="relative z-10 flex justify-center">
                            <img
                                src="/src/assets/support-agent-headset.png"
                                alt="GPOS Support Expert"
                                className="w-full max-w-[480px] h-auto object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.18)]"
                            />
                        </div>

                        {/* Chat Bubble — top-right */}
                        <div className="absolute top-[8%] right-[-12px] sm:right-[-32px] lg:right-[-48px] z-30 max-w-[260px] animate-bounce-slow">
                            <div className="relative bg-white rounded-2xl rounded-tr-none p-4 shadow-[0_18px_38px_rgba(15,23,42,0.12)] border border-[#e2e8f0] flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0052FF] text-white">
                                    <MessageSquare className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0B1F3A]">Hi! 👋</p>
                                    <p className="text-[12.5px] text-[#475569] leading-snug mt-1">How can we help your restaurant today?</p>
                                </div>
                                <div className="absolute -right-2 top-0 h-3.5 w-3.5 bg-[#10b981] rounded-full border-2 border-white" />
                            </div>
                        </div>

                        {/* Online Status Card — middle-left */}
                        <div className="absolute top-[38%] left-[-12px] sm:left-[-36px] lg:left-[-56px] z-30">
                            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_38px_rgba(15,23,42,0.12)] border border-[#e2e8f0]">
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#10b981]" />
                                </span>
                                <div>
                                    <p className="text-[13px] font-bold text-[#0B1F3A] leading-tight">Live Now</p>
                                    <p className="text-[11px] text-[#64748B] leading-tight">Avg. reply &lt; 1 min</p>
                                </div>
                            </div>
                        </div>

                        {/* Customer Count Card — bottom-right */}
                        <div className="absolute bottom-[14%] right-[-8px] sm:right-[-28px] lg:right-[-40px] z-30">
                            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_38px_rgba(15,23,42,0.12)] border border-[#e2e8f0]">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                    <Users className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-[#0B1F3A] leading-tight">1,000+ Restaurants</p>
                                    <p className="text-[11px] text-[#64748B] leading-tight">Trust GPOS daily</p>
                                </div>
                            </div>
                        </div>

                        {/* 5-star rating card — bottom-left */}
                        <div className="absolute bottom-[6%] left-[-8px] sm:left-[-28px] lg:left-[-40px] z-30">
                            <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_18px_38px_rgba(15,23,42,0.12)] border border-[#e2e8f0]">
                                <div className="flex items-center gap-1 text-[#FBBF24]">
                                    {[0,1,2,3,4].map(i => (
                                        <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="mt-1 text-[12px] font-bold text-[#0B1F3A] leading-tight">Rated 4.9 / 5</p>
                                <p className="text-[10.5px] text-[#64748B] leading-tight">By our customers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Bar */}
                <div className="mt-20 flex justify-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-x-12 gap-y-6 rounded-[2rem] bg-white px-10 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#e2e8f0]">
                        <div className="trust-item flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-[#0B1F3A]">Trusted by 1,000+</h5>
                                <p className="text-[12px] text-[#64748B]">Restaurants Across Ireland & UK</p>
                            </div>
                        </div>

                        <div className="trust-item flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                <Headset className="h-6 w-6" />
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-[#0B1F3A]">Fast Response</h5>
                                <p className="text-[12px] text-[#64748B]">We typically reply within 1 hour</p>
                            </div>
                        </div>

                        <div className="trust-item flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-[#0B1F3A]">Real People, Real Support</h5>
                                <p className="text-[12px] text-[#64748B]">No bots. Just real help.</p>
                            </div>
                        </div>

                        <div className="trust-item flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-[#0B1F3A]">Onboarding & Setup</h5>
                                <p className="text-[12px] text-[#64748B]">We help you get started the right way</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetDemoHeroSection;
