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
import { WHATSAPP_DISPLAY, WHATSAPP_HREF, PHONE_DISPLAY, PHONE_HREF, EMAIL_DISPLAY, EMAIL_HREF } from '../constants/contact';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import ScheduleDemoForm from './ScheduleDemoForm';

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
        detail: PHONE_DISPLAY,
        href: PHONE_HREF,
        Icon: Phone,
        color: '#D79B1F',
        bg: 'linear-gradient(145deg,#FFF8EA 0%,#FFF0CC 100%)',
    },
    {
        title: 'WhatsApp Us',
        detail: WHATSAPP_DISPLAY,
        href: WHATSAPP_HREF,
        Icon: 'whatsapp' as const,
        color: '#13A35D',
        bg: 'linear-gradient(145deg,#EAF8EF 0%,#D8F3E4 100%)',
    },
    {
        title: 'Email Us',
        detail: EMAIL_DISPLAY,
        href: EMAIL_HREF,
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
        <span className="home-eyebrow inline-flex items-center gap-[10px] rounded-full border border-[#D9E5F5] bg-white/85 px-[16px] py-[10px] text-[18px] font-extrabold leading-none tracking-[-0.005em] text-[#0649C9] backdrop-blur">
            <span className="home-chip grid h-[26px] w-[26px] place-items-center rounded-full bg-[linear-gradient(145deg,#1768FF_0%,#003FC9_100%)] text-white">
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
                className="home-chip grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full border border-white/75"
                style={{ background: bg, color }}
            >
                <Icon className="h-[28px] w-[28px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="text-[14px] font-extrabold leading-[1.55] tracking-[-0.005em] text-[#07142F]">
                <p>{firstLine}</p>
                <p>{secondLine}</p>
            </div>
        </article>
    );
}

