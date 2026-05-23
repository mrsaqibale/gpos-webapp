import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Bell,
    CalendarDays,
    Check,
    CheckCircle2,
    ChevronDown,
    CircleGauge,
    CircleUserRound,
    Clock,
    CreditCard,
    Gift,
    Headphones,
    Info,
    LockKeyhole,
    Mail,
    MessageCircle,
    PackageCheck,
    PanelTop,
    Phone,
    Rocket,
    RotateCcw,
    Settings,
    ShieldCheck,
    ShoppingCart,
    SlidersHorizontal,
    Star,
    Truck,
    UserCog,
    UserRound,
    UsersRound,
    WalletCards,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cashDrawer from "../assets/cash-drawer.png.png";
import printer from "../assets/printer.png.png";
import faqPosVisual from "../assets/faq-pos-visual.png";
import scanner from "../assets/scanner.png.png";
import "./PricingPage.css";

type IconItem = {
    title: string;
    description: string;
    Icon: LucideIcon;
};

type Plan = {
    title: string;
    description: string;
    price: string;
    icon: LucideIcon;
    popular?: boolean;
    features: string[];
};

type Bundle = {
    title: string;
    description: string;
    price: string;
    icon: LucideIcon;
    popular?: boolean;
    features: string[];
};

type CompareRow = {
    title: string;
    description: string;
    Icon: LucideIcon;
    new?: boolean;
    starter: "yes" | "no" | string;
    growth: "yes" | string;
};

const heroTrust: IconItem[] = [
    { title: "Trusted by 1000+ Restaurants", description: "", Icon: ShieldCheck },
    { title: "Secure & Reliable Platform", description: "", Icon: ShieldCheck },
    { title: "Free Setup & Onboarding", description: "", Icon: CircleGauge },
    { title: "24/7 Expert Support", description: "", Icon: Headphones },
];

const planCards: Plan[] = [
    {
        title: "Starter / Core POS",
        description: "Perfect for small restaurants getting started with GPOS.",
        price: "€79",
        icon: Rocket,
        features: [
            "Up to 1 Outlet",
            "POS Billing",
            "Order Management",
            "Inventory Management",
            "Basic Reports",
            "Staff Management",
            "Customer Management",
            "Email & WhatsApp Support",
        ],
    },
    {
        title: "Growth / CRM Plan",
        description: "Ideal for growing restaurants that want more control & loyalty.",
        price: "€149",
        icon: BarChart3,
        popular: true,
        features: [
            "Up to 5 Outlets",
            "Everything in Starter",
            "Advanced Reports & Analytics",
            "WhatsApp Customer Recovery",
            "Repeat Customer Tools",
            "Loyalty & Voucher Tools",
            "Advanced CRM Features",
            "Priority Support",
        ],
    },
];

const planBenefits: IconItem[] = [
    { title: "No Hidden Fees", description: "Transparent pricing, always.", Icon: ShieldCheck },
    { title: "Upgrade Anytime", description: "Switch plans or scale up anytime.", Icon: CircleGauge },
    { title: "Cancel Anytime", description: "No lock-in. Cancel at any time.", Icon: RotateCcw },
    { title: "24/7 Support", description: "We're here to help you succeed.", Icon: Headphones },
];

const compareRows: CompareRow[] = [
    { title: "POS & Billing", description: "Fast billing, multiple payment methods, invoices", Icon: WalletCards, starter: "yes", growth: "yes" },
    { title: "Order & Inventory Management", description: "Manage orders, stock, recipes, suppliers", Icon: ShoppingCart, starter: "yes", growth: "yes" },
    { title: "Reports & Analytics", description: "Sales reports, summaries, tax reports", Icon: BarChart3, starter: "yes", growth: "yes" },
    { title: "Staff Management", description: "Roles, permissions, performance tracking", Icon: UserCog, starter: "yes", growth: "yes" },
    { title: "Customer Management", description: "Customer database, history, insights", Icon: UserRound, starter: "yes", growth: "yes" },
    { title: "WhatsApp Customer Recovery", description: "Automated WhatsApp follow-ups & re-engagement", Icon: UsersRound, new: true, starter: "no", growth: "yes" },
    { title: "Repeat Customer Tools", description: "Smart targeting & re-order reminders", Icon: RotateCcw, new: true, starter: "no", growth: "yes" },
    { title: "Loyalty & Voucher Tools", description: "Points, rewards, vouchers & promotions", Icon: Gift, new: true, starter: "no", growth: "yes" },
    { title: "Advanced CRM Features", description: "Segmentation, tags, customer lifecycle", Icon: UsersRound, new: true, starter: "no", growth: "yes" },
    { title: "Support", description: "Help & support when you need it", Icon: Headphones, starter: "Standard Support", growth: "Priority Support" },
];

const allPlansInclude = ["Secure & Reliable Platform", "Regular Updates", "Data Backup", "24/7 System Monitoring"];

const bundles: Bundle[] = [
    {
        title: "Essential Bundle",
        description: "Perfect for small restaurants getting started.",
        price: "€599",
        icon: UserCog,
        features: ["1x Touch POS Terminal", "1x Receipt Printer", "1x Cash Drawer"],
    },
    {
        title: "Pro Bundle",
        description: "Ideal for growing restaurants with multiple staff.",
        price: "€799",
        icon: UsersRound,
        popular: true,
        features: ["1x Touch POS Terminal", "1x Receipt Printer", "1x Cash Drawer", "1x Kitchen Printer"],
    },
    {
        title: "Premium Bundle",
        description: "For busy restaurants with high order volume.",
        price: "€1,099",
        icon: UsersRound,
        features: ["1x Touch POS Terminal", "2x Receipt Printers", "1x Cash Drawer", "1x Kitchen Printer", "1x Barcode Scanner"],
    },
];

const hardwareAddons = [
    { title: "Receipt Printer", price: "€149", image: printer },
    { title: "Cash Drawer", price: "€129", image: cashDrawer },
    { title: "Kitchen Printer", price: "€199", image: printer },
    { title: "Barcode Scanner", price: "€99", image: scanner },
];

