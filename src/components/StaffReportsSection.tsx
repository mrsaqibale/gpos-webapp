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
        <span className="inline-flex items-center gap-[9px] whitespace-nowrap rounded-full border border-[#E0E8F8] bg-[#EEF5FF] px-[14px] py-[8px] text-[13px] font-extrabold leading-none text-[#0649C9]">
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
                className="grid h-[63px] w-[63px] shrink-0 place-items-center rounded-[14px] border border-white/70 shadow-[0_10px_24px_rgba(15,23,42,0.035)]"
                style={{ backgroundColor: bg, color }}
            >
                <Icon className="h-[34px] w-[34px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="pt-[1px]">
                <h3 className="text-[16px] font-extrabold leading-[1.25] text-[#07142F]">{title}</h3>
                <p className="mt-[7px] max-w-[360px] text-[14px] font-medium leading-[1.55] text-[#25334D]">{description}</p>
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
        <article className={`flex min-h-[88px] items-center gap-[22px] px-[36px] py-[12px] ${index > 0 ? 'lg:border-l lg:border-[#E3E9F4]' : ''}`}>
            <span className="grid h-[66px] w-[66px] shrink-0 place-items-center rounded-full" style={{ backgroundColor: bg, color }}>
                <Icon className="h-[33px] w-[33px]" strokeWidth={2.2} aria-hidden />
            </span>
            <div>
                <h3 className="whitespace-nowrap text-[17px] font-extrabold leading-[1.2] text-[#07142F]">{title}</h3>
                <p className="mt-[8px] max-w-[250px] text-[14px] font-medium leading-[1.48] text-[#27344E]">{description}</p>
            </div>
        </article>
    );
}

const StaffReportsSection: React.FC = () => {
    return (
        <section
            className="overflow-x-clip bg-[#F8FAFE] py-[20px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F]"
            style={{ paddingLeft: 20, paddingRight: 20 }}
        >
            <div className="mx-auto max-w-[1468px]">
                <div className="mt-[8px] grid items-start gap-[38px] lg:grid-cols-[510px_minmax(0,1fr)] lg:gap-[22px]">
                    <div className="pt-[13px]">
                        <TopPill />

                        <h2 className="mt-[29px] text-[clamp(32px,7vw,43px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#07142F]">
                            <span className="block whitespace-nowrap">Powerful Reports.</span>
                            <span className="block whitespace-nowrap text-[#0B56EA]">Smarter Decisions.</span>
                        </h2>

                        <p className="mt-[22px] max-w-[470px] text-[17px] font-medium leading-[1.55] text-[#26344E]">
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

                <div className="mt-[30px] rounded-[14px] border border-[#E1E8F4] bg-white px-[38px] py-[23px] shadow-[0_15px_36px_rgba(15,23,42,0.045)]">
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