function ContactItem({ item, index }: { item: (typeof contactItems)[number]; index: number }) {
    const isWhatsApp = item.Icon === 'whatsapp';
    const Icon = isWhatsApp ? null : (item.Icon as LucideIcon);
    const href = 'href' in item ? item.href : undefined;

    const sizing = item.featured ? 'gap-[19px] px-[28px] lg:min-w-[360px]' : 'gap-[14px] px-[18px]';
    const divider = index > 0 ? 'lg:border-l lg:border-[#E2E8F3]' : '';
    const isWhatsAppExternal = isWhatsApp || (href ? /^https?:/.test(href) : false);

    const inner = (
        <>
            <span
                className={`${item.featured ? 'h-[78px] w-[78px]' : 'h-[46px] w-[46px]'} home-chip grid shrink-0 place-items-center rounded-full border border-white/75`}
                style={{ background: item.bg, color: item.color }}
            >
                {isWhatsApp ? (
                    <WhatsAppIcon className="h-[24px] w-[24px]" size={24} variant="brand" aria-hidden />
                ) : Icon ? (
                    <Icon className={item.featured ? 'h-[36px] w-[36px]' : 'h-[22px] w-[22px]'} strokeWidth={2.15} aria-hidden />
                ) : null}
            </span>
            <div className="min-w-0">
                <h3 className="whitespace-nowrap text-[15px] font-extrabold leading-[1.2] tracking-[-0.012em] text-[#07142F]">{item.title}</h3>
                <p className="mt-[6px] whitespace-nowrap text-[13.5px] font-medium leading-[1.3] text-[#27344E]">{item.detail}</p>
            </div>
        </>
    );

    const baseClasses = `flex min-h-[80px] items-center py-[12px] ${sizing} ${divider}`;

    if (href) {
        return (
            <a
                href={href}
                className={`${baseClasses} no-underline transition-colors hover:bg-[#F8FAFE]`}
                {...(isWhatsAppExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
                {inner}
            </a>
        );
    }

    return <article className={baseClasses}>{inner}</article>;
}

const DemoCtaSection: React.FC = () => {
    return (
        <section
            className="home-demo-cta-section relative overflow-x-clip bg-[linear-gradient(180deg,#F8FAFE_0%,#F4F8FF_100%)] py-[44px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F]"
            style={{ paddingLeft: 20, paddingRight: 20 }}
        >
            <div className="home-demo-cta-card home-card relative mx-auto max-w-[1510px] overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,#F2F7FF_0%,#EEF5FF_54%,#F5F9FF_100%)] px-[25px] pb-[31px] pt-[44px] backdrop-blur lg:px-[40px]">
                <div className="grid items-start gap-[30px] lg:grid-cols-[minmax(0,690px)_minmax(420px,1fr)]">
                    <div className="pt-[1px]">
                        <TopPill />

                        <h2 className="mt-[28px] text-[clamp(30px,4vw,38px)] font-extrabold leading-[1.1] tracking-[-0.028em] text-[#07142F]">
                            <span className="block whitespace-nowrap">Ready to Transform Your Food Business?</span>
                            <span className="block bg-gradient-to-r from-[#075BFF] via-[#0B56EA] to-[#0A66FF] bg-clip-text text-transparent">
                                Let&apos;s Get Started!
                            </span>
                        </h2>

                        <p className="mt-[24px] max-w-[650px] text-[20px] font-medium leading-[1.6] tracking-[-0.005em] text-[#334155]">
                            Book a free demo and see how GPOS can simplify your operations, delight your customers and grow your profits.
                        </p>

                        <div className="mt-[32px] grid max-w-[640px] grid-cols-1 gap-[20px] sm:grid-cols-3">
                            {highlights.map((item) => (
                                <HighlightItem key={`${item[0]} ${item[1]}`} item={item} />
                            ))}
                        </div>

                        <div className="mt-[44px] flex flex-col gap-[16px] sm:flex-row">
                            <Link
                                to="/get_demo#schedule-demo-form"
                                className="home-cta-primary home-gloss inline-flex h-[60px] w-full items-center justify-center gap-[15px] whitespace-nowrap rounded-[12px] px-[24px] text-[18px] font-extrabold tracking-[-0.005em] text-white no-underline sm:w-[320px]"
                            >
                                <CalendarDays className="h-[25px] w-[25px]" strokeWidth={2.15} aria-hidden />
                                Book a Free Demo
                                <ArrowRight className="h-[22px] w-[22px]" strokeWidth={2.15} aria-hidden />
                            </Link>
                            <Link
                                to="/restaurant_pos"
                                className="home-cta-secondary inline-flex h-[60px] w-full items-center justify-center gap-[12px] whitespace-nowrap rounded-[12px] border border-[#0B56EA] px-[22px] text-[17px] font-extrabold tracking-[-0.005em] text-[#0649C9] no-underline sm:w-[270px]"
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

                    <div className="relative min-h-[520px] lg:min-h-[560px]">
                        <div className="pointer-events-none absolute right-[-42px] top-[-5px] h-[642px] w-[700px] rounded-[50%] bg-[radial-gradient(circle,#E4EEFF_0%,#EAF3FF_45%,rgba(234,243,255,0)_72%)] opacity-90" />
                        <div className="pointer-events-none absolute bottom-[24px] left-[-38px] h-[150px] w-[240px] opacity-[0.24] [background-image:radial-gradient(#7AA7EF_1px,transparent_1px)] [background-size:14px_14px]" />
                        <div className="relative z-10 ml-auto mt-[8px] max-w-[580px] rounded-[24px] border border-[#D8E3F4] bg-white/95 p-[24px] shadow-[0_24px_54px_rgba(15,23,42,0.10)] lg:mt-0">
                            <div className="mb-[22px]">
                                <p className="text-[15px] font-extrabold uppercase tracking-[0.08em] text-[#0B56EA]">Book your demo</p>
                                <h3 className="mt-[8px] text-[28px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#07142F]">
                                    See how GPOS fits your business.
                                </h3>
                                <p className="mt-[10px] text-[15px] font-medium leading-[1.55] text-[#526176]">
                                    Share your details and our team will contact you shortly.
                                </p>
                            </div>
                            <ScheduleDemoForm
                                mode="submit"
                                idPrefix="home-demo-cta"
                                className="!mt-0"
                                submitLabel="Send Details"
                            />
                        </div>
                    </div>
                </div>

                <div className="home-demo-cta-contact-strip home-card mt-[18px] rounded-[20px] border border-white/70 bg-white/95 px-[31px] py-[26px] backdrop-blur">
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
