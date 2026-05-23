import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
    ArrowRight,
    BarChart3,
    CalendarDays,
    CirclePlay,
    Headphones,
    LockKeyhole,
    RefreshCw,
    ShieldCheck,
    Star,
    Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuiltForRestaurantOperationsSection from "../components/BuiltForRestaurantOperationsSection";
import OperationsManagementSection from "../components/OperationsManagementSection";
import DeliveryOrderFlowSection from "../components/DeliveryOrderFlowSection";
import StaffManagementSection from "../components/StaffManagementSection";
import CustomerGrowthShowcaseSection from "../components/CustomerGrowthShowcaseSection";
import BookDemoCtaSection from "../components/BookDemoCtaSection";
import ScheduleDemoFormModal from "../components/ScheduleDemoFormModal";
import featuresPageHeroDashboard from "../assets/features-page-hero-dashboard.png?url";
import "./RestaurantPOSPage.css";

const GradientText = ({ children }: { children: React.ReactNode }) => (
    <span className="block bg-gradient-to-r from-[#0565ff] via-[#0756e8] to-[#0249d3] bg-clip-text text-transparent drop-shadow-[0_7px_18px_rgba(5,101,255,0.10)]">
        {children}
    </span>
);

const heroFeatures: {
    title: string;
    Icon: LucideIcon;
    tone: string;
    iconClass: string;
}[] = [
    {
        title: "Smart\nOperations",
        Icon: CalendarDays,
        tone: "from-[#eef6ff] via-[#e5f0ff] to-[#f9fbff]",
        iconClass: "text-[#0757e8]",
    },
    {
        title: "Happy\nCustomers",
        Icon: Users,
        tone: "from-[#e9fbf0] via-[#ddf7ea] to-[#f8fffb]",
        iconClass: "text-[#16a466]",
    },
    {
        title: "Real-time\nInsights",
        Icon: BarChart3,
        tone: "from-[#f5ebff] via-[#eee1ff] to-[#fbf8ff]",
        iconClass: "text-[#7a36df]",
    },
    {
        title: "Secure &\nReliable",
        Icon: ShieldCheck,
        tone: "from-[#fff5e9] via-[#ffeeda] to-[#fffaf3]",
        iconClass: "text-[#e59022]",
    },
];

const trustItems: {
    label: string;
    description: string;
    Icon: LucideIcon;
    tone: string;
    iconClass: string;
    wide?: boolean;
}[] = [
    {
        label: "Trusted by 2,000+ Restaurants & Retail Businesses",
        description: "Across Ireland and Beyond",
        Icon: ShieldCheck,
        tone: "from-[#eef6ff] via-[#e8f1ff] to-white",
        iconClass: "text-[#0757e8]",
        wide: true,
    },
    {
        label: "99.9%",
        description: "System Uptime",
        Icon: ShieldCheck,
        tone: "from-[#eef6ff] via-[#e9f2ff] to-white",
        iconClass: "text-[#0757e8]",
    },
    {
        label: "Bank-level",
        description: "Data Security",
        Icon: LockKeyhole,
        tone: "from-[#e8fbf1] via-[#e0f8ec] to-white",
        iconClass: "text-[#11a966]",
    },
    {
        label: "24/7",
        description: "Expert Support",
        Icon: Headphones,
        tone: "from-[#f3eaff] via-[#ebddff] to-white",
        iconClass: "text-[#713ce3]",
    },
    {
        label: "Regular",
        description: "Feature Updates",
        Icon: RefreshCw,
        tone: "from-[#fff6e8] via-[#ffedd7] to-white",
        iconClass: "text-[#e89a20]",
    },
];

