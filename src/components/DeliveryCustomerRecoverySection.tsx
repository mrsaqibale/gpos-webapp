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
    UserCheck,
    Users,
} from 'lucide-react';
import deliveryPhoneCrop from '../assets/delivery-phone-crop.png';

const recoveryFeatures = [
    {
        title: 'Recover Inactive Customers',
        description: "Re-engage customers who haven't ordered in a while on WhatsApp.",
        Icon: MessageCircle,
        iconBg: 'bg-[#E7F7EC]',
        iconColor: 'text-[#25D366]',
        filled: true,
    },
    {
        title: 'Promote Offers & New Items',
        description: 'Send personalised offers, new arrivals and seasonal promotions.',
        Icon: Users,
        iconBg: 'bg-[#E8EEFB]',
        iconColor: 'text-[#1E3A8A]',
        filled: true,
    },
    {
        title: 'Increase Repeat Orders',
        description: 'Convert one-time buyers into loyal, repeat customers.',
        Icon: ShoppingCart,
        iconBg: 'bg-[#FCEAEC]',
        iconColor: 'text-[#E0394A]',
        filled: false,
    },
    {
        title: 'Build Lasting Relationships',
        description: 'Strengthen customer loyalty and grow your direct customer base.',
        Icon: Heart,
        iconBg: 'bg-[#FCE7EE]',
        iconColor: 'text-[#EC4878]',
        filled: true,
    },
] as const;

const bottomBenefits = [
    {
        title: 'Take Control of Your Customers.',
        highlight: 'Reduce Commission. Increase Profit.',
        description: 'Own the relationship. Build a loyal community.',
        Icon: Lock,
        iconBg: 'bg-[#0C57E8]',
        iconColor: 'text-white',
        featured: true,
        filled: true,
    },
    {
        title: 'Reduce Dependency',
        description: 'Less reliance on third-party delivery platforms.',
        Icon: Euro,
        iconBg: 'bg-[#E7F7EC]',
        iconColor: 'text-[#25A85B]',
        filled: false,
    },
    {
        title: 'Higher Profit Margins',
        description: 'Keep more of what you earn on every order.',
        Icon: Coins,
        iconBg: 'bg-[#F1ECFB]',
        iconColor: 'text-[#7C45D8]',
        filled: false,
    },
    {
        title: 'Stronger Customer Base',
        description: 'Own your customer data and relationships.',
        Icon: Users,
        iconBg: 'bg-[#FCE7EE]',
        iconColor: 'text-[#EC4878]',
        filled: false,
    },
    {
        title: 'Sustainable Growth',
        description: 'Build repeat business and grow consistently.',
        Icon: BarChart3,
        iconBg: 'bg-[#E8EEFB]',
        iconColor: 'text-[#2D5BE0]',
        filled: false,
    },
] as const;

const topStats = [
    {
        title: 'Inactive Customers Recovered',
        value: '1,248',
        delta: '18.6%',
        Icon: UserCheck,
        iconBg: 'bg-[#E7F7EC]',
        iconColor: 'text-[#25A85B]',
    },
    {
        title: 'Repeat Orders Generated',
        value: '3,482',
        delta: '22.4%',
        Icon: ShoppingCart,
        iconBg: 'bg-[#E8EEFB]',
        iconColor: 'text-[#2D5BE0]',
    },
    {
        title: 'WhatsApp Campaigns Sent',
        value: '24',
        delta: '42.7%',
        Icon: Send,
        iconBg: 'bg-[#E6F0FF]',
        iconColor: 'text-[#2D75E8]',
    },
] as const;

