import React from 'react';
import {
    ArrowUpRight,
    BarChart3,
    Coins,
    Euro,
    Heart,
    Lock,
    MessageCircle,
    Send,
    ShoppingCart,
    TrendingUp,
    UserCheck,
    Users,
} from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import deliveryPhoneFullHd from '../assets/delivery-phone-full-hd.png';

const recoveryFeatures = [
    {
        title: 'Recover Inactive Customers',
        description: "Re-engage customers who haven't ordered in a while on WhatsApp.",
        Icon: MessageCircle,
        iconColor: '#25D366',
        iconBg: '#25D366',
        filled: true,
        iconVariant: 'whatsapp',
    },
    {
        title: 'Promote Offers & New Items',
        description: 'Send personalised offers, new arrivals and seasonal promotions.',
        Icon: Users,
        iconColor: '#0B56EA',
        iconBg: '#0B56EA',
        filled: true,
        iconVariant: 'users',
    },
    {
        title: 'Increase Repeat Orders',
        description: 'Convert one-time buyers into loyal, repeat customers.',
        Icon: ShoppingCart,
        iconColor: '#ffffff',
        iconBg: '#6B11D9',
        filled: false,
    },
    {
        title: 'Build Lasting Relationships',
        description: 'Strengthen customer loyalty and grow your direct customer base.',
        Icon: Heart,
        iconColor: '#ffffff',
        iconBg: '#F2396F',
        filled: true,
    },
] as const;

const bottomBenefits = [
    ['Take Control of Your Customers.', 'Reduce Commission. Increase Profit.', 'Own the relationship. Build a loyal community.', Lock, '#0A55F5', '#FFFFFF', true],
    ['Reduce Dependency', '', 'Less reliance on third-party delivery platforms.', Euro, '#18A35D', '#E9F8EF', false],
    ['Higher Profit Margins', '', 'Keep more of what you earn on every order.', Coins, '#7B22D8', '#F2EBFF', false],
    ['Stronger Customer Base', '', 'Own your customer data and relationships.', Users, '#E73268', '#FDEBF1', false],
    ['Sustainable Growth', '', 'Build repeat business and grow consistently.', TrendingUp, '#0B56EA', '#EEF5FF', false],
] as const;

const topStats = [
    ['Inactive Customers Recovered', '1,248', '18.6%', UserCheck, '#17A35D', '#E9F8EF'],
    ['Repeat Orders Generated', '3,482', '22.4%', ShoppingCart, '#2452E8', '#F0F2FF'],
    ['WhatsApp Campaigns Sent', '24', '42.7%', Send, '#0B56EA', '#EAF2FF'],
] as const;

function FeatureItem({
    title,
    description,
    Icon,
    iconColor,
    iconBg,
    filled,
    iconVariant,
}: {
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number; fill?: string; 'aria-hidden'?: boolean }>;
    iconColor: string;
    iconBg: string;
    filled: boolean;
    iconVariant?: 'whatsapp' | 'users';
}) {
    return (
        <article className="flex items-start gap-[14px]">
            <span
                className="home-chip grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border border-white/30"
                style={{ backgroundColor: iconBg, color: iconColor }}
            >
                {iconVariant === 'whatsapp' ? (
                    <WhatsAppIcon className="h-[28px] w-[28px]" size={28} variant="inverse" />
                ) : iconVariant === 'users' ? (
                    <svg className="h-[28px] w-[28px]" viewBox="0 0 32 32" fill="none" aria-hidden>
                        <circle cx="16" cy="10" r="5" fill="white" />
                        <circle cx="7.5" cy="12" r="4" fill="white" opacity="0.92" />
                        <circle cx="24.5" cy="12" r="4" fill="white" opacity="0.92" />
                        <path
                            d="M7.5 18.2C3.9 18.2 1 21.1 1 24.7V26.3C1 27.2 1.8 28 2.7 28H12.5C11.7 26.9 11.3 25.6 11.3 24.2C11.3 21.9 12.5 19.8 14.2 18.5C12.6 18.3 10.6 18.2 7.5 18.2Z"
                            fill="white"
                            opacity="0.92"
                        />
                        <path
                            d="M24.5 18.2C28.1 18.2 31 21.1 31 24.7V26.3C31 27.2 30.2 28 29.3 28H19.5C20.3 26.9 20.7 25.6 20.7 24.2C20.7 21.9 19.5 19.8 17.8 18.5C19.4 18.3 21.4 18.2 24.5 18.2Z"
                            fill="white"
                            opacity="0.92"
                        />
                        <path
                            d="M16 17.5C11.6 17.5 8 21.1 8 25.5V27.1C8 28.1 8.9 29 9.9 29H22.1C23.1 29 24 28.1 24 27.1V25.5C24 21.1 20.4 17.5 16 17.5Z"
                            fill="white"
                        />
                    </svg>
                ) : (
                    <Icon
                        className="h-[26px] w-[26px]"
                        strokeWidth={filled ? 0 : 2.2}
                        fill={filled ? 'currentColor' : 'none'}
                        aria-hidden
                    />
                )}
            </span>
            <div className="pt-[4px]">
                <h3 className="text-[15px] font-extrabold leading-[1.22] tracking-[-0.012em] text-[#07142F]">{title}</h3>
                <p className="mt-[5px] max-w-[280px] text-[13px] font-medium leading-[1.55] tracking-[-0.005em] text-[#27344E]">{description}</p>
            </div>
        </article>
    );
}

