import React from 'react';
import { Link } from 'react-router-dom';
import {
    Archive,
    ArrowRight,
    ArrowUp,
    CalendarDays,
    CheckCircle,
    Cloud,
    Flame,
    MonitorSmartphone,
    ShieldCheck,
    Star,
    UserRound,
} from 'lucide-react';
import ScheduleDemoForm from './ScheduleDemoForm';
/** `?url` resolves to a fresh URL when the file changes (avoids stale bundled image in dev). */
import runYourRestaurantScreen from '../assets/run-your-restaurant-screen.png?url';

const featureItems = [
    {
        title: 'All POS Features',
        description: 'Everything you need to run your restaurant smoothly.',
        Icon: MonitorSmartphone,
    },
    {
        title: 'Reports',
        description: 'Track stock, sales & performance in real time.',
        Icon: Archive,
    },
    {
        title: 'Staff Management',
        description: 'Manage roles, shifts and permissions effortlessly.',
        Icon: UserRound,
    },
    {
        title: 'Free Updates',
        description: 'Get the latest features and improvements at no extra cost.',
        Icon: Cloud,
    },
];

const trustItems = [
    { label: 'Secure & Reliable', Icon: ShieldCheck },
    { label: 'Cloud Based', Icon: Cloud },
    { label: '24/7 Support', Icon: CheckCircle },
    { label: 'Built for Restaurants', Icon: Archive },
];

