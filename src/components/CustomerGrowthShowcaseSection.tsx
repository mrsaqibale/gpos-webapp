import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
    ArrowRight,
    Bell,
    ChevronDown,
    ClipboardList,
    Coffee,
    Euro,
    FileBarChart2,
    Gift,
    Heart,
    LayoutDashboard,
    Megaphone,
    MessageCircleMore,
    Send,
    Settings,
    TicketPercent,
    TrendingUp,
    Truck,
    UserCheck,
    UserPlus,
    Users,
    UsersRound,
} from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const PRIMARY = '#2155FF';
const NAVY = '#081B44';
const MUTED = '#55627A';
const BORDER = '#E8EDF5';
const BG = '#F8FAFC';
const CARD_SHADOW = '0 4px 12px rgba(15,23,42,0.05)';

/** Thin outline stroke — matches enterprise Lucide mockup */
const ICON_STROKE = 2;
const FEATURE_ICON_STROKE = 2.2;
const SIDEBAR_ICON = 20;
const STAT_ICON_PX = 16;
const STAT_ICON_WRAP = 32;

const repeatSegments = [
    { name: 'Very Active', value: 32, color: '#2155FF' },
    { name: 'Active', value: 36, color: '#16A34A' },
    { name: 'At Risk', value: 20, color: '#F97316' },
    { name: 'Inactive', value: 12, color: '#9333EA' },
];

function GposGradientMark() {
    return (
        <span className="relative flex h-[44px] w-[44px] shrink-0 items-center justify-center" aria-hidden>
            <span
                className="absolute inset-0 rounded-[12px] bg-[linear-gradient(145deg,#2155FF_0%,#4B7CFF_55%,#1E45D4_100%)]"
                style={{ clipPath: 'polygon(50% 0,93% 25%,93% 74%,50% 100%,7% 74%,7% 25%)' }}
            />
            <span
                className="absolute inset-[6px] rounded-[8px] bg-white"
                style={{ clipPath: 'polygon(50% 0,93% 25%,93% 74%,50% 100%,7% 74%,7% 25%)' }}
            />
            <span
                className="absolute inset-[11px] rounded-[6px] bg-[linear-gradient(145deg,#2155FF_0%,#3D6DFF_100%)]"
                style={{ clipPath: 'polygon(50% 0,93% 25%,93% 74%,50% 100%,7% 74%,7% 25%)' }}
            />
            <span className="absolute right-[6px] top-[17px] h-[9px] w-[21px] rounded-l-full bg-white" />
        </span>
    );
}

function ShowcaseNavbar() {
    return (
        <header className="border-b bg-white" style={{ borderColor: BORDER }}>
            <div className="mx-auto flex h-[84px] w-full max-w-[1480px] items-center justify-between gap-3 px-6 sm:px-10">
                <Link to="/" className="inline-flex shrink-0 items-center gap-3 no-underline">
                    <GposGradientMark />
                    <span className="text-[28px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: NAVY, fontFamily: 'Inter,system-ui,sans-serif' }}>
                        GPOS
                    </span>
                </Link>
                <nav className="hidden items-center gap-10 md:flex" style={{ fontFamily: 'Inter,system-ui,sans-serif' }} aria-label="Marketing">
                    <span className="text-[14px] font-semibold" style={{ color: PRIMARY }}>
                        Features
                    </span>
                    <Link to="/pricing" className="text-[14px] font-semibold no-underline hover:opacity-80" style={{ color: NAVY }}>
                        Pricing
                    </Link>
                    <Link to="/get_demo" className="text-[14px] font-semibold no-underline hover:opacity-80" style={{ color: NAVY }}>
                        Demo
                    </Link>
                    <button type="button" className="inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: NAVY }}>
                        Resources
                        <ChevronDown width={16} height={16} strokeWidth={ICON_STROKE} absoluteStrokeWidth aria-hidden />
                    </button>
                </nav>
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <a
                        href="https://dashboard.gposapp.com/"
                        className="inline-flex h-[42px] min-w-[88px] items-center justify-center rounded-[11px] border bg-white px-3 text-[13px] font-semibold no-underline sm:h-[46px] sm:min-w-[100px] sm:px-5 sm:text-[14px]"
                        style={{ borderColor: BORDER, color: NAVY }}
                    >
                        Login
                    </a>
                    <Link
                        to="/get_demo"
                        className="inline-flex h-[42px] min-w-[118px] items-center justify-center rounded-[11px] px-3 text-[13px] font-semibold text-white no-underline sm:h-[46px] sm:min-w-[148px] sm:px-5 sm:text-[14px]"
                        style={{ backgroundColor: PRIMARY }}
                    >
                        Book a Demo
                    </Link>
                </div>
            </div>
        </header>
    );
}

