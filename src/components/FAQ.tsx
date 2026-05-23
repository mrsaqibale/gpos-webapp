import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    CheckCircle2,
    Clock3,
    Cloud,
    Headphones,
    Mail,
    MessageCircleQuestion,
    Minus,
    Plus,
    RotateCcw,
    ShieldCheck,
    Users,
} from 'lucide-react';

type LucideIcon = React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;

const faqs = [
    {
        q: 'What is GPOS and who is it for?',
        a: 'GPOS is an all-in-one POS and business management system designed for restaurants, cafes, cloud kitchens, retail stores and multi-outlet businesses of all sizes.',
    },
    { q: 'Can I try GPOS before subscribing?', a: 'Yes. You can book a free demo and explore how GPOS fits your food business before choosing a plan.' },
    { q: 'Is GPOS easy to set up and use?', a: 'Yes. GPOS is designed for fast setup, clear workflows and simple day-to-day operation for your whole team.' },
    { q: 'What devices and hardware does GPOS support?', a: 'GPOS works on common business devices and supports the hardware needed for modern restaurant operations.' },
    { q: 'Can I manage multiple outlets from one account?', a: 'Yes. You can manage outlets, staff, menus, reports and customer activity from one central account.' },
    { q: 'Does GPOS work offline?', a: 'GPOS is built to keep essential operations running and sync business data when connectivity is available.' },
    { q: 'How is my data and payment information secured?', a: 'Your business data is protected with secure systems, role-based access and reliable cloud practices.' },
    { q: 'Can I integrate GPOS with other tools?', a: 'Yes. GPOS can support integrations and workflows for growing food businesses.' },
    { q: 'What kind of support do you provide?', a: 'Our support team helps with setup, onboarding, questions and ongoing business needs.' },
    { q: 'Can I upgrade or downgrade my plan anytime?', a: 'Yes. You can move between plans as your business needs change.' },
] as const;

const infoCards = [
    ['Secure & Reliable', 'Your data is safe with enterprise-grade security and 99.9% uptime.', ShieldCheck, '#0B56EA', 'linear-gradient(145deg,#EEF5FF 0%,#DFEAFF 100%)'],
    ['Expert Support', 'Our support team is available 24/7 to help you succeed.', Headphones, '#13A35D', 'linear-gradient(145deg,#EAF8EF 0%,#D8F3E4 100%)'],
    ['Easy to Get Started', 'Set up in minutes and start managing your business right away.', Cloud, '#7A22D7', 'linear-gradient(145deg,#F4EDFF 0%,#E7DAFF 100%)'],
    ['Always Improving', 'We continuously update GPOS with new features based on your feedback.', RotateCcw, '#E59A19', 'linear-gradient(145deg,#FFF7EA 0%,#FFECCB 100%)'],
] as const;

const supportItems = [
    ['24/7', 'Support', Headphones, '#13A35D', 'linear-gradient(145deg,#EAF8EF 0%,#D8F3E4 100%)'],
    ['Average Response', 'Under 5 Minutes', Clock3, '#7A22D7', 'linear-gradient(145deg,#F4EDFF 0%,#E7DAFF 100%)'],
    ['Trusted by', '2,000+ Businesses', Users, '#0B56EA', 'linear-gradient(145deg,#EEF5FF 0%,#DFEAFF 100%)'],
] as const;

function InfoCard({ item, index }: { item: (typeof infoCards)[number]; index: number }) {
    const [title, description, Icon, color, bg] = item;
    return (
        <article className={`flex items-start gap-[22px] ${index > 0 ? 'border-t border-[#E5EBF4] pt-[20px]' : ''}`}>
            <span
                className="home-chip grid h-[63px] w-[63px] shrink-0 place-items-center rounded-[16px] border border-white/75"
                style={{ background: bg, color }}
            >
                <Icon className="h-[32px] w-[32px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="pt-[3px]">
                <h3 className="text-[16px] font-extrabold leading-[1.2] tracking-[-0.012em] text-[#07142F]">{title}</h3>
                <p className="mt-[8px] max-w-[310px] text-[14px] font-medium leading-[1.6] tracking-[-0.005em] text-[#27344E]">{description}</p>
            </div>
        </article>
    );
}