const PricingDemoSection: React.FC = () => {
    return (
        <section className="relative min-w-0 overflow-x-clip overflow-hidden bg-[#F8FBFF] py-12 px-3 sm:px-3 sm:pr-1 lg:py-16 lg:pl-4 lg:pr-0">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_18%_30%,rgba(37,99,235,0.1),transparent_32%)]" />

            <div className="relative mx-auto w-full px-3 lg:px-3 2xl:px-16">
                <div className="grid min-w-0 grid-cols-1 items-stretch gap-7 lg:grid-cols-[minmax(0,13fr)_minmax(0,7fr)]">
                    <article className="relative flex min-h-0 flex-col overflow-hidden rounded-[30px] border border-[#DDE8F7] bg-[linear-gradient(115deg,#FFFFFF_0%,#FFFFFF_42%,#F2F7FF_100%)] shadow-[0_26px_70px_rgba(15,23,42,0.1)] lg:h-full">
                        {/* Taller hero; bottom padding is covered by overlapping feature card (no gap). */}
                        <div className="relative z-10 grid min-h-0 grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] items-stretch gap-2 px-2 pb-2 pt-3 sm:min-h-0 sm:gap-3 sm:px-3 sm:pb-3 sm:pt-4 md:min-h-[560px] md:grid-cols-[1.22fr_0.78fr] md:gap-4 md:px-0 md:pb-0 md:pl-6 md:pt-0 md:pr-0 lg:min-h-[720px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-5 lg:pl-10 lg:pr-0 xl:min-h-[740px]">
                            <div className="relative z-20 flex h-full min-h-0 w-full max-w-none flex-col pr-0.5 md:pr-4 lg:pr-6">
                                <span className="mx-auto mt-0 inline-flex w-fit max-w-full items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#0756D9] px-2.5 py-1.5 text-[9px] font-extrabold leading-tight text-white shadow-[0_8px_20px_rgba(7,86,217,0.22)] sm:mt-2 sm:gap-1.5 sm:px-3 sm:py-2 sm:text-[10px] md:mx-0 md:mt-6 md:gap-2 md:px-5 md:py-2.5 md:text-[13px] lg:mt-8 lg:gap-2 lg:px-4 lg:py-2 lg:text-[12px] xl:gap-2.5 xl:px-5 xl:py-2.5 xl:text-[13px]">
                                    <Star className="h-3 w-3 shrink-0 fill-white/90 text-white sm:h-3.5 sm:w-3.5 md:h-5 md:w-5 lg:h-4 lg:w-4" strokeWidth={2.2} aria-hidden />
                                    <Flame className="h-3 w-3 shrink-0 fill-white/20 text-white sm:h-3.5 sm:w-3.5 md:h-5 md:w-5 lg:h-4 lg:w-4" strokeWidth={2.4} aria-hidden />
                                    <span className="min-w-0">Most Popular Choice for Restaurants</span>
                                </span>

                                <div className="mt-3 flex flex-wrap items-end gap-1 leading-none sm:mt-5 md:mt-9 md:gap-0">
                                    <span className="text-[38px] font-black tracking-[-0.06em] text-[#061536] sm:text-[48px] md:text-[78px] lg:text-[88px] xl:text-[96px]">
                                        €79
                                    </span>
                                    <span className="mb-0.5 text-[12px] font-black text-[#061536] sm:mb-1 sm:text-[14px] md:mb-3 md:ml-3 md:text-[25px] lg:mb-2 lg:text-[22px] xl:mb-2.5 xl:text-[26px]">
                                        /month
                                    </span>
                                </div>

                                <p className="mt-2 max-w-none text-[11px] leading-[1.45] text-[#4B5565] sm:mt-3 sm:text-[13px] md:mt-5 md:text-base lg:text-[15px] xl:text-[16px]">
                                    No contracts. No hidden fees. Cancel anytime.
                                </p>

                                <div className="mt-6 flex w-full min-w-0 max-w-full flex-row flex-nowrap items-center justify-center gap-1 sm:mt-7 sm:gap-1.5 md:mt-10 md:justify-start md:gap-3">
                                    <Link
                                        to="/get_demo#schedule-demo-form"
                                        className="inline-flex h-9 min-h-[36px] min-w-[98px] items-center justify-center gap-0.5 rounded-[10px] bg-[#0756D9] px-1.5 text-[9px] font-extrabold leading-tight text-white no-underline shadow-[0_12px_24px_rgba(7,86,217,0.22)] transition hover:bg-[#064BBC] sm:h-10 sm:min-w-[112px] sm:gap-1 sm:px-2 sm:text-[10px] md:h-[58px] md:min-w-0 md:gap-2 md:px-6 md:text-[16px] lg:h-[44px] lg:max-w-[184px] lg:gap-1.5 lg:px-4 lg:text-[13px] xl:h-[46px] xl:max-w-[196px] xl:px-4 xl:text-[14px]"
                                    >
                                        <span className="text-center leading-tight">Book demo</span>
                                        <ArrowRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5 md:h-5 md:w-5 lg:h-4 lg:w-4" aria-hidden />
                                    </Link>

                                    <Link
                                        to="/restaurant_pos"
                                        className="inline-flex h-9 min-h-[36px] min-w-[98px] items-center justify-center gap-0.5 rounded-[10px] border-2 border-[#0756D9] bg-white px-1.5 text-[9px] font-extrabold leading-tight text-[#0756D9] no-underline shadow-[0_10px_20px_rgba(15,23,42,0.04)] transition hover:bg-[#F7FBFF] sm:h-10 sm:min-w-[112px] sm:gap-1 sm:px-2 sm:text-[10px] md:h-[58px] md:min-w-0 md:gap-2 md:px-6 md:text-[16px] lg:h-[44px] lg:max-w-[184px] lg:gap-1.5 lg:px-4 lg:text-[13px] xl:h-[46px] xl:max-w-[196px] xl:px-4 xl:text-[14px]"
                                    >
                                        <span className="text-center leading-tight">View Features</span>
                                        <ArrowRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5 md:h-5 md:w-5 lg:h-4 lg:w-4" aria-hidden />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative z-10 flex h-full min-h-0 min-w-0 w-full flex-col items-center justify-center bg-transparent pb-0 pt-0 md:justify-center md:pt-0">
                                <div className="flex h-full min-h-0 w-full max-w-full flex-col items-center justify-center gap-0">
                                    <img
                                        src={runYourRestaurantScreen}
                                        alt="GPOS POS LCD screen"
                                        className="relative z-10 mx-auto block h-auto w-full max-w-[min(100%,200px)] origin-bottom object-contain object-center sm:max-w-[min(100%,260px)] md:h-full md:max-h-full md:w-auto md:max-w-[min(100%,820px)] lg:max-w-[min(100%,900px)] xl:max-w-[min(100%,960px)]"
                                        loading="lazy"
                                    />

                                    <div className="pointer-events-none mt-0.5 flex w-full flex-col items-center gap-0">
                                        <ArrowUp
                                            className="h-3.5 w-3.5 shrink-0 text-[#0756D9] sm:h-4 sm:w-4 md:h-6 md:w-6"
                                            strokeWidth={2.4}
                                            aria-hidden
                                        />
                                        <p className="text-center font-['Segoe_Print','Bradley_Hand','Comic_Sans_MS',cursive] text-[9px] font-semibold italic leading-snug text-[#0f172a] sm:text-[10px] md:text-[16px]">
                                            GPOS
                                            <br />
                                            screen interface
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-30 mx-2 mt-0 mb-4 rounded-[20px] border border-[#E2EAF5] bg-white px-3 pt-3 pb-6 shadow-[0_22px_50px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:mx-5 sm:mt-0 sm:rounded-[24px] sm:px-5 sm:pb-7 md:mx-8 md:-mt-52 md:pb-8 lg:-mt-72 lg:px-3 lg:pb-8 xl:-mt-80">
                            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-4">
                                {featureItems.map(({ title, description, Icon }, idx) => {
                                    const iconStyles = [
                                        'bg-[#EAF2FF] text-[#0756D9]',
                                        'bg-[#EAFBF0] text-[#16A34A]',
                                        'bg-[#FFF3E6] text-[#EA580C]',
                                        'bg-[#F3EDFF] text-[#7C3AED]',
                                    ];

                                    const lineStyles = [
                                        'bg-[#0756D9]',
                                        'bg-[#16A34A]',
                                        'bg-[#EA580C]',
                                        'bg-[#7C3AED]',
                                    ];

                                    return (
                                        <div
                                            key={title}
                                            className={`relative min-w-0 px-1.5 sm:px-3 lg:px-1 ${idx !== featureItems.length - 1 ? 'lg:border-r lg:border-[#E2E8F0]' : ''
                                                }`}
                                        >
                                            <div className="flex flex-row items-start gap-2.5 sm:items-center sm:gap-3">
                                                <span
                                                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 lg:h-[52px] lg:w-[52px] ${iconStyles[idx]}`}
                                                >
                                                    <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px] lg:h-7 lg:w-7" strokeWidth={2.1} />
                                                </span>

                                                <p className="min-w-0 flex-1 pt-0.5 text-[16px] font-black leading-tight tracking-[-0.02em] text-[#071A44] sm:pt-0 sm:text-[17px] lg:text-[18px]">
                                                    {title}
                                                </p>
                                            </div>

                                            <p className="mt-2.5 w-full max-w-full text-[13px] leading-snug text-[#46536B] sm:mt-3 sm:text-[14px] sm:leading-relaxed lg:text-[14px]">
                                                {description}
                                            </p>

                                            <span className={`mt-5 block h-[3px] w-full rounded-full sm:mt-6 ${lineStyles[idx]}`} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="relative z-20 grid grid-cols-2 gap-x-3 gap-y-3 px-4 pb-6 text-[12px] font-semibold leading-snug text-[#18345F] sm:gap-x-5 sm:gap-y-3 sm:px-6 sm:pb-7 sm:text-[13px] md:text-[14px] lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 lg:justify-items-center lg:text-[14px]">
                            {trustItems.map(({ label, Icon }) => (
                                <div key={label} className="flex min-w-0 items-center justify-center gap-1.5 sm:gap-2.5">
                                    <Icon className="h-3.5 w-3.5 shrink-0 text-[#18345F] sm:h-4 sm:w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.1} aria-hidden />
                                    <span className="min-w-0 text-center">{label}</span>
                                </div>
                            ))}
                        </div>
                    </article>

                    <article className="flex min-h-0 w-full max-w-full flex-col rounded-[30px] border border-[#DDE8F7] bg-white/95 py-6 pl-6 pr-6 shadow-[0_26px_70px_rgba(15,23,42,0.1)] backdrop-blur-sm lg:h-full lg:min-h-0 lg:py-8 lg:pl-8 lg:pr-8">
                        <div className="flex flex-row items-start gap-3 sm:gap-4">
                            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] sm:h-[62px] sm:w-[62px]">
                                <CalendarDays className="h-6 w-6 text-[#0756D9] sm:h-7 sm:w-7" aria-hidden />
                            </span>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-[20px] font-black leading-[1.15] tracking-[-0.02em] text-[#061536] sm:text-[22px] md:text-[26px]">
                                    Book Your Free Demo
                                </h3>
                                <p className="mt-2 whitespace-nowrap text-[clamp(9px,3.05vw,16px)] leading-snug tracking-tight text-[#667085] sm:text-[16px] sm:leading-[1.55] sm:tracking-normal sm:whitespace-normal">
                                    Fill in your details and we&apos;ll contact you shortly.
                                </p>
                            </div>
                        </div>

                        <ScheduleDemoForm mode="api" idPrefix="pricing-demo" className="!mt-8" />

                        <p className="mt-6 flex flex-nowrap items-center justify-center gap-2 text-center text-[#667085]">
                            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#64748B] sm:h-4 sm:w-4" strokeWidth={2.1} aria-hidden />
                            <span className="min-w-0 whitespace-nowrap text-[clamp(8px,2.65vw,14px)] font-medium leading-tight tracking-tight text-[#667085] sm:text-[14px] sm:leading-normal sm:tracking-normal sm:whitespace-normal">
                                We respect your privacy. Your information is safe with us.
                            </span>
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-2 rounded-[14px] bg-[#ECFDF3] px-4 py-4 text-center text-[15px] font-extrabold text-[#15803D]">
                            <CheckCircle className="h-5 w-5 shrink-0" aria-hidden />
                            Our team will contact you within 24 hours
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default PricingDemoSection;