const sidebarNav: { label: string; icon: React.ElementType; active?: boolean }[] = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Orders', icon: ClipboardList },
    { label: 'Delivery', icon: Truck },
    { label: 'Customers', icon: Users },
    { label: 'Loyalty', icon: Gift, active: true },
    { label: 'Vouchers', icon: TicketPercent },
    { label: 'WhatsApp', icon: MessageCircleMore },
    { label: 'Campaigns', icon: Send },
    { label: 'Reports', icon: FileBarChart2 },
    { label: 'Settings', icon: Settings },
];

function RepeatInsightsDonut() {
    const data = useMemo(() => repeatSegments.map((d) => ({ name: d.name, value: d.value })), []);
    return (
        <div className="flex min-h-[200px] flex-1 flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative mx-auto h-[190px] w-[190px] shrink-0 sm:mx-0">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={52}
                            outerRadius={72}
                            paddingAngle={2}
                            dataKey="value"
                            stroke="#fff"
                            strokeWidth={2}
                        >
                            {repeatSegments.map((s) => (
                                <Cell key={s.name} fill={s.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(v: number) => [`${v}%`, 'Share']}
                            contentStyle={{ borderRadius: 10, border: `1px solid ${BORDER}`, fontSize: 12 }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[22px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: NAVY }}>
                        687
                    </span>
                    <span className="mt-1 max-w-[5.5rem] text-[10px] font-medium leading-tight" style={{ color: MUTED }}>
                        Repeat Customers
                    </span>
                </div>
            </div>
            <ul className="min-w-0 flex-1 space-y-2">
                {repeatSegments.map((row) => (
                    <li key={row.name} className="flex items-center justify-between gap-2 text-[11px] font-medium">
                        <span className="flex min-w-0 items-center gap-2">
                            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: row.color }} />
                            <span className="truncate" style={{ color: NAVY }}>
                                {row.name}
                            </span>
                        </span>
                        <span className="shrink-0 tabular-nums font-semibold" style={{ color: NAVY }}>
                            {row.value}%
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DashboardCard() {
    const stamps = Array.from({ length: 9 }, (_, i) => i < 8);
    const topMembers = [
        { initials: 'SM', name: 'Sarah M.', pts: '2,450 pts' },
        { initials: 'JK', name: 'James K.', pts: '1,890 pts' },
        { initials: 'AL', name: 'Amy L.', pts: '1,640 pts' },
    ];

    return (
        <div
            className="flex h-auto min-h-[820px] w-full flex-col overflow-hidden rounded-[28px] border bg-white p-6 lg:h-[820px] lg:flex-row lg:items-stretch"
            style={{ borderColor: BORDER, boxShadow: CARD_SHADOW }}
        >
            <aside
                className="mb-4 flex w-full shrink-0 flex-row gap-1 overflow-x-auto rounded-[22px] p-3 lg:mb-0 lg:mr-5 lg:flex lg:h-full lg:w-[140px] lg:flex-col lg:justify-between lg:overflow-visible lg:p-3"
                style={{
                    background: 'linear-gradient(180deg, #061536 0%, #0B2247 52%, #081B44 100%)',
                    fontFamily: 'Inter,system-ui,sans-serif',
                }}
            >
                <div>
                    <div className="mb-4 hidden justify-center lg:flex">
                        <GposGradientMark />
                    </div>
                    <nav className="flex flex-row gap-1 lg:flex-col" aria-label="POS sidebar">
                        {sidebarNav.map((item) => {
                            const Icon = item.icon;
                            const active = item.active;
                            return (
                                <div
                                    key={item.label}
                                    className={`flex h-[50px] shrink-0 items-center gap-[10px] rounded-[14px] px-2 lg:w-full lg:pl-[10px] lg:pr-2 ${
                                        active ? '' : 'text-white/90 hover:bg-white/5 hover:text-white'
                                    }`}
                                    style={active ? { backgroundColor: PRIMARY } : undefined}
                                >
                                    <span className="flex w-[22px] shrink-0 items-center justify-center" style={{ height: 50 }}>
                                        <Icon
                                            width={SIDEBAR_ICON}
                                            height={SIDEBAR_ICON}
                                            strokeWidth={active ? 2.25 : ICON_STROKE}
                                            absoluteStrokeWidth
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            color={active ? '#FFFFFF' : 'rgba(255,255,255,0.88)'}
                                            aria-hidden
                                        />
                                    </span>
                                    <span className="hidden min-w-0 flex-1 truncate text-[14px] font-medium text-white lg:block">{item.label}</span>
                                </div>
                            );
                        })}
                    </nav>
                </div>
                <div className="hidden border-t border-white/10 pt-3 lg:block">
                    <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-[12px] bg-white/5 px-2.5 py-2 text-left text-[12px] font-medium text-white/90"
                    >
                        <span className="truncate">Main Branch</span>
                        <ChevronDown width={14} height={14} className="shrink-0 opacity-80" strokeWidth={ICON_STROKE} absoluteStrokeWidth aria-hidden />
                    </button>
                    <div className="mt-2 flex items-center gap-2 rounded-[12px] bg-white/5 px-2 py-2">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-[11px] font-bold text-white">
                            AD
                        </span>
                        <div className="min-w-0">
                            <div className="truncate text-[12px] font-semibold text-white">Admin Owner</div>
                            <div className="truncate text-[10px] text-white/65">admin@gpos.app</div>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto" style={{ fontFamily: 'Inter,system-ui,sans-serif' }}>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <h2 className="text-[22px] font-extrabold tracking-[-0.03em]" style={{ color: NAVY }}>
                            Customer Growth Overview
                        </h2>
                        <p className="mt-1 max-w-[420px] text-[13px] leading-relaxed" style={{ color: MUTED }}>
                            All the tools you need to grow and retain more loyal customers.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                        <button
                            type="button"
                            className="inline-flex h-[40px] items-center gap-2 rounded-[11px] border bg-white px-3.5 text-[12px] font-semibold"
                            style={{ borderColor: BORDER, color: NAVY }}
                        >
                            May 24 – May 31, 2024
                            <ChevronDown width={15} height={15} strokeWidth={ICON_STROKE} absoluteStrokeWidth className="opacity-70" aria-hidden />
                        </button>
                        <button
                            type="button"
                            className="relative grid h-10 w-10 place-items-center rounded-[11px] border bg-white"
                            style={{ borderColor: BORDER }}
                            aria-label="Notifications"
                        >
                            <Bell width={17} height={17} strokeWidth={ICON_STROKE} absoluteStrokeWidth style={{ color: NAVY }} />
                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                        </button>
                        <span
                            className="grid h-10 w-10 place-items-center rounded-full text-[12px] font-bold text-white"
                            style={{ backgroundColor: PRIMARY }}
                        >
                            AO
                        </span>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {[
                        { title: 'Total Loyalty Members', value: '1,248', delta: '+18.6%', icon: Gift },
                        { title: 'Repeat Customers', value: '687', delta: '+21.4%', icon: UsersRound },
                        { title: 'Repeat Order Rate', value: '34.7%', delta: '+6.3%', icon: TrendingUp },
                        { title: 'Revenue from Returning Customers', value: '€3,245.60', delta: '+24.8%', icon: Euro },
                    ].map((s) => (
                        <div
                            key={s.title}
                            className="flex h-[110px] flex-col justify-between rounded-[18px] border bg-white p-4"
                            style={{ borderColor: BORDER }}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <span className="line-clamp-2 text-left text-[11px] font-semibold leading-tight" style={{ color: MUTED }}>
                                    {s.title}
                                </span>
                                <span
                                    className="grid shrink-0 place-items-center rounded-[10px] bg-[#EEF2FF]"
                                    style={{ width: STAT_ICON_WRAP, height: STAT_ICON_WRAP, color: PRIMARY }}
                                >
                                    <s.icon width={STAT_ICON_PX} height={STAT_ICON_PX} strokeWidth={ICON_STROKE} absoluteStrokeWidth aria-hidden />
                                </span>
                            </div>
                            <div className="flex items-end justify-between gap-2">
                                <span className="text-[20px] font-extrabold tracking-[-0.03em]" style={{ color: NAVY }}>
                                    {s.value}
                                </span>
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                                    <TrendingUp width={13} height={13} strokeWidth={ICON_STROKE} absoluteStrokeWidth aria-hidden />
                                    {s.delta}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
                    {/* Loyalty Program */}
                    <div className="flex flex-col rounded-[20px] border bg-white p-4" style={{ borderColor: BORDER }}>
                        <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-[14px] font-bold" style={{ color: NAVY }}>
                                Loyalty Program
                            </h3>
                            <button type="button" className="text-[11px] font-semibold" style={{ color: PRIMARY }}>
                                View All
                            </button>
                        </div>
                        <div className="flex flex-col gap-3 rounded-[14px] border border-white/20 bg-gradient-to-br from-[#2155FF] via-[#3d6dff] to-[#1a3dcc] p-4 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-white/20">
                                    <Coffee width={24} height={24} strokeWidth={ICON_STROKE} absoluteStrokeWidth className="text-white" aria-hidden />
                                </span>
                                <div>
                                    <div className="text-[16px] font-extrabold">Coffee Club</div>
                                    <div className="text-[12px] font-medium text-white/85">Buy 9 get 1 free</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                                <div className="flex gap-1">
                                    {stamps.map((filled, i) => (
                                        <span
                                            key={i}
                                            className={`h-7 w-7 rounded-full border-2 border-white/50 ${filled ? 'bg-white' : 'bg-white/10'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-[11px] font-bold tabular-nums">8 / 9 Stamps</span>
                            </div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#E8EDF5] pt-3 text-center">
                            {[
                                ['Active Members', '1,248'],
                                ['Total Stamps Earned', '8,420'],
                                ['Rewards Redeemed', '312'],
                            ].map(([k, v]) => (
                                <div key={k as string}>
                                    <div className="text-[10px] font-medium" style={{ color: MUTED }}>
                                        {k}
                                    </div>
                                    <div className="mt-0.5 text-[13px] font-extrabold tabular-nums" style={{ color: NAVY }}>
                                        {v}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 border-t border-[#E8EDF5] pt-3">
                            <div className="text-[11px] font-bold" style={{ color: NAVY }}>
                                Top Members
                            </div>
                            <ul className="mt-2 space-y-2">
                                {topMembers.map((m) => (
                                    <li key={m.name} className="flex items-center justify-between gap-2 text-[11px]">
                                        <span className="flex min-w-0 items-center gap-2">
                                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EEF2FF] text-[11px] font-bold" style={{ color: PRIMARY }}>
                                                {m.initials}
                                            </span>
                                            <span className="truncate font-semibold" style={{ color: NAVY }}>
                                                {m.name}
                                            </span>
                                        </span>
                                        <span className="shrink-0 font-medium tabular-nums" style={{ color: MUTED }}>
                                            {m.pts}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Vouchers */}
                    <div className="flex flex-col rounded-[20px] border bg-white p-4" style={{ borderColor: BORDER }}>
                        <h3 className="mb-3 text-[14px] font-bold" style={{ color: NAVY }}>
                            Vouchers &amp; Offers
                        </h3>
                        <div className="flex flex-col gap-2.5">
                            {[
                                { tag: '10% OFF', title: '10% Off All Orders', usage: '428 uses', rev: '€1,842', tagBg: '#EEF2FF', tagColor: PRIMARY },
                                { tag: '€5', title: '€5 Off Orders Over €30', usage: '256 uses', rev: '€980', tagBg: '#ECFDF3', tagColor: '#16A34A' },
                                { tag: 'FREE', title: 'Free Delivery', usage: '189 uses', rev: '€423', tagBg: '#FFF4E8', tagColor: '#EA580C' },
                            ].map((v) => (
                                <div
                                    key={v.title}
                                    className="rounded-[14px] border bg-[#FAFBFD] p-3"
                                    style={{ borderColor: BORDER }}
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <span
                                            className="shrink-0 rounded-[8px] px-2 py-1 text-[10px] font-extrabold"
                                            style={{ backgroundColor: v.tagBg, color: v.tagColor }}
                                        >
                                            {v.tag}
                                        </span>
                                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">Active</span>
                                    </div>
                                    <div className="mt-2 text-[12px] font-bold" style={{ color: NAVY }}>
                                        {v.title}
                                    </div>
                                    <div className="mt-1 flex justify-between text-[10px]" style={{ color: MUTED }}>
                                        <span>{v.usage}</span>
                                        <span className="font-semibold tabular-nums" style={{ color: NAVY }}>
                                            {v.rev}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="mt-3 w-full rounded-[12px] border border-dashed py-2.5 text-[12px] font-bold transition-colors hover:bg-slate-50"
                            style={{ borderColor: BORDER, color: PRIMARY }}
                        >
                            + Create New Voucher
                        </button>
                    </div>

                    {/* Repeat insights */}
                    <div className="flex flex-col rounded-[20px] border bg-white p-4" style={{ borderColor: BORDER }}>
                        <h3 className="mb-2 text-[14px] font-bold" style={{ color: NAVY }}>
                            Repeat Customer Insights
                        </h3>
                        <RepeatInsightsDonut />
                        <div className="mt-4 rounded-[14px] border bg-[#F8FAFF] p-3" style={{ borderColor: BORDER }}>
                            <div className="text-[12px] font-extrabold" style={{ color: NAVY }}>
                                Bring Back Inactive Customers
                            </div>
                            <p className="mt-1 text-[11px] leading-relaxed" style={{ color: MUTED }}>
                                You have 82 customers who haven&apos;t ordered in the last 90+ days.
                            </p>
                            <button
                                type="button"
                                className="mt-3 w-full rounded-[11px] py-2.5 text-[12px] font-bold text-white"
                                style={{ backgroundColor: PRIMARY }}
                            >
                                Recover Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* WhatsApp */}
                <div className="mt-5 rounded-[20px] border bg-white p-4" style={{ borderColor: BORDER }}>
                    <h3 className="mb-4 text-[14px] font-bold" style={{ color: NAVY }}>
                        WhatsApp Recovery Campaigns
                    </h3>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-stretch">
                        <div className="flex flex-col justify-center rounded-[14px] bg-[#F8FAFF] p-4 lg:col-span-2">
                            <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: MUTED }}>
                                Inactive
                            </span>
                            <span className="mt-1 text-[32px] font-extrabold leading-none tracking-[-0.04em]" style={{ color: NAVY }}>
                                82
                            </span>
                            <span className="text-[11px] font-medium" style={{ color: MUTED }}>
                                customers
                            </span>
                        </div>
                        <div className="flex items-center justify-center lg:col-span-5">
                            <div
                                className="max-w-[320px] rounded-[18px] rounded-tl-sm border bg-[#E7F7E8] p-4 shadow-sm"
                                style={{ borderColor: '#C8E6CA' }}
                            >
                                <p className="whitespace-pre-line text-[12px] leading-[1.55]" style={{ color: NAVY }}>
                                    {`Hi {name}! 👋\nWe miss you! Here's 15% OFF on your next order.\nUse code: WELCOME15`}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:col-span-5 lg:grid-cols-2">
                            {[
                                ['Sent', '82'],
                                ['Delivered', '79'],
                                ['Orders', '24'],
                                ['Revenue', '€1,842'],
                            ].map(([k, v]) => (
                                <div key={k as string} className="rounded-[12px] border bg-[#FAFBFD] p-3 text-center" style={{ borderColor: BORDER }}>
                                    <div className="text-[10px] font-semibold" style={{ color: MUTED }}>
                                        {k}
                                    </div>
                                    <div className="mt-1 text-[15px] font-extrabold tabular-nums" style={{ color: NAVY }}>
                                        {v}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        type="button"
                        className="mt-4 flex h-[52px] w-full items-center justify-center rounded-[14px] text-[14px] font-bold text-white"
                        style={{ backgroundColor: PRIMARY }}
                    >
                        Send WhatsApp Campaign
                    </button>
                </div>
            </div>
        </div>
    );
}

const growthBenefits = [
    {
        title: 'Increase Repeat Orders',
        desc: 'Loyal customers order more often.',
        bg: '#ECFDF3',
        color: '#16A34A',
        icon: UserCheck,
    },
    {
        title: 'Higher Average Spend',
        desc: 'Repeat customers spend more each time.',
        bg: '#FFF4E8',
        color: '#EA580C',
        icon: UserPlus,
    },
    {
        title: 'Lower Marketing Costs',
        desc: 'Retain customers at a lower cost than acquiring new ones.',
        bg: '#F5ECFF',
        color: '#9333EA',
        icon: Megaphone,
    },
    {
        title: 'Stronger Brand Loyalty',
        desc: 'Happy customers become your biggest supporters.',
        bg: '#FDF2F8',
        color: '#EC4899',
        icon: Heart,
    },
] as const;

export type CustomerGrowthShowcaseSectionProps = {
    embed?: boolean;
};

const CustomerGrowthShowcaseSection: React.FC<CustomerGrowthShowcaseSectionProps> = ({ embed = false }) => {
    return (
        <section
            id="customer-growth"
            className="w-full min-w-0"
            style={{ backgroundColor: BG, fontFamily: 'Inter,system-ui,sans-serif' }}
            aria-label="Customer Growth Tools"
        >
            {!embed && <Navbar />}
            <div className={`mx-auto w-full max-w-[1480px] px-6 sm:px-10 ${embed ? 'pt-10' : 'pt-8'} pb-10`}>
                <div className="flex flex-col gap-9 lg:flex-row lg:items-start">
                    <div className="w-full shrink-0 lg:w-[36%] lg:min-w-0">
                        <div
                            className="inline-flex h-[42px] items-center gap-2.5 rounded-full border bg-white px-[18px]"
                            style={{ borderColor: BORDER, gap: 10 }}
                        >
                            <UsersRound width={17} height={17} strokeWidth={ICON_STROKE} absoluteStrokeWidth color={PRIMARY} aria-hidden />
                            <span className="text-[15px] font-semibold" style={{ color: PRIMARY }}>
                                Customer Growth Tools
                            </span>
                        </div>
                        <h1
                            className="mt-6 text-[clamp(1.75rem,3.8vw,3.25rem)] font-extrabold leading-[1.02] tracking-[-0.04em] lg:text-[52px]"
                            style={{ color: NAVY }}
                        >
                            <span className="block">Turn First-Time</span>
                            <span className="block">Customers Into</span>
                            <span className="block" style={{ color: PRIMARY }}>
                                Loyal Customers.
                            </span>
                        </h1>
                        <p className="mt-7 max-w-[500px] text-[18px] leading-[1.9]" style={{ color: MUTED }}>
                            Powerful built-in tools to attract, engage and retain more customers — so you get more repeat orders and higher lifetime value.
                        </p>
                        <ul className="mt-8 flex flex-col gap-[26px]">
                            {[
                                { Icon: Gift, bg: '#EEF2FF', c: PRIMARY, t: 'Loyalty Program', d: 'Reward your customers, track points and encourage repeat visits.' },
                                {
                                    Icon: TicketPercent,
                                    bg: '#ECFDF3',
                                    c: '#16A34A',
                                    t: 'Vouchers & Offers',
                                    d: 'Create discounts and special offers that drive more orders and bigger baskets.',
                                },
                                {
                                    Icon: UsersRound,
                                    bg: '#F5ECFF',
                                    c: '#9333EA',
                                    t: 'Repeat Customer Insights',
                                    d: 'See who your best customers are and bring inactive ones back.',
                                },
                                {
                                    Icon: MessageCircleMore,
                                    bg: '#ECFDF3',
                                    c: '#16A34A',
                                    t: 'WhatsApp Recovery',
                                    d: 'Re-engage inactive customers with smart WhatsApp messages and offers.',
                                },
                            ].map((item) => (
                                <li key={item.t} className="flex items-start gap-[18px]">
                                    <span
                                        className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[16px]"
                                        style={{ backgroundColor: item.bg }}
                                    >
                                        <item.Icon
                                            width={26}
                                            height={26}
                                            strokeWidth={FEATURE_ICON_STROKE}
                                            absoluteStrokeWidth
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            color={item.c}
                                            aria-hidden
                                        />
                                    </span>
                                    <div className="min-w-0">
                                        <h3 className="text-[22px] font-bold leading-tight tracking-[-0.03em]" style={{ color: NAVY }}>
                                            {item.t}
                                        </h3>
                                        <p className="mt-1 text-[15px] leading-[1.7]" style={{ color: MUTED }}>
                                            {item.d}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-9 flex w-full max-w-[560px] justify-center">
                            <Link
                                to={embed ? '#features' : '/restaurant_pos'}
                                className="inline-flex h-[58px] items-center gap-2 rounded-[14px] px-7 text-[16px] font-semibold text-white no-underline hover:opacity-95"
                                style={{ backgroundColor: PRIMARY }}
                            >
                                Explore All Features
                                <ArrowRight width={18} height={18} strokeWidth={ICON_STROKE} absoluteStrokeWidth aria-hidden />
                            </Link>
                        </div>
                    </div>
                    <div className="min-w-0 flex-1">
                        <DashboardCard />
                        <div
                            className="mx-auto mt-6 w-full max-w-[min(100%,920px)] rounded-[20px] border bg-white px-5 py-5 sm:px-6 lg:max-w-[min(100%,980px)] lg:px-8 lg:py-6"
                            style={{ borderColor: BORDER, boxShadow: CARD_SHADOW }}
                        >
                            <h3 className="text-center text-[13px] font-extrabold tracking-[-0.02em]" style={{ color: NAVY }}>
                                Why Customer Growth Matters
                            </h3>
                            <div className="mt-5 grid grid-cols-1 divide-y divide-[#E8EDF5] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 lg:divide-x">
                                {growthBenefits.map(({ title, desc, bg, color, icon: Icon }) => (
                                    <div key={title} className="flex gap-2.5 px-1.5 py-4 first:pt-0 md:px-3 md:py-0 lg:gap-3 lg:px-4">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: bg }}>
                                            <Icon width={16} height={16} strokeWidth={ICON_STROKE} absoluteStrokeWidth style={{ color }} aria-hidden />
                                        </span>
                                        <div className="min-w-0">
                                            <div className="text-[13px] font-bold leading-snug" style={{ color: NAVY }}>
                                                {title}
                                            </div>
                                            <p className="mt-0.5 text-[11px] leading-[1.45]" style={{ color: MUTED }}>
                                                {desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerGrowthShowcaseSection;
