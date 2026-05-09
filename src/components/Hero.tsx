import React from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
    BarChart3,
    CalendarDays,
    CheckCircle2,
    CirclePlay,
    Headphones,
    Rocket,
    ShieldCheck,
    Star,
    UsersRound,
    Zap,
} from 'lucide-react';
import posSetup from '../assets/home-premium-pos-setup-transparent.png';

type HeroProps = {
    onGetStartedClick?: () => void;
};

type MiniFeature = {
    title: string;
    description: string;
    Icon: LucideIcon;
};

const featureCards: MiniFeature[] = [
    {
        title: 'Faster Billing',
        description: 'Bill in seconds and serve more customers',
        Icon: Zap,
    },
    {
        title: 'Kitchen & Staff Control',
        description: 'Assign roles, track tasks and improve efficiency',
        Icon: UsersRound,
    },
    {
        title: 'Reports & Insights',
        description: 'Real-time reports to grow your business',
        Icon: BarChart3,
    },
];

const trustItems: MiniFeature[] = [
    {
        title: 'Trusted by 5000+ Businesses',
        description: 'Food Businesses',
        Icon: ShieldCheck,
    },
    {
        title: 'Easy Setup',
        description: 'Go live in minutes',
        Icon: Rocket,
    },
    {
        title: 'Free Onboarding',
        description: 'We help you get started',
        Icon: Headphones,
    },
    {
        title: 'Secure & Reliable',
        description: 'Your data is always safe',
        Icon: CheckCircle2,
    },
];

const iconStroke = 2.45;
const heroIconTone = 'text-[#0B56EA]';
const softBlueIconBox =
    'grid place-items-center bg-[#F0F5FF]/88 text-[#0B56EA] shadow-[0_14px_28px_rgba(33,85,255,0.08),inset_0_1px_0_rgba(255,255,255,0.98)] backdrop-blur-sm';