function StatCard({
    title,
    value,
    delta,
    Icon,
    iconColor,
    iconBg,
}: {
    title: string;
    value: string;
    delta: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;
    iconColor: string;
    iconBg: string;
}) {
    return (
        <article className="home-card rounded-[14px] border border-[rgba(37,99,235,0.08)] bg-white px-[16px] py-[14px]">
            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-[14px]">
                    <span className="home-chip grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full" style={{ backgroundColor: iconBg, color: iconColor }}>
                        <Icon className="h-[28px] w-[28px]" strokeWidth={2.2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                        <p className="truncate text-[13px] font-extrabold leading-tight tracking-[-0.012em] text-[#111A35]">{title}</p>
                        <p className="mt-[6px] text-[26px] font-extrabold leading-none tracking-[-0.028em] text-[#07142F]">{value}</p>
                        <p className="mt-[4px] text-[12px] font-medium leading-none text-[#33415E]">This Month</p>
                    </div>
                </div>
                <div className="shrink-0 text-right">
                    <span className="inline-flex items-center gap-[4px] rounded-full bg-[#EAF8EF] px-[10px] py-[5px] text-[13px] font-extrabold leading-none text-[#1E9E58]">
                        <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={2.5} aria-hidden />
                        {delta}
                    </span>
                    <p className="mt-[6px] text-[11px] font-medium leading-none text-[#4B5A73]">vs last month</p>
                </div>
            </div>
        </article>
    );
}

function DirectOrdersCard() {
    return (
        <article className="home-card rounded-[14px] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(160deg,#FAFCFF_0%,#F0F6FF_100%)] px-[16px] py-[14px]">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-[13px] font-extrabold leading-tight tracking-[-0.012em] text-[#111A35]">Direct Orders from WhatsApp</p>
                    <p className="mt-[10px] text-[26px] font-extrabold leading-none tracking-[-0.028em] text-[#07142F]">€12,640</p>
                    <p className="mt-[6px] text-[12px] font-medium leading-none text-[#33415E]">This Month</p>
                </div>
                <div className="pt-[2px] text-right">
                    <span className="inline-flex items-center gap-[4px] rounded-full bg-[#EAF8EF] px-[10px] py-[5px] text-[13px] font-extrabold leading-none text-[#1E9E58]">
                        <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={2.5} aria-hidden />
                        +25.7%
                    </span>
                    <p className="mt-[6px] text-[11px] font-medium leading-none text-[#4B5A73]">vs last month</p>
                </div>
            </div>

            <div className="mt-[14px]">
                <svg viewBox="0 0 392 100" className="h-[100px] w-full overflow-visible" aria-hidden>
                    <defs>
                        <linearGradient id="direct-orders-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0B56EA" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#0B56EA" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <line x1="0" y1="17" x2="392" y2="17" stroke="#DDE6F4" strokeDasharray="4 5" />
                    <line x1="0" y1="50" x2="392" y2="50" stroke="#DDE6F4" strokeDasharray="4 5" />
                    <line x1="0" y1="83" x2="392" y2="83" stroke="#DDE6F4" strokeDasharray="4 5" />
                    <path
                        d="M0 90 C22 72 38 68 58 74 C83 82 95 86 121 66 C148 46 165 50 190 64 C214 78 228 82 253 60 C279 37 296 26 326 32 C352 38 366 44 392 28 L392 100 L0 100 Z"
                        fill="url(#direct-orders-fill)"
                    />
                    <path
                        d="M0 90 C22 72 38 68 58 74 C83 82 95 86 121 66 C148 46 165 50 190 64 C214 78 228 82 253 60 C279 37 296 26 326 32 C352 38 366 44 392 28"
                        fill="none"
                        stroke="#0B56EA"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                    />
                    {[
                        [0, 90],
                        [58, 74],
                        [121, 66],
                        [190, 64],
                        [253, 60],
                        [326, 32],
                        [392, 28],
                    ].map(([x, y], index) => (
                        <circle key={index} cx={x} cy={y} r="4" fill="#0B56EA" />
                    ))}
                </svg>
                <div className="grid grid-cols-6 text-center text-[11px] font-medium leading-none text-[#5C6B83]">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                </div>
            </div>
        </article>
    );
}

function BottomBenefit({
    title,
    highlight,
    description,
    Icon,
    iconColor,
    iconBg,
    featured,
    index,
}: {
    title: string;
    highlight: string;
    description: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number; fill?: string; 'aria-hidden'?: boolean }>;
    iconColor: string;
    iconBg: string;
    featured: boolean;
    index: number;
}) {
    return (
        <article className={`flex min-h-[100px] items-center gap-[12px] px-[14px] py-[10px] ${index > 0 ? 'lg:border-l lg:border-[#E4E9F3]' : ''}`}>
            <span
                className={`home-chip grid shrink-0 place-items-center rounded-full ${featured ? 'h-[72px] w-[72px] border-[3px] border-white ring-2 ring-[#0A55F5]' : 'h-[50px] w-[50px] border border-white/70'}`}
                style={{ backgroundColor: iconBg, color: iconColor }}
            >
                <Icon className={featured ? 'h-[34px] w-[34px]' : 'h-[24px] w-[24px]'} strokeWidth={2.3} aria-hidden />
            </span>
            <div className="min-w-0">
                <h3 className={`font-extrabold leading-[1.25] tracking-[-0.012em] text-[#07142F] ${featured ? 'text-[14px]' : 'text-[12px]'}`}>
                    {title}
                </h3>
                {highlight ? (
                    <p className="mt-[3px] text-[15px] font-extrabold leading-[1.15] tracking-[-0.018em] text-[#0649C9]">{highlight}</p>
                ) : null}
                <p className={`mt-[5px] text-[12px] font-medium leading-[1.45] text-[#40506B] ${featured ? '' : 'max-w-[160px]'}`}>
                    {description}
                </p>
            </div>
        </article>
    );
}

const DeliveryCustomerRecoverySection: React.FC = () => {
    return (
        <section
            className="relative overflow-x-clip bg-[linear-gradient(180deg,#F4F8FF_0%,#F8FAFE_100%)] px-5 py-[52px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F] lg:px-8 lg:py-[84px]"
        >
            <div className="pointer-events-none absolute -right-32 top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(20,167,95,0.06)_0%,rgba(20,167,95,0)_70%)] blur-3xl" />
            <div className="relative mx-auto max-w-[1200px]">
                <div className="mt-[8px] grid items-start gap-[28px] lg:mt-[10px] lg:grid-cols-[minmax(0,1fr)_300px_360px] lg:gap-[28px]">
                    <div className="pt-[9px]">
                        <span className="home-eyebrow inline-flex items-center gap-[9px] rounded-full border border-[#DBF1E4] bg-[#EAF8EF]/85 px-[15px] py-[8px] text-[14px] font-extrabold leading-none tracking-[-0.005em] text-[#157E49] backdrop-blur">
                            <WhatsAppIcon className="h-[17px] w-[17px]" size={17} variant="brand" />
                            Turn One-Time Buyers Into Loyal Customers
                        </span>

                        <h2 className="mt-[22px] text-[clamp(28px,7vw,42px)] font-extrabold leading-[1.06] tracking-[-0.028em] text-[#07142F]">
                            <span className="block whitespace-nowrap">Bring Customers Back.</span>
                            <span className="block whitespace-nowrap bg-gradient-to-r from-[#075BFF] via-[#0B56EA] to-[#0A66FF] bg-clip-text text-transparent">Keep Them for Life.</span>
                        </h2>

                        <p className="mt-[16px] max-w-[400px] text-[15px] font-medium leading-[1.6] tracking-[-0.005em] text-[#26334C]">
                            GPOS helps you re-engage inactive customers on WhatsApp, promote offers, and drive repeat orders -
                            automatically.
                        </p>

                        <div className="mt-[22px] space-y-[18px]">
                            {recoveryFeatures.map(({ title, description, Icon, iconColor, iconBg, filled, iconVariant }) => (
                                <FeatureItem
                                    key={title}
                                    title={title}
                                    description={description}
                                    Icon={Icon}
                                    iconColor={iconColor}
                                    iconBg={iconBg}
                                    filled={filled}
                                    iconVariant={iconVariant}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="relative flex items-start justify-center">
                        <img
                            src={deliveryPhoneFullHd}
                            alt="WhatsApp customer recovery mobile flow"
                            className="h-auto w-full max-w-[300px] object-contain mix-blend-multiply drop-shadow-[0_20px_30px_rgba(15,23,42,0.18)]"
                            loading="lazy"
                            decoding="async"
                        />
                        <svg className="absolute right-[-52px] top-[140px] hidden h-[140px] w-[60px] text-[#0B56EA] lg:block" viewBox="0 0 75 166" fill="none" aria-hidden>
                            <path d="M6 6C42 44 47 100 5 161" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                            <path d="M3 5L21 10L12 25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        </svg>
                    </div>

                    <div className="space-y-[10px]">
                        {topStats.map(([title, value, delta, Icon, iconColor, iconBg]) => (
                            <StatCard key={title} title={title} value={value} delta={delta} Icon={Icon} iconColor={iconColor} iconBg={iconBg} />
                        ))}
                        <DirectOrdersCard />
                    </div>
                </div>

                <div className="home-card mt-[24px] rounded-[18px] border border-white/70 bg-white/95 px-[8px] py-[12px] backdrop-blur">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[2fr_repeat(4,1fr)] lg:gap-0">
                        {bottomBenefits.map(([title, highlight, description, Icon, iconColor, iconBg, featured], index) => (
                            <BottomBenefit
                                key={title}
                                title={title}
                                highlight={highlight}
                                description={description}
                                Icon={Icon}
                                iconColor={iconColor}
                                iconBg={iconBg}
                                featured={featured}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryCustomerRecoverySection;
