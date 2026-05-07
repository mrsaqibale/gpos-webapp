import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '../constants/contact';

/** Solid brand green circle behind bullet icons (white glyph for contrast). */
const iconInnerGreen =
    'flex h-6 w-6 items-center justify-center rounded-full bg-[#55A630] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] md:h-7 md:w-7';

function ListCheck({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-center gap-3.5 text-lg font-semibold leading-snug text-[#1e293b] md:gap-4 md:text-xl">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gray-200/95 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.1)] md:h-12 md:w-12">
                <span className={iconInnerGreen}>
                    <Check className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.8} aria-hidden />
                </span>
            </span>
            <span className="flex min-w-0 flex-1 items-center">{children}</span>
        </li>
    );
}

function PricingHardwareImage() {
    const [ok, setOk] = useState(true);
    if (!ok) {
        return (
            <div
                className="mx-auto flex h-[min(10rem,28vw)] w-full max-w-full max-h-[min(14rem,42vw)] items-center justify-center rounded-xl bg-gradient-to-b from-slate-100 to-[#e8ddd4]"
                aria-hidden
            />
        );
    }
    return (
        <img
            src="/pricing-setup-hardware.png"
            alt="GPOS hardware: touchscreen terminal, barcode scanner, receipt printer and cash drawer on counter"
            className="mx-auto block h-auto w-full max-w-full max-h-[min(14rem,42vw)] object-contain object-center sm:max-h-[min(16rem,38vw)]"
            loading="lazy"
            decoding="async"
            onError={() => setOk(false)}
        />
    );
}

const EverythingYouNeedSection = () => {
    return (
        <div className="min-w-0 overflow-x-clip bg-[#F4F6F9] px-3 pb-6 pt-[100px] sm:px-4 lg:px-6 lg:pb-8">
            <div className="mx-auto w-full min-w-0 max-w-[min(1600px,calc(100%_-_16px))]">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                    <div className="min-w-0">
                        <h2 className="mb-5 mt-0 text-[clamp(2.125rem,6.5vw,4rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[#032c7e] sm:mb-6">
                            <span className="block">Everything You Need.</span>
                            <span className="mt-1 block sm:mt-1.5">Nothing You Don&apos;t.</span>
                        </h2>
                        <p className="mb-8 flex flex-wrap items-center gap-3 font-['Poppins',sans-serif] text-lg font-semibold leading-snug tracking-tight text-[#334155] md:gap-3.5 md:text-xl">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gray-200/95 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.1)] md:h-12 md:w-12">
                                <span className={iconInnerGreen}>
                                    <Check className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.8} aria-hidden />
                                </span>
                            </span>
                            <span className="min-w-0 flex-1">No hidden costs. No complicated contracts.</span>
                        </p>
                        <h3 className="mb-5 text-2xl font-bold tracking-tight text-[#032c7e] md:mb-6 md:text-3xl lg:text-[2rem]">
                            Why Restaurants Choose GPOS?
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <ListCheck>Easy for staff to learn</ListCheck>
                            <ListCheck>Reliable during busy hours</ListCheck>
                        </ul>

                        <div className="mt-8 flex w-full max-w-md flex-wrap items-center gap-3 sm:mt-10 sm:flex-nowrap sm:gap-4">
                            <Link
                                to="/get_demo"
                                className="button-82-pushable button-82-pushable--contact inline-flex shrink-0 justify-center no-underline"
                            >
                                <span className="button-82-shadow" aria-hidden />
                                <span className="button-82-edge" aria-hidden />
                                <span className="button-82-front text justify-center whitespace-nowrap">Book Demo</span>
                            </Link>
                            <a
                                href={PHONE_HREF}
                                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] font-bold text-[#032c7e] shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                            >
                                <Phone className="h-5 w-5 shrink-0 text-[#55A630]" strokeWidth={2.2} aria-hidden />
                                {PHONE_DISPLAY}
                            </a>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-7xl rounded-3xl border border-gray-200/90 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:p-8 lg:mx-0 lg:ml-auto lg:max-w-none lg:w-full lg:p-10">
                        <h3 className="mb-8 text-center text-xl font-bold tracking-tight text-[#032c7e] sm:mb-10 sm:text-2xl">
                            Simple Pricing. No Surprises.
                        </h3>

                        <div className="flex flex-col items-center text-center">
                            <div className="grid w-full max-w-2xl grid-cols-2 gap-0 divide-x divide-gray-200/90 sm:max-w-none lg:max-w-3xl">
                                <div className="flex min-w-0 flex-col items-center px-1.5 sm:px-0 sm:pr-8 lg:pr-12">
                                    <p className="text-[clamp(1.35rem,5.8vw,2.25rem)] font-extrabold leading-none tracking-tight text-[#032c7e] sm:text-4xl lg:text-5xl">
                                        €799
                                    </p>
                                    <p className="mt-2 max-w-[9.5rem] text-center text-[11px] font-semibold leading-tight text-slate-600 sm:mt-3 sm:max-w-none sm:text-base">
                                        One-time Setup
                                    </p>
                                    <p className="mt-0.5 max-w-[9.5rem] text-center text-[10px] leading-tight text-slate-400 sm:mt-1 sm:max-w-none sm:text-sm">
                                        Includes Hardware*
                                    </p>
                                </div>
                                <div className="flex min-w-0 flex-col items-center px-1.5 sm:px-0 sm:pl-8 lg:pl-12">
                                    <p className="flex flex-wrap items-baseline justify-center gap-0.5 sm:gap-2">
                                        <span className="text-[clamp(1.35rem,5.8vw,2.25rem)] font-extrabold leading-none tracking-tight text-[#032c7e] sm:text-4xl lg:text-5xl">
                                            €79
                                        </span>
                                        <span className="text-[11px] font-semibold text-slate-600 sm:text-base">/month</span>
                                    </p>
                                    <p className="mt-2 max-w-[9.5rem] text-center text-[10px] leading-tight text-slate-400 sm:mt-3 sm:max-w-none sm:text-sm">
                                        GPOS subscription
                                    </p>
                                </div>
                            </div>

                            <div className="flex w-full justify-center">
                                <div className="flex w-full max-w-[min(100%,48rem)] justify-center">
                                    <PricingHardwareImage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EverythingYouNeedSection;
