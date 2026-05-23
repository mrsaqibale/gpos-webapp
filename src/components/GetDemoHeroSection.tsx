import React from 'react';
import {
    Phone,
    MessageSquare,
    Mail,
    Clock,
    ShieldCheck,
    Headset,
    Users,
    CheckCircle2,
    CalendarCheck,
} from 'lucide-react';
import {
    PHONE_DISPLAY,
    WHATSAPP_DISPLAY,
    EMAIL_DISPLAY,
} from '../constants/contact';
import ScheduleDemoForm from './ScheduleDemoForm';

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

                    </div>

                    {/* Right side — Schedule Demo Form */}
                    <div className="hero-form relative w-full">
                        <div
                            id="schedule-demo-form"
                            className="relative rounded-[20px] bg-white p-6 sm:p-8 shadow-[0_30px_60px_rgba(15,23,42,0.12)] border border-[#e2e8f0]"
                        >
                            <div className="mb-5 flex items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                    <CalendarCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-extrabold text-[#0B1F3A] leading-tight">Book Your Free Demo</h3>
                                    <p className="mt-1 text-[13px] text-[#64748B] leading-snug">
                                        Fill in your details and our team will reach out within 1 hour.
                                    </p>
                                </div>
                            </div>
                            <ScheduleDemoForm mode="api" idPrefix="schedule-demo" className="!mt-0" />
                            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#f1f5f9] pt-4">
                                <div className="flex items-center gap-1.5 text-[12px] text-[#64748B]">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#10b981]" />
                                    </span>
                                    <span className="font-bold text-[#10b981]">Live now</span>
                                </div>
                                <span className="text-[12px] text-[#64748B]">·</span>
                                <span className="text-[12px] text-[#64748B]">Avg. reply &lt; 1 min</span>
                                <span className="text-[12px] text-[#64748B]">·</span>
                                <span className="text-[12px] text-[#64748B]">Trusted by <span className="font-bold text-[#0B1F3A]">1,000+ restaurants</span></span>
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
