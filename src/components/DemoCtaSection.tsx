import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    CirclePlay,
    Clock3,
    Headphones,
    Lock,
    Mail,
    MessageCircle,
    Phone,
    Play,
    ShieldCheck,
    Users,
} from 'lucide-react';
import demoCtaPreview from '../assets/demo-cta-dashboard-phone-preview.png';

type LucideIcon = React.ComponentType<{ className?: string; strokeWidth?: number; fill?: string; 'aria-hidden'?: boolean }>;

const highlights = [
    ['Personalized', 'Live Demo', CalendarDays, '#0B56EA', 'linear-gradient(145deg,#EAF2FF 0%,#DCEAFF 100%)'],
    ['No Commitment', 'Required', Clock3, '#18A963', 'linear-gradient(145deg,#EAF8EF 0%,#D8F3E4 100%)'],
    ['Tailored for', 'Your Business', Users, '#7A22D7', 'linear-gradient(145deg,#F3EDFF 0%,#E4D8FF 100%)'],
] as const;

const trustItems = [
    ['No Credit Card Required', ShieldCheck],
    ['100% Secure', Lock],
    ['Cancel Anytime', CheckCircle2],
] as const;

const contactItems = [
    {
        title: 'Have Questions?',
        detail: 'Our team is here to help you.',
        Icon: Headphones,
        color: '#0B56EA',
        bg: 'linear-gradient(145deg,#EAF2FF 0%,#DDEBFF 100%)',
        featured: true,
    },
    {
        title: 'Call Us',
        detail: '+1 (555) 123-4567',
        Icon: Phone,
        color: '#D79B1F',
        bg: 'linear-gradient(145deg,#FFF8EA 0%,#FFF0CC 100%)',
    },
    {
        title: 'WhatsApp Us',
        detail: '+1 (555) 123-4567',
        Icon: MessageCircle,
        color: '#13A35D',
        bg: 'linear-gradient(145deg,#EAF8EF 0%,#D8F3E4 100%)',
    },
    {
        title: 'Email Us',
        detail: 'hello@gpos.com',
        Icon: Mail,
        color: '#7A22D7',
        bg: 'linear-gradient(145deg,#F8EDFF 0%,#ECD9FF 100%)',
    },
    {
        title: 'Live Chat',
        detail: 'Available 24/7',
        Icon: MessageCircle,
        color: '#6D2DE2',
        bg: 'linear-gradient(145deg,#F4EDFF 0%,#E7DAFF 100%)',
    },
] as const;

