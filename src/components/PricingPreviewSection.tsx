import React from 'react';
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Cloud,
    CreditCard,
    Crown,
    Headphones,
    RotateCcw,
    Send,
    ShieldCheck,
    Star,
    TrendingUp,
} from 'lucide-react';

type LucideIcon = React.ComponentType<{ className?: string; strokeWidth?: number; fill?: string; 'aria-hidden'?: boolean }>;

const pricingPlans = [
    {
        name: 'Starter',
        audience: 'Perfect for small food businesses.',
        title: 'Best for Getting Started',
        cta: 'Start Free Trial',
        footer: '7 Days Free Trial',
        Icon: Send,
        accent: '#0B56EA',
        pale: '#EEF5FF',
        iconBg: 'linear-gradient(145deg,#EEF5FF 0%,#DFEAFF 100%)',
        button: 'outline-blue',
        features: ['1 Outlet', 'POS & Billing', 'Basic Reports', 'Menu Management', 'Customer Support'],
        footerBg: '#EEF5FF',
    },
    {
        name: 'Growth',
        audience: 'Best for growing businesses.',
        title: 'Great Value',
        cta: 'Start Free Trial',
        footer: '7 Days Free Trial',
        Icon: TrendingUp,
        accent: '#14A461',
        pale: '#EAF8EF',
        iconBg: 'linear-gradient(145deg,#EAF8EF 0%,#D6F1E2 100%)',
        button: 'green',
        popular: true,
        features: ['Up to 3 Outlets', 'All Starter Features', 'Advanced Reports', 'Staff Management', 'WhatsApp Re-Engagement', 'Priority Support'],
        footerBg: '#EAF8EF',
    },
    {
        name: 'Pro',
        audience: 'For established businesses.',
        title: 'Most Powerful',
        cta: 'Start Free Trial',
        footer: '7 Days Free Trial',
        Icon: Crown,
        accent: '#7A22D7',
        pale: '#F3ECFF',
        iconBg: 'linear-gradient(145deg,#F4EDFF 0%,#E6D7FF 100%)',
        button: 'outline-purple',
        features: ['Up to 10 Outlets', 'All Growth Features', 'Kitchen Display System', 'Advanced Analytics', 'Role-Based Access', 'Priority Support'],
        footerBg: '#F4EDFF',
    },
    {
        name: 'Enterprise',
        audience: 'For large chains & enterprises.',
        title: 'Tailored for You',
        cta: 'Talk to Sales',
        footer: 'Custom Solution',
        Icon: Building2,
        accent: '#ED7A1E',
        pale: '#FFF1E4',
        iconBg: 'linear-gradient(145deg,#FFF2E4 0%,#FFE1C1 100%)',
        button: 'outline-orange',
        features: ['Unlimited Outlets', 'All Pro Features', 'Custom Integrations', 'Dedicated Account Manager', '24/7 Premium Support', 'SLA & Uptime Guarantee'],
        footerBg: '#FFF3E7',
    },
] as const;

const stripItems = [
    ['Secure Payments', 'PCI-compliant payments & data protection.', CreditCard],
    ['Cloud Based', 'Access your business data from anywhere.', Cloud],
    ['Daily Backup', 'Automatic backups to keep your data safe.', RotateCcw],
    ['Reliable Support', 'Real humans, real fast help when you need it.', Headphones],
] as const;

