import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Check, Headset, ShieldCheck, ShoppingBag } from 'lucide-react';

const pricingPageBannerHardware = new URL(
    '../assets/pricing-page-banner-hardware.png',
    import.meta.url
).href;

const bundleFeatures = [
    {
        title: 'GPOS Software',
        description: 'Fast, easy and packed with features.',
        icon: ShoppingBag,
    },
    {
        title: 'Thermal Receipt Printer',
        description: 'Quick, clear bills for your customers.',
        icon: Box,
    },
    {
        title: 'Cash Drawer',
        description: 'Secure, reliable and automatic.',
        icon: ShieldCheck,
    },
    {
        title: 'Support & Updates',
        description: "We're here to help you succeed.",
        icon: Headset,
    },
];

const bottomHighlights = [
    {
        title: 'Ready to Use',
        description: 'Pre-configured and tested',
        icon: Check,
    },
    {
        title: 'Works Seamlessly',
        description: 'Hardware + Software = Perfect Fit',
        icon: ShieldCheck,
    },
    {
        title: 'Local Support',
        description: 'Quick help, real people',
        icon: Headset,
    },
];

const PosBundleSection = () => {
    return (
        <section className="min-w-0 overflow-x-clip bg-[#F2F5FA] py-16 sm:py-20">
            <div className="mx-auto w-full min-w-0 max-w-screen-2xl px-4 sm:px-6 lg:px-10 xl:px-14">
                <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[44%_56%] lg:gap-14 xl:gap-16">
                    <div className="pt-6 sm:pt-8 lg:pt-10">
                        <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B1A3C]">
                            Complete POS Bundle
                        </h2>

                        <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-[#55627A] sm:text-lg">
                            Powerful software with reliable hardware - everything works seamlessly together.
                        </p>

                        <h3 className="mt-8 text-[1.45rem] font-bold tracking-tight text-[#0B1A3C]">What You Get</h3>
                        <ul className="mt-5 space-y-4">
                            {bundleFeatures.map(({ title, description, icon: Icon }) => (
                                <li key={title} className="flex items-start gap-3.5">
                                    <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DCE5F1] bg-white text-[#1E63E9] shadow-sm">
                                        <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                                    </span>
                                    <span>
                                        <span className="block text-lg font-semibold leading-tight text-[#1C2A41]">
                                            {title}
                                        </span>
                                        <span className="mt-1 block text-sm leading-relaxed text-[#667388] sm:text-[15px]">
                                            {description}
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-9">
                            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#5D6B83]">
                                Complete Bundle Starting At
                            </p>
                            <p className="mt-2 text-6xl font-extrabold leading-none tracking-tight text-[#0A2C7C]">€799</p>
                            <p className="mt-2 text-sm text-[#667388] sm:text-base">
                                One-time or flexible options available
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3.5">
                            <a
                                href="https://dashboard-gpos.gtechnexa.com"
                                rel="noopener noreferrer"
                                className="button-82-pushable button-82-pushable--demo-white inline-flex w-auto no-underline"
                            >
                                <span className="button-82-shadow" aria-hidden />
                                <span className="button-82-edge" aria-hidden />
                                <span className="button-82-front text whitespace-nowrap">Buy Now</span>
                            </a>
                            <Link
                                to="/get_demo"
                                className="button-82-pushable button-82-pushable--contact inline-flex w-auto no-underline"
                            >
                                <span className="button-82-shadow" aria-hidden />
                                <span className="button-82-edge" aria-hidden />
                                <span className="button-82-front text whitespace-nowrap">Book Free Demo</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex min-h-0 flex-col pt-6 sm:pt-8 lg:pt-10">
                        <div className="flex w-full items-start justify-end">
                            <img
                                src={pricingPageBannerHardware}
                                alt="GPOS complete POS hardware: touchscreen terminal, receipt printer, cash drawer, and barcode scanner"
                                className="ml-auto block h-auto w-full max-w-[min(100%,52rem)] object-contain object-right"
                                loading="eager"
                                decoding="async"
                            />
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:mt-12 lg:gap-5">
                            {bottomHighlights.map(({ title, description, icon: Icon }) => (
                                <div
                                    key={title}
                                    className="flex h-full min-h-[7.25rem] flex-col justify-center rounded-2xl border border-[#DDE8F3] bg-gradient-to-b from-white to-[#F8FAFC] px-4 py-4 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.1)] ring-1 ring-slate-900/[0.03] transition-shadow duration-200 hover:shadow-[0_16px_40px_-8px_rgba(15,23,42,0.14)] sm:min-h-[7.5rem] sm:px-5 sm:py-4"
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <span
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11"
                                            style={{ backgroundColor: "#E6F0FF" }}
                                            aria-hidden
                                        >
                                            <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" style={{ color: "#1E4B8A" }} strokeWidth={2.2} />
                                        </span>
                                        <p className="min-w-0 flex-1 truncate text-left text-[1.02rem] font-bold leading-none tracking-tight text-[#0B1A3C] sm:text-[1.08rem]">
                                            {title}
                                        </p>
                                    </div>
                                    <p className="mt-2.5 w-full min-w-0 truncate text-center text-[0.8125rem] font-medium leading-none text-[#5A6B85] sm:text-sm">
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PosBundleSection;
