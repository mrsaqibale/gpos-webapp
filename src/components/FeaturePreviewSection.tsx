import React from 'react';
import {
    ArrowRight,
    BarChart3,
    Calculator,
    ConciergeBell,
    Megaphone,
    MessageCircle,
    ShieldCheck,
    Star,
    Tag,
    Users,
} from 'lucide-react';
import smartPosPreview from '../assets/feature-preview-smart-pos.png';
import whatsappPreview from '../assets/feature-preview-whatsapp.png';
import kitchenPreview from '../assets/feature-preview-kitchen.png';
import customerPreview from '../assets/feature-preview-customer.png';
import menuPreview from '../assets/feature-preview-menu.png';
import reportsPreview from '../assets/feature-preview-reports.png';
import staffPreview from '../assets/feature-preview-staff.png';
import marketingPreview from '../assets/feature-preview-marketing.png';

type LucideIcon = React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;

const cards = [
    {
        title: 'Smart POS',
        description: 'Fast billing, multiple payment options and a seamless checkout experience.',
        Icon: Calculator,
        image: smartPosPreview,
        iconColor: '#17A96A',
        iconBg: 'linear-gradient(145deg, #E3F9EF 0%, #CFF3E2 100%)',
        imageClass: 'mt-[22px] h-[238px]',
    },
    {
        title: 'WhatsApp Re-Engagement',
        description: 'Bring inactive customers back on WhatsApp with automated campaigns, offers and reminders.',
        Icon: MessageCircle,
        image: whatsappPreview,
        iconColor: '#18A963',
        iconBg: 'linear-gradient(145deg, #E8FAF1 0%, #D1F4E2 100%)',
        imageClass: 'mt-[21px] h-[238px]',
    },
    {
        title: 'Order & Kitchen Management',
        description: 'Manage orders, send them to kitchen in real-time and track every step effortlessly.',
        Icon: ConciergeBell,
        image: kitchenPreview,
        iconColor: '#7B25D8',
        iconBg: 'linear-gradient(145deg, #F3EAFF 0%, #E4D6FF 100%)',
        imageClass: 'mt-[28px] h-[220px]',
    },
    {
        title: 'Customer Management',
        description: 'Build your customer database, track history and create stronger relationships.',
        Icon: Users,
        image: customerPreview,
        iconColor: '#0A55F5',
        iconBg: 'linear-gradient(145deg, #EEF5FF 0%, #DAE9FF 100%)',
        imageClass: 'mt-[21px] h-[236px]',
    },
    {
        title: 'Menu & Modifier Management',
        description: 'Create menus, variants, combos and add-ons easily.',
        Icon: Tag,
        image: menuPreview,
        iconColor: '#F6A400',
        iconBg: 'linear-gradient(145deg, #FFF7E8 0%, #FFECC0 100%)',
        imageClass: 'mt-[29px] h-[220px]',
    },
    {
        title: 'Reports & Analytics',
        description: 'Get real-time insights and make data-driven decisions.',
        Icon: BarChart3,
        image: reportsPreview,
        iconColor: '#E33B69',
        iconBg: 'linear-gradient(145deg, #FFF0F5 0%, #FDE0EA 100%)',
        imageClass: 'mt-[29px] h-[224px]',
    },
    {
        title: 'Staff & Role Management',
        description: 'Add staff, assign roles and track performance with permissions.',
        Icon: ShieldCheck,
        image: staffPreview,
        iconColor: '#0A55F5',
        iconBg: 'linear-gradient(145deg, #EEF5FF 0%, #DBEAFF 100%)',
        imageClass: 'mt-[29px] h-[225px]',
    },
    {
        title: 'Marketing & Campaigns',
        description: 'Run promotions, send offers and increase repeat orders.',
        Icon: Megaphone,
        image: marketingPreview,
        iconColor: '#14AFC0',
        iconBg: 'linear-gradient(145deg, #E8FAFC 0%, #D4F4F7 100%)',
        imageClass: 'mt-[48px] h-[200px]',
    },
] as const;