const softGreenIconBox =
    'grid place-items-center bg-[#E6F8EF]/90 text-[#0D9A58] shadow-[0_14px_28px_rgba(13,154,88,0.10),inset_0_1px_0_rgba(255,255,255,0.98)] backdrop-blur-sm';

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
    return (
        <section className="relative overflow-hidden bg-white pt-[4px] font-['Inter','Poppins',Arial,sans-serif] text-[#0F172A]">
            <div className="pointer-events-none absolute right-[-9%] top-[-16%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(33,85,255,0.15)_0%,rgba(33,85,255,0.08)_42%,rgba(33,85,255,0)_70%)] blur-2xl" />
            <div className="pointer-events-none absolute left-[-14%] top-[18%] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(33,85,255,0.08)_0%,rgba(33,85,255,0)_68%)] blur-2xl" />
            <div className="relative mx-auto grid min-h-[556px] w-full max-w-[1536px] grid-cols-1 items-start gap-7 px-[clamp(20px,3.6vw,56px)] pb-[8px] pt-0 lg:h-[556px] lg:min-h-[556px] lg:grid-cols-[0.98fr_1.02fr] lg:gap-[36px]">
                <div className="relative z-10 max-w-[620px] pt-0 lg:ml-[12px] xl:ml-[18px]">
                    <div className="inline-flex h-[34px] items-center gap-2.5 rounded-full border border-[#E2E8F0] bg-[#F1F6FF]/95 px-[13px] text-[14px] font-semibold tracking-[-0.01em] text-[#1749D7] shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
                        <Star className={`h-[16px] w-[16px] ${heroIconTone}`} strokeWidth={iconStroke} aria-hidden />
                        Built For Modern Food Businesses
                    </div>

                    <h1 className="mt-[17px] font-['Inter','Poppins',Arial,sans-serif] text-[clamp(36px,3.75vw,52px)] font-[850] leading-[1.03] tracking-[-0.052em] text-[#080B1F]">
                        <span className="block whitespace-nowrap">More Speed.</span>
                        <span className="block whitespace-nowrap">More Control.</span>
                        <span className="block whitespace-nowrap bg-gradient-to-r from-[#2155FF] via-[#0B63F6] to-[#0048D9] bg-clip-text text-transparent">
                            More Profit.
                        </span>
                    </h1>

                    <p className="mt-[13px] max-w-[560px] text-[16px] font-normal leading-[1.45] tracking-[-0.018em] text-[#334155]">
                        Manage billing, orders, kitchen, staff and reports in one powerful POS system.
                    </p>

                    <div className="mt-[19px] flex flex-wrap items-center gap-[16px]">
                        <button
                            type="button"
                            onClick={onGetStartedClick}
                            className="inline-flex h-[52px] min-w-[180px] items-center justify-center gap-[12px] rounded-[12px] bg-gradient-to-br from-[#2155FF] via-[#0D55F2] to-[#0047D5] px-[22px] text-white shadow-[0_18px_36px_rgba(33,85,255,0.25),inset_0_1px_0_rgba(255,255,255,0.25)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_42px_rgba(33,85,255,0.30)]"
                        >
                            <CalendarDays className="h-[22px] w-[22px] shrink-0" strokeWidth={2.45} aria-hidden />
                            <span className="text-[16px] font-[800] leading-none tracking-[-0.02em]">Book a Demo</span>
                        </button>

                        <Link
                            to="/get_demo"
                            className="inline-flex h-[52px] min-w-[170px] items-center justify-center gap-[12px] rounded-[12px] border border-[#D7DEE9] bg-white px-[22px] text-[#0F172A] no-underline shadow-[0_14px_28px_rgba(15,23,42,0.055),inset_0_1px_0_rgba(255,255,255,0.95)] transition hover:border-[#BFCBE0] hover:shadow-[0_18px_34px_rgba(15,23,42,0.075)]"
                        >
                            <CirclePlay className={`h-[25px] w-[25px] shrink-0 ${heroIconTone}`} strokeWidth={2.45} aria-hidden />
                            <span className="text-[16px] font-[800] leading-none tracking-[-0.02em]">Watch Demo</span>
                        </Link>
                    </div>

                    <div className="mt-[22px] grid max-w-[610px] grid-cols-3 gap-0 rounded-[18px] max-sm:grid-cols-1 max-sm:gap-4">
                        {featureCards.map(({ title, description, Icon }, index) => (
                            <article
                                key={title}
                                className={`px-[22px] first:pl-0 last:pr-0 max-sm:px-0 ${
                                    index > 0 ? 'border-l border-[#E2E8F0] max-sm:border-l-0' : ''
                                }`}
                            >
                                <span className={`${softBlueIconBox} h-[50px] w-[50px] rounded-[13px]`}>
                                    <Icon className="h-[24px] w-[24px]" strokeWidth={iconStroke} aria-hidden />
                                </span>
                                <h3 className="mt-[12px] text-[14px] font-[800] leading-[1.24] tracking-[-0.016em] text-[#0F172A]">
                                    {title}
                                </h3>
                                <p className="mt-[6px] text-[12px] font-medium leading-[1.38] tracking-[-0.01em] text-[#475569]">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 min-h-[450px] pr-0 lg:min-h-[490px] lg:pr-[148px] lg:pt-[8px]">
                    <img
                        src={posSetup}
                        alt="Premium GPOS desktop monitor, receipt printer, cash drawer, and card machine showing a restaurant POS dashboard"
                        className="relative z-10 ml-0 block h-auto w-full max-w-[560px] object-contain drop-shadow-[0_30px_55px_rgba(15,23,42,0.18)]"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                    />

                    <div className="absolute right-[6px] top-[106px] z-20 w-[176px] -translate-y-1 rounded-[15px] border border-[#E2E8F0] bg-white px-[17px] py-[18px] shadow-[0_30px_64px_rgba(15,23,42,0.16),0_10px_22px_rgba(33,85,255,0.10),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-white/70 max-xl:right-[0px] max-lg:right-[28px] max-lg:top-[58%] max-md:w-[176px]">
                        <span className={`${softGreenIconBox} h-[48px] w-[48px] rounded-full`}>
                            <UsersRound className="h-[24px] w-[24px]" strokeWidth={iconStroke} aria-hidden />
                        </span>
                        <p className="mt-[17px] text-[15px] font-[800] leading-none tracking-[-0.02em] text-[#117346]">Repeat Customers</p>
                        <p className="mt-[11px] text-[31px] font-[850] leading-none tracking-[-0.04em] text-[#0E8A52]">2.7x</p>
                        <p className="mt-[10px] text-[12px] font-medium leading-[1.4] tracking-[-0.01em] text-[#334155]">
                            More repeat orders with GPOS CRM
                        </p>
                        <svg className="mt-[13px] h-[42px] w-full" viewBox="0 0 160 52" fill="none" aria-hidden>
                            <path d="M0 44L22 34L42 43L63 31L82 39L105 24L126 31L160 8" stroke="#0E8A52" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0 44L22 34L42 43L63 31L82 39L105 24L126 31L160 8V52H0V44Z" fill="url(#repeatGradient)" opacity="0.24" />
                            <defs>
                                <linearGradient id="repeatGradient" x1="80" x2="80" y1="8" y2="52" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0E8A52" />
                                    <stop offset="1" stopColor="#0E8A52" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[clamp(20px,3.6vw,56px)] pb-[32px]">
                <div className="grid min-h-[104px] grid-cols-4 items-center rounded-[18px] border border-[#E2E8F0] bg-white/92 shadow-[0_20px_42px_rgba(15,23,42,0.055),inset_0_1px_0_rgba(255,255,255,0.95)] max-lg:grid-cols-2 max-lg:gap-y-5 max-lg:p-5 max-sm:grid-cols-1">
                    {trustItems.map(({ title, description, Icon }, index) => (
                        <article
                            key={title}
                            className={`flex items-center gap-[17px] px-[34px] ${
                                index > 0 ? 'border-l border-[#E2E8F0] max-lg:border-l-0' : ''
                            }`}
                        >
                            <span className={`${softBlueIconBox} h-[54px] w-[54px] shrink-0 rounded-full`}>
                                <Icon className="h-[27px] w-[27px]" strokeWidth={iconStroke} aria-hidden />
                            </span>
                            <span>
                                <span className="block text-[15px] font-[800] leading-[1.25] tracking-[-0.018em] text-[#0F172A]">
                                    {title}
                                </span>
                                <span className="mt-[6px] block text-[13px] font-medium leading-[1.25] tracking-[-0.01em] text-[#475569]">
                                    {description}
                                </span>
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
