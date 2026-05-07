import React from 'react';
import {
    BarChart3,
    Presentation,
    Zap,
    ChefHat,
    ClipboardList,
    Cloud,
    ShieldCheck,
    ShoppingCart,
    ThumbsUp,
    Users,
} from 'lucide-react';
import posLcdMobileCropped from '../assets/pos-lcd-mobile-only-crop.png';

const leftItems = [
    {
        title: 'Smart POS & Billing',
        desc: 'Fast billing, multiple payment options and secure transactions.',
        Icon: ShoppingCart,
    },
    {
        title: 'Kitchen & Order Management',
        desc: 'Send orders to kitchen in real-time and track preparation.',
        Icon: ChefHat,
    },
    {
        title: 'Menu & Modifier Management',
        desc: 'Create and update menus, variants and add-ons easily.',
        Icon: ClipboardList,
    },
    {
        title: 'Customer Database',
        desc: 'Keep customer data safe and build strong relationships.',
        Icon: Users,
    },
    {
        title: 'Reports & Analytics',
        desc: 'Real-time insights to help you make better decisions.',
        Icon: BarChart3,
    },
] as const;

const bottomItems = [
    {
        title: 'Real-Time Business Insights',
        desc: 'Track sales, orders, and performance anytime, anywhere.',
        Icon: Presentation,
        featured: true,
    },
    {
        title: 'Lightning Fast Billing',
        desc: 'Bill in seconds and serve more customers.',
        Icon: Zap,
        solidIcon: true,
    },
    {
        title: 'Works Online & Offline',
        desc: 'Keep your business running always.',
        Icon: Cloud,
        solidIcon: true,
    },
    {
        title: 'Secure & Reliable',
        desc: 'Your data is safe with us.',
        Icon: ShieldCheck,
        solidIcon: true,
    },
    {
        title: 'Easy to Use',
        desc: 'Simple interface, powerful results.',
        Icon: ThumbsUp,
        solidIcon: true,
    },
] as const;

function SectionLabel() {
    return null;
}

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
        <article className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] border border-[#dfe8ff] bg-[#f1f5ff] text-[#1653d9]">
                <Icon className="h-[17px] w-[17px]" strokeWidth={1.95} aria-hidden />
            </span>
            <div>
                <h3 className="text-[16px] font-bold leading-[1.2] text-[#0a1a3b]">{title}</h3>
                <p className="mt-1 text-[14px] leading-[1.45] text-[#4d5971]">{desc}</p>
            </div>
        </article>
    );
}

function BottomFeatureCard({
    title,
    desc,
    Icon,
    featured,
    solidIcon,
    showDivider,
}: {
    title: string;
    desc: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;
    featured?: boolean;
    solidIcon?: boolean;
    showDivider?: boolean;
}) {
    return (
        <article
            className={`h-full px-[10px] py-[8px] ${showDivider ? 'lg:border-r lg:border-[#e4ebf8]' : ''}`}
        >
            <div className={`h-full rounded-[10px] px-2.5 py-2 ${featured ? 'bg-[#eef4ff]' : 'bg-transparent'}`}>
                <div className="flex items-start gap-2.5">
                    {solidIcon ? (
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1f57db] text-white shadow-[0_3px_10px_rgba(30,86,218,0.2)]">
                            <Icon className="h-[16px] w-[16px]" strokeWidth={2.1} aria-hidden />
                        </span>
                    ) : (
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e8eef9] bg-white text-[#1e56da] shadow-[0_3px_10px_rgba(30,86,218,0.12)]">
                            <Icon className="h-[17px] w-[17px]" strokeWidth={1.95} aria-hidden />
                        </span>
                    )}
                    <div>
                        <h3
                            className={`font-bold leading-[1.22] ${featured ? 'whitespace-nowrap text-[13px] text-[#1f57db]' : 'text-[14px] text-[#0b1b3b]'
                                }`}
                        >
                            {title}
                        </h3>
                        <p className="mt-0.5 text-[12px] leading-[1.35] text-[#51607a]">{desc}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

const MainPosUiShowcaseSection: React.FC = () => {
    return (
        <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#f5f9ff_56%,#f2f7ff_100%)] px-[clamp(20px,2.45vw,38px)] py-[26px] font-['Poppins',Inter,Arial,sans-serif] text-[#07112e]">
            <div className="mx-auto max-w-[1460px]">
                <div className="rounded-[18px] border border-[#dde6f6] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-[14px] shadow-[0_14px_36px_rgba(15,23,42,0.05)] lg:p-[18px]">
                    <SectionLabel />

                    <div className="mt-4 grid gap-[20px] lg:grid-cols-[36%_64%]">
                        <div>
                            <span className="inline-flex rounded-full bg-[#edf3ff] px-4 py-1.5 text-[13px] font-semibold text-[#2e5fd9]">
                                Powerful. Simple. All-in-One.
                            </span>

                            <h2 className="mt-3 text-[clamp(32px,3vw,52px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#081733]">
                                <span className="block whitespace-nowrap">Everything You Need,</span>
                                <span className="block whitespace-nowrap">
                                    All in <span className="text-[#1151de]">One Place</span>
                                </span>
                            </h2>

                            <p className="mt-3 text-[18px] leading-[1.5] text-[#3d4860]">
                                From orders and payments to kitchen management and reports - GPOS gives you complete control of your
                                restaurant operations.
                            </p>

                            <div className="mt-5 space-y-3.5">
                                {leftItems.map(({ title, desc, Icon }) => (
                                    <LeftFeatureItem key={title} title={title} desc={desc} Icon={Icon} />
                                ))}
                            </div>
                        </div>

                        <div className="min-w-0">
                            <img
                                src={posLcdMobileCropped}
                                alt="GPOS dashboard and mobile order UI"
                                className="h-[290px] w-full object-contain sm:h-[370px] lg:h-[485px]"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>

                    <div className="mt-4 rounded-[12px] border border-[#e7edf8] bg-[#f9fbff]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                            {bottomItems.map(({ title, desc, Icon, featured, solidIcon }, index) => (
                                <BottomFeatureCard
                                    key={title}
                                    title={title}
                                    desc={desc}
                                    Icon={Icon}
                                    featured={featured}
                                    solidIcon={solidIcon}
                                    showDivider={index < bottomItems.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPosUiShowcaseSection;
