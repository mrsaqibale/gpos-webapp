import { useCallback, useState } from "react";
import { HERO_PRIMARY_CTA_SURFACE } from "../constants/heroCta";
import {
    BarChart3,
    Calendar,
    CreditCard,
    Monitor,
    PhoneCall,
    Tag,
    Truck,
    Users,
    Utensils,
} from "lucide-react";
import ScheduleDemoFormModal from "./ScheduleDemoFormModal";
/** User-provided POS / management systems photo; bundled via Vite */
import featuresSectionVisual from "../assets/features-pos-management-terminal.png?url";

const features = [
    {
        title: "POS Billing",
        desc: "Fast, accurate billing with easy order management.",
        icon: Monitor,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Delivery Management",
        desc: "Assign drivers, track deliveries, and keep drop-offs on schedule.",
        icon: Truck,
        color: "bg-teal-50 text-teal-600",
    },
    {
        title: "Staff Management",
        desc: "Manage roles, shifts and permissions effortlessly.",
        icon: Users,
        color: "bg-orange-50 text-orange-600",
    },
    {
        title: "Reports & Analytics",
        desc: "Detailed reports and insights to grow your business.",
        icon: BarChart3,
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "Menu Management",
        desc: "Organize menu items, categories, modifiers and pricing easily.",
        icon: Utensils,
        color: "bg-sky-50 text-sky-600",
    },
    {
        title: "Call System",
        desc: "Handle phone orders and reservations with a clear, simple flow.",
        icon: PhoneCall,
        color: "bg-cyan-50 text-cyan-600",
    },
    {
        title: "Offers & Discounts",
        desc: "Create offers, combos and discounts to boost sales.",
        icon: Tag,
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Customer Management",
        desc: "Build customer loyalty with profiles and purchase history.",
        icon: CreditCard,
        color: "bg-pink-50 text-pink-600",
    },
] as const;

export default function FeaturesGridSection() {
    const [demoModalOpen, setDemoModalOpen] = useState(false);

    const closeDemoModal = useCallback(() => setDemoModalOpen(false), []);

    return (
        <section
            id="features"
            className="relative w-full scroll-mt-24 overflow-hidden bg-[#F8FBFF] pb-0 pl-6 pr-4 pt-0 sm:pl-8 sm:pr-6 sm:pt-0 lg:scroll-mt-28 lg:pb-0 lg:pl-[80px] lg:pr-10 lg:pt-0 xl:pl-[96px] xl:pr-14"
        >
            <div
                className="pointer-events-none absolute right-6 top-8 hidden h-36 w-48 opacity-[0.35] [background-image:radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:10px_10px] lg:block xl:right-12"
                aria-hidden
            />
            <div className="absolute right-10 top-8 hidden h-28 w-28 rounded-full bg-blue-100/50 blur-3xl lg:block" />
            <div className="absolute bottom-10 left-10 hidden h-32 w-32 rounded-full bg-orange-100/50 blur-3xl lg:block" />

            <div className="relative mx-auto w-full max-w-none">
                <div className="text-center">
                    <h2 className="mt-0 text-3xl font-black tracking-[-0.03em] text-[#061536] sm:text-4xl lg:text-5xl">
                        Everything You Need in{" "}
                        <span className="text-[#0756D9]">One POS System</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        Explore our powerful features designed to simplify restaurant operations.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,1.32fr)_minmax(0,0.68fr)] xl:gap-14">
                    {/* Feature cards — left column on lg; stacked first on mobile */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:gap-6 xl:gap-7">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50/50 p-3.5 shadow-[0_22px_48px_-18px_rgba(15,23,42,0.14),0_10px_22px_-12px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-slate-900/[0.035] transition-all duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-[3px] before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-[#0756D9] before:via-sky-500 before:to-[#0756D9] before:transition-transform before:duration-300 hover:-translate-y-1 hover:border-slate-300/90 hover:shadow-[0_32px_64px_-20px_rgba(15,23,42,0.18),0_16px_32px_-12px_rgba(7,86,217,0.12),inset_0_1px_0_rgba(255,255,255,1)] hover:ring-blue-900/[0.06] hover:before:scale-x-100 sm:p-6 lg:p-8"
                                >
                                    <div className="flex min-h-0 flex-col items-center gap-2 sm:min-h-[4rem] sm:flex-row sm:flex-nowrap sm:items-center sm:gap-4">
                                        <div
                                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[0_4px_14px_-4px_rgba(15,23,42,0.12)] ring-2 ring-white/90 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.15)] sm:h-16 sm:w-16 ${feature.color}`}
                                        >
                                            <Icon className="h-6 w-6 sm:h-9 sm:w-9" strokeWidth={2.1} aria-hidden />
                                        </div>
                                        <h3 className="min-w-0 max-w-full flex-1 text-center text-[0.8125rem] font-black leading-snug tracking-tight text-[#061536] sm:text-left sm:text-lg md:text-xl">
                                            {feature.title}
                                        </h3>
                                    </div>

                                    <p className="mt-3 flex-1 text-center text-[13px] leading-snug text-slate-600 sm:mt-5 sm:text-left sm:text-base sm:leading-7 md:text-[17px] md:leading-[1.65]">
                                        {feature.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Product visual — right column on lg; below cards on mobile; vertically centered beside cards */}
                    <div className="lg:sticky lg:top-24 lg:self-start xl:top-28">
                        <div className="relative overflow-hidden rounded-[28px] border border-[#DDE8F7] bg-[linear-gradient(145deg,#FFFFFF_0%,#F4F8FF_48%,#E8F0FC_100%)] shadow-[0_26px_70px_rgba(15,23,42,0.1)] ring-1 ring-slate-900/[0.04]">
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:12px_12px]"
                                aria-hidden
                            />
                            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#0756D9]/[0.12] blur-3xl" aria-hidden />
                            <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" aria-hidden />

                            <div className="relative p-4 sm:p-5 md:p-6">
                                <div className="overflow-hidden rounded-[20px] border border-white/80 bg-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_16px_40px_-12px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/60 backdrop-blur-[2px]">
                                    <img
                                        src={featuresSectionVisual}
                                        alt="Staff member using a GPOS touchscreen terminal with management systems on screen in a restaurant"
                                        className="h-auto w-full object-cover object-center"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                <p className="mt-4 text-center text-sm font-semibold leading-snug text-[#475569] sm:text-[15px]">
                                    The same powerful tools—billing, kitchen, delivery, and reports—in one place.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setDemoModalOpen(true)}
                                    className={`mt-6 flex w-full min-h-[3.25rem] items-center justify-center gap-3 rounded-[14px] px-6 py-3.5 text-base font-bold tracking-tight shadow-[0_12px_28px_rgba(3,44,126,0.28)] transition hover:brightness-[1.05] active:scale-[0.99] sm:min-h-[3.5rem] sm:py-4 sm:text-lg ${HERO_PRIMARY_CTA_SURFACE}`}
                                >
                                    <Calendar className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" strokeWidth={2.2} aria-hidden />
                                    Book Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ScheduleDemoFormModal
                open={demoModalOpen}
                onClose={closeDemoModal}
                formIdPrefix="features-grid-demo"
            />
        </section>
    );
}
