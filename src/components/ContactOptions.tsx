import React from "react";
import { Link } from "react-router-dom";
import { HelpCircle, Monitor, Tag } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../constants/contact";

const cardClass =
    "rounded-2xl border border-[#E3E8F1] bg-white p-8 text-center shadow-[0_4px_14px_rgba(15,35,60,0.06)] transition hover:shadow-[0_12px_28px_rgba(15,35,60,0.1)] sm:p-10";

const iconWrapClass =
    "mx-auto mb-5 flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-primary-navy text-white sm:mb-6 sm:h-[4.5rem] sm:w-[4.5rem]";

const btnClass =
    "inline-flex min-h-[48px] min-w-[11rem] items-center justify-center rounded-lg bg-primary-navy px-6 py-3 text-base font-semibold text-white transition hover:bg-[#021a52] sm:min-h-[52px] sm:px-7 sm:text-[1.05rem]";

export type ContactOptionsProps = {
    /** Sales CTA target (default: in-page demo form anchor on get-demo page) */
    salesHref?: string;
    /** Support CTA: in-page hash or route (default: /contact) */
    supportHref?: string;
    /** Hardware card CTA route (default: shop) */
    hardwareTo?: string;
};

export default function ContactOptions({
    salesHref = "#schedule-demo-form",
    supportHref = "/contact",
    hardwareTo = "/shop",
}: ContactOptionsProps) {
    return (
        <section className="bg-[#f3f6fb] py-14 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-12">
                <p className="mb-3 text-lg font-bold tracking-wide text-accent-orange sm:text-xl md:mb-4 md:text-2xl">
                    Contact us
                </p>

                <h1 className="mb-5 text-[clamp(2.25rem,5.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary-navy sm:mb-6 md:text-6xl lg:text-[3.5rem]">
                    We&apos;re here to help
                </h1>

                <p className="mx-auto mb-5 max-w-3xl text-[1.05rem] leading-relaxed text-[#354766] sm:mb-6 sm:text-lg md:text-xl md:leading-relaxed">
                    Whether you need help, want a demo, or have questions about hardware — our team is ready to
                    assist you.
                </p>

                <p className="mx-auto mb-12 max-w-3xl text-[1.05rem] font-bold leading-snug text-[#1D3158] sm:text-lg md:mb-14 md:text-xl">
                    Need to speak with someone? Call our helpline:{" "}
                    <a
                        href={PHONE_HREF}
                        className="text-primary-navy underline-offset-2 hover:underline"
                    >
                        {PHONE_DISPLAY}
                    </a>
                </p>

                <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
                    <div className={cardClass}>
                        <span className={iconWrapClass} aria-hidden>
                            <Tag className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.75} />
                        </span>
                        <h3 className="mb-3 text-xl font-bold text-primary-navy sm:text-2xl">Sales enquiry</h3>
                        <p className="mb-8 text-base leading-snug text-[#475569] sm:mb-9 sm:text-lg">
                            Talk to our team about pricing, features and setup.
                        </p>
                        <a href={salesHref} className={btnClass}>
                            Contact sales
                        </a>
                    </div>

                    <div className={cardClass}>
                        <span className={iconWrapClass} aria-hidden>
                            <HelpCircle className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.75} />
                        </span>
                        <h3 className="mb-3 text-xl font-bold text-primary-navy sm:text-2xl">Help &amp; support</h3>
                        <p className="mb-8 text-base leading-snug text-[#475569] sm:mb-9 sm:text-lg">
                            Get help from our support team anytime you need.
                        </p>
                        {supportHref.startsWith("#") ? (
                            <a href={supportHref} className={btnClass}>
                                Get support
                            </a>
                        ) : (
                            <Link to={supportHref} className={`${btnClass} no-underline`}>
                                Get support
                            </Link>
                        )}
                    </div>

                    <div className={cardClass}>
                        <span className={iconWrapClass} aria-hidden>
                            <Monitor className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.75} />
                        </span>
                        <h3 className="mb-3 text-xl font-bold text-primary-navy sm:text-2xl">Hardware</h3>
                        <p className="mb-8 text-base leading-snug text-[#475569] sm:mb-9 sm:text-lg">
                            Touchscreen terminals, printers, scanners, and cash drawers built for busy service.
                        </p>
                        <Link to={hardwareTo} className={`${btnClass} no-underline`}>
                            View hardware
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