function FaqItem({
    faq,
    index,
    open,
    onToggle,
}: {
    faq: (typeof faqs)[number];
    index: number;
    open: boolean;
    onToggle: (index: number) => void;
}) {
    return (
        <article
            className={`overflow-hidden rounded-[14px] border bg-white/95 backdrop-blur transition-all duration-300 ${
                open
                    ? 'border-[#D7E0F1] shadow-[0_1px_0_rgba(255,255,255,0.92)_inset,0_14px_32px_rgba(11,86,234,0.10),0_2px_4px_rgba(15,23,42,0.04)]'
                    : 'border-white/70 shadow-[0_1px_0_rgba(255,255,255,0.92)_inset,0_8px_22px_rgba(15,23,42,0.04)]'
            }`}
        >
            <button
                type="button"
                onClick={() => onToggle(index)}
                className={`flex w-full items-center justify-between gap-4 text-left ${open ? 'px-[26px] pb-[12px] pt-[26px]' : 'h-[58px] px-[26px]'}`}
            >
                <span className={`font-extrabold leading-[1.22] tracking-[-0.012em] ${open ? 'text-[19px] text-[#0649C9]' : 'text-[17px] text-[#07142F]'}`}>
                    {faq.q}
                </span>
                <span
                    className={`grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[10px] transition-all ${
                        open
                            ? 'bg-[linear-gradient(145deg,#1768FF_0%,#003FC9_100%)] text-white shadow-[0_1px_0_rgba(255,255,255,0.32)_inset,0_10px_20px_rgba(11,86,234,0.28)]'
                            : 'border border-[#E5EBF4] bg-white text-[#07142F] shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_5px_12px_rgba(15,23,42,0.05)]'
                    }`}
                >
                    {open ? <Minus className="h-[17px] w-[17px]" strokeWidth={2.25} aria-hidden /> : <Plus className="h-[18px] w-[18px]" strokeWidth={2.15} aria-hidden />}
                </span>
            </button>

            {open && <p className="max-w-[840px] px-[26px] pb-[22px] text-[15px] font-medium leading-[1.6] tracking-[-0.005em] text-[#27344E]">{faq.a}</p>}
        </article>
    );
}

function SupportItem({ item }: { item: (typeof supportItems)[number]; index: number }) {
    const [line1, line2, Icon, color, bg] = item;
    return (
        <article className="flex items-center gap-[10px]">
            <span className="grid h-[36px] w-[36px] shrink-0 place-items-center rounded-full" style={{ background: bg, color }}>
                <Icon className="h-[18px] w-[18px]" strokeWidth={2.15} aria-hidden />
            </span>
            <p className="text-[12px] font-semibold leading-[1.3] tracking-[-0.005em] text-[#27344E]">
                <span className="block">{line1}</span>
                <span className="block">{line2}</span>
            </p>
        </article>
    );
}

