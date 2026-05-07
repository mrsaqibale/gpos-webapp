import React from 'react';
import { Check, CircleDollarSign, Cloud, Gift, HandCoins, Headset, Lock, ShieldCheck, ShieldX, Wallet, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_PRIMARY_CTA_SURFACE } from '../constants/heroCta';
import ScheduleDemoForm from './ScheduleDemoForm';

const softwarePoints = [
    'POS & Billing System',
    'Table & Order Management',
    'CRM & Customer Tracking',
    'Reports & Analytics',
    'Staff & Attendance Management',
    'Cloud Backup & Security',
];

const hardwarePoints = [
    'POS Terminal / Computer',
    'Thermal Receipt Printer',
    'Cash Drawer',
    'Barcode Scanner (Optional)',
    'Kitchen Display Screen (Optional)',
];

const pricingRows = [
    { label: 'One complete package', value: 'Included', positive: true, Icon: Gift },
    { label: 'All core restaurant features', value: 'Included', positive: true, Icon: ShieldCheck },
    { label: 'Premium feature extra fees', value: 'No', positive: true, Icon: HandCoins },
    { label: 'Hidden charges', value: 'No', positive: true, Icon: ShieldX },
    { label: 'Simple monthly price', value: 'Yes', positive: true, Icon: CircleDollarSign },
];

export type HomePricingMockupProps = {
    /** Unique prefix for ScheduleDemoForm field ids when multiple pages use this block */
    scheduleDemoFormIdPrefix?: string;
    /** Secondary CTA beside “Book Free Demo” (default: View Pricing → /pricing) */
    secondaryCtaLabel?: string;
    secondaryCtaTo?: string;
};