function TrustBadge() {
    return (
        <div className="absolute right-[14px] top-[58px] hidden items-center gap-[14px] rounded-[14px] border border-white/70 bg-white/85 px-[18px] py-[14px] backdrop-blur shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_12px_28px_rgba(20,164,97,0.10)] lg:flex">
            <span className="home-chip grid h-[42px] w-[42px] place-items-center rounded-full bg-[linear-gradient(145deg,#EAF8EF_0%,#D6F1E2_100%)] text-[#13A35D]">
                <ShieldCheck className="h-[24px] w-[24px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="text-[15px] font-extrabold leading-[1.45] tracking-[-0.005em] text-[#07142F]">
                <p>No Setup Fees</p>
                <p>Cancel Anytime</p>
            </div>
        </div>
    );
}

function buttonClasses(kind: string) {
    if (kind === 'green') {
        return 'border-[#0EAD63] bg-gradient-to-r from-[#0BA85C] to-[#08B96B] text-white shadow-[0_12px_24px_rgba(14,173,99,0.22),inset_0_1px_0_rgba(255,255,255,0.18)]';
    }
    if (kind === 'outline-purple') return 'border-[#8326DC] bg-white text-[#7A22D7] shadow-[0_10px_20px_rgba(122,34,215,0.06)]';
    if (kind === 'outline-orange') return 'border-[#D78437] bg-white text-[#D66C1F] shadow-[0_10px_20px_rgba(214,108,31,0.06)]';
    return 'border-[#0B56EA] bg-white text-[#0B56EA] shadow-[0_10px_20px_rgba(11,86,234,0.06)]';
}

function PricingCard({ plan }: { plan: (typeof pricingPlans)[number] }) {
    const Icon = plan.Icon;

    return (
        <article
            className={`home-tile relative flex h-[546px] flex-col overflow-hidden rounded-[20px] border bg-white/95 backdrop-blur ${
                plan.popular ? 'border-[#8FDDB4] ring-1 ring-[#8FDDB4]/40' : 'border-white/70'
            }`}
        >
            {plan.popular && (
                <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-[10px] bg-[linear-gradient(145deg,#1FC375_0%,#0E994F_100%)] px-[22px] py-[6px] text-[11px] font-extrabold leading-none tracking-[0.06em] text-white shadow-[0_8px_18px_rgba(15,174,99,0.28)]">
                    MOST POPULAR
                </span>
            )}

            <div className="flex flex-1 flex-col px-[27px] pb-[18px] pt-[30px]">
                <div className="flex items-center gap-[21px]">
                    <span
                        className="home-chip grid h-[78px] w-[78px] shrink-0 place-items-center rounded-full border border-white/80"
                        style={{ background: plan.iconBg, color: plan.accent }}
                    >
                        <Icon className="h-[40px] w-[40px]" strokeWidth={2.15} aria-hidden />
                    </span>
                    <div>
                        <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.018em] text-[#07142F]">{plan.name}</h3>
                        <p className="mt-[11px] max-w-[150px] text-[15px] font-medium leading-[1.45] text-[#394860]">{plan.audience}</p>
                    </div>
                </div>

                <h4 className="mt-[24px] text-[18px] font-extrabold leading-[1.2] tracking-[-0.012em] text-[#07142F]">{plan.title}</h4>
                <div className="mt-[22px] flex items-end gap-[13px]">
                    <span className="h-[4px] w-[36px] rounded-full bg-[#07142F]" />
                    <span className="text-[16px] font-semibold leading-none text-[#07142F]">/ month</span>
                </div>
                <p className="mt-[17px] text-[14px] font-medium text-[#394860]">Billed monthly</p>

                <button
                    type="button"
                    className={`home-gloss mt-[22px] h-[46px] rounded-[10px] border text-[15px] font-extrabold tracking-[-0.005em] transition hover:translate-y-[-1px] ${buttonClasses(plan.button)}`}
                >
                    {plan.cta}
                </button>

                <ul className="mt-[22px] space-y-[11px]">
                    {plan.features.map((feature, index) => (
                        <li key={feature} className="flex items-center gap-[12px] text-[14px] font-semibold leading-[1.25] text-[#172238]">
                            <CheckCircle2 className="h-[16px] w-[16px] shrink-0" style={{ color: plan.accent }} strokeWidth={2} aria-hidden />
                            <span>{feature}</span>
                            {plan.name === 'Starter' && index === 4 && (
                                <span className="ml-[5px] grid h-[17px] w-[17px] place-items-center rounded-full border border-[#98A2B3] text-[10px] font-bold text-[#667085]">
                                    i
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="flex h-[48px] items-center justify-center gap-[9px] text-[13px] font-extrabold"
                style={{ backgroundColor: plan.footerBg, color: plan.accent }}
            >
                <ShieldCheck className="h-[19px] w-[19px]" strokeWidth={2.1} aria-hidden />
                {plan.footer}
            </div>
        </article>
    );
}

function FeatureStripItem({ item, index }: { item: (typeof stripItems)[number]; index: number }) {
    const [title, description, Icon] = item;
    return (
        <article className={`flex min-h-[88px] items-center gap-[21px] px-[40px] py-[14px] ${index > 0 ? 'lg:border-l lg:border-[#E3E9F4]' : ''}`}>
            <span className="home-chip grid h-[62px] w-[62px] shrink-0 place-items-center rounded-full border border-white/70 bg-[linear-gradient(145deg,#EEF5FF_0%,#DCEAFF_100%)] text-[#0B56EA]">
                <Icon className="h-[30px] w-[30px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div>
                <h3 className="whitespace-nowrap text-[16px] font-extrabold leading-[1.2] tracking-[-0.012em] text-[#07142F]">{title}</h3>
                <p className="mt-[7px] max-w-[210px] text-[14px] font-medium leading-[1.5] text-[#27344E]">{description}</p>
            </div>
        </article>
    );
}

function BrandPill({ name, accent }: { name: string; accent: string }) {
    return (
        <span className="inline-flex h-[31px] items-center gap-[6px] rounded-full border border-[#E4EAF4] bg-white px-[9px] text-[9px] font-extrabold leading-[1.05] text-[#07142F] shadow-[0_6px_14px_rgba(15,23,42,0.04)]">
            <span className="h-[21px] w-[21px] rounded-full" style={{ background: accent }} />
            {name}
        </span>
    );
}

const PricingPreviewSection: React.FC = () => {
    return (
        <section
            className="relative overflow-x-clip bg-[linear-gradient(180deg,#F4F8FF_0%,#F8FAFE_100%)] px-5 py-[52px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F] lg:px-8 lg:py-[84px]"
        >
            <div className="pointer-events-none absolute -left-32 top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(11,86,234,0.06)_0%,rgba(11,86,234,0)_70%)] blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(20,167,95,0.06)_0%,rgba(20,167,95,0)_70%)] blur-3xl" />
            <div className="relative mx-auto max-w-[1200px]">
                <TrustBadge />

                <div className="mx-auto mt-[6px] max-w-[820px] text-center">
                    <span className="home-eyebrow inline-flex items-center gap-[8px] rounded-full border border-[#E0E8F8] bg-white/85 px-[16px] py-[8px] text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#0649C9] backdrop-blur">
                        Pricing
                    </span>
                    <h2 className="mt-[18px] text-[clamp(35px,5.7vw,52px)] font-extrabold leading-[1.06] tracking-[-0.028em] text-[#07142F]">
                        <span className="block whitespace-nowrap">Simple, Transparent Pricing</span>
                        <span className="block whitespace-nowrap bg-gradient-to-r from-[#075BFF] via-[#0B56EA] to-[#65A3FF] bg-clip-text text-transparent">
                            Choose the Plan That Fits You
                        </span>
                    </h2>
                    <p className="mt-[16px] text-[18px] font-medium leading-[1.55] tracking-[-0.005em] text-[#4D5A70]">
                        Start free. Upgrade anytime. No long-term contracts.
                    </p>
                </div>

                <div className="mt-[24px] grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-4">
                    {pricingPlans.map((plan) => (
                        <PricingCard key={plan.name} plan={plan} />
                    ))}
                </div>

                <div className="home-card mt-[28px] rounded-[20px] border border-white/70 bg-white/95 px-[34px] py-[18px] backdrop-blur">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                        {stripItems.map((item, index) => (
                            <FeatureStripItem key={item[0]} item={item} index={index} />
                        ))}
                    </div>
                </div>

                <div className="mt-[24px] grid grid-cols-1 gap-[24px] lg:grid-cols-[1fr_420px]">
                    <div className="home-card flex min-h-[130px] flex-col gap-5 rounded-[20px] border border-white/70 bg-[linear-gradient(160deg,#F4F8FF_0%,#EAF1FF_100%)] px-[32px] py-[28px] sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-[23px]">
                            <span className="home-chip grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#1768FF_0%,#003FC9_100%)] text-white">
                                <ShieldCheck className="h-[34px] w-[34px]" strokeWidth={2.2} aria-hidden />
                            </span>
                            <div>
                                <h3 className="text-[20px] font-extrabold leading-[1.2] tracking-[-0.018em] text-[#07142F]">
                                    Not sure which plan is right for you?
                                </h3>
                                <p className="mt-[10px] text-[14px] font-medium leading-[1.5] text-[#394860]">
                                    Book a free demo and our team will help you choose the perfect plan for your business.
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="home-cta-primary home-gloss inline-flex h-[60px] shrink-0 items-center justify-center gap-[14px] rounded-[12px] px-[34px] text-[19px] font-extrabold tracking-[-0.005em] text-white"
                        >
                            Book a Free Demo
                            <ArrowRight className="h-[21px] w-[21px]" strokeWidth={2.2} aria-hidden />
                        </button>
                    </div>

                    <div className="home-card flex min-h-[130px] flex-col items-center justify-center rounded-[20px] border border-white/70 bg-white/95 px-[24px] py-[20px] backdrop-blur">
                        <div className="flex gap-[6px] text-[#FFB400]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} className="h-[19px] w-[19px] fill-current" strokeWidth={1.8} aria-hidden />
                            ))}
                        </div>
                        <p className="mt-[11px] text-[14px] font-semibold leading-[1.2] text-[#07142F]">Trusted by 2,000+ Food Businesses</p>
                        <div className="mt-[17px] flex flex-wrap items-center justify-center gap-[7px]">
                            <BrandPill name="Burger House" accent="linear-gradient(135deg,#111827,#F59E0B)" />
                            <BrandPill name="Pizza Point" accent="linear-gradient(135deg,#0EA5E9,#F97316)" />
                            <BrandPill name="Cafe Central" accent="linear-gradient(135deg,#111827,#C2410C)" />
                            <BrandPill name="Tasty Bites" accent="linear-gradient(135deg,#22C55E,#F97316)" />
                            <span className="inline-flex h-[31px] items-center rounded-full bg-[#F3F6FB] px-[11px] text-[10px] font-extrabold text-[#07142F]">
                                + More
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPreviewSection;
