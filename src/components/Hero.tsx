import React from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
    BarChart3,
    CalendarDays,
    ChartNoAxesCombined,
    ClipboardList,
    CirclePlay,
    ReceiptText,
    Star,
    Truck,
} from 'lucide-react';
import posScreen from '../assets/hero-pos-screen.png';

type HeroProps = {
    onGetStartedClick?: () => void;
};

const featureItems: { label: string; Icon: LucideIcon }[] = [
    { label: 'Smart Billing\n& Invoicing', Icon: ReceiptText },
    { label: 'Kitchen & Order\nManagement', Icon: ClipboardList },
    { label: 'Delivery & Online\nOrders', Icon: Truck },
    { label: 'Real-time Reports\n& Analytics', Icon: ChartNoAxesCombined, compact: true },
];

const deliveryLogos = [
    { name: 'JUST\nEAT', className: 'text-[#ef3e2f]' },
    { name: 'Uber\nEats', className: 'text-[#111827]' },
    { name: 'deliveroo', className: 'text-[#13b7b1]' },
    { name: 'yoyo', className: 'text-[#e73549]' },
    { name: 'foodin', className: 'text-[#dc2851]' },
    { name: 'foodhub', className: 'text-[#f05a22]' },
];

const avatarColors = ['#d6ecff', '#111827', '#f0c7b4'];

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#FAFCFF_55%,#F4F8FF_100%)] font-['Poppins',Inter,Arial,sans-serif] text-[#07112e]">
            <div className="pointer-events-none absolute inset-x-0 top-[-180px] h-[420px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.95),rgba(255,255,255,0)_55%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-[radial-gradient(ellipse_at_70%_82%,rgba(6,78,228,0.18),rgba(197,216,255,0.12)_36%,transparent_64%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-[-130px] h-[420px] opacity-[0.34] [background-image:repeating-radial-gradient(ellipse_at_center,transparent_0,transparent_26px,rgba(6,78,228,0.11)_27px,transparent_29px)]" />
            <div className="pointer-events-none absolute -left-24 top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(11,86,234,0.10)_0%,rgba(11,86,234,0)_70%)] blur-2xl" />
            <div className="pointer-events-none absolute -right-24 top-[-30px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(20,167,95,0.09)_0%,rgba(20,167,95,0)_70%)] blur-2xl" />

            <div className="relative mx-auto grid min-h-[600px] w-full max-w-[1536px] grid-cols-1 px-[clamp(20px,4.1vw,64px)] pb-0 pt-0 lg:h-[600px] lg:min-h-[600px] lg:grid-cols-[0.98fr_1.12fr] lg:gap-8">
                <div className="relative z-10 max-w-[720px] pt-[6px]">
                    <div className="home-pill home-eyebrow inline-flex h-[44px] items-center gap-3 rounded-full border border-[#E3E9F6] bg-white/80 px-[20px] text-[15px] font-semibold tracking-[-0.005em] text-[#0642c6] backdrop-blur">
                        <Star className="h-[18px] w-[18px] fill-[#FFB400] text-[#FFB400]" strokeWidth={1.6} aria-hidden />
                        #1 Restaurant POS for Food Businesses
                    </div>

                    <h1 className="mt-[10px] max-w-none font-['Poppins',Inter,Arial,sans-serif] text-[clamp(28px,6vw,56px)] font-extrabold leading-[1.18] tracking-[0] text-[#07112e] lg:text-[clamp(46px,3.65vw,58px)]">
                        <span className="block whitespace-nowrap">Run Your Restaurant</span>
                        <span className="block whitespace-nowrap text-[#064ee4]">Smarter, Faster, Better</span>
                    </h1>

                    <p className="mt-[14px] max-w-[590px] text-[17px] font-normal leading-[1.55] tracking-[-0.005em] text-[#3F4A63]">
                        GPOS is an all-in-one restaurant management system that simplifies billing, kitchen operations,
                        delivery, staff management and reports - all in one powerful platform.
                    </p>

                    <div className="home-card mt-[20px] grid max-w-[584px] grid-cols-2 rounded-[14px] border border-[#E5EAF4] bg-white/85 backdrop-blur sm:grid-cols-4">
                        {featureItems.map(({ label, Icon, compact }) => (
                            <div
                                key={label}
                                className="flex min-h-[78px] flex-col items-center justify-center gap-[6px] px-3 text-center"
                            >
                                <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[linear-gradient(145deg,#EEF5FF_0%,#DCEAFF_100%)] text-[#064ee4] shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_6px_14px_rgba(11,86,234,0.10)]">
                                    <Icon className="h-[19px] w-[19px]" strokeWidth={2.2} aria-hidden />
                                </span>
                                <span
                                    className={`whitespace-pre-line font-semibold leading-[1.4] tracking-[-0.005em] text-[#050b1f] ${
                                        compact ? 'text-[12.5px]' : 'text-[13.5px]'
                                    }`}
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-[20px] flex flex-wrap items-center gap-[18px]">
                        <button
                            type="button"
                            onClick={onGetStartedClick}
                            className="home-cta-primary home-gloss inline-flex h-[52px] min-w-[226px] items-center justify-center gap-3 rounded-[12px] border-0 px-6 text-[15px] font-semibold tracking-[-0.005em] text-white"
                        >
                            <CalendarDays className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden />
                            Book a Free Demo
                        </button>
                        <Link
                            to="/get_demo"
                            className="home-cta-secondary inline-flex h-[52px] min-w-[180px] items-center justify-center gap-3 rounded-[12px] border border-[#E0E4EC] px-6 text-[15px] font-semibold tracking-[-0.005em] text-[#050b1f] no-underline"
                        >
                            <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border-[2px] border-[#064ee4] bg-white shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_4px_10px_rgba(11,86,234,0.18)]">
                                <CirclePlay className="h-[18px] w-[18px] text-[#064ee4]" fill="none" strokeWidth={2.1} aria-hidden />
                            </span>
                            Watch Video
                        </Link>
                    </div>

                    <div className="mt-[20px] flex flex-wrap items-center gap-[20px]">
                        <div className="flex items-center">
                            {avatarColors.map((color, index) => (
                                <span
                                    key={color}
                                    className="-mr-[10px] flex h-[51px] w-[51px] items-center justify-center rounded-full border-[3px] border-white text-[17px] font-bold text-white shadow-[0_6px_15px_rgba(15,23,42,0.08)]"
                                    style={{ background: color }}
                                >
                                    {index === 0 ? 'A' : index === 1 ? 'M' : 'S'}
                                </span>
                            ))}
                            <span className="flex h-[51px] w-[51px] items-center justify-center rounded-full border-[3px] border-white bg-[#dce4ff] text-[18px] font-semibold text-[#07112e] shadow-[0_6px_15px_rgba(15,23,42,0.08)]">
                                2K+
                            </span>
                        </div>
                        <span className="h-[75px] w-px bg-[#dfe3eb]" />
                        <div>
                            <p className="text-[16.5px] font-medium leading-[1.45] text-[#172033]">
                                Trusted by 2,000+ Restaurants
                            </p>
                            <div className="mt-[12px] flex items-center gap-[6px]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={index}
                                        className="h-[18px] w-[18px] fill-[#13b86a] text-[#13b86a]"
                                        strokeWidth={1.8}
                                        aria-hidden
                                    />
                                ))}
                                <span className="ml-[13px] text-[16px] font-medium text-[#050b1f]">4.8/5</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mt-12 min-h-[650px] lg:mt-0 lg:pt-[4px]">
                    <svg
                        className="absolute left-[-18px] top-[92px] z-20 hidden h-[164px] w-[82px] overflow-visible text-[#064ee4] lg:block"
                        viewBox="0 0 92 188"
                        fill="none"
                        aria-hidden
                    >
                        <path
                            d="M82 10C38 28 24 82 40 126C47 146 60 161 75 173"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M58 174L78 176L70 157"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <div className="relative ml-auto w-full max-w-[628px] rounded-[24px] border border-white/70 bg-[linear-gradient(160deg,#F4F8FF_0%,#EAF1FF_56%,#E8F4FF_100%)] px-[32px] pb-[16px] pt-[14px] shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_18px_44px_rgba(11,86,234,0.10),0_2px_4px_rgba(15,23,42,0.04)]">
                        <h2 className="text-[26px] font-extrabold leading-[1.06] text-[#064ee4]">Save 15% to 30%</h2>
                        <p className="mt-[4px] text-[16px] font-semibold leading-[1.12] text-[#050b1f]">
                            on Online Ordering Commissions
                            <span className="block">Every Year!</span>
                        </p>

                        <div className="mt-[10px] flex flex-nowrap items-center justify-between gap-[12px]">
                            {deliveryLogos.map((logo) => (
                                <span
                                    key={logo.name}
                                    className={`shrink-0 whitespace-pre-line text-center text-[clamp(15px,1.22vw,19px)] font-extrabold uppercase leading-[0.82] ${logo.className}`}
                                >
                                    {logo.name}
                                </span>
                            ))}
                        </div>

                        <p className="mt-[14px] max-w-[570px] text-[14px] font-semibold leading-[1.35] text-[#050b1f]">
                            We bring your customers back to you on{' '}
                            <span className="inline-flex items-center gap-1 font-extrabold">
                                <span className="inline-flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#20c667] text-[10px] text-white">
                                    W
                                </span>
                                WhatsApp
                            </span>{' '}
                            so you pay less commission and keep more profit.
                        </p>

                        <div className="relative z-20 mt-[12px] flex min-h-[86px] items-center justify-between rounded-[14px] border border-white/80 bg-white/85 px-[16px] py-[8px] backdrop-blur shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_12px_28px_rgba(11,86,234,0.08),0_2px_4px_rgba(15,23,42,0.04)]">
                            <div>
                                <p className="text-[16px] font-bold leading-none text-[#050b1f]">Annual Savings</p>
                                <p className="mt-[6px] text-[25px] font-extrabold leading-none text-[#064ee4]">
                                    €10,000 - €15,000
                                </p>
                                <p className="mt-[7px] text-[14px] font-semibold leading-none text-[#050b1f]">
                                    or more for your restaurant!
                                </p>
                            </div>
                            <div className="relative mr-[8px] h-[70px] w-[104px]">
                                <span className="absolute bottom-0 left-[5px] flex h-[62px] w-[56px] items-center justify-center rounded-[24px_24px_22px_22px] bg-gradient-to-b from-[#1e6bff] to-[#0642c6] text-[32px] font-extrabold text-white shadow-[0_12px_18px_rgba(6,78,228,0.2)]">
                                    $
                                </span>
                                <span className="absolute left-[13px] top-0 h-[18px] w-[40px] rounded-[50%] bg-[#226cff]" />
                                {[0, 1, 2, 3, 4].map((coin) => (
                                    <span
                                        key={coin}
                                        className="absolute right-0 h-[13px] w-[26px] rounded-full border border-[#e7a71e] bg-[#ffc43b]"
                                        style={{ bottom: `${coin * 9}px` }}
                                    />
                                ))}
                                {[0, 1, 2].map((coin) => (
                                    <span
                                        key={coin}
                                        className="absolute right-[28px] h-[13px] w-[26px] rounded-full border border-[#e7a71e] bg-[#ffc43b]"
                                        style={{ bottom: `${coin * 9}px` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-[78px] right-[-6px] top-[296px]">
                        <div className="absolute left-[18px] top-[112px] h-[150px] w-[640px] bg-[radial-gradient(ellipse_at_center,rgba(7,79,228,0.2),rgba(207,222,255,0.18)_38%,transparent_70%)] blur-[10px]" />
                        <div className="relative mx-auto h-[302px] max-w-[668px]">
                            <div className="absolute left-[0px] top-0 w-[584px] rotate-[2.7deg] rounded-[16px] bg-[#151a24] p-[9px] shadow-[0_18px_26px_rgba(15,23,42,0.26)]">
                                <div className="overflow-hidden rounded-[8px] bg-white">
                                    <div className="grid min-h-[220px] grid-cols-[74px_1fr]">
                                        <aside className="bg-[#071935] px-3 py-4 text-white">
                                            <div className="text-[17px] font-extrabold">GPOS</div>
                                            {['Dashboard', 'Orders', 'Kitchen', 'Menu', 'Customers', 'Reports', 'Staff', 'Settings', 'Logout'].map(
                                                (item) => (
                                                    <div key={item} className="mt-[7px] text-[7px] font-medium text-white/80">
                                                        {item}
                                                    </div>
                                                ),
                                            )}
                                        </aside>
                                        <main className="p-[12px]">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-[14px] font-bold text-[#101828]">Dashboard</h3>
                                                <span className="text-[9px] font-semibold text-[#101828]">Admin</span>
                                            </div>
                                            <div className="mt-[10px] grid grid-cols-4 gap-[8px]">
                                                {['Rs. 245,680', '320', '1,245', '18'].map((stat, index) => (
                                                    <div key={stat} className="rounded-[6px] border border-[#edf0f5] bg-white p-[7px]">
                                                        <div className="text-[8px] text-[#7a8495]">
                                                            {['Total Sales', 'Orders', 'Customers', 'Pending Orders'][index]}
                                                        </div>
                                                        <div className="mt-[5px] text-[11px] font-bold text-[#101828]">{stat}</div>
                                                        <div className="mt-[6px] text-[7px] text-[#14a46a]">+ 12.5% vs yesterday</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-[10px] grid grid-cols-[1fr_132px] gap-[10px]">
                                                <div className="rounded-[7px] border border-[#edf0f5] p-[10px]">
                                                    <div className="flex items-center justify-between text-[9px] font-semibold">
                                                        <span>Sales Overview</span>
                                                        <span>Day&nbsp;&nbsp; Week&nbsp;&nbsp; Month</span>
                                                    </div>
                                                    <svg className="mt-[6px] h-[72px] w-full" viewBox="0 0 350 145" aria-hidden>
                                                        <path
                                                            d="M8 112 C42 70, 66 105, 96 65 S155 118, 188 70 S242 98, 280 48 S320 84, 344 30"
                                                            fill="none"
                                                            stroke="#064ee4"
                                                            strokeWidth="3"
                                                        />
                                                        <path
                                                            d="M8 112 C42 70, 66 105, 96 65 S155 118, 188 70 S242 98, 280 48 S320 84, 344 30 V145 H8 Z"
                                                            fill="rgba(6,78,228,0.08)"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="rounded-[7px] border border-[#edf0f5] p-[10px]">
                                                    <div className="mb-[7px] text-[8px] font-bold">Top Items</div>
                                                    {['Zinger Burger', 'Chicken Pizza', 'Club Sandwich', 'French Fries', 'Coke (Can)'].map(
                                                        (item, index) => (
                                                            <div key={item} className="mb-[7px] flex items-center justify-between text-[7px]">
                                                                <span>{item}</span>
                                                                <span>{[120, 85, 64, 45, 38][index]}</span>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute right-[10px] top-[70px] w-[82px] rotate-[-3.5deg] rounded-[19px] bg-[#171b23] p-[5px] shadow-[0_16px_24px_rgba(15,23,42,0.24)]">
                                <div className="rounded-[14px] bg-white px-[6px] pb-[6px] pt-[12px]">
                                    <div className="mx-auto mb-[6px] h-[10px] w-[36px] rounded-full bg-[#111827]" />
                                    <h3 className="text-center text-[8px] font-bold text-[#101828]">New Order</h3>
                                    <div className="mt-[7px] flex gap-[4px] text-[5px]">
                                        <span className="rounded bg-[#064ee4] px-[5px] py-[2px] text-white">All</span>
                                        <span>Burgers</span>
                                        <span>Pizza</span>
                                    </div>
                                    <img src={posScreen} alt="" className="mt-[5px] h-[70px] w-full rounded-[5px] object-cover object-left" />
                                    <div className="mt-[6px] flex items-center justify-between text-[6px] font-semibold">
                                        <span>Subtotal</span>
                                        <span>Rs. 2,810</span>
                                    </div>
                                    <div className="mt-[6px] grid grid-cols-2 gap-[5px] text-center text-[6px]">
                                        <span className="rounded bg-[#f3f4f6] py-[4px]">Clear</span>
                                        <span className="rounded bg-[#064ee4] py-[4px] text-white">Pay</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