const HomePricingMockup = ({
    scheduleDemoFormIdPrefix = 'home-pricing',
    secondaryCtaLabel = 'View Pricing',
    secondaryCtaTo = '/pricing',
}: HomePricingMockupProps) => {
    const secondaryIsExternal = /^https?:\/\//i.test(secondaryCtaTo);

    return (
        <section className="min-w-0 overflow-x-clip bg-[#EEF2F7] px-1 py-3 sm:px-2 sm:py-6">
            <div className="mx-auto w-full max-w-[520px] rounded-[14px] border border-[#DDE4EE] bg-[#EEF2FB] p-3 shadow-[0_8px_22px_rgba(15,23,42,0.06)] sm:p-5 lg:hidden">
                <h2 className="mt-2 text-center font-['Open_Sans',Arial,sans-serif] text-[clamp(1.05rem,4.9vw,1.35rem)] font-extrabold leading-[1.14] tracking-[-0.005em] text-[#132C60] sm:text-[1.6rem]">
                    <span className="block">Everything Your Restaurant Needs.</span>
                    <span className="block">One Simple Price.</span>
                </h2>

                <p className="mt-2 text-center text-[0.98rem] leading-snug text-[#4A5A76] sm:text-base">
                    No confusing plans. No hidden fees.
                    <br />
                    Just one complete package to run your restaurant smoothly.
                </p>

                <p className="mb-6 mt-3 text-center font-['Open_Sans',Arial,sans-serif] text-[3.2rem] font-extrabold leading-none tracking-[-0.025em] text-[#123A83] sm:text-[3.6rem]">
                    €79
                    <span className="ml-1 text-[1.6rem] font-bold text-[#3F5172] sm:text-[1.8rem]">/month</span>
                </p>

                <div className="relative mt-7 rounded-2xl border border-[#DDE6F2] bg-white px-3 pb-4 pt-8">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <Link
                            to="/get_demo"
                            className={`inline-flex min-w-[230px] items-center justify-center rounded-[12px] px-6 py-2.5 text-[1.1rem] sm:text-[1.2rem] ${HERO_PRIMARY_CTA_SURFACE}`}
                        >
                            Book Free Demo
                        </Link>
                    </div>
                    <div className="mb-3 mt-2 flex justify-center">
                        {secondaryIsExternal ? (
                            <a
                                href={secondaryCtaTo}
                                rel="noopener noreferrer"
                                className="inline-flex min-w-[170px] items-center justify-center rounded-[14px] border border-[#C9D3E3] bg-white px-5 py-2 text-[1.05rem] font-semibold text-[#2C3D60] no-underline shadow-[0_3px_8px_rgba(15,23,42,0.08)] transition-colors hover:bg-[#f8fbff] sm:text-[1.1rem]"
                            >
                                {secondaryCtaLabel}
                            </a>
                        ) : (
                            <Link
                                to={secondaryCtaTo}
                                className="inline-flex min-w-[170px] items-center justify-center rounded-[14px] border border-[#C9D3E3] bg-white px-5 py-2 text-[1.05rem] font-semibold text-[#2C3D60] no-underline shadow-[0_3px_8px_rgba(15,23,42,0.08)] transition-colors hover:bg-[#f8fbff] sm:text-[1.1rem]"
                            >
                                {secondaryCtaLabel}
                            </Link>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 text-center text-[1.15rem] font-semibold text-[#1A2E57]">
                        <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
                            <Check className="h-4 w-4 shrink-0 text-[#4EA230]" strokeWidth={3} />
                            No hidden charges
                        </span>
                        <span className="inline-flex items-center justify-center gap-1.5">
                            <Check className="h-4 w-4 shrink-0 text-[#4EA230]" strokeWidth={3} />
                            No contracts
                        </span>
                        <span className="col-span-2 inline-flex items-center justify-center gap-1.5">
                            <Check className="h-4 w-4 shrink-0 text-[#4EA230]" strokeWidth={3} />
                            All features included
                        </span>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                    <article className="rounded-2xl border border-[#CCDAF1] bg-[#F3F6FD] p-3.5 shadow-[0_8px_18px_rgba(21,71,150,0.08)]">
                        <div className="flex items-center gap-2.5">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0D4DB8] text-white shadow-[0_8px_16px_rgba(13,77,184,0.22)]">
                                <Wallet className="h-[18px] w-[18px]" />
                            </span>
                            <h3 className="text-[1.18rem] font-extrabold leading-[1.12] text-[#102D63]">Software</h3>
                        </div>
                        <ul className="mt-3 space-y-1.5">
                            {['POS & Billing', 'Orders & Tables', 'Customers & CRM', 'Reports', 'Staff & Attendance'].map((point) => (
                                <li key={point} className="flex gap-2 text-[0.92rem] font-medium leading-[1.25] text-[#233B65]">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1A4C94]" strokeWidth={3} />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-2xl border border-[#DCE8DA] bg-[#F6FAF4] p-3.5 shadow-[0_8px_18px_rgba(42,114,42,0.08)]">
                        <div className="flex items-center gap-2.5">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#49A530] text-white shadow-[0_8px_16px_rgba(73,165,48,0.2)]">
                                <Wrench className="h-[18px] w-[18px]" />
                            </span>
                            <h3 className="text-[1.18rem] font-extrabold leading-[1.12] text-[#102D63]">Hardware</h3>
                        </div>
                        <ul className="mt-3 space-y-1.5">
                            {['POS Terminal', 'Printer + Cash Drawer', 'Scanner (optional)', 'Kitchen Screen (optional)'].map((point) => (
                                <li key={point} className="flex gap-2 text-[0.92rem] font-medium leading-[1.25] text-[#233B65]">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4EA230]" strokeWidth={3} />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>

            </div>

            <div className="hidden w-full rounded-2xl border border-[#DDE4EE] bg-[#EFF3F9] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.08)] lg:block lg:p-5">
                <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 items-stretch justify-center gap-3 lg:grid-cols-[1fr_1fr_1.35fr] xl:gap-5">
                    <div className="w-full rounded-3xl border border-[#DBE4F2] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-150 ease-out hover:scale-[1.06] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.2)] lg:min-h-[560px] lg:p-7">
                        <h2 className="mt-2 font-['Open_Sans',Arial,sans-serif] text-[2.5rem] font-bold leading-[1.05] tracking-[-0.02em] text-black">
                            <span className="block">One Simple Price.</span>
                        </h2>
                        <p className="mt-4 font-['Poppins',Arial,sans-serif] text-[1.08rem] leading-relaxed text-[#4A5A76]">
                            No confusing plans. No hidden fees. One complete package to run your restaurant smoothly.
                        </p>
                        <p className="mt-5 text-[4.4rem] font-extrabold leading-none tracking-[-0.03em] text-[#123A83]">
                            €79
                            <span className="ml-1 text-[1.95rem] font-bold text-[#3F5172]">/month</span>
                        </p>
                        <div className="mt-5 space-y-2.5 rounded-2xl border border-[#DDE6F2] bg-[#F8FAFD] p-4">
                            {['No hidden charges', 'No contracts', 'All features included'].map((text) => (
                                <div key={text} className="flex items-center gap-2.5 font-['Poppins',Arial,sans-serif] text-[1.05rem] font-semibold text-[#1A2E57]">
                                    <Check className="h-4 w-4 shrink-0 text-[#4EA230]" strokeWidth={3} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 flex items-center gap-2.5">
                            <Link
                                to="/get_demo"
                                className={`inline-flex items-center justify-center whitespace-nowrap rounded-[12px] px-4 py-2.5 text-base ${HERO_PRIMARY_CTA_SURFACE}`}
                            >
                                Book Free Demo
                            </Link>
                            {secondaryIsExternal ? (
                                <a
                                    href={secondaryCtaTo}
                                    rel="noopener noreferrer"
                                    className="button-82-pushable button-82-pushable--demo-white inline-flex w-auto justify-center no-underline"
                                >
                                    <span className="button-82-shadow" aria-hidden />
                                    <span className="button-82-edge" aria-hidden />
                                    <span className="button-82-front text whitespace-nowrap">{secondaryCtaLabel}</span>
                                </a>
                            ) : (
                                <Link to={secondaryCtaTo} className="button-82-pushable button-82-pushable--demo-white inline-flex w-auto justify-center no-underline">
                                    <span className="button-82-shadow" aria-hidden />
                                    <span className="button-82-edge" aria-hidden />
                                    <span className="button-82-front text whitespace-nowrap">{secondaryCtaLabel}</span>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="hidden grid h-full grid-cols-2 gap-4">
                        <article className="flex h-full flex-col rounded-2xl border border-[#CCDAF1] bg-[#EAF2FF] p-3.5 shadow-[0_8px_18px_rgba(21,71,150,0.08)]">
                            <div className="flex items-center gap-2.5">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0D4DB8] text-white shadow-[0_8px_16px_rgba(13,77,184,0.22)]">
                                    <Wallet className="h-[18px] w-[18px]" />
                                </span>
                                <h3 className="text-[1.5rem] font-extrabold leading-[1.12] text-[#102D63]">All-in-One POS Software</h3>
                            </div>
                            <ul className="mt-3 flex-1 space-y-2 border-t border-[#C6D6F0] pt-3">
                                {softwarePoints.map((point) => (
                                    <li key={point} className="flex gap-2 text-[1.12rem] font-medium leading-[1.24] text-[#233B65]">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1A4C94]" strokeWidth={3} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto rounded-xl border border-[#AFC8EF] bg-[#CFE1FB] p-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                                <p className="text-[1.02rem] font-extrabold text-[#164288]">Unlimited Users</p>
                                <p className="text-[0.92rem] leading-snug text-[#274C82]">Use on multiple devices without any extra cost.</p>
                            </div>
                        </article>

                        <article className="flex h-full flex-col rounded-2xl border border-[#DCE8DA] bg-[#EEF8ED] p-3.5 shadow-[0_8px_18px_rgba(42,114,42,0.08)]">
                            <div className="flex items-center gap-2.5">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#49A530] text-white shadow-[0_8px_16px_rgba(73,165,48,0.2)]">
                                    <Wrench className="h-[18px] w-[18px]" />
                                </span>
                                <h3 className="text-[1.5rem] font-extrabold leading-[1.12] text-[#102D63]">Complete Hardware Setup</h3>
                            </div>
                            <ul className="mt-3 flex-1 space-y-2 border-t border-[#D5E7D2] pt-3">
                                {hardwarePoints.map((point) => (
                                    <li key={point} className="flex gap-2 text-[1.12rem] font-medium leading-[1.24] text-[#233B65]">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4EA230]" strokeWidth={3} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto rounded-xl border border-[#B5DCA9] bg-[#D1EDC8] p-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                                <p className="text-[1.02rem] font-extrabold text-[#2E6E2E]">Ready to use</p>
                                <p className="text-[0.92rem] leading-snug text-[#355F38]">Pre-configured &amp; tested hardware for your business.</p>
                            </div>
                        </article>
                    </div>

                    <div className="w-full rounded-3xl border border-[#DEE6F2] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-150 ease-out hover:scale-[1.06] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.2)] lg:min-h-[560px] lg:p-7">
                        <h3 className="mt-2 font-['Open_Sans',Arial,sans-serif] text-[2.25rem] font-bold leading-tight text-black">No Confusing Tiers.</h3>
                        <p className="mt-3 font-['Poppins',Arial,sans-serif] text-[1.05rem] leading-relaxed text-[#536480]">GPOS keeps it simple by giving restaurants one complete package at one fixed monthly price.</p>

                        <div className="mt-5 overflow-hidden rounded-2xl border border-[#E1E8F3]">
                            {pricingRows.map(({ label, value, positive, Icon }) => (
                                <div key={label} className="grid grid-cols-[1fr_auto] items-center border-b border-[#E7EDF6] bg-white px-4 py-3.5 last:border-b-0">
                                    <div className="flex items-center gap-2.5 font-['Poppins',Arial,sans-serif] text-[1.02rem] font-medium text-[#22385F]">
                                        <Icon className="h-4 w-4 text-[#2A4F90]" />
                                        <span>{label}</span>
                                    </div>
                                    <span className={`text-[1rem] font-bold ${positive ? 'text-[#4C9A2D]' : 'text-[#AF2A2A]'}`}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full rounded-3xl border border-[#DEE6F2] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-150 ease-out hover:scale-[1.06] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.2)] lg:min-h-[560px] lg:p-7">
                        <h3 className="font-['Open_Sans',Arial,sans-serif] text-[2.2rem] font-bold leading-tight text-black">Let&apos;s Schedule Your Free Demo</h3>
                        <p className="mt-3 font-['Poppins',Arial,sans-serif] text-[1.02rem] leading-relaxed text-[#536480]">Fill in your details and our team will contact you shortly.</p>

                        <ScheduleDemoForm mode="navigate" idPrefix={scheduleDemoFormIdPrefix} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomePricingMockup;
