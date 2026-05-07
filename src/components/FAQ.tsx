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
        <article className={`flex items-start gap-[22px] ${index > 0 ? 'border-t border-[#E5EBF4] pt-[19px]' : ''}`}>
            <span
                className="grid h-[63px] w-[63px] shrink-0 place-items-center rounded-[12px] border border-white/75 shadow-[0_12px_26px_rgba(15,23,42,0.045),inset_0_1px_0_rgba(255,255,255,0.86)]"
                style={{ background: bg, color }}
            >
                <Icon className="h-[34px] w-[34px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="pt-[3px]">
                <h3 className="text-[16px] font-extrabold leading-[1.2] text-[#07142F]">{title}</h3>
                <p className="mt-[8px] max-w-[310px] text-[14px] font-medium leading-[1.55] text-[#27344E]">{description}</p>
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
            className={`overflow-hidden rounded-[10px] border bg-white transition-all duration-200 ${
                open
                    ? 'border-[#D7E0F1] shadow-[0_12px_28px_rgba(15,23,42,0.055),inset_0_1px_0_rgba(255,255,255,0.92)]'
                    : 'border-[#E5EBF4] shadow-[0_8px_18px_rgba(15,23,42,0.035)]'
            }`}
        >
            <button
                type="button"
                onClick={() => onToggle(index)}
                className={`flex w-full items-center justify-between gap-4 text-left ${open ? 'px-[24px] pb-[10px] pt-[25px]' : 'h-[55px] px-[24px]'}`}
            >
                <span className={`font-extrabold leading-[1.22] ${open ? 'text-[19px] text-[#0649C9]' : 'text-[17px] text-[#07142F]'}`}>
                    {faq.q}
                </span>
                <span
                    className={`grid h-[28px] w-[28px] shrink-0 place-items-center rounded-[8px] ${
                        open
                            ? 'bg-[#0B56EA] text-white shadow-[0_8px_16px_rgba(11,86,234,0.2)]'
                            : 'border border-[#E5EBF4] bg-[#F8FAFE] text-[#07142F] shadow-[0_5px_12px_rgba(15,23,42,0.035)]'
                    }`}
                >
                    {open ? <Minus className="h-[17px] w-[17px]" strokeWidth={2.25} aria-hidden /> : <Plus className="h-[18px] w-[18px]" strokeWidth={2.15} aria-hidden />}
                </span>
            </button>

            {open && <p className="max-w-[840px] px-[24px] pb-[22px] text-[15px] font-medium leading-[1.55] text-[#27344E]">{faq.a}</p>}
        </article>
    );
}

function SupportItem({ item, index }: { item: (typeof supportItems)[number]; index: number }) {
    const [line1, line2, Icon, color, bg] = item;
    return (
        <article className={`flex items-center gap-[12px] px-[12px] ${index > 0 ? 'lg:border-l lg:border-[#E5EBF4]' : ''}`}>
            <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border border-white/75" style={{ background: bg, color }}>
                <Icon className="h-[23px] w-[23px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="text-[13px] font-semibold leading-[1.28] text-[#27344E]">
                <p className="whitespace-nowrap">{line1}</p>
                <p className="whitespace-nowrap">{line2}</p>
            </div>
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
            className="overflow-x-clip bg-[#F8FAFE] py-[20px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F]"
            style={{ paddingLeft: 20, paddingRight: 20 }}
        >
            <div className="mx-auto max-w-[1468px]">
                <div className="mt-[8px] grid items-start gap-[46px] lg:grid-cols-[515px_minmax(0,1fr)]">
                    <div className="pl-[22px]">
                        <p className="text-[20px] font-extrabold leading-none text-[#0B56EA]">FAQ</p>
                        <h2 className="mt-[22px] text-[clamp(39px,7vw,51px)] font-extrabold leading-[1.13] tracking-[-0.025em] text-[#07142F]">
                            <span className="block whitespace-nowrap">
                                Questions?{' '}
                                <span className="bg-gradient-to-r from-[#075BFF] via-[#0B56EA] to-[#0A66FF] bg-clip-text text-transparent">
                                    We&apos;ve
                                </span>
                            </span>
                            <span className="block whitespace-nowrap">Got Answers.</span>
                        </h2>
                        <p className="mt-[24px] max-w-[380px] text-[18px] font-medium leading-[1.55] text-[#334155]">
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

                <div className="mt-[18px] grid min-h-[170px] grid-cols-1 overflow-hidden rounded-[13px] border border-[#DDE7F5] bg-white shadow-[0_16px_38px_rgba(15,23,42,0.05),inset_0_1px_0_rgba(255,255,255,0.95)] lg:grid-cols-[1.55fr_1fr]">
                    <div className="flex flex-col gap-5 px-[31px] py-[32px] sm:flex-row sm:items-center sm:justify-between lg:border-r lg:border-[#E5EBF4]">
                        <div className="flex items-center gap-[24px]">
                            <span className="grid h-[96px] w-[96px] shrink-0 place-items-center rounded-full bg-[#EAF2FF] text-[#0B56EA] shadow-[0_12px_26px_rgba(11,86,234,0.08),inset_0_1px_0_rgba(255,255,255,0.86)]">
                                <MessageCircleQuestion className="h-[52px] w-[52px]" strokeWidth={2.1} aria-hidden />
                            </span>
                            <div>
                                <h3 className="whitespace-nowrap text-[24px] font-extrabold leading-[1.2] text-[#07142F]">Still have questions?</h3>
                                <p className="mt-[8px] max-w-[330px] text-[14px] font-medium leading-[1.45] text-[#334155]">
                                    Our team is here to help you find the perfect solution for your business.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[16px] sm:flex-row sm:items-center">
                            <Link
                                to="/contact"
                                className="inline-flex h-[49px] min-w-[214px] items-center justify-center gap-[11px] whitespace-nowrap rounded-[7px] bg-gradient-to-r from-[#075BFF] to-[#004BE8] px-[24px] text-[15px] font-extrabold text-white no-underline shadow-[0_12px_24px_rgba(11,86,234,0.24),inset_0_1px_0_rgba(255,255,255,0.18)] transition hover:translate-y-[-1px]"
                            >
                                <Headphones className="h-[22px] w-[22px]" strokeWidth={2.15} aria-hidden />
                                Talk to Our Experts
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex h-[49px] min-w-[142px] items-center justify-center gap-[11px] whitespace-nowrap rounded-[7px] border border-[#9CB2D5] bg-white px-[24px] text-[15px] font-extrabold text-[#0649C9] no-underline shadow-[0_10px_20px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:translate-y-[-1px]"
                            >
                                <Mail className="h-[22px] w-[22px]" strokeWidth={2.15} aria-hidden />
                                Email Us
                            </Link>
                        </div>
                    </div>

                    <div className="px-[33px] py-[32px]">
                        <h3 className="text-[21px] font-extrabold leading-[1.2] text-[#07142F]">We&apos;re here for you</h3>
                        <div className="mt-[25px] grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-0">
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