const GposMiniWordmark = () => (
    <span className="inline-flex items-center gap-[8px]" aria-label="GPOS">
        <span className="relative flex h-[30px] w-[30px] shrink-0 items-center justify-center">
            <span className="absolute inset-0 rounded-[8px] bg-[#0B56EA] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
            <span className="absolute inset-[5px] rounded-[5px] bg-white [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
            <span className="absolute inset-[9px] rounded-[4px] bg-[#0B56EA] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
            <span className="absolute right-[4px] top-[12px] h-[7px] w-[15px] rounded-l-full bg-white" />
        </span>
        <span className="text-[19px] font-[850] tracking-[-0.035em] text-[#061236]">GPOS</span>
    </span>
);

const Badge = ({ children, Icon = Star }: { children: React.ReactNode; Icon?: LucideIcon }) => (
    <div className="inline-flex h-[34px] items-center gap-[10px] rounded-full bg-[#EEF5FF] px-[15px] text-[13px] font-[850] uppercase tracking-[-0.01em] text-[#0B56EA] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_18px_rgba(11,86,234,0.045)]">
        <Icon className="h-[17px] w-[17px]" strokeWidth={2.35} aria-hidden />
        {children}
    </div>
);

const CheckDot = ({ className = "" }: { className?: string }) => (
    <span className={`grid h-[15px] w-[15px] shrink-0 place-items-center rounded-full bg-[#0757F2] text-white ${className}`}>
        <Check className="h-[10px] w-[10px]" strokeWidth={3} aria-hidden />
    </span>
);

const SectionTitle = ({
    badge,
    titleStart,
    titleBlue,
    titleEnd = "",
    subtitle,
    Icon = Star,
}: {
    badge: string;
    titleStart: string;
    titleBlue: string;
    titleEnd?: string;
    subtitle: string;
    Icon?: LucideIcon;
}) => (
    <div className="text-center">
        <Badge Icon={Icon}>{badge}</Badge>
        <h1 className="mt-[18px] font-['Inter',Arial,sans-serif] text-[clamp(34px,3.8vw,54px)] font-[850] leading-[1.08] tracking-[-0.045em] text-[#071333]">
            {titleStart} <span className="bg-gradient-to-r from-[#0D66FF] via-[#0757F2] to-[#0049D8] bg-clip-text text-transparent">{titleBlue}</span>{titleEnd}
        </h1>
        <p className="mt-[14px] font-['Inter',Arial,sans-serif] text-[18px] font-[550] leading-[1.5] tracking-[-0.015em] text-[#526079]">
            {subtitle}
        </p>
    </div>
);