function FeatureCard({
    title,
    description,
    Icon,
    image,
    iconColor,
    iconBg,
    imageClass,
}: {
    title: string;
    description: string;
    Icon: LucideIcon;
    image: string;
    iconColor: string;
    iconBg: string;
    imageClass: string;
}) {
    return (
        <article className="home-tile h-[371px] overflow-hidden rounded-[18px] border border-white/70 bg-white/95 px-[16px] py-[16px] backdrop-blur">
            <div className="flex items-start gap-[18px]">
                <span
                    className="home-chip grid h-[60px] w-[60px] shrink-0 place-items-center rounded-[14px] border border-white/75"
                    style={{ background: iconBg, color: iconColor }}
                >
                    <Icon className="h-[30px] w-[30px]" strokeWidth={2.2} aria-hidden />
                </span>
                <div className="pt-[3px]">
                    <h3 className="text-[16px] font-extrabold leading-[1.2] tracking-[-0.012em] text-[#07142F]">{title}</h3>
                    <p className="mt-[6px] max-w-[246px] text-[13px] font-medium leading-[1.5] text-[#202E46]">{description}</p>
                </div>
            </div>

            <img
                src={image}
                alt=""
                className={`w-full rounded-[12px] border border-[#E8EDF6] object-cover shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_12px_26px_rgba(15,23,42,0.06)] ${imageClass}`}
                loading="lazy"
                decoding="async"
                aria-hidden
            />
        </article>
    );
}

const FeaturePreviewSection: React.FC = () => {
    return (
        <section
            className="relative overflow-x-clip bg-[linear-gradient(180deg,#F8FAFE_0%,#F4F8FF_100%)] px-5 py-[52px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F] lg:px-8 lg:py-[84px]"
        >
            <div className="pointer-events-none absolute -right-32 top-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(11,86,234,0.06)_0%,rgba(11,86,234,0)_70%)] blur-3xl" />
            <div className="relative mx-auto max-w-[1200px]">
                <div className="mx-auto mt-[8px] max-w-[900px] text-center">
                    <span className="home-eyebrow inline-flex items-center gap-[8px] rounded-full border border-[#E0E8F8] bg-white/85 px-[16px] py-[8px] text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#0649C9] backdrop-blur">
                        Built to scale
                    </span>
                    <h2 className="mt-[18px] text-[clamp(33px,5.4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.028em] text-[#07142F]">
                        Everything You Need to{' '}
                        <span className="bg-gradient-to-r from-[#075BFF] via-[#0A55F5] to-[#003FC9] bg-clip-text text-transparent">
                            Run &amp; Grow
                        </span>{' '}
                        Your Business
                    </h2>
                    <p className="mx-auto mt-[16px] max-w-[760px] text-[18px] font-medium leading-[1.55] tracking-[-0.005em] text-[#5B667A]">
                        Powerful features designed to simplify operations, delight customers and boost your profits.
                    </p>
                </div>

                <div className="mt-[28px] grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <FeatureCard key={card.title} {...card} />
                    ))}
                </div>

                <div className="home-card mt-[32px] flex flex-col gap-4 rounded-[18px] border border-white/70 bg-[linear-gradient(160deg,#F4F8FF_0%,#EAF1FF_100%)] px-[24px] py-[22px] sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-[22px]">
                        <span className="home-chip grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#1768FF_0%,#003FC9_100%)] text-white">
                            <Star className="h-[28px] w-[28px] fill-white" strokeWidth={1.6} aria-hidden />
                        </span>
                        <div>
                            <h3 className="text-[17px] font-extrabold leading-[1.25] tracking-[-0.012em] text-[#07142F]">
                                All the features you need. One system to run it all.
                            </h3>
                            <p className="mt-[8px] text-[13px] font-medium leading-[1.5] text-[#394860]">
                                Simplify operations, improve customer experience and grow your business with GPOS.
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="home-cta-primary home-gloss inline-flex h-[46px] shrink-0 items-center justify-center gap-[10px] rounded-[10px] px-[26px] text-[15px] font-extrabold tracking-[-0.005em] text-white"
                    >
                        Explore All Features
                        <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturePreviewSection;
