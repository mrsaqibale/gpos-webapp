import React from 'react';
import { BarChart3, CircleDot, Clock3, Download, PieChart, ShieldCheck, UserRound, Users } from 'lucide-react';
import staffReportsDashboard from '../assets/staff-reports-dashboard-preview.png';

type LucideIcon = React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;

const featureItems = [
    {
        title: 'Staff Performance Tracking',
        description: 'Monitor sales, orders and activity by individual staff members.',
        Icon: Users,
        color: '#0B56EA',
        bg: '#EEF5FF',
    },
    {
        title: 'Role-Based Access',
        description: 'Control what your staff can access with smart user roles & permissions.',
        Icon: ShieldCheck,
        color: '#22A75F',
        bg: '#EAF8EF',
    },
    {
        title: 'Real-Time Reports',
        description: 'Live reports on sales, orders, payments, tax and more - on any device.',
        Icon: CircleDot,
        color: '#6D2DE2',
        bg: '#F3EDFF',
    },
    {
        title: 'Export & Share',
        description: 'Export reports in PDF or Excel and share with your team.',
        Icon: Download,
        color: '#F58218',
        bg: '#FFF1E7',
    },
] as const;

const insightItems = [
    {
        title: 'Sales Insights',
        description: 'Track daily, weekly, monthly and yearly performance.',
        Icon: BarChart3,
        color: '#0B56EA',
        bg: '#ECF4FF',
    },
    {
        title: 'Staff Insights',
        description: "See who's performing best and where to improve.",
        Icon: UserRound,
        color: '#21A95E',
        bg: '#EAF8EF',
    },
    {
        title: 'Operational Insights',
        description: 'Monitor orders, items, payments and customer behavior.',
        Icon: PieChart,
        color: '#6D2DE2',
        bg: '#F2ECFF',
    },
    {
        title: 'Real-Time Data',
        description: "Live data updates so you're always in control.",
        Icon: Clock3,
        color: '#F58218',
        bg: '#FFF0E3',
    },
] as const;

function TopPill() {
    return (
        <span className="home-eyebrow inline-flex items-center gap-[9px] whitespace-nowrap rounded-full border border-[#E0E8F8] bg-white/85 px-[15px] py-[9px] text-[13px] font-extrabold leading-none tracking-[-0.005em] text-[#0649C9] backdrop-blur">
            <Users className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden />
            Manage Your Team. Track Performance. Grow Smarter.
        </span>
    );
}

function FeatureItem({
    title,
    description,
    Icon,
    color,
    bg,
}: {
    title: string;
    description: string;
    Icon: LucideIcon;
    color: string;
    bg: string;
}) {
    return (
        <article className="flex items-start gap-[19px]">
            <span
                className="home-chip grid h-[63px] w-[63px] shrink-0 place-items-center rounded-[16px] border border-white/70"
                style={{ backgroundColor: bg, color }}
            >
                <Icon className="h-[32px] w-[32px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="pt-[2px]">
                <h3 className="text-[16px] font-extrabold leading-[1.25] tracking-[-0.012em] text-[#07142F]">{title}</h3>
                <p className="mt-[7px] max-w-[360px] text-[14px] font-medium leading-[1.6] tracking-[-0.005em] text-[#25334D]">{description}</p>
            </div>
        </article>
    );
}

function InsightItem({
    title,
    description,
    Icon,
    color,
    bg,
    index,
}: {
    title: string;
    description: string;
    Icon: LucideIcon;
    color: string;
    bg: string;
    index: number;
}) {
    return (
        <article className={`flex min-h-[92px] items-center gap-[22px] px-[36px] py-[14px] ${index > 0 ? 'lg:border-l lg:border-[#E3E9F4]' : ''}`}>
            <span className="home-chip grid h-[66px] w-[66px] shrink-0 place-items-center rounded-full border border-white/70" style={{ backgroundColor: bg, color }}>
                <Icon className="h-[32px] w-[32px]" strokeWidth={2.2} aria-hidden />
            </span>
            <div>
                <h3 className="whitespace-nowrap text-[17px] font-extrabold leading-[1.2] tracking-[-0.012em] text-[#07142F]">{title}</h3>
                <p className="mt-[8px] max-w-[250px] text-[14px] font-medium leading-[1.5] text-[#27344E]">{description}</p>
            </div>
        </article>
    );
}

const StaffReportsSection: React.FC = () => {
    return (
        <section
            className="relative overflow-x-clip bg-[linear-gradient(180deg,#F8FAFE_0%,#F2F6FE_100%)] py-[40px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F]"
            style={{ paddingLeft: 20, paddingRight: 20 }}
        >
            <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(11,86,234,0.06)_0%,rgba(11,86,234,0)_70%)] blur-3xl" />
            <div className="relative mx-auto max-w-[1468px]">
                <div className="mt-[8px] grid items-start gap-[38px] lg:grid-cols-[510px_minmax(0,1fr)] lg:gap-[22px]">
                    <div className="pt-[13px]">
                        <TopPill />

                        <h2 className="mt-[26px] text-[clamp(32px,7vw,44px)] font-extrabold leading-[1.08] tracking-[-0.028em] text-[#07142F]">
                            <span className="block whitespace-nowrap">Powerful Reports.</span>
                            <span className="block whitespace-nowrap bg-gradient-to-r from-[#075BFF] via-[#0B56EA] to-[#0A66FF] bg-clip-text text-transparent">Smarter Decisions.</span>
                        </h2>

                        <p className="mt-[22px] max-w-[480px] text-[17px] font-medium leading-[1.6] tracking-[-0.005em] text-[#26344E]">
                            Get real-time insights into your business performance and staff activity - all in one place. Track what matters
                            and make data-driven decisions with confidence.
                        </p>

                        <div className="mt-[24px] space-y-[26px]">
                            {featureItems.map(({ title, description, Icon, color, bg }) => (
                                <FeatureItem key={title} title={title} description={description} Icon={Icon} color={color} bg={bg} />
                            ))}
                        </div>
                    </div>

                    <div className="relative lg:pt-[1px]">
                        <img
                            src={staffReportsDashboard}
                            alt="GPOS reports dashboard preview"
                            className="h-auto w-full max-w-[1038px] rounded-[23px] object-contain drop-shadow-[0_20px_34px_rgba(15,23,42,0.12)]"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                <div className="home-card mt-[34px] rounded-[20px] border border-white/70 bg-white/95 px-[38px] py-[24px] backdrop-blur">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                        {insightItems.map(({ title, description, Icon, color, bg }, index) => (
                            <InsightItem key={title} title={title} description={description} Icon={Icon} color={color} bg={bg} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StaffReportsSection;