const MiniDashboard = () => {
    const chartPoints = "M0 92 L42 74 L77 82 L116 42 L153 58 L190 28 L226 48 L260 34";
    return (
        <div className="relative mx-auto mt-[clamp(10px,1.8vh,34px)] h-[clamp(190px,24vh,300px)] max-w-[880px] max-lg:h-auto">
            <div className="absolute left-[-198px] top-[60px] hidden w-[214px] rotate-[-7deg] rounded-[14px] border border-[#E5ECF7] bg-white p-[20px] shadow-[0_22px_48px_rgba(15,23,42,0.09)] xl:block">
                <p className="text-[17px] font-[800] text-[#071333]">Total Sales</p>
                <div className="mt-[18px] flex items-center gap-[12px]">
                    <span className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-[#EEF5FF] text-[#0757F2]">
                        <WalletCards className="h-[21px] w-[21px]" strokeWidth={2.2} aria-hidden />
                    </span>
                    <span className="text-[24px] font-[850] tracking-[-0.04em] text-[#071333]">€5,842.50</span>
                </div>
                <p className="mt-[10px] text-center text-[12px] font-[800] text-[#16A466]">↑ 18.6% <span className="text-[#64748B]">vs Yesterday</span></p>
                <svg className="mt-[18px] h-[78px] w-full" viewBox="0 0 260 110" fill="none" aria-hidden>
                    <path d={chartPoints} stroke="#0757F2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    {[0, 42, 77, 116, 153, 190, 226, 260].map((x, i) => {
                        const y = [92, 74, 82, 42, 58, 28, 48, 34][i];
                        return <circle key={x} cx={x} cy={y} r="4.5" fill="white" stroke="#0757F2" strokeWidth="3" />;
                    })}
                </svg>
            </div>

            <div className="relative mx-auto overflow-hidden rounded-[18px] border border-[#E6ECF5] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.09)]">
                <div className="grid h-[clamp(190px,24vh,300px)] grid-cols-[145px_1fr] max-md:grid-cols-1">
                    <aside className="bg-[#F4F8FF] px-[20px] py-[25px] max-md:hidden">
                        <div className="flex items-center gap-[9px]">
                            <GposMiniWordmark />
                        </div>
                        {["Dashboard", "Orders", "Delivery", "Collection", "Customers"].map((item, index) => (
                            <div key={item} className={`mt-[14px] flex h-[34px] items-center gap-[9px] rounded-[8px] px-[11px] text-[12px] font-[800] ${index === 0 ? "bg-[#E8F0FF] text-[#0757F2]" : "text-[#334155]"}`}>
                                <PanelTop className="h-[15px] w-[15px]" strokeWidth={2.1} aria-hidden />
                                {item}
                            </div>
                        ))}
                    </aside>
                    <main className="p-[20px]">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[17px] font-[850] text-[#071333]">Dashboard Overview</h3>
                            <div className="flex items-center gap-[13px]">
                                <button className="inline-flex h-[33px] items-center gap-[8px] rounded-[7px] border border-[#E7ECF5] bg-white px-[12px] text-[11px] font-[750] text-[#334155]">
                                    <CalendarDays className="h-[14px] w-[14px]" strokeWidth={2.1} aria-hidden />
                                    May 24 - May 31, 2024
                                </button>
                                <Bell className="h-[20px] w-[20px] text-[#071333]" strokeWidth={2.1} aria-hidden />
                            </div>
                        </div>
                        <div className="mt-[18px] grid grid-cols-4 gap-[11px]">
                            {[
                                ["Total Sales", "€5,842.50", WalletCards],
                                ["Total Orders", "214", LockKeyhole],
                                ["Average Order Value", "€27.30", CreditCard],
                                ["New Customers", "32", UserRound],
                            ].map(([label, value, Icon]) => (
                                <div key={label as string} className="rounded-[12px] border border-[#E8EDF5] bg-white p-[11px]">
                                    <Icon className="h-[27px] w-[27px] rounded-[8px] bg-[#EEF5FF] p-[6px] text-[#0757F2]" strokeWidth={2.1} aria-hidden />
                                    <p className="mt-[8px] text-[9px] font-[800] text-[#55627A]">{label as string}</p>
                                    <p className="mt-[4px] text-[15px] font-[850] text-[#071333]">{value as string}</p>
                                    <p className="mt-[4px] text-[9px] font-[800] text-[#16A466]">↑ 11.5% vs Yesterday</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-[12px] grid grid-cols-[1.3fr_1fr] gap-[12px]">
                            <div className="rounded-[13px] border border-[#E8EDF5] bg-white p-[15px]">
                                <div className="flex items-center justify-between">
                                    <span className="text-[12px] font-[850] text-[#071333]">Sales Overview</span>
                                    <span className="rounded-[6px] border border-[#E8EDF5] px-[8px] py-[4px] text-[9px] font-[800]">This Week</span>
                                </div>
                                <svg className="mt-[8px] h-[96px] w-full" viewBox="0 0 360 140" fill="none" aria-hidden>
                                    <defs>
                                        <linearGradient id="pricingHeroChart" x1="0" x2="0" y1="20" y2="140">
                                            <stop stopColor="#0757F2" stopOpacity="0.22" />
                                            <stop offset="1" stopColor="#0757F2" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M18 105L54 82L88 94L124 55L160 73L198 38L232 67L272 47L320 30" stroke="#0757F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 105L54 82L88 94L124 55L160 73L198 38L232 67L272 47L320 30V140H18Z" fill="url(#pricingHeroChart)" />
                                </svg>
                            </div>
                            <div className="rounded-[13px] border border-[#E8EDF5] bg-white p-[15px]">
                                <div className="flex items-center justify-between">
                                    <span className="text-[12px] font-[850] text-[#071333]">Sales by Channel</span>
                                    <span className="rounded-[6px] border border-[#E8EDF5] px-[8px] py-[4px] text-[9px] font-[800]">This Week</span>
                                </div>
                                <div className="mt-[16px] flex items-center gap-[20px]">
                                    <div className="h-[105px] w-[105px] rounded-full bg-[conic-gradient(#0757F2_0_42%,#16A466_42%_72%,#F59E0B_72%_92%,#7A36DF_92%_100%)] p-[22px]">
                                        <div className="grid h-full w-full place-items-center rounded-full bg-white text-[10px] font-[850] text-[#071333]">€5,842</div>
                                    </div>
                                    <div className="grid gap-[9px] text-[10px] font-[750] text-[#334155]">
                                        <span><i className="mr-2 inline-block h-[8px] w-[8px] rounded-full bg-[#0757F2]" />Dine-in 42%</span>
                                        <span><i className="mr-2 inline-block h-[8px] w-[8px] rounded-full bg-[#16A466]" />Takeaway 30%</span>
                                        <span><i className="mr-2 inline-block h-[8px] w-[8px] rounded-full bg-[#F59E0B]" />Delivery 20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <div className="absolute right-[-198px] top-[94px] hidden w-[210px] rotate-[7deg] rounded-[14px] border border-[#E5ECF7] bg-white p-[20px] shadow-[0_22px_48px_rgba(15,23,42,0.09)] xl:block">
                <p className="text-[16px] font-[850] text-[#071333]">Top Selling Items</p>
                {["Zinger Burger", "Chicken Pizza", "French Fries"].map((item, index) => (
                    <div key={item} className="mt-[17px] flex items-center justify-between text-[13px] font-[750] text-[#071333]">
                        <span className="flex items-center gap-[10px]">
                            <span
                                className="grid h-[30px] w-[30px] place-items-center rounded-full border border-white shadow-[0_7px_14px_rgba(15,23,42,0.08)]"
                                style={{
                                    background:
                                        index === 0
                                            ? "linear-gradient(135deg,#C85B21,#F6B759)"
                                            : index === 1
                                              ? "linear-gradient(135deg,#DA6B23,#F1D05F)"
                                              : "linear-gradient(135deg,#F5A623,#FFE098)",
                                }}
                            />
                            {item}
                        </span>
                        <span>{[152, 128, 210][index]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PricingHero = () => (
    <section className="relative overflow-hidden bg-[#F8FAFF] px-[40px] pb-[clamp(16px,2vh,42px)] pt-[clamp(18px,2.2vh,46px)] font-['Inter',Arial,sans-serif] max-lg:px-[24px]">
        <div className="pointer-events-none absolute left-[5%] top-[45%] h-[92px] w-[92px] rounded-full bg-[#EAF2FF]" />
        <div className="pointer-events-none absolute right-[6%] top-[35%] h-[96px] w-[96px] rounded-full bg-[#EAF2FF]" />
        <div className="pointer-events-none absolute bottom-[72px] right-[8%] h-[172px] w-[172px] rounded-full bg-[#EAF2FF]" />
        <div className="mx-auto max-w-[1450px] text-center">
            <Badge>Simple Pricing. Powerful Results.</Badge>
            <h1 className="mx-auto mt-[clamp(10px,1.5vh,26px)] max-w-[790px] font-['Inter',Arial,sans-serif] text-[clamp(40px,4.75vw,66px)] font-[850] leading-[1.07] tracking-[-0.048em] text-[#071333]">
                Choose the Perfect Plan for <span className="bg-gradient-to-r from-[#0D66FF] via-[#0757F2] to-[#0049D8] bg-clip-text text-transparent">Your Restaurant</span>
            </h1>
            <p className="mx-auto mt-[clamp(8px,1.2vh,20px)] max-w-[640px] text-[18px] font-[550] leading-[1.55] tracking-[-0.015em] text-[#4F5D76]">
                Transparent pricing, no hidden fees. Start free and upgrade as your business grows with GPOS.
            </p>
            <div className="mt-[clamp(12px,2vh,32px)] flex flex-wrap justify-center gap-[16px]">
                <a href="#plans" className="inline-flex h-[58px] min-w-[250px] items-center justify-center gap-[16px] rounded-[9px] bg-[#0757F2] px-[30px] text-[17px] font-[800] text-white no-underline shadow-[0_16px_30px_rgba(7,87,242,0.20)]">
                    View Pricing Plans
                    <ArrowRight className="h-[24px] w-[24px]" strokeWidth={2.2} aria-hidden />
                </a>
                <Link to="/get_demo" className="inline-flex h-[58px] min-w-[250px] items-center justify-center gap-[16px] rounded-[9px] border border-[#0B3D91] bg-white px-[30px] text-[17px] font-[800] text-[#0757D8] no-underline shadow-[0_10px_24px_rgba(15,23,42,0.035)]">
                    Book a Free Demo
                    <ArrowRight className="h-[24px] w-[24px]" strokeWidth={2.2} aria-hidden />
                </Link>
            </div>
            <div className="mx-auto mt-[clamp(12px,2vh,42px)] grid max-w-[1135px] grid-cols-4 items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
                {heroTrust.map(({ title, Icon }, index) => (
                    <div key={title} className={`flex items-center justify-center gap-[15px] px-[28px] ${index > 0 ? "border-l border-[#DDE5F0] max-lg:border-l-0" : ""}`}>
                        <span className="grid h-[44px] w-[44px] place-items-center rounded-full bg-[#EDF4FF] text-[#0757F2]">
                            <Icon className="h-[22px] w-[22px]" strokeWidth={2.2} aria-hidden />
                        </span>
                        <span className="text-left text-[15.5px] font-[750] tracking-[-0.02em] text-[#334155]">{title}</span>
                    </div>
                ))}
            </div>
            <MiniDashboard />
        </div>
    </section>
);

const BillingToggle = () => (
    <div className="mx-auto mt-[29px] grid h-[43px] w-[352px] grid-cols-[1fr_1fr_0.76fr] overflow-hidden rounded-[8px] border border-[#DDE6F4] bg-white p-[3px] shadow-[0_10px_22px_rgba(15,23,42,0.035)]">
        <button className="rounded-[7px] bg-[#0757F2] text-[15px] font-[850] text-white">Monthly</button>
        <button className="text-[15px] font-[850] text-[#0757F2]">Yearly</button>
        <span className="m-[4px] grid place-items-center rounded-[7px] bg-[#DDF8E7] text-[13px] font-[850] text-[#16A466]">Save 20%</span>
    </div>
);

const PricingCard = ({ plan }: { plan: Plan }) => (
    <article className={`relative rounded-[16px] border bg-white p-[36px] shadow-[0_14px_34px_rgba(15,23,42,0.045)] ${plan.popular ? "border-[#0757F2]" : "border-[#E7ECF5]"}`}>
        {plan.popular && (
            <div className="absolute left-1/2 top-[-18px] h-[35px] min-w-[174px] -translate-x-1/2 rounded-full bg-[#0757F2] px-[23px] text-center text-[14px] font-[850] leading-[35px] text-white">
                MOST POPULAR
            </div>
        )}
        <div className="flex items-start justify-between gap-[30px] border-b border-[#E8EDF5] pb-[35px]">
            <div className="flex items-start gap-[25px]">
                <span className="grid h-[77px] w-[77px] place-items-center rounded-[14px] bg-[#EEF5FF] text-[#0757F2] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
                    <plan.icon className="h-[42px] w-[42px]" strokeWidth={2.2} aria-hidden />
                </span>
                <div>
                    <h2 className="text-[27px] font-[850] leading-[1.1] tracking-[-0.04em] text-[#071333]">{plan.title}</h2>
                    <p className="mt-[13px] max-w-[275px] text-[15.5px] font-[650] leading-[1.55] text-[#46556F]">{plan.description}</p>
                </div>
            </div>
            <div className="min-w-[112px] text-right">
                <p className="text-[43px] font-[850] leading-none tracking-[-0.055em] text-[#071333]">{plan.price}</p>
                <p className="mt-[9px] text-[17px] font-[850] text-[#071333]">/ month</p>
                <p className="mt-[9px] text-[14px] font-[850] text-[#0757F2]">+ VAT</p>
            </div>
        </div>
        <div className="mt-[25px] grid gap-[15px]">
            {plan.features.map((feature) => (
                <div key={feature} className="flex items-center justify-between gap-[18px]">
                    <span className="flex items-center gap-[15px] text-[15px] font-[800] leading-none text-[#071333]">
                        <CheckDot />
                        {feature}
                    </span>
                    <Info className="h-[18px] w-[18px] shrink-0 text-[#94A3B8]" strokeWidth={2.2} aria-hidden />
                </div>
            ))}
        </div>
        <a
            href="#hardware"
            className={`mt-[36px] inline-flex h-[51px] w-full items-center justify-center gap-[16px] rounded-[7px] border px-[28px] text-[16px] font-[850] no-underline ${
                plan.popular
                    ? "border-[#0757F2] bg-[#0757F2] text-white shadow-[0_14px_25px_rgba(7,87,242,0.20)]"
                    : "border-[#0B3D91] bg-white text-[#0757D8]"
            }`}
        >
            Get Started
            <ArrowRight className="h-[21px] w-[21px]" strokeWidth={2.3} aria-hidden />
        </a>
    </article>
);

const SimplePlansSection = () => (
    <section id="plans" className="bg-[#F8FAFF] px-[40px] py-[52px] font-['Inter',Arial,sans-serif] max-lg:px-[24px]">
        <div className="mx-auto max-w-[1134px]">
            <SectionTitle
                badge="Choose the Right Plan for Your Business"
                titleStart="Simple Plans."
                titleBlue="Powerful Results."
                subtitle="Choose the plan that fits your restaurant. Upgrade or downgrade anytime."
            />
            <BillingToggle />
            <div className="mt-[31px] grid gap-[31px] lg:grid-cols-2">
                {planCards.map((plan) => (
                    <PricingCard key={plan.title} plan={plan} />
                ))}
            </div>
            <div className="mt-[20px] grid min-h-[120px] grid-cols-4 overflow-hidden rounded-[13px] border border-[#E8EDF5] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.045)] max-lg:grid-cols-2 max-sm:grid-cols-1">
                {planBenefits.map(({ title, description, Icon }, index) => (
                    <article key={title} className={`flex items-center gap-[18px] px-[31px] ${index > 0 ? "border-l border-[#E8EDF5] max-lg:border-l-0" : ""}`}>
                        <span className="grid h-[64px] w-[64px] shrink-0 place-items-center rounded-full bg-[#EDF4FF] text-[#0757F2]">
                            <Icon className="h-[31px] w-[31px]" strokeWidth={2.2} aria-hidden />
                        </span>
                        <span>
                            <span className="block text-[15px] font-[850] text-[#071333]">{title}</span>
                            <span className="mt-[8px] block text-[13.5px] font-[650] leading-[1.45] text-[#475569]">{description}</span>
                        </span>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

const CompareCell = ({ value }: { value: CompareRow["starter"] | CompareRow["growth"] }) => {
    if (value === "yes") {
        return (
            <span className="mx-auto grid h-[21px] w-[21px] place-items-center rounded-full bg-[#18B56B] text-white">
                <Check className="h-[13px] w-[13px]" strokeWidth={3} aria-hidden />
            </span>
        );
    }
    if (value === "no") return <span className="text-[22px] font-[700] text-[#9AA5B4]">–</span>;
    return (
        <span className="inline-flex items-center gap-[7px] text-[13px] font-[850] text-[#071333]">
            {value}
            <Info className="h-[15px] w-[15px] text-[#94A3B8]" strokeWidth={2.1} aria-hidden />
        </span>
    );
};

const CompareFeaturesSection = () => (
    <section className="bg-[#F8FAFF] px-[40px] py-[48px] font-['Inter',Arial,sans-serif] max-lg:px-[24px]">
        <div className="mx-auto max-w-[1310px]">
            <SectionTitle
                badge="What's Included"
                titleStart="Compare"
                titleBlue="Core Features"
                subtitle="Everything you need to run your restaurant. Choose the plan that fits your goals."
                Icon={SlidersHorizontal}
            />
            <div className="mt-[28px] overflow-hidden rounded-[14px] border border-[#E4EAF3] bg-white shadow-[0_16px_36px_rgba(15,23,42,0.045)]">
                <div className="grid min-h-[116px] grid-cols-[1.42fr_1.02fr_1.02fr] border-b border-[#E4EAF3] max-lg:grid-cols-1">
                    <div className="flex items-center gap-[18px] px-[30px]">
                        <span className="grid h-[44px] w-[44px] place-items-center rounded-[8px] border border-[#E7ECF5] bg-white text-[#071333]">
                            <SlidersHorizontal className="h-[22px] w-[22px]" strokeWidth={2.2} aria-hidden />
                        </span>
                        <span className="text-[24px] font-[850] text-[#071333]">Features</span>
                    </div>
                    <div className="flex items-center gap-[22px] border-l border-[#E4EAF3] px-[60px] max-lg:border-l-0">
                        <span className="grid h-[76px] w-[76px] place-items-center rounded-[14px] bg-[#EEF5FF] text-[#0757F2]">
                            <Rocket className="h-[42px] w-[42px]" strokeWidth={2.2} aria-hidden />
                        </span>
                        <div>
                            <p className="text-[19px] font-[850] text-[#071333]">Starter / Core POS</p>
                            <p className="mt-[8px] text-[35px] font-[850] tracking-[-0.05em] text-[#071333]">€79</p>
                            <p className="text-[14px] font-[800] text-[#071333]">/ month <span className="text-[#0757F2]">+ VAT</span></p>
                        </div>
                    </div>
                    <div className="relative flex items-center gap-[22px] border-l border-[#E4EAF3] bg-[#F7F9FD] px-[60px] max-lg:border-l-0">
                        <div className="absolute left-1/2 top-[-15px] h-[30px] min-w-[130px] -translate-x-1/2 rounded-full bg-[#0757F2] px-[20px] text-center text-[13px] font-[850] leading-[30px] text-white">
                            MOST POPULAR
                        </div>
                        <span className="grid h-[76px] w-[76px] place-items-center rounded-[14px] bg-[#EEF5FF] text-[#0757F2]">
                            <BarChart3 className="h-[43px] w-[43px]" strokeWidth={2.2} aria-hidden />
                        </span>
                        <div>
                            <p className="text-[19px] font-[850] text-[#071333]">Growth / CRM Plan</p>
                            <p className="mt-[8px] text-[35px] font-[850] tracking-[-0.05em] text-[#071333]">€149</p>
                            <p className="text-[14px] font-[800] text-[#071333]">/ month <span className="text-[#0757F2]">+ VAT</span></p>
                        </div>
                    </div>
                </div>
                {compareRows.map(({ title, description, Icon, new: isNew, starter, growth }) => (
                    <div key={title} className="grid min-h-[58px] grid-cols-[1.42fr_1.02fr_1.02fr] border-b border-[#E8EDF5] last:border-b-0 max-lg:grid-cols-1">
                        <div className="flex items-center gap-[22px] px-[30px] py-[10px]">
                            <Icon className="h-[27px] w-[27px] shrink-0 text-[#0757F2]" strokeWidth={2.2} aria-hidden />
                            <div>
                                <p className="text-[15px] font-[850] text-[#071333]">
                                    {title}
                                    {isNew && <span className="ml-[9px] rounded-[7px] bg-[#EEF5FF] px-[8px] py-[3px] text-[11px] font-[850] text-[#0757F2]">New</span>}
                                </p>
                                <p className="mt-[4px] text-[11.5px] font-[650] text-[#46556F]">{description}</p>
                            </div>
                        </div>
                        <div className="grid place-items-center border-l border-[#E8EDF5] py-[10px] max-lg:border-l-0">
                            <CompareCell value={starter} />
                        </div>
                        <div className="grid place-items-center border-l border-[#E8EDF5] bg-[#F7F9FD] py-[10px] max-lg:border-l-0">
                            <CompareCell value={growth} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mx-auto mt-[25px] grid min-h-[51px] max-w-[990px] grid-cols-[1.25fr_repeat(4,1fr)] items-center overflow-hidden rounded-[8px] bg-[#EEF5FF] px-[28px] max-lg:grid-cols-2 max-sm:grid-cols-1">
                <span className="flex items-center gap-[14px] text-[15px] font-[850] text-[#0757F2]">
                    <ShieldCheck className="h-[23px] w-[23px]" strokeWidth={2.2} aria-hidden />
                    All plans include:
                </span>
                {allPlansInclude.map((item) => (
                    <span key={item} className="flex items-center justify-center gap-[10px] border-l border-[#CFDAEC] px-[20px] text-[12px] font-[750] text-[#334155] max-lg:border-l-0">
                        <Check className="h-[15px] w-[15px] text-[#0757F2]" strokeWidth={2.5} aria-hidden />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    </section>
);

const BundleCard = ({ bundle }: { bundle: Bundle }) => (
    <article className={`relative flex min-h-[420px] flex-col rounded-[13px] border bg-white p-[29px] shadow-[0_14px_34px_rgba(15,23,42,0.045)] ${bundle.popular ? "border-[#0757F2]" : "border-[#E7ECF5]"}`}>
        {bundle.popular && (
            <div className="absolute left-1/2 top-[-12px] h-[29px] min-w-[141px] -translate-x-1/2 rounded-[7px] bg-[#0757F2] px-[16px] text-center text-[13px] font-[850] leading-[29px] text-white">
                MOST POPULAR
            </div>
        )}
        <div className="flex items-start gap-[20px]">
            <span className="grid h-[70px] w-[70px] shrink-0 place-items-center rounded-[13px] bg-[#EEF5FF] text-[#0757F2]">
                <bundle.icon className="h-[39px] w-[39px]" strokeWidth={2.2} aria-hidden />
            </span>
            <div>
                <h3 className="text-[22px] font-[850] tracking-[-0.035em] text-[#071333]">{bundle.title}</h3>
                <p className="mt-[8px] max-w-[215px] text-[14px] font-[650] leading-[1.55] text-[#334155]">{bundle.description}</p>
            </div>
        </div>
        <div className="mt-[26px] grid gap-[13px]">
            {bundle.features.map((feature) => (
                <span key={feature} className="flex items-center gap-[13px] text-[13.5px] font-[750] text-[#071333]">
                    <CheckDot />
                    {feature}
                </span>
            ))}
        </div>
        <div className="mt-auto border-t border-dashed border-[#DCE3EE] pt-[20px]">
            <p className="text-[37px] font-[850] leading-none tracking-[-0.055em] text-[#071333]">{bundle.price}</p>
            <p className="mt-[5px] text-[14px] font-[850] text-[#0757F2]">+ VAT</p>
            <button className={`mt-[15px] inline-flex h-[42px] w-full items-center justify-center gap-[15px] rounded-[6px] border text-[15px] font-[850] ${bundle.popular ? "border-[#0757F2] bg-[#0757F2] text-white" : "border-[#0B3D91] bg-white text-[#0757D8]"}`}>
                Add to Quote
                <ShoppingCart className="h-[19px] w-[19px]" strokeWidth={2.2} aria-hidden />
            </button>
        </div>
    </article>
);

const HardwareAddonsSection = () => (
    <section id="hardware" className="bg-[#F8FAFF] px-[40px] pb-[52px] pt-[42px] font-['Inter',Arial,sans-serif] max-lg:px-[24px]">
        <div className="mx-auto max-w-[1256px]">
            <div className="text-center">
                <Badge Icon={PackageCheck}>Hardware &amp; Setup Add-ons</Badge>
                <h2 className="mt-[18px] text-[clamp(36px,4.05vw,52px)] font-[850] leading-[1.08] tracking-[-0.055em] text-[#071333]">
                    Everything You Need to Get Started <span className="bg-gradient-to-r from-[#0D66FF] via-[#0757F2] to-[#0049D8] bg-clip-text text-transparent">Your Way.</span>
                </h2>
                <p className="mt-[14px] text-[18px] font-[650] tracking-[-0.02em] text-[#526079]">
                    Choose a ready-to-go bundle or pick what you need. All hardware works seamlessly with GPOS.
                </p>
            </div>

            <div className="mt-[43px] flex items-center justify-between">
                <h3 className="text-[22px] font-[850] text-[#071333]">Recommended Bundles</h3>
                <div className="flex items-center gap-[10px] text-[13px] font-[850] text-[#071333]">
                    <ShieldCheck className="h-[18px] w-[18px] text-[#0757F2]" strokeWidth={2.2} aria-hidden />
                    Pre-configured <span>•</span> Tested <span>•</span> Plug &amp; Play
                </div>
            </div>
            <div className="mt-[13px] grid gap-[30px] lg:grid-cols-3">
                {bundles.map((bundle) => (
                    <BundleCard key={bundle.title} bundle={bundle} />
                ))}
            </div>

            <div className="mt-[26px] grid gap-[18px] lg:grid-cols-[1.48fr_1fr]">
                <div className="rounded-[13px] border border-[#E7ECF5] bg-white p-[26px] shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
                    <h3 className="text-[19px] font-[850] text-[#071333]">Additional Hardware (Add-on)</h3>
                    <div className="mt-[21px] grid grid-cols-4 max-md:grid-cols-2">
                        {hardwareAddons.map(({ title, price, image }, index) => (
                            <div key={title} className={`flex items-center gap-[14px] px-[14px] first:pl-0 ${index > 0 ? "border-l border-[#DDE5F0] max-md:border-l-0" : ""}`}>
                                <img src={image} alt={title} className="h-[58px] w-[70px] object-contain" loading="lazy" decoding="async" />
                                <span>
                                    <span className="block whitespace-nowrap text-[12px] font-[800] text-[#071333]">{title}</span>
                                    <span className="mt-[8px] block text-[25px] font-[850] tracking-[-0.045em] text-[#071333]">{price}</span>
                                    <span className="block text-[13px] font-[850] text-[#0757F2]">+ VAT</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between rounded-[13px] border border-[#E7ECF5] bg-white p-[26px] shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
                    <div className="flex items-start gap-[18px]">
                        <span className="grid h-[48px] w-[48px] shrink-0 place-items-center rounded-[10px] bg-[#EEF5FF] text-[#0757F2]">
                            <Settings className="h-[27px] w-[27px]" strokeWidth={2.2} aria-hidden />
                        </span>
                        <div>
                            <h3 className="text-[19px] font-[850] text-[#071333]">Setup &amp; Onboarding</h3>
                            <div className="mt-[22px] grid gap-[12px] text-[12px] font-[750] text-[#334155]">
                                {["Hardware setup & configuration", "GPOS installation & testing", "Staff onboarding & basic training"].map((item) => (
                                    <span key={item} className="flex items-center gap-[12px]">
                                        <Check className="h-[15px] w-[15px] text-[#0757F2]" strokeWidth={2.5} aria-hidden />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[31px] font-[850] tracking-[-0.05em] text-[#071333]">€149</p>
                        <p className="mt-[7px] text-[13px] font-[850] text-[#0757F2]">+ VAT</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-[22px] grid min-h-[52px] max-w-[992px] grid-cols-3 items-center overflow-hidden rounded-[8px] bg-[#EEF5FF] px-[29px] max-md:grid-cols-1">
                {[
                    ["All hardware comes with 12-month warranty and local support.", ShieldCheck],
                    ["Fast shipping across the EU.", Truck],
                    ["30-day easy return.", ArrowLeft],
                ].map(([text, Icon], index) => {
                    const TypedIcon = Icon as LucideIcon;
                    return (
                        <span key={text as string} className={`flex items-center justify-center gap-[17px] px-[26px] text-[13px] font-[800] text-[#334155] ${index > 0 ? "border-l border-[#CFDAEC] max-md:border-l-0" : ""}`}>
                            <TypedIcon className="h-[22px] w-[22px] shrink-0 text-[#0757F2]" strokeWidth={2.2} aria-hidden />
                            {text as string}
                        </span>
                    );
                })}
            </div>
        </div>
    </section>
);

const RunWithLessChaosSection = () => (
    <section
        style={{ backgroundColor: "#07142F", fontFamily: "'Inter',Arial,sans-serif" }}
        className="relative overflow-hidden px-[40px] py-[64px] max-lg:px-[24px]"
    >
        <div
            className="pointer-events-none absolute left-[-80px] top-[-80px] h-[340px] w-[340px] rounded-full"
            style={{ background: "rgba(7,87,242,0.08)" }}
        />
        <div
            className="pointer-events-none absolute bottom-[-60px] right-[-60px] h-[280px] w-[280px] rounded-full"
            style={{ background: "rgba(7,87,242,0.06)" }}
        />
        <div className="relative mx-auto flex max-w-[1200px] items-center gap-[60px] max-lg:flex-col max-lg:text-center">
            <div className="flex-1">
                <p style={{ color: "#0757F2" }} className="text-[12.5px] font-[800] uppercase tracking-[0.12em]">
                    Ready to Simplify Your Operations?
                </p>
                <h2
                    style={{ color: "#ffffff" }}
                    className="mt-[20px] text-[clamp(36px,4vw,56px)] font-[850] leading-[1.08] tracking-[-0.04em]"
                >
                    Run Your Restaurant<br />
                    With <span style={{ color: "#0757F2" }}>Less Chaos.</span>
                </h2>
                <p style={{ color: "#8FA8C8" }} className="mt-[18px] max-w-[480px] text-[17px] font-[500] leading-[1.65] max-lg:mx-auto">
                    Join hundreds of restaurants using GPOS to save time, delight customers and grow revenue.
                </p>
                <div className="mt-[34px] flex flex-wrap gap-[14px] max-lg:justify-center">
                    <Link
                        to="/get_demo"
                        style={{ backgroundColor: "#0757F2", color: "#ffffff", boxShadow: "0 12px 28px rgba(7,87,242,0.30)" }}
                        className="inline-flex h-[54px] items-center justify-center gap-[10px] rounded-[9px] px-[28px] text-[16px] font-[800] no-underline"
                    >
                        <CalendarDays className="h-[19px] w-[19px]" strokeWidth={2.2} aria-hidden />
                        Book a Demo
                        <ArrowRight className="h-[19px] w-[19px]" strokeWidth={2.2} aria-hidden />
                    </Link>
                    <a
                        href="tel:+35311234567"
                        style={{ color: "#ffffff", border: "1.5px solid rgba(255,255,255,0.28)" }}
                        className="inline-flex h-[54px] items-center justify-center gap-[10px] rounded-[9px] bg-transparent px-[28px] text-[16px] font-[800] no-underline"
                    >
                        <Phone className="h-[19px] w-[19px]" strokeWidth={2.2} aria-hidden />
                        Contact Sales
                    </a>
                </div>
                <div className="mt-[36px] flex flex-wrap items-center gap-x-[28px] gap-y-[10px] max-lg:justify-center">
                    {["No commitment", "Personalized demo", "See GPOS in action", "Find the right plan"].map((label) => (
                        <span key={label} style={{ color: "#8FA8C8" }} className="flex items-center gap-[8px] text-[14px] font-[700]">
                            <CheckCircle2 style={{ color: "#0757F2" }} className="h-[16px] w-[16px] shrink-0" strokeWidth={2.3} aria-hidden />
                            {label}
                        </span>
                    ))}
                </div>
            </div>
            <div className="w-[440px] shrink-0 max-lg:w-full max-lg:max-w-[440px]">
                <img
                    src={faqPosVisual}
                    alt="GPOS POS terminal"
                    className="w-full object-contain"
                    style={{ filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.4))" }}
                />
            </div>
        </div>
    </section>
);

const faqItems = [
    {
        Icon: RotateCcw,
        question: "Can I upgrade or downgrade my plan anytime?",
        answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be applied from your next billing cycle.",
    },
    {
        Icon: CalendarDays,
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial on all plans so you can explore GPOS before committing. No credit card required.",
    },
    {
        Icon: Info,
        question: "Are there any setup fees?",
        answer: "There are no hidden setup fees on our software plans. Optional hardware bundles are available at a one-time cost.",
    },
    {
        Icon: CreditCard,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards, bank transfers, and direct debit (SEPA) for EU customers.",
    },
    {
        Icon: ShieldCheck,
        question: "Is my data secure?",
        answer: "Absolutely. All data is encrypted in transit and at rest. We are GDPR compliant and perform regular security audits.",
    },
    {
        Icon: Headphones,
        question: "Do you offer support?",
        answer: "Yes — every plan includes access to our support team via email and chat. Our Growth plan includes priority phone support.",
    },
    {
        Icon: PackageCheck,
        question: "Do the plans include hardware?",
        answer: "Software plans do not include hardware, but we offer full POS hardware bundles as optional add-ons. See the Hardware section above.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white px-[40px] pb-[0] pt-[64px] font-['Inter',Arial,sans-serif] max-lg:px-[24px]">
            <div className="mx-auto max-w-[1200px]">
                <div className="text-center">
                    <span className="inline-flex items-center gap-[7px] rounded-full border border-[#D6E4FF] bg-[#EDF4FF] px-[14px] py-[6px] text-[12.5px] font-[800] uppercase tracking-[0.1em] text-[#0757F2]">
                        FAQ
                    </span>
                    <h2 className="mt-[18px] text-[clamp(32px,3.6vw,48px)] font-[850] leading-[1.1] tracking-[-0.04em] text-[#071333]">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-[12px] text-[17px] font-[500] leading-[1.6] text-[#526079]">
                        Everything you need to know about GPOS pricing and plans.
                    </p>
                </div>

                <div className="mt-[44px] divide-y divide-[#E8EDF5] rounded-[16px] border border-[#E8EDF5] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
                    {faqItems.map(({ Icon, question, answer }, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={question}>
                                <button
                                    className="flex w-full items-center gap-[16px] px-[28px] py-[22px] text-left"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[10px] bg-[#EDF4FF] text-[#0757F2]">
                                        <Icon className="h-[19px] w-[19px]" strokeWidth={2.1} aria-hidden />
                                    </span>
                                    <span className="flex-1 text-[16px] font-[750] leading-[1.4] text-[#071333]">{question}</span>
                                    <ChevronDown
                                        className={`h-[20px] w-[20px] shrink-0 text-[#526079] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                        strokeWidth={2.2}
                                        aria-hidden
                                    />
                                </button>
                                {isOpen && (
                                    <div className="px-[28px] pb-[24px] pl-[82px] max-sm:pl-[28px]">
                                        <p className="text-[15px] font-[500] leading-[1.65] text-[#526079]">{answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-[44px] overflow-hidden rounded-[16px] border border-[#E8EDF5] bg-[#F8FAFF] shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
                    <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] divide-x divide-[#E8EDF5] max-lg:grid-cols-1 max-lg:divide-x-0 max-lg:divide-y max-lg:divide-[#E8EDF5]">
                        <div className="flex items-start gap-[16px] p-[28px]">
                            <span className="grid h-[48px] w-[48px] shrink-0 place-items-center rounded-full bg-[#0757F2] text-white">
                                <MessageCircle className="h-[24px] w-[24px]" strokeWidth={2.1} aria-hidden />
                            </span>
                            <div>
                                <p className="text-[16px] font-[800] text-[#071333]">Still have questions?</p>
                                <p className="mt-[6px] text-[13.5px] font-[500] leading-[1.55] text-[#526079]">Our team is here to help you find the perfect solution for your restaurant.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-[14px] p-[28px]">
                            <span className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#EDF4FF] text-[#0757F2]">
                                <Phone className="h-[19px] w-[19px]" strokeWidth={2.1} aria-hidden />
                            </span>
                            <div>
                                <p className="text-[13px] font-[800] uppercase tracking-[0.08em] text-[#526079]">Call Us</p>
                                <p className="mt-[5px] text-[15px] font-[800] text-[#071333]">+353 1 123 4567</p>
                                <p className="mt-[3px] text-[12.5px] font-[500] text-[#526079]">Mon – Fri 9AM – 6PM IST</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-[14px] p-[28px]">
                            <span className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#EDF4FF] text-[#0757F2]">
                                <Mail className="h-[19px] w-[19px]" strokeWidth={2.1} aria-hidden />
                            </span>
                            <div>
                                <p className="text-[13px] font-[800] uppercase tracking-[0.08em] text-[#526079]">Email Us</p>
                                <p className="mt-[5px] text-[15px] font-[800] text-[#071333]">demo@gposapp.com</p>
                                <p className="mt-[3px] text-[12.5px] font-[500] text-[#526079]">We reply within 1 business day</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-[14px] p-[28px]">
                            <span className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#EDF4FF] text-[#0757F2]">
                                <Clock className="h-[19px] w-[19px]" strokeWidth={2.1} aria-hidden />
                            </span>
                            <div>
                                <p className="text-[13px] font-[800] uppercase tracking-[0.08em] text-[#526079]">Business Hours</p>
                                <p className="mt-[5px] text-[15px] font-[800] text-[#071333]">Mon – Fri 9AM – 6PM IST</p>
                                <p className="mt-[3px] text-[12.5px] font-[500] text-[#526079]">Saturday: 10AM – 2PM IST</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[36px] grid grid-cols-4 items-center border-t border-[#E8EDF5] py-[28px] max-md:grid-cols-2 max-md:gap-y-[20px] max-sm:grid-cols-1">
                    {[
                        { Icon: UsersRound, label: "Trusted by 500+ Restaurants" },
                        { Icon: ShieldCheck, label: "Secure & Reliable Platform" },
                        { Icon: RotateCcw, label: "Regular Updates" },
                        { Icon: Headphones, label: "24/7 Customer Support" },
                    ].map(({ Icon, label }, index) => (
                        <div key={label} className={`flex items-center justify-center gap-[10px] ${index > 0 ? "border-l border-[#E8EDF5] max-md:border-l-0" : ""}`}>
                            <Icon className="h-[19px] w-[19px] shrink-0 text-[#0757F2]" strokeWidth={2.1} aria-hidden />
                            <span className="text-[14px] font-[750] text-[#334155]">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function PricingPage() {
    return (
        <div className="pricing-page w-full min-w-0 max-w-full overflow-x-clip bg-[#F8FAFC] text-[#071333]">
            <Navbar />
            <PricingHero />
            <SimplePlansSection />
            <CompareFeaturesSection />
            <HardwareAddonsSection />
            <RunWithLessChaosSection />
            <FaqSection />
            <Footer />
        </div>
    );
}
