import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Activity, CircleCheck, Sparkles, Zap } from 'lucide-react';
import ScheduleDemoForm from './ScheduleDemoForm';

/** Match EverythingYouNeedSection icon treatment. */
const iconInnerGreen =
    'flex h-6 w-6 items-center justify-center rounded-full bg-[#55A630] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] md:h-7 md:w-7';

const demoBulletItems: { label: string; Icon: LucideIcon }[] = [
    { label: 'Free Setup Guidance', Icon: CircleCheck },
    { label: 'Easy to use', Icon: Sparkles },
    { label: 'Quick setup', Icon: Zap },
    { label: 'Works smoothly every day', Icon: Activity },
];

function DemoListRow({ children, icon: Icon }: { children: React.ReactNode; icon: LucideIcon }) {
    return (
        <li className="flex items-center gap-3.5 font-['Poppins',sans-serif] text-lg font-semibold leading-snug text-[#1e293b] md:gap-4 md:text-xl">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gray-200/95 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.1)] md:h-12 md:w-12">
                <span className={iconInnerGreen}>
                    <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.8} aria-hidden />
                </span>
            </span>
            <span className="flex min-w-0 flex-1 items-center">{children}</span>
        </li>
    );
}

const DemoSection: React.FC = () => {
    return (
        <section className="relative w-full min-w-0 overflow-x-clip bg-[#ffffff] px-3 py-12 sm:px-6 lg:px-10 lg:py-16">
            <div className="relative z-10 mx-auto grid min-w-0 max-w-screen-2xl items-center gap-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="hidden min-w-0 max-w-none md:block"
                >
                    <h2 className="mb-5 text-[clamp(2.125rem,6.5vw,4rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[#032c7e]">
                        <span className="block">
                            Get{" "}
                            <span className="text-primary-navy">GPOS Quickly</span>
                        </span>
                        <span className="mt-1 block sm:mt-1.5">Run Your Business Fast</span>
                    </h2>
                    <div className="mt-5 h-px w-28 bg-[#55A630]/50" />
                    <p className="mb-8 mt-6 max-w-prose font-['Poppins',sans-serif] text-lg font-semibold leading-snug tracking-tight text-[#334155] md:text-xl">
                        Start your smart POS journey today — fast, simple, powerful.
                    </p>

                    <ul className="flex flex-col gap-4">
                        {demoBulletItems.map(({ label, Icon }) => (
                            <DemoListRow key={label} icon={Icon}>
                                {label}
                            </DemoListRow>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="relative mx-auto w-full min-w-0 max-w-3xl md:mx-0 md:max-w-none"
                >
                    <div className="relative rounded-2xl border-2 border-[#9fb5da] bg-[#e8eff8] p-[calc(2rem-2px)] sm:p-8 shadow-[0_18px_42px_rgba(15,35,60,0.14)]">
                        <h3 className="mb-7 text-center font-['Poppins',sans-serif] text-[clamp(1.5rem,2.9vw,2.125rem)] font-bold leading-tight tracking-tight text-[#032c7e]">
                            Let&apos;s Schedule Your Free Demo
                        </h3>
                        <ScheduleDemoForm mode="api" idPrefix="demo-section" className="!mt-0" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoSection;
