import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Clock, Headphones, Mail, MapPin, Phone, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScheduleDemoForm from "../components/ScheduleDemoForm";
import "./GetDemoPage.css";
import {
    EMAIL_DISPLAY,
    EMAIL_HREF,
    OFFICE_ADDRESS_LINE_1,
    OFFICE_ADDRESS_LINE_2,
    OFFICE_ADDRESS_MAPS_HREF,
    PHONE_DISPLAY,
    PHONE_HREF,
    WHATSAPP_DISPLAY,
    WHATSAPP_HREF,
} from "../constants/contact";

export default function GetDemoPage() {
    useEffect(() => {
        if (window.location.hash !== "#schedule-demo-form") return;
        const el = document.getElementById("schedule-demo-form");
        if (!el) return;
        const t = window.setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
        return () => window.clearTimeout(t);
    }, []);

    return (
        <div className="demo-page min-h-screen w-full min-w-0 overflow-x-clip bg-white font-[Inter,system-ui,sans-serif] text-[#0f172a] antialiased">
            <Navbar />

            <main className="get-demo-main pt-24">
                {/* Hero: left copy + right form (desktop); stacked on mobile */}
                <section className="get-demo-hero relative overflow-hidden">
                    <div className="get-demo-hero__decoration pointer-events-none" aria-hidden />
                    <div className="get-demo-hero__inner relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col px-5 py-10 sm:px-5 md:py-12 lg:min-h-[560px] lg:justify-center lg:py-16 lg:pl-6 lg:pr-6">
                        <div className="get-demo-hero__grid grid w-full grid-cols-1 items-center gap-10 text-left lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-x-[clamp(3.5rem,5vw,4.5rem)] lg:gap-y-0">
                            <div className="get-demo-hero__left max-w-none lg:max-w-[520px] lg:pr-2">
                                <span className="inline-flex rounded-full bg-[#DBEAFE] px-3 py-1 text-xs font-semibold tracking-wide text-[#003B8E] sm:text-[13px]">
                                    Contact GPOS
                                </span>
                                <h1 className="mt-4 font-['Open_Sans',system-ui,sans-serif] text-[clamp(2.125rem,4.2vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0B1F3A] sm:text-[clamp(2.25rem,3.8vw,3.25rem)]">
                                    Let&apos;s talk about your restaurant POS needs
                                </h1>
                                <p className="mt-4 max-w-[520px] text-base font-normal leading-relaxed text-[#475569] sm:text-[17px] sm:leading-relaxed">
                                    Have questions about pricing, hardware, or setup? Our team is here to help you find
                                    the right solution for your restaurant.
                                </p>
                                <div className="mt-6 flex max-w-[520px] items-center gap-3 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] py-2.5 pl-2.5 pr-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-[#003B8E]">
                                        <Phone className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                                    </span>
                                    <p className="text-left text-sm text-[#475569] sm:text-[15px]">
                                        Speak with us today:{" "}
                                        <a
                                            href={PHONE_HREF}
                                            className="font-bold text-[#003B8E] underline-offset-2 hover:underline"
                                        >
                                            {PHONE_DISPLAY}
                                        </a>
                                    </p>
                                </div>
                                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                                    <Link
                                        to="/shop"
                                        className="inline-flex h-12 min-h-[48px] flex-1 items-center justify-center gap-2 rounded-[10px] bg-[#003B8E] px-5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#002d6b] sm:flex-initial sm:px-6"
                                    >
                                        <ShoppingCart className="h-[18px] w-[18px] shrink-0" aria-hidden />
                                        Buy now
                                    </Link>
                                    <a
                                        href={PHONE_HREF}
                                        className="inline-flex h-12 min-h-[48px] flex-1 items-center justify-center gap-2 rounded-[10px] border-2 border-[#003B8E] bg-white px-5 text-[15px] font-semibold text-[#003B8E] transition hover:bg-[#f8fafc] sm:flex-initial sm:px-6"
                                    >
                                        <Phone className="h-[18px] w-[18px] shrink-0" aria-hidden />
                                        Call Sales
                                    </a>
                                </div>
                            </div>

                            <div className="get-demo-hero__right flex w-full justify-stretch lg:justify-end">
                                <div
                                    id="schedule-demo-form"
                                    className="get-demo-form-card w-full max-w-[560px] rounded-[20px] border border-[#E2E8F0] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.1)] sm:p-9 lg:justify-self-end"
                                >
                                    <h2 className="font-['Open_Sans',system-ui,sans-serif] text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-tight text-[#0B1F3A]">
                                        Send us a message
                                    </h2>
                                    <p className="mt-2 text-left text-sm leading-relaxed text-[#64748B] sm:text-[15px]">
                                        Fill out the form and we&apos;ll get back to you shortly.
                                    </p>
                                    <ScheduleDemoForm
                                        mode="api"
                                        idPrefix="get-demo"
                                        appearance="contact"
                                        submitLabel="Send Message"
                                        className="!mt-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact information — two cards, no option tiles */}
                <section className="border-t border-[#E2E8F0] bg-white px-5 py-12 sm:px-5 md:py-16 lg:py-20">
                    <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                        <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-8">
                            <h3 className="font-['Open_Sans',system-ui,sans-serif] text-xl font-bold text-[#0B1F3A] sm:text-[1.35rem]">
                                Contact Information
                            </h3>
                            <ul className="mt-6 space-y-5 text-left text-[15px] leading-relaxed text-[#475569]">
                                <li className="flex gap-3">
                                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#003B8E]" aria-hidden />
                                    <div>
                                        <p className="font-semibold text-[#0B1F3A]">Office</p>
                                        <a
                                            href={OFFICE_ADDRESS_MAPS_HREF}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-0.5 inline-block text-[#475569] transition-colors hover:text-[#003B8E] hover:underline"
                                            aria-label="Open office address in Google Maps"
                                        >
                                            {OFFICE_ADDRESS_LINE_1}
                                            <br />
                                            {OFFICE_ADDRESS_LINE_2}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#003B8E]" aria-hidden />
                                    <div>
                                        <p className="font-semibold text-[#0B1F3A]">Phone</p>
                                        <a href={PHONE_HREF} className="mt-0.5 inline-block font-medium text-[#003B8E] hover:underline">
                                            {PHONE_DISPLAY}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#003B8E]" aria-hidden />
                                    <div>
                                        <p className="font-semibold text-[#0B1F3A]">WhatsApp</p>
                                        <a
                                            href={WHATSAPP_HREF}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-0.5 inline-block font-medium text-[#003B8E] hover:underline"
                                        >
                                            {WHATSAPP_DISPLAY}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#003B8E]" aria-hidden />
                                    <div>
                                        <p className="font-semibold text-[#0B1F3A]">Email</p>
                                        <a
                                            href={EMAIL_HREF}
                                            className="mt-0.5 inline-block font-medium text-[#003B8E] hover:underline"
                                        >
                                            {EMAIL_DISPLAY}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#003B8E]" aria-hidden />
                                    <div>
                                        <p className="font-semibold text-[#0B1F3A]">Business Hours</p>
                                        <p className="mt-0.5">Monday – Friday: 9:00 AM – 6:00 PM (GMT)</p>
                                        <p className="mt-1">Saturday – Sunday: Closed</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DBEAFE] text-[#003B8E]">
                                <Headphones className="h-6 w-6" strokeWidth={2} aria-hidden />
                            </div>
                            <h3 className="mt-5 font-['Open_Sans',system-ui,sans-serif] text-xl font-bold text-[#0B1F3A] sm:text-[1.35rem]">
                                We&apos;re here to help
                            </h3>
                            <p className="mt-3 max-w-prose text-left text-[15px] leading-relaxed text-[#475569]">
                                Our team of POS experts is ready to answer your questions, provide product guidance, and
                                help you get set up for success.
                            </p>
                            <ul className="mt-6 flex flex-col gap-3 text-left sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                                {["Expert product advice", "Fast response times", "End-to-end support"].map((line) => (
                                    <li key={line} className="flex items-center gap-2 text-sm font-medium text-[#0B1F3A]">
                                        <Check className="h-4 w-4 shrink-0 text-[#003B8E]" strokeWidth={2.5} aria-hidden />
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <Footer hideTopCta />
        </div>
    );
}