export default function RestaurantPos() {
    const location = useLocation();
    const [heroDemoModalOpen, setHeroDemoModalOpen] = useState(false);
    const closeHeroDemoModal = useCallback(() => setHeroDemoModalOpen(false), []);
    const openHeroDemoModal = useCallback(() => setHeroDemoModalOpen(true), []);

    useEffect(() => {
        if (location.hash !== "#features") return;
        const el = document.getElementById("features");
        if (!el) return;
        const t = window.setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
        return () => window.clearTimeout(t);
    }, [location.hash, location.pathname]);

    return (
        <div className="gpos-page w-full min-w-0 max-w-full overflow-x-clip bg-[#F8FAFC]">
            <Navbar />

            <section className="features-page-hero relative overflow-hidden bg-[#F8FAFC] px-[38px] pb-[32px] pt-[28px] font-['Poppins',Arial,sans-serif] max-lg:px-6 max-md:px-4">
                <div className="mx-auto w-full max-w-[1455px]">
                    <div className="grid items-start gap-[30px] lg:grid-cols-[590px_minmax(0,1fr)] xl:grid-cols-[620px_minmax(0,1fr)]">
                        <div className="pt-[6px]">
                            <div className="inline-flex h-[36px] items-center gap-[10px] rounded-full border border-[#dce9ff] bg-[#eef5ff] px-[15px] text-[14px] font-semibold text-[#0757d8] shadow-[0_10px_28px_rgba(7,86,217,0.045),inset_0_1px_0_rgba(255,255,255,0.82)]">
                                <Star className="h-[16px] w-[16px]" strokeWidth={2.35} aria-hidden />
                                <span className="whitespace-nowrap">Powerful Features. Built for Food Businesses.</span>
                            </div>

                            <h1 className="mt-[24px] font-['Inter',Arial,sans-serif] text-[clamp(32px,3.35vw,41px)] font-[850] leading-[1.14] tracking-[-0.032em] text-[#071333]">
                                <span className="block whitespace-nowrap">Everything You Need</span>
                                <span className="block whitespace-nowrap">to Run Your Restaurant,</span>
                                <GradientText>All in One Powerful</GradientText>
                                <GradientText>System.</GradientText>
                            </h1>

                            <p className="mt-[18px] max-w-[510px] font-['Inter',Arial,sans-serif] text-[16px] font-medium leading-[1.52] text-[#48566e]">
                                From smart billing and inventory to staff management and real-time analytics - GPOS gives you complete control to operate smoothly, serve better, and grow faster.
                            </p>

                            <div className="mt-[24px] grid max-w-[505px] grid-cols-4 gap-[20px] max-sm:grid-cols-2">
                                {heroFeatures.map(({ title, Icon, tone, iconClass }) => (
                                    <div key={title} className="flex flex-col items-center text-center">
                                        <span
                                            className={`flex h-[50px] w-[50px] items-center justify-center rounded-[13px] border border-white/85 bg-gradient-to-br ${tone} shadow-[0_13px_28px_rgba(15,23,42,0.055),inset_0_1px_0_rgba(255,255,255,0.92)]`}
                                            aria-hidden
                                        >
                                            <Icon className={`h-[25px] w-[25px] ${iconClass}`} strokeWidth={2.15} />
                                        </span>
                                        <span className="mt-[12px] whitespace-pre-line font-['Inter',Arial,sans-serif] text-[13px] font-[800] leading-[1.24] tracking-[-0.01em] text-[#101a35]">
                                            {title}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-[24px] flex w-full max-w-[560px] flex-nowrap items-center justify-center gap-[clamp(10px,2.1vw,22px)]">
                                <Link
                                    to="#features"
                                    className="inline-flex h-[52px] min-w-0 flex-1 items-center justify-center gap-[clamp(8px,1.4vw,14px)] whitespace-nowrap rounded-[8px] bg-gradient-to-br from-[#0866ff] via-[#0757f0] to-[#0048d4] px-[clamp(12px,1.8vw,22px)] font-['Poppins',Arial,sans-serif] text-[clamp(12px,1.02vw,15px)] font-semibold text-white no-underline shadow-[0_18px_34px_rgba(4,86,232,0.24),inset_0_1px_0_rgba(255,255,255,0.22)]"
                                >
                                    Explore All Features
                                    <ArrowRight className="h-[clamp(16px,1.35vw,20px)] w-[clamp(16px,1.35vw,20px)] shrink-0" strokeWidth={2.1} aria-hidden />
                                </Link>

                                <button
                                    type="button"
                                    onClick={openHeroDemoModal}
                                    className="inline-flex h-[52px] min-w-0 flex-1 items-center justify-center gap-[clamp(8px,1.35vw,13px)] whitespace-nowrap rounded-[8px] border border-[#0b57d4] bg-white px-[clamp(12px,1.7vw,22px)] font-['Poppins',Arial,sans-serif] text-[clamp(12px,1.02vw,15px)] font-semibold text-[#0757d8] shadow-[0_11px_24px_rgba(15,23,42,0.035),inset_0_1px_0_rgba(255,255,255,0.92)]"
                                >
                                    <CirclePlay className="h-[clamp(17px,1.45vw,21px)] w-[clamp(17px,1.45vw,21px)] shrink-0" strokeWidth={2.2} aria-hidden />
                                    Watch Product Tour
                                </button>
                            </div>
                        </div>

                        <div className="relative flex min-w-0 justify-center pt-0 lg:justify-end">
                            <img
                                src={featuresPageHeroDashboard}
                                alt="GPOS dashboard preview with sales overview, recent orders, top selling items, and sales by channel"
                                className="relative z-10 mt-0 block h-auto w-full max-w-[740px]"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                            />
                        </div>
                    </div>

                    <div className="mt-[20px] grid min-h-[74px] grid-cols-[2.05fr_1.05fr_1.05fr_1.05fr_1.05fr] items-center rounded-[13px] border border-[#e8edf5] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.045),inset_0_1px_0_rgba(255,255,255,0.95)] max-lg:grid-cols-2 max-lg:gap-y-5 max-lg:p-5 max-sm:grid-cols-1">
                        {trustItems.map(({ label, description, Icon, tone, iconClass, wide }, index) => (
                            <div
                                key={`${label}-${description}`}
                                className={`flex min-w-0 items-center gap-[13px] px-[28px] font-['Inter',Arial,sans-serif] ${
                                    index > 0 ? "border-l border-[#e8edf5] max-lg:border-l-0" : ""
                                } ${wide ? "pl-[30px]" : ""}`}
                            >
                                <span
                                    className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[11px] border border-white/90 bg-gradient-to-br ${tone} shadow-[0_10px_22px_rgba(15,23,42,0.045),inset_0_1px_0_rgba(255,255,255,0.95)]`}
                                    aria-hidden
                                >
                                    <Icon className={`h-[21px] w-[21px] ${iconClass}`} strokeWidth={2.15} />
                                </span>
                                <div className="min-w-0">
                                    <p className="whitespace-normal text-[13.5px] font-[800] leading-[1.18] tracking-[-0.01em] text-[#192038]">
                                        {label}
                                    </p>
                                    <p className="mt-[4px] text-[12.5px] font-medium leading-[1.18] text-[#3f4c62]">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <OperationsManagementSection />

            <BuiltForRestaurantOperationsSection />

            <DeliveryOrderFlowSection />

            <StaffManagementSection />

            <CustomerGrowthShowcaseSection embed />

            <BookDemoCtaSection embed />

            <Footer />

            <ScheduleDemoFormModal
                open={heroDemoModalOpen}
                onClose={closeHeroDemoModal}
                formIdPrefix="restaurant-pos-hero-demo"
            />
        </div>
    );
}
