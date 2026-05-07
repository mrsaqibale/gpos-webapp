import React from "react";
import type { LucideIcon } from "lucide-react";
import {
    ClipboardCheck,
    LayoutGrid,
    PackageCheck,
    ReceiptText,
    ShieldCheck,
    UserRoundCheck,
} from "lucide-react";

const NAVY = "#0B1F3A";
/** Primary blue — matches pricing / features CTAs (`#0756D9`) */
const PRIMARY = "#0756D9";
const PRIMARY_SOFT = "rgba(7, 86, 217, 0.12)";

type FeatureItem = {
    title: string;
    description: string;
    Icon: LucideIcon;
};

const FEATURES: FeatureItem[] = [
    {
        title: "Table & Order Management",
        description:
            "Manage dine-in tables, takeaway orders, delivery orders, running orders, and completed sales from one screen.",
        Icon: LayoutGrid,
    },
    {
        title: "Quick Billing & Receipts",
        description:
            "Create bills faster, apply discounts, print receipts, split payments, and complete orders smoothly.",
        Icon: ReceiptText,
    },
    {
        title: "Menu & Inventory Control",
        description:
            "Add food items, categories, prices, variations, and stock details with simple management tools.",
        Icon: PackageCheck,
    },
    {
        title: "Customer Records & Loyalty",
        description:
            "Save customer details, view order history, manage loyalty, and improve repeat customer experience.",
        Icon: UserRoundCheck,
    },
    {
        title: "Employee Access Control",
        description:
            "Give staff only the permissions they need, including sales access, reports, voids, refunds, and settings control.",
        Icon: ShieldCheck,
    },
    {
        title: "Daily Closing Reports",
        description:
            "Close the day with cash summary, sales total, payment breakdown, and clear end-day reporting.",
        Icon: ClipboardCheck,
    },
];

const RestaurantNeedsOnePosSection: React.FC = () => {
    return (
        <div
            className="w-full bg-white py-20 font-[Inter,system-ui,sans-serif]"
            role="region"
            aria-labelledby="restaurant-needs-pos-heading"
        >
            <div className="mx-auto w-full max-w-[min(100%,1600px)] px-4 sm:px-6 lg:px-10 xl:px-14">
                <header className="mx-auto mb-14 w-full max-w-none text-center sm:mb-16">
                    <p
                        className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.28em] sm:text-[12px]"
                        style={{ color: PRIMARY }}
                    >
                        Powerful Features
                    </p>
                    <h2
                        id="restaurant-needs-pos-heading"
                        className="mx-auto w-full max-w-[min(100%,1200px)] text-balance text-[clamp(1.35rem,3.8vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.035em] sm:max-w-[min(100%,1280px)] sm:text-[clamp(1.5rem,3.4vw,3.35rem)] lg:max-w-none lg:text-[clamp(1.85rem,2.85vw,3.65rem)] xl:text-[clamp(2rem,2.6vw,3.85rem)]"
                        style={{ color: NAVY }}
                    >
                        Everything a Restaurant Needs in <span style={{ color: PRIMARY }}>One POS</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-slate-600 sm:text-lg">
                        From order taking to reporting, GPOS gives restaurant owners the tools they need to manage daily operations with
                        confidence.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
                    {FEATURES.map(({ title, description, Icon }) => (
                        <article
                            key={title}
                            className="group flex flex-col rounded-2xl border border-slate-200/95 bg-white p-7 shadow-[0_14px_40px_-28px_rgba(11,31,58,0.35)] transition-all duration-300 hover:border-slate-300/95 hover:shadow-[0_24px_50px_-20px_rgba(11,31,58,0.22)] sm:p-8"
                        >
                            <div className="flex flex-row items-center gap-4">
                                <span
                                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-[#0756D9]/15"
                                    style={{ backgroundColor: PRIMARY_SOFT }}
                                    aria-hidden
                                >
                                    <Icon className="h-7 w-7" strokeWidth={2} style={{ color: PRIMARY }} />
                                </span>
                                <h3
                                    className="min-w-0 flex-1 text-left text-[1.0625rem] font-bold leading-snug tracking-tight sm:text-[1.125rem]"
                                    style={{ color: PRIMARY }}
                                >
                                    {title}
                                </h3>
                            </div>
                            <p className="mt-5 flex-1 text-left text-[15px] leading-[1.65] text-slate-600">{description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantNeedsOnePosSection;