function FeatureItem({
    title,
    description,
    Icon,
    iconBg,
    iconColor,
    filled,
}: {
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number; fill?: string; 'aria-hidden'?: boolean }>;
    iconBg: string;
    iconColor: string;
    filled?: boolean;
}) {
    return (
        <article className="flex items-start gap-3.5">
            <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] ${iconBg} ${iconColor}`}>
                <Icon
                    className="h-[24px] w-[24px]"
                    strokeWidth={filled ? 0 : 1.9}
                    fill={filled ? 'currentColor' : 'none'}
                    aria-hidden
                />
            </span>
            <div className="min-w-0">
                <h3 className="text-[16px] font-bold leading-[1.25] text-[#0B1A3C]">{title}</h3>
                <p className="mt-1 text-[14px] leading-[1.45] text-[#4B556B]">{description}</p>
            </div>
        </article>
    );
}

function StatsCard({
    title,
    value,
    delta,
    Icon,
    iconBg,
    iconColor,
}: {
    title: string;
    value: string;
    delta: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;
    iconBg: string;
    iconColor: string;
}) {
    return (
        <article className="rounded-[14px] border border-[#E9EDF5] bg-white px-3.5 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                    <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
                        <Icon className="h-[22px] w-[22px]" strokeWidth={1.9} aria-hidden />
                    </span>
                    <div className="min-w-0">
                        <p className="truncate text-[13px] font-semibold leading-tight text-[#1D2742]">{title}</p>
                        <p className="mt-0.5 text-[24px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#101A39]">{value}</p>
                        <p className="mt-0.5 text-[11px] font-medium text-[#4C5970]">This Month</p>
                    </div>
                </div>
                <div className="shrink-0 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ECF9F1] px-2 py-0.5 text-[11px] font-bold text-[#27A75F]">
                        <ArrowUpRight className="h-3 w-3" strokeWidth={2.2} aria-hidden />
                        {delta}
                    </span>
                    <p className="mt-1 text-[10px] font-medium text-[#68758B]">vs last month</p>
                </div>
            </div>
        </article>
    );
}

function DirectOrdersCard() {
    return (
        <article className="rounded-[14px] border border-[#E5EAF4] bg-[#F7FAFF] px-3.5 py-3">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-[13px] font-semibold text-[#1D2742]">Direct Orders from WhatsApp</p>
                    <p className="mt-1 text-[26px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#101A39]">€12,640</p>
                    <p className="mt-0.5 text-[11px] font-medium text-[#4C5970]">This Month</p>
                </div>
                <div className="text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ECF9F1] px-2 py-0.5 text-[11px] font-bold text-[#27A75F]">
                        <ArrowUpRight className="h-3 w-3" strokeWidth={2.2} aria-hidden />
                        +25.7%
                    </span>
                    <p className="mt-1 text-[10px] font-medium text-[#68758B]">vs last month</p>
                </div>
            </div>

            <div className="mt-3">
                <svg viewBox="0 0 360 110" className="h-[112px] w-full" aria-hidden>
                    <line x1="0" y1="30" x2="360" y2="30" stroke="#DFE6F4" strokeDasharray="3 4" />
                    <line x1="0" y1="62" x2="360" y2="62" stroke="#DFE6F4" strokeDasharray="3 4" />
                    <line x1="0" y1="93" x2="360" y2="93" stroke="#DFE6F4" strokeDasharray="3 4" />
                    <path
                        d="M0,88 C25,70 38,66 58,72 C78,78 92,88 118,70 C142,56 155,50 176,62 C197,74 214,82 238,58 C263,34 282,28 304,37 C326,46 339,47 360,37"
                        fill="none"
                        stroke="#2E5CE6"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    {[
                        [0, 88],
                        [58, 72],
                        [118, 70],
                        [176, 62],
                        [238, 58],
                        [304, 37],
                        [360, 37],
                    ].map(([x, y], idx) => (
                        <circle key={idx} cx={x} cy={y} r="4.2" fill="#2E5CE6" />
                    ))}
                </svg>
                <div className="mt-[-2px] grid grid-cols-6 text-center text-[11px] font-medium text-[#6B778D]">
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

const DeliveryCustomerRecoverySection: React.FC = () => {
    return (
        <section className="bg-[#F5F7FB] px-[clamp(20px,2.45vw,38px)] py-[24px] font-['Poppins',Inter,Arial,sans-serif]">
            <div className="mx-auto max-w-[1460px]">
                <div className="rounded-[18px] border border-[#E3E9F5] bg-[#F6F8FC] p-[18px] shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                    <div className="grid items-start gap-5 lg:grid-cols-[37%_26%_37%]">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#D8F0DF] bg-[#EAF8EF] px-4 py-2 text-[13px] font-semibold text-[#24995A]">
                                <MessageCircle className="h-4 w-4" strokeWidth={1.85} aria-hidden />
                                Turn One-Time Buyers Into Loyal Customers
                            </span>

                            <h2 className="mt-4 text-[clamp(30px,2.9vw,44px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0A1637]">
                                <span className="block whitespace-nowrap">Bring Customers Back.</span>
                                <span className="block whitespace-nowrap text-[#1F56DC]">Keep Them for Life.</span>
                            </h2>

                            <p className="mt-4 max-w-[94%] text-[17px] leading-[1.55] text-[#4A566E] md:text-[17px] lg:text-[17px]">
                                GPOS helps you re-engage inactive customers on WhatsApp, promote offers, and drive repeat orders -
                                automatically.
                            </p>

                            <div className="mt-6 space-y-5">
                                {recoveryFeatures.map((item) => (
                                    <FeatureItem
                                        key={item.title}
                                        title={item.title}
                                        description={item.description}
                                        Icon={item.Icon}
                                        iconBg={item.iconBg}
                                        iconColor={item.iconColor}
                                        filled={item.filled}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center lg:pt-1">
                            <img
                                src={deliveryPhoneCrop}
                                alt="WhatsApp customer recovery mobile flow"
                                className="h-auto w-full max-w-[356px] object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="rounded-[14px] border border-[#E8EDF6] bg-[#F8FAFD] p-3">
                            <div className="space-y-2.5">
                                {topStats.map((stat) => (
                                    <StatsCard
                                        key={stat.title}
                                        title={stat.title}
                                        value={stat.value}
                                        delta={stat.delta}
                                        Icon={stat.Icon}
                                        iconBg={stat.iconBg}
                                        iconColor={stat.iconColor}
                                    />
                                ))}
                                <DirectOrdersCard />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 rounded-[16px] border border-[#E4EAF6] bg-white px-3 py-3 shadow-[0_6px_20px_rgba(15,23,42,0.04)]">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-0">
                            {bottomBenefits.map(({ title, highlight, description, Icon, iconBg, iconColor, featured, filled }, index) => (
                                <article
                                    key={title}
                                    className={`flex items-start gap-3 rounded-[12px] px-3 py-2.5 ${index > 0 ? 'lg:border-l lg:border-[#EDF1F8]' : ''}`}
                                >
                                    <span
                                        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor} ${featured ? 'ring-2 ring-[#D7E4FF]' : ''}`}
                                    >
                                        <Icon
                                            className="h-6 w-6"
                                            strokeWidth={filled ? 2.2 : 1.95}
                                            fill={filled && !featured ? 'currentColor' : 'none'}
                                            aria-hidden
                                        />
                                    </span>
                                    <div className="min-w-0">
                                        <h3 className="text-[15px] font-bold leading-[1.25] text-[#0D1E43]">{title}</h3>
                                        {highlight ? (
                                            <p className="mt-0.5 text-[15px] font-bold leading-[1.2] text-[#245BE0]">{highlight}</p>
                                        ) : null}
                                        <p className="mt-1 text-[13px] leading-[1.45] text-[#4E5D79]">{description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryCustomerRecoverySection;
