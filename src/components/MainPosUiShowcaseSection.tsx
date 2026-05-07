import React from 'react';
import {
    BarChart3,
    Bolt,
    ChefHat,
    ClipboardList,
    Cloud,
    ShieldCheck,
    ShoppingCart,
    ThumbsUp,
    Users,
} from 'lucide-react';
import businessInsightsIcon from '../assets/main-pos-business-insights-icon.png';
import mainPosShowcaseCrop from '../assets/main-pos-ui-showcase-device-crop.png';

const leftItems = [
    ['Smart POS & Billing', 'Fast billing, multiple payment options and secure transactions.', ShoppingCart],
    ['Kitchen & Order Management', 'Send orders to kitchen in real-time and track preparation.', ChefHat],
    ['Menu & Modifier Management', 'Create and update menus, variants and add-ons easily.', ClipboardList],
    ['Customer Database', 'Keep customer data safe and build strong relationships.', Users],
    ['Reports & Analytics', 'Real-time insights to help you make better decisions.', BarChart3],
] as const;

const bottomItems = [
    ['Real-Time Business Insights', 'Track sales, orders, and performance anytime, anywhere.', BarChart3, 'outline'],
    ['Lightning Fast Billing', 'Bill in seconds and serve more customers.', Bolt, 'solid'],
    ['Works Online & Offline', 'Keep your business running always.', Cloud, 'outline'],
    ['Secure & Reliable', 'Your data is safe with us.', ShieldCheck, 'solid'],
    ['Easy to Use', 'Simple interface, powerful results.', ThumbsUp, 'solid'],
] as const;

function LeftFeatureItem({
    title,
    desc,
    Icon,
}: {
    title: string;
    desc: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;
}) {
    return (
        <article className="flex items-start gap-[17px]">
            <span className="grid h-[55px] w-[55px] shrink-0 place-items-center rounded-[11px] border border-[#E5ECFB] bg-[#F5F8FF] text-[#0B56EA] shadow-[0_10px_24px_rgba(4,55,145,0.04)]">
                <Icon className="h-[28px] w-[28px]" strokeWidth={2.4} aria-hidden />
            </span>
            <div className="pt-[2px]">
                <h3 className="text-[16px] font-extrabold leading-[1.25] text-[#07142F]">{title}</h3>
                <p className="mt-[6px] max-w-none text-[14px] font-medium leading-[1.5] text-[#27344E] sm:whitespace-nowrap">{desc}</p>
            </div>
        </article>
    );
}

function BottomCard({
    title,
    desc,
    Icon,
    variant,
    index,
}: {
    title: string;
    desc: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number; fill?: string; 'aria-hidden'?: boolean }>;
    variant: string;
    index: number;
}) {
    const featured = index === 0;

    return (
        <article
            className={`flex min-h-[90px] items-center gap-[16px] px-[18px] py-[18px] ${
                index > 0 ? 'lg:border-l lg:border-[#E4E9F3]' : ''
            } ${featured ? 'rounded-[10px] bg-[#F6F9FF]' : ''}`}
        >
            {featured ? (
                <img
                    src={businessInsightsIcon}
                    alt=""
                    className="h-[76px] w-[76px] shrink-0 object-contain"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                />
            ) : (
                <span
                    className={`grid h-[55px] w-[55px] shrink-0 place-items-center rounded-full ${
                        variant === 'solid'
                            ? 'bg-[#0A55F5] text-white shadow-[0_10px_22px_rgba(10,85,245,0.18)]'
                            : 'border border-[#DDE7F8] bg-white text-[#0A55F5]'
                    }`}
                >
                    <Icon className="h-[27px] w-[27px]" strokeWidth={2.2} aria-hidden />
                </span>
            )}
            <div>
                <h3 className="whitespace-nowrap text-[15px] font-extrabold leading-[1.2] text-[#07142F]">{title}</h3>
                <p className="mt-[7px] text-[13px] font-medium leading-[1.45] text-[#40506B]">{desc}</p>
            </div>
        </article>
    );
}

function DashboardShell() {
    return (
        <div className="relative min-h-[520px]">
            <img
                src={mainPosShowcaseCrop}
                alt="GPOS dashboard and mobile order UI"
                className="absolute right-[-8px] top-[18px] h-auto w-[min(100%,980px)] object-contain"
                loading="lazy"
                decoding="async"
            />
        </div>
    );
}

const MainPosUiShowcaseSection: React.FC = () => {
    return (
        <section
            className="overflow-x-clip bg-[#F8FAFE] py-[21px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F]"
            style={{ paddingLeft: 20, paddingRight: 20 }}
        >
            <div className="mx-auto max-w-[1466px]">
                <div className="mt-[8px] grid items-start gap-[28px] lg:mt-[10px] lg:grid-cols-[570px_minmax(0,1fr)] lg:gap-[12px]">
                    <div className="pt-[8px]">
                        <span className="inline-flex rounded-full border border-[#E4EAF7] bg-[#F4F7FF] px-[19px] py-[8px] text-[16px] font-extrabold leading-none text-[#0649C9]">
                            Powerful. Simple. All-in-One.
                        </span>

                        <h2 className="mt-[25px] text-[clamp(29px,8vw,45px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#07142F]">
                            <span className="block whitespace-nowrap">Everything You Need,</span>
                            <span className="block whitespace-nowrap">
                                All in <span className="text-[#0B56EA]">One Place</span>
                            </span>
                        </h2>

                        <p className="mt-[18px] max-w-[500px] text-[17px] font-medium leading-[1.5] text-[#26334C]">
                            From orders and payments to kitchen management and reports - GPOS gives you complete control of your
                            restaurant operations.
                        </p>

                        <div className="mt-[24px] space-y-[22px]">
                            {leftItems.map(([title, desc, Icon]) => (
                                <LeftFeatureItem key={title} title={title} desc={desc} Icon={Icon} />
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <DashboardShell />
                    </div>
                    <div className="lg:hidden">
                        <img
                            src={mainPosShowcaseCrop}
                            alt="GPOS dashboard and mobile order UI"
                            className="h-auto w-full object-contain"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                <div className="mt-[26px] rounded-[13px] border border-[#E4EAF6] bg-white px-[12px] py-[14px] shadow-[0_15px_36px_rgba(15,23,42,0.05)]">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,minmax(235px,1fr))] lg:gap-0">
                        {bottomItems.map(([title, desc, Icon, variant], index) => (
                            <BottomCard key={title} title={title} desc={desc} Icon={Icon} variant={variant} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPosUiShowcaseSection;