function TopPill() {
    return (
        <span className="inline-flex items-center gap-[10px] rounded-full border border-[#D9E5F5] bg-white/55 px-[14px] py-[9px] text-[18px] font-extrabold leading-none text-[#0649C9] shadow-[0_9px_22px_rgba(15,23,42,0.035),inset_0_1px_0_rgba(255,255,255,0.95)]">
            <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-[#0B56EA] text-white shadow-[0_7px_14px_rgba(11,86,234,0.22)]">
                <Play className="h-[12px] w-[12px] translate-x-[1px] fill-current" strokeWidth={2.1} aria-hidden />
            </span>
            See GPOS in Action
        </span>
    );
}

function HighlightItem({ item }: { item: (typeof highlights)[number] }) {
    const [firstLine, secondLine, Icon, color, bg] = item;
    return (
        <article className="flex items-center gap-[15px]">
            <span
                className="grid h-[55px] w-[55px] shrink-0 place-items-center rounded-full border border-white/75 shadow-[0_12px_26px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.85)]"
                style={{ background: bg, color }}
            >
                <Icon className="h-[28px] w-[28px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="text-[14px] font-extrabold leading-[1.55] text-[#07142F]">
                <p>{firstLine}</p>
                <p>{secondLine}</p>
            </div>
        </article>
    );
}

function ContactItem({ item, index }: { item: (typeof contactItems)[number]; index: number }) {
    const Icon = item.Icon as LucideIcon;

    return (
        <article
            className={`flex min-h-[76px] items-center gap-[19px] px-[31px] py-[10px] ${
                index > 0 ? 'lg:border-l lg:border-[#E2E8F3]' : ''
            } ${item.featured ? 'lg:min-w-[370px]' : ''}`}
        >
            <span
                className={`${item.featured ? 'h-[76px] w-[76px]' : 'h-[48px] w-[48px]'} grid shrink-0 place-items-center rounded-full border border-white/75 shadow-[0_11px_24px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.86)]`}
                style={{ background: item.bg, color: item.color }}
            >
                <Icon className={item.featured ? 'h-[38px] w-[38px]' : 'h-[24px] w-[24px]'} strokeWidth={2.15} aria-hidden />
            </span>
            <div>
                <h3 className="whitespace-nowrap text-[16px] font-extrabold leading-[1.2] text-[#07142F]">{item.title}</h3>
                <p className="mt-[8px] whitespace-nowrap text-[14px] font-medium leading-[1.25] text-[#27344E]">{item.detail}</p>
            </div>
        </article>
    );
}

const DemoCtaSection: React.FC = () => {
    return (
        <section
            className="overflow-x-clip bg-[#F8FAFE] py-[20px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F]"
            style={{ paddingLeft: 20, paddingRight: 20 }}
        >
            <div className="mx-auto max-w-[1510px] overflow-hidden rounded-[25px] border border-[#DCE8F8] bg-[linear-gradient(135deg,#F2F7FF_0%,#EEF5FF_54%,#F5F9FF_100%)] px-[25px] pb-[31px] pt-[43px] shadow-[0_18px_46px_rgba(15,23,42,0.05),inset_0_1px_0_rgba(255,255,255,0.84)] lg:px-[36px]">
                <div className="grid items-start gap-[30px] lg:grid-cols-[735px_minmax(0,1fr)]">
                    <div className="pt-[1px]">
                        <TopPill />

                        <h2 className="mt-[32px] text-[clamp(30px,4vw,35px)] font-extrabold leading-[1.15] tracking-[-0.008em] text-[#07142F]">
                            <span className="block whitespace-nowrap">Ready to Transform Your Food Business?</span>
                            <span className="block bg-gradient-to-r from-[#075BFF] via-[#0B56EA] to-[#0A66FF] bg-clip-text text-transparent">
                                Let&apos;s Get Started!
                            </span>
                        </h2>

                        <p className="mt-[25px] max-w-[650px] text-[20px] font-medium leading-[1.55] text-[#334155]">
                            Book a free demo and see how GPOS can simplify your operations, delight your customers and grow your profits.
                        </p>

                        <div className="mt-[32px] grid max-w-[640px] grid-cols-1 gap-[20px] sm:grid-cols-3">
                            {highlights.map((item) => (
                                <HighlightItem key={`${item[0]} ${item[1]}`} item={item} />
                            ))}
                        </div>

                        <div className="mt-[47px] flex flex-col gap-[20px] sm:flex-row">
                            <Link
                                to="/get_demo#schedule-demo-form"
                                className="inline-flex h-[60px] w-full items-center justify-center gap-[15px] whitespace-nowrap rounded-[8px] bg-gradient-to-r from-[#075BFF] to-[#004BE8] px-[24px] text-[18px] font-extrabold text-white no-underline shadow-[0_16px_30px_rgba(11,86,234,0.25),inset_0_1px_0_rgba(255,255,255,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_34px_rgba(11,86,234,0.3)] sm:w-[320px]"
                            >
                                <CalendarDays className="h-[25px] w-[25px]" strokeWidth={2.15} aria-hidden />
                                Book a Free Demo
                                <ArrowRight className="h-[22px] w-[22px]" strokeWidth={2.15} aria-hidden />
                            </Link>
                            <Link
                                to="/restaurant_pos"
                                className="inline-flex h-[60px] w-full items-center justify-center gap-[12px] whitespace-nowrap rounded-[8px] border border-[#0B56EA] bg-white/80 px-[22px] text-[17px] font-extrabold text-[#0649C9] no-underline shadow-[0_12px_24px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:translate-y-[-1px] hover:bg-white sm:w-[270px]"
                            >
                                <CirclePlay className="h-[25px] w-[25px]" strokeWidth={2.15} aria-hidden />
                                Watch Product Tour
                            </Link>
                        </div>

                        <div className="mt-[44px] flex flex-col gap-[18px] text-[15px] font-semibold leading-none text-[#526176] sm:flex-row sm:items-center">
                            {trustItems.map(([label, Icon], index) => (
                                <div
                                    key={label}
                                    className={`flex items-center gap-[11px] ${index > 0 ? 'sm:border-l sm:border-[#DCE3EF] sm:pl-[26px]' : ''}`}
                                >
                                    <Icon className="h-[20px] w-[20px] shrink-0 text-[#526176]" strokeWidth={2.05} aria-hidden />
                                    <span className="whitespace-nowrap">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative min-h-[580px] lg:min-h-[650px]">
                        <div className="pointer-events-none absolute right-[-42px] top-[-5px] h-[642px] w-[700px] rounded-[50%] bg-[radial-gradient(circle,#E4EEFF_0%,#EAF3FF_45%,rgba(234,243,255,0)_72%)] opacity-90" />
                        <div className="pointer-events-none absolute bottom-[24px] left-[-38px] h-[150px] w-[240px] opacity-[0.24] [background-image:radial-gradient(#7AA7EF_1px,transparent_1px)] [background-size:14px_14px]" />
                        <img
                            src={demoCtaPreview}
                            alt="GPOS dashboard and WhatsApp recovery preview"
                            className="relative z-10 mt-[54px] h-auto w-[min(100%,790px)] max-w-none object-contain drop-shadow-[0_24px_38px_rgba(15,23,42,0.12)] lg:absolute lg:right-0 lg:top-[42px] lg:mt-0 lg:w-[640px]"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                <div className="mt-[-82px] rounded-[16px] border border-[#E1E8F4] bg-white px-[31px] py-[25px] shadow-[0_16px_36px_rgba(15,23,42,0.045),inset_0_1px_0_rgba(255,255,255,0.94)]">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.38fr_repeat(4,1fr)] lg:gap-0">
                        {contactItems.map((item, index) => (
                            <ContactItem key={item.title} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoCtaSection;
