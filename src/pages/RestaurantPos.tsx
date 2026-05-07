import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { Calendar, ShoppingCart, ThumbsUp, TrendingUp, Utensils, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuiltForRestaurantOperationsSection from "../components/BuiltForRestaurantOperationsSection";
import FeaturesGridSection from "../components/FeaturesGridSection";
import WhyRestaurantsChooseGPOS from "../components/WhyRestaurantsChooseGPOS";
import HomePricingMockup from "../components/HomePricingMockup";
import ScheduleDemoFormModal from "../components/ScheduleDemoFormModal";
import featuresHeroImage from "../assets/features-hero-dashboard-marble.png?url";
import "./RestaurantPOSPage.css";

export default function RestaurantPos() {
    const location = useLocation();
    const [heroDemoModalOpen, setHeroDemoModalOpen] = useState(false);
    const closeHeroDemoModal = useCallback(() => setHeroDemoModalOpen(false), []);

    useEffect(() => {
        if (location.hash !== "#features") return;
        const el = document.getElementById("features");
        if (!el) return;
        const t = window.setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
        return () => window.clearTimeout(t);
    }, [location.hash, location.pathname]);

    const heroHighlights: { label: string; Icon: LucideIcon; nowrap?: boolean }[] = [
        { label: "Simple interface for fast service", Icon: ThumbsUp },
        { label: "Works with your existing setup", Icon: Zap },
        { label: "Built for busy restaurant environments", Icon: Utensils, nowrap: true },
    ];

    return (
        <div className="gpos-page w-full min-w-0 max-w-full overflow-x-clip">
            <Navbar />
            <div className="overflow-hidden">
                <section className="rp-hero w-full bg-[#F8FAFC] pb-8">
                    <div className="grid w-full max-w-none grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:gap-8 lg:pl-[60px] lg:pr-10 xl:pr-14">
                        <div className="text-left lg:flex lg:h-full lg:flex-col lg:items-start lg:pt-12 xl:pt-14">
                            <div className="w-full max-w-[760px] pl-1 sm:pl-2 md:pl-1 lg:pl-0 ml-3 sm:ml-5 md:ml-6 lg:ml-8">
                                <div className="w-full min-w-0 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-x-visible">
                                    <h1 className="mb-0 inline-block min-w-min w-full text-left font-['Open_Sans',Arial,sans-serif] text-[clamp(1.35rem,5.5vw,2.45rem)] font-bold leading-[1.1] tracking-[-0.5px] text-[#0B1A3C] sm:text-[clamp(1.5rem,4.8vw,2.65rem)] md:text-[clamp(2.25rem,4vw,3.5rem)] lg:block lg:w-auto lg:text-[64px]">
                                        <span className="block whitespace-nowrap">Tools Built to Run Your</span>
                                        <span className="mt-1 block whitespace-nowrap sm:mt-1.5 md:mt-2 lg:mt-2.5">
                                            Restaurant <span className="text-[#0756D9]">Smoothly</span>
                                        </span>
                                    </h1>
                                </div>

                                <p className="mb-8 mt-5 w-full max-w-full text-left font-['Open_Sans',Arial,sans-serif] text-[clamp(11px,3.15vw,24px)] font-medium leading-[1.45] text-[#55627A] sm:leading-[1.5]">
                                    <span className="block w-full max-w-full overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                        Manage orders, payments, staff, and daily operations from one
                                    </span>
                                    <span className="mt-0.5 block text-pretty sm:mt-1">
                                        simple and reliable system designed for real restaurants.
                                    </span>
                                </p>

                            <div className="mt-8 flex w-full max-w-full flex-col gap-8">
                                <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:gap-5 lg:gap-6">
                                    <div className="flex w-full min-w-0 justify-start sm:flex-1 sm:min-w-0">
                                        <ul className="w-fit space-y-3 text-left font-['Open_Sans',Arial,sans-serif] text-lg font-medium leading-snug text-[#1C2A41] sm:text-[22px] sm:leading-[1.4]">
                                            {heroHighlights.map(({ label, Icon, nowrap }) => (
                                                <li
                                                    key={label}
                                                    className={`flex min-w-0 items-center justify-start gap-3 ${nowrap ? "whitespace-nowrap" : ""}`}
                                                >
                                                    <span
                                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                                                        style={{ backgroundColor: "#E6F0FF" }}
                                                        aria-hidden
                                                    >
                                                        <Icon
                                                            className="h-5 w-5"
                                                            style={{ color: "#1E4B8A" }}
                                                            strokeWidth={2.2}
                                                            aria-hidden
                                                        />
                                                    </span>
                                                    <span className={nowrap ? "shrink-0" : ""}>{label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="relative z-10 hidden w-full shrink-0 items-center gap-4 self-stretch rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl sm:flex sm:ml-auto sm:w-auto sm:self-start sm:px-6 lg:translate-x-3 lg:shadow-2xl xl:translate-x-6 2xl:translate-x-8">
                                        <div className="rounded-full bg-green-500 p-3 text-white">
                                            <TrendingUp size={20} aria-hidden />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Orders Today</p>
                                            <h3 className="text-xl font-bold text-[#071B46]">128 Orders</h3>
                                            <span className="text-sm text-green-600">+18.6% vs yesterday</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full flex-wrap items-center justify-start gap-4">
                                    <a
                                        href="https://dashboard-gpos.gtechnexa.com"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#06265D] px-6 py-3 font-semibold text-white no-underline shadow-md transition hover:shadow-lg"
                                    >
                                        <ShoppingCart size={18} aria-hidden />
                                        Buy Now
                                    </a>

                                    <button
                                        type="button"
                                        onClick={() => setHeroDemoModalOpen(true)}
                                        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[12px] border border-[#1E63E9] bg-white px-6 py-3 text-[16px] font-bold text-[#1E63E9] transition hover:bg-[#f1f6ff] sm:px-7 sm:text-[17px]"
                                    >
                                        <Calendar size={18} aria-hidden />
                                        Book Demo
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="hidden w-full min-w-0 justify-center lg:mb-0 lg:flex lg:justify-end lg:pt-12 xl:pt-14">
                            <div className="relative w-full max-w-[min(100%,min(92vw,760px))] lg:max-w-[min(100%,820px)]">
                                <div
                                    className="pointer-events-none absolute -inset-1 rounded-[26px] bg-gradient-to-br from-slate-200/60 via-white/40 to-[#0756D9]/10 blur-sm lg:-inset-2 lg:rounded-[32px]"
                                    aria-hidden
                                />
                                <div className="relative mx-auto w-fit max-w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 shadow-[0_24px_56px_-16px_rgba(15,23,42,0.18),0_8px_24px_-8px_rgba(7,86,217,0.12)] ring-1 ring-slate-900/[0.04] lg:rounded-3xl">
                                    <img
                                        src={featuresHeroImage}
                                        alt="GPOS touchscreen terminal on a marble counter showing the sales dashboard with today’s sales, orders, and payment breakdown in a restaurant"
                                        className="mx-auto block h-auto w-auto max-h-[min(320px,56vh)] max-w-full object-contain sm:max-h-[min(380px,58vh)] lg:max-h-[min(460px,62vh)] xl:max-h-[min(520px,64vh)]"
                                        loading="eager"
                                        decoding="async"
                                        fetchPriority="high"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <BuiltForRestaurantOperationsSection />

            <FeaturesGridSection />

            <WhyRestaurantsChooseGPOS />

            <HomePricingMockup scheduleDemoFormIdPrefix="features-pricing" />

            <Footer />

            <ScheduleDemoFormModal
                open={heroDemoModalOpen}
                onClose={closeHeroDemoModal}
                formIdPrefix="restaurant-pos-hero-demo"
            />
        </div>
    );
}
