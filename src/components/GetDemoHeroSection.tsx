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
        <section className="get-demo-hero-v2 relative overflow-hidden bg-[#f0f7ff] pt-20 pb-16 lg:pt-32 lg:pb-24">
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

                    {/* Right Image Content */}
                    <div className="hero-visual relative">
                        <div className="relative z-10">
                            {/* Main POS Device Mockup */}
                            <img
                                src="/src/assets/home-premium-pos-setup-transparent.png"
                                alt="GPOS System"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* Support Agent Overlay */}
                        <div className="absolute -top-10 -right-10 lg:-right-20 w-[60%] z-20 pointer-events-none">
                            <img
                                src="/src/assets/support-agent-headset.png"
                                alt="GPOS Support Expert"
                                className="w-full h-auto drop-shadow-xl"
                            />
                        </div>

                        {/* Chat Bubble */}
                        <div className="absolute -top-12 right-0 lg:right-20 z-30 animate-bounce-slow">
                            <div className="bg-white rounded-2xl rounded-tr-none p-5 shadow-2xl border border-[#e2e8f0] flex items-start gap-4 max-w-[280px]">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0052FF] text-white">
                                    <MessageSquare className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0B1F3A]">Hi! 👋</p>
                                    <p className="text-[13px] text-[#475569] leading-tight mt-1">How can we help your restaurant today?</p>
                                </div>
                                <div className="absolute -right-2 top-0 h-4 w-4 bg-[#10b981] rounded-full border-2 border-white" />
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