const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex((current) => (current === index ? 0 : index));
    };

    return (
        <section
            id="faq"
            className="relative overflow-x-clip bg-[linear-gradient(180deg,#F4F8FF_0%,#F8FAFE_100%)] px-5 py-[52px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F] lg:px-8 lg:py-[84px]"
        >
            <div className="pointer-events-none absolute -left-32 top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(11,86,234,0.06)_0%,rgba(11,86,234,0)_70%)] blur-3xl" />
            <div className="relative mx-auto max-w-[1200px]">
                <div className="mt-[8px] grid items-start gap-[46px] lg:grid-cols-[515px_minmax(0,1fr)]">
                    <div className="pl-[22px]">
                        <span className="home-eyebrow inline-flex items-center gap-[8px] rounded-full border border-[#E0E8F8] bg-white/85 px-[16px] py-[8px] text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#0649C9] backdrop-blur">
                            FAQ
                        </span>
                        <h2 className="mt-[18px] text-[clamp(39px,7vw,52px)] font-extrabold leading-[1.06] tracking-[-0.028em] text-[#07142F]">
                            <span className="block whitespace-nowrap">
                                Questions?{' '}
                                <span className="bg-gradient-to-r from-[#075BFF] via-[#0B56EA] to-[#0A66FF] bg-clip-text text-transparent">
                                    We&apos;ve
                                </span>
                            </span>
                            <span className="block whitespace-nowrap">Got Answers.</span>
                        </h2>
                        <p className="mt-[22px] max-w-[400px] text-[18px] font-medium leading-[1.6] tracking-[-0.005em] text-[#334155]">
                            Everything you need to know about GPOS and how it can help your business grow.
                        </p>

                        <div className="mt-[28px] max-w-[385px] space-y-[19px]">
                            {infoCards.map((item, index) => (
                                <InfoCard key={item[0]} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-[10px]">
                        {faqs.map((faq, index) => (
                            <FaqItem key={faq.q} faq={faq} index={index} open={openIndex === index} onToggle={toggleAccordion} />
                        ))}
                    </div>
                </div>

                <div className="mt-[26px] grid grid-cols-1 items-center gap-[20px] overflow-hidden rounded-[16px] border border-[#DDE6F2] bg-[#EEF3FB] px-[22px] py-[20px] lg:grid-cols-[1.55fr_1fr] lg:gap-[28px] lg:px-[28px] lg:py-[22px]">
                    <div className="flex flex-col gap-[18px] sm:flex-row sm:items-center sm:justify-between lg:gap-[20px]">
                        <div className="flex items-center gap-[16px]">
                            <span className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-full bg-[#DCE8FC] text-[#0B56EA]">
                                <MessageCircleQuestion className="h-[28px] w-[28px]" strokeWidth={2.1} aria-hidden />
                            </span>
                            <div className="min-w-0">
                                <h3 className="text-[18px] font-extrabold leading-[1.2] tracking-[-0.018em] text-[#07142F]">Still have questions?</h3>
                                <p className="mt-[4px] max-w-[300px] text-[13px] font-medium leading-[1.45] text-[#5A6478]">
                                    Our team is here to help you find the perfect solution for your business.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[10px] sm:flex-row sm:items-center">
                            <Link
                                to="/contact"
                                className="inline-flex h-[42px] items-center justify-center gap-[8px] whitespace-nowrap rounded-[8px] bg-[#1259EA] px-[18px] text-[13px] font-bold tracking-[-0.005em] text-white no-underline shadow-[0_4px_10px_rgba(11,86,234,0.22)] transition hover:bg-[#0E4FD1]"
                            >
                                <Headphones className="h-[16px] w-[16px]" strokeWidth={2.2} aria-hidden />
                                Talk to Our Experts
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex h-[42px] items-center justify-center gap-[8px] whitespace-nowrap rounded-[8px] border border-[#C5D2E5] bg-white px-[18px] text-[13px] font-bold tracking-[-0.005em] text-[#07142F] no-underline transition hover:border-[#9CB2D5]"
                            >
                                <Mail className="h-[16px] w-[16px]" strokeWidth={2.2} aria-hidden />
                                Email Us
                            </Link>
                        </div>
                    </div>

                    <div className="lg:pl-[20px]">
                        <h3 className="text-[14px] font-extrabold leading-[1.2] tracking-[-0.012em] text-[#07142F]">We&apos;re here for you</h3>
                        <div className="mt-[12px] flex flex-wrap items-center gap-x-[20px] gap-y-[10px]">
                            {supportItems.map((item, index) => (
                                <SupportItem key={`${item[0]} ${item[1]}`} item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
