import React from "react";
import type { LucideIcon } from "lucide-react";
import { BarChart3, ChefHat, Users, Zap } from "lucide-react";
import referenceVisual from "../assets/built-for-restaurant-operations-visual.png?url";

const NAVY = "#0B1F3A";
const EMERALD = "#00A86B";

type FeatureCard = {
    title: string;
    description: string;
    Icon: LucideIcon;
    iconBg: string;
    iconColor: string;
    /** Real HTML cards on the hero visual; % positions are relative to the image frame so art can be swapped. */
    overlay: {
        label: string;
        position: string;
        /** Hide pill on small screens (image only); show from `lg` up */
        hideBelowLg?: boolean;
    };
};

const featureCards: FeatureCard[] = [
    {
        title: "Fast Order Taking",
        description:
            "Quickly add items, manage modifiers, handle dine-in, takeaway, and delivery orders with a clean sales screen.",
        Icon: Zap,
        iconBg: "bg-[#00A86B]",
        iconColor: "text-white",
        overlay: {
            label: "Fast Order Taking",
            position:
                "left-[2%] top-2 max-w-[min(170px,42%)] sm:left-[3%] sm:top-2.5 sm:max-w-[38%] lg:left-[2.5%] lg:top-3",
            hideBelowLg: true,
        },
    },
    {
        title: "Kitchen Friendly Workflow",
        description:
            "Send orders to kitchen, manage running orders, reduce mistakes, and keep service moving during busy hours.",
        Icon: ChefHat,
        iconBg: "bg-[#F59E0B]",
        iconColor: "text-white",
        overlay: {
            label: "Kitchen workflow",
            position: "right-[2%] top-[34%] max-w-[min(200px,50%)] sm:right-[4%] sm:top-[38%] sm:max-w-[44%]",
            hideBelowLg: true,
        },
    },
    {
        title: "Smart Sales & Reports",
        description:
            "Track daily sales, popular items, payments, discounts, and end-day summaries with easy-to-read reports.",
        Icon: BarChart3,
        iconBg: "bg-[#2563EB]",
        iconColor: "text-white",
        overlay: {
            label: "Smart reports",
            position: "left-[2%] bottom-[26%] max-w-[min(200px,52%)] sm:left-[3%] sm:bottom-[28%] sm:max-w-[46%]",
        },
    },
    {
        title: "Staff & Customer Control",
        description:
            "Manage employees, attendance, customer records, loyalty, discounts, and order history from one system.",
        Icon: Users,
        iconBg: "bg-[#00A86B]",
        iconColor: "text-white",
        overlay: {
            label: "Staff & customers",
            position: "right-[2%] bottom-[16%] max-w-[min(210px,54%)] sm:right-[3%] sm:bottom-[18%] sm:max-w-[46%]",
        },
    },
];

function VisualOverlayPill({
    label,
    Icon,
    iconBg,
    iconColor,
    positionClass,
    hideBelowLg,
}: {
    label: string;
    Icon: LucideIcon;
    iconBg: string;
    iconColor: string;
    positionClass: string;
    hideBelowLg?: boolean;
}) {
    return (
        <div
            className={`absolute z-10 flex items-center gap-2 rounded-xl border border-white/90 bg-white/95 px-2.5 py-2 shadow-[0_12px_28px_-8px_rgba(15,23,42,0.25)] ring-1 ring-slate-900/[0.06] backdrop-blur-[2px] sm:gap-2.5 sm:rounded-2xl sm:px-3 sm:py-2.5 ${positionClass} ${hideBelowLg ? "hidden lg:flex" : ""}`}
            aria-hidden
        >
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg shadow-sm sm:h-9 sm:w-9 ${iconBg}`}>
                <Icon className={`h-4 w-4 sm:h-[18px] sm:w-[18px] ${iconColor}`} strokeWidth={2.2} />
            </div>
            <p className="min-w-0 text-[10px] font-bold leading-snug text-[#0B1F3A] sm:text-[11px]">{label}</p>
        </div>
    );
}

/** Left column: image + absolutely positioned HTML pills (same copy/colors as list); tweak `overlay.position` when art changes. */
function ReferencePosVisual() {
    return (
        <div className="relative flex h-full min-h-[280px] w-full sm:min-h-[300px] lg:min-h-0">
            <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-[#E8E6E1] shadow-[0_24px_56px_-16px_rgba(11,31,58,0.22),0_10px_28px_-10px_rgba(15,23,42,0.12)] ring-1 ring-black/[0.04] sm:min-h-[300px] lg:min-h-[min(100%,520px)]">
                <img
                    src={referenceVisual}
                    alt="GPOS order and menu screen on a touchscreen POS monitor at a restaurant counter"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={657}
                />
                <div className="pointer-events-none absolute inset-0 z-10">
                    {featureCards.map(({ title, Icon, iconBg, iconColor, overlay }) => (
                        <VisualOverlayPill
                            key={title}
                            label={overlay.label}
                            Icon={Icon}
                            iconBg={iconBg}
                            iconColor={iconColor}
                            positionClass={overlay.position}
                            hideBelowLg={overlay.hideBelowLg}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const BuiltForRestaurantOperationsSection: React.FC = () => {
    return (
        <div
            className="w-full bg-[#F8FAFC] pb-6 pt-16 font-[Inter,system-ui,sans-serif] sm:pb-8 sm:pt-20 lg:pb-10"
            role="region"
            aria-labelledby="built-for-real-ops-heading"
        >
            <div className="w-full max-w-none px-4 sm:px-6 lg:pl-[60px] lg:pr-10 xl:pr-14">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-14">
                    <ReferencePosVisual />

                    <div className="my-0 min-h-0 min-w-0 w-full py-0">
                        <p
                            className="mb-0 mt-0 text-[11px] font-extrabold uppercase tracking-[0.18em] sm:text-[12px]"
                            style={{ color: EMERALD }}
                        >
                            Built for Restaurants
                        </p>

                        <h2
                            id="built-for-real-ops-heading"
                            className="mt-2 text-[clamp(1.875rem,4.2vw,2.625rem)] font-bold leading-[1.15] tracking-[-0.035em]"
                            style={{ color: NAVY }}
                        >
                            <span className="relative inline-block border-b-[3px] pb-0.5" style={{ borderColor: EMERALD }}>
                                Built
                            </span>
                            <span> for Real Restaurant Operations</span>
                        </h2>

                        <p className="mt-3 mb-0 max-w-none text-[16px] leading-[1.6] text-slate-600 sm:text-[17px]">
                            GPOS is designed for busy restaurants, takeaways, cafés, and food businesses that need fast billing, smooth order
                            handling, clear reports, and simple staff control — all in one easy POS system.
                        </p>

                        <div className="mt-5 flex flex-col gap-3 sm:gap-3">
                            {featureCards.map(({ title, description, Icon, iconBg, iconColor }) => (
                                <article
                                    key={title}
                                    className="group rounded-2xl border border-slate-200/90 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-5"
                                >
                                    <div className="flex gap-4 sm:gap-5">
                                        <div
                                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg shadow-sm ${iconBg} sm:h-12 sm:w-12`}
                                            aria-hidden
                                        >
                                            <Icon className={`h-[22px] w-[22px] sm:h-6 sm:w-6 ${iconColor}`} strokeWidth={2.2} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-[17px] font-bold leading-snug tracking-tight sm:text-lg" style={{ color: NAVY }}>
                                                {title}
                                            </h3>
                                            <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">{description}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuiltForRestaurantOperationsSection;
