import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
    ArrowRight,
    BarChart3,
    Calendar,
    CalendarRange,
    ChartNoAxesCombined,
    ChevronDown,
    ClipboardList,
    Clock,
    CreditCard,
    Download,
    FileBarChart2,
    Filter,
    LayoutDashboard,
    LineChart,
    Megaphone,
    Package,
    PieChart as PieChartIcon,
    Settings,
    ShoppingBag,
    Star,
    Tag,
    TrendingUp,
    Truck,
    User,
    Users,
    UsersRound,
    Wallet,
} from 'lucide-react';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const PRIMARY = '#2155FF';
const NAVY = '#081B44';
const MUTED = '#55627A';
const BORDER = '#E8EDF5';
const BG = '#F8FAFC';
const CARD_SHADOW = '0 4px 12px rgba(15,23,42,0.05)';

/** Mockup: ~1.5–2px strokes; Lucide reads clean at 2.1px */
const ICON_STROKE = 2.1;
const FEATURE_ICON_STROKE = 2.2;
const FEATURE_ICON_PX = 26;
const FEATURE_ROW_GAP_PX = 18;
const FEATURE_ICON_BOX_PX = 58;
/** Sidebar: icon sits in a fixed column so every label aligns (mockup). */
const SIDEBAR_ICON_SLOT_PX = 24;
const SIDEBAR_ICON_PX = 19;
const STAT_ICON_PX = 20;
const STAT_ICON_BOX = 40; /* 40×40 rounded square */

const salesLineData = [
    { day: 'Fri', sales: 1180 },
    { day: 'Sat', sales: 2240 },
    { day: 'Sun', sales: 1860 },
    { day: 'Mon', sales: 1420 },
    { day: 'Tue', sales: 1650 },
    { day: 'Wed', sales: 1980 },
    { day: 'Thu', sales: 2310 },
];

const salesByDayBars = [
    { day: 'Fri', v: 920 },
    { day: 'Sat', v: 1680 },
    { day: 'Sun', v: 1340 },
    { day: 'Mon', v: 980 },
    { day: 'Tue', v: 1120 },
    { day: 'Wed', v: 1280 },
    { day: 'Thu', v: 1510 },
];

const channelData = [
    { name: 'Dine-in', value: 42, amount: 2453.85, color: '#2155FF' },
    { name: 'Takeaway', value: 30, amount: 1752.75, color: '#16A34A' },
    { name: 'Delivery', value: 20, amount: 1168.5, color: '#F97316' },
    { name: 'Online', value: 8, amount: 467.4, color: '#9333EA' },
];

const paymentData = [
    { name: 'Cash', value: 44, amount: 2570.7, color: '#2155FF' },
    { name: 'Card', value: 38, amount: 2220.15, color: '#16A34A' },
    { name: 'Online', value: 16, amount: 934.8, color: '#F97316' },
    { name: 'Other', value: 2, amount: 116.85, color: '#9333EA' },
];

const topItems = [
    { name: 'Zinger Burger', qty: 186, rev: 2046.0, thumb: 'from-amber-100 to-orange-100' },
    { name: 'Chicken Pizza', qty: 142, rev: 1775.0, thumb: 'from-rose-100 to-amber-50' },
    { name: 'French Fries', qty: 268, rev: 938.0, thumb: 'from-yellow-100 to-amber-100' },
    { name: 'Soft Drinks', qty: 312, rev: 624.0, thumb: 'from-sky-100 to-blue-100' },
    { name: 'Garlic Bread', qty: 98, rev: 294.0, thumb: 'from-stone-100 to-amber-50' },
];

const filterTabs = ['Today', 'Yesterday', 'This Week', 'Last Week', 'This Month', 'Last Month', 'Custom'] as const;

const sidebarNav: { label: string; icon: React.ElementType; active?: boolean }[] = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Orders', icon: ClipboardList },
    { label: 'Delivery', icon: Truck },
    { label: 'Collection', icon: ShoppingBag },
    { label: 'Customers', icon: Users },
    { label: 'Staff', icon: UsersRound },
    { label: 'Reports', icon: FileBarChart2, active: true },
    { label: 'Analytics', icon: LineChart },
    { label: 'Inventory', icon: Package },
    { label: 'Marketing', icon: Megaphone },
    { label: 'Settings', icon: Settings },
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
        <header
            className="border-b bg-white"
            style={{ borderColor: BORDER, boxShadow: 'none' }}
        >
            <div className="mx-auto flex h-[84px] w-full max-w-[1480px] items-center justify-between gap-3 px-6 sm:px-10">
                <Link to="/" className="inline-flex shrink-0 items-center gap-3 no-underline">
                    <GposGradientMark />
                    <span className="text-[28px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: NAVY, fontFamily: 'Inter, system-ui, sans-serif' }}>
                        GPOS
                    </span>
                </Link>

                <nav
                    className="hidden items-center gap-10 md:flex"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    aria-label="Marketing"
                >
                    <span className="text-[15px] font-semibold" style={{ color: PRIMARY }}>
                        Features
                    </span>
                    <Link to="/pricing" className="text-[15px] font-semibold no-underline transition-colors hover:opacity-80" style={{ color: NAVY }}>
                        Pricing
                    </Link>
                    <Link to="/get_demo" className="text-[15px] font-semibold no-underline transition-colors hover:opacity-80" style={{ color: NAVY }}>
                        Demo
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center gap-1.5 text-[15px] font-semibold"
                        style={{ color: NAVY, fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Resources
                        <ChevronDown className="h-[18px] w-[18px]" strokeWidth={ICON_STROKE} aria-hidden />
                    </button>
                </nav>

                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <a
                        href="https://dashboard.gposapp.com/"
                        className="inline-flex h-[42px] min-w-[88px] items-center justify-center rounded-[11px] border bg-white px-3 text-[14px] font-semibold no-underline transition-colors hover:bg-slate-50 sm:h-[46px] sm:min-w-[100px] sm:px-5 sm:text-[15px]"
                        style={{ borderColor: BORDER, color: NAVY, fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Login
                    </a>
                    <Link
                        to="/get_demo"
                        className="inline-flex h-[42px] min-w-[118px] items-center justify-center rounded-[11px] px-3 text-[14px] font-semibold text-white no-underline transition-opacity hover:opacity-95 sm:h-[46px] sm:min-w-[148px] sm:px-5 sm:text-[15px]"
                        style={{ backgroundColor: PRIMARY, fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Book a Demo
                    </Link>
                </div>
            </div>
        </header>
    );
}

function ChartTooltip({
    active,
    payload,
    label,
    valuePrefix = '',
}: {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
    valuePrefix?: string;
}) {
    if (!active || !payload?.length) return null;
    return (
        <div
            className="rounded-[10px] border bg-white px-3 py-2 text-[12px] shadow-md"
            style={{ borderColor: BORDER, color: NAVY, fontFamily: 'Inter, system-ui, sans-serif' }}
        >
            <div className="font-semibold">{label}</div>
            <div className="mt-0.5 tabular-nums" style={{ color: MUTED }}>
                {valuePrefix}
                {payload[0].value.toLocaleString('en-IE')}
            </div>
        </div>
    );
}

function DonutBlock({
    data,
    centerTitle,
    centerValue,
}: {
    data: { name: string; value: number; amount: number; color: string }[];
    centerTitle: string;
    centerValue: string;
}) {
    const pieData = useMemo(() => data.map((d) => ({ name: d.name, value: d.value })), [data]);
    return (
        <div className="flex min-h-[220px] flex-1 items-center gap-3">
            <div className="relative h-[200px] w-[min(100%,220px)] shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={58}
                            outerRadius={78}
                            paddingAngle={2}
                            dataKey="value"
                            stroke="#fff"
                            strokeWidth={2}
                        >
                            {data.map((entry, i) => (
                                <Cell key={entry.name} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(v: number, name: string) => [`${v}%`, name]}
                            contentStyle={{
                                borderRadius: 10,
                                border: `1px solid ${BORDER}`,
                                fontFamily: 'Inter, system-ui, sans-serif',
                                fontSize: 12,
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[11px] font-medium" style={{ color: MUTED, fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {centerTitle}
                    </span>
                    <span className="text-[15px] font-extrabold leading-tight tracking-[-0.02em]" style={{ color: NAVY, fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {centerValue}
                    </span>
                </div>
            </div>
            <ul className="min-w-0 flex-1 space-y-2.5 pr-1">
                {data.map((row) => (
                    <li key={row.name} className="flex items-center justify-between gap-2 text-[12px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <span className="flex min-w-0 items-center gap-2">
                            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: row.color }} />
                            <span className="truncate font-medium" style={{ color: NAVY }}>
                                {row.name}
                            </span>
                        </span>
                        <span className="shrink-0 text-right font-semibold tabular-nums" style={{ color: NAVY }}>
                            {row.value}%
                            <span className="ml-2 font-medium" style={{ color: MUTED }}>
                                €{row.amount.toFixed(2)}
                            </span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DashboardCard() {
    const [tab, setTab] = useState<(typeof filterTabs)[number]>('Today');

    return (
        <div
            className="flex h-auto min-h-[780px] w-full flex-col overflow-hidden rounded-[28px] border bg-white p-6 lg:h-[780px] lg:flex-row lg:items-stretch"
            style={{ borderColor: BORDER, boxShadow: CARD_SHADOW }}
        >
            {/* Sidebar */}
            <aside
                className="mb-4 flex w-full shrink-0 flex-row gap-2 overflow-x-auto rounded-[22px] p-3 lg:mb-0 lg:mr-5 lg:flex lg:h-full lg:w-[140px] lg:flex-col lg:justify-between lg:overflow-visible lg:p-3"
                style={{
                    background: 'linear-gradient(180deg, #061536 0%, #0B2247 52%, #081B44 100%)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                }}
            >
                <div>
                    <div className="mb-4 hidden items-center justify-center lg:flex">
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
                                    <span
                                        className="flex shrink-0 items-center justify-center"
                                        style={{ width: SIDEBAR_ICON_SLOT_PX, height: 50 }}
                                    >
                                        <Icon
                                            width={SIDEBAR_ICON_PX}
                                            height={SIDEBAR_ICON_PX}
                                            strokeWidth={active ? 2.4 : ICON_STROKE}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            color={active ? '#FFFFFF' : 'rgba(255,255,255,0.88)'}
                                            aria-hidden
                                        />
                                    </span>
                                    <span className="hidden min-w-0 flex-1 truncate text-[15px] font-medium leading-none tracking-[-0.01em] text-white lg:block">
                                        {item.label}
                                    </span>
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
                        <ChevronDown width={14} height={14} className="shrink-0 opacity-80" strokeWidth={ICON_STROKE} aria-hidden />
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

            {/* Main dashboard */}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <h2 className="text-[22px] font-extrabold tracking-[-0.03em]" style={{ color: NAVY }}>
                            Reports Overview
                        </h2>
                        <p className="mt-1 text-[14px] leading-relaxed" style={{ color: MUTED }}>
                            Track your business performance in real-time
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                        <button
                            type="button"
                            className="inline-flex h-[40px] items-center gap-2 rounded-[11px] border bg-white px-3.5 text-[13px] font-semibold"
                            style={{ borderColor: BORDER, color: NAVY }}
                        >
                            <CalendarRange width={16} height={16} strokeWidth={ICON_STROKE} aria-hidden />
                            May 24 – May 31, 2024
                            <ChevronDown width={16} height={16} strokeWidth={ICON_STROKE} className="opacity-70" aria-hidden />
                        </button>
                        <button
                            type="button"
                            className="inline-flex h-[40px] items-center gap-2 rounded-[11px] border bg-white px-3.5 text-[13px] font-semibold"
                            style={{ borderColor: BORDER, color: NAVY }}
                        >
                            <Filter width={16} height={16} strokeWidth={ICON_STROKE} aria-hidden />
                            Filters
                        </button>
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {filterTabs.map((t) => {
                        const active = t === tab;
                        return (
                            <button
                                key={t}
                                type="button"
                                onClick={() => setTab(t)}
                                className="h-[42px] shrink-0 rounded-full px-4 text-[13px] font-semibold transition-colors"
                                style={
                                    active
                                        ? { backgroundColor: PRIMARY, color: '#fff' }
                                        : { backgroundColor: '#F3F5FA', color: NAVY, border: `1px solid ${BORDER}` }
                                }
                            >
                                {t}
                            </button>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {(
                        [
                            {
                                title: 'Total Sales',
                                value: '€5,842.50',
                                delta: '+18.6%',
                                icon: Wallet,
                                iconBg: '#EEF2FF',
                                iconColor: PRIMARY,
                            },
                            {
                                title: 'Total Orders',
                                value: '214',
                                delta: '+14.3%',
                                icon: ShoppingBag,
                                iconBg: '#ECFDF3',
                                iconColor: '#16A34A',
                            },
                            {
                                title: 'Average Order Value',
                                value: '€27.30',
                                delta: '+6.7%',
                                icon: CreditCard,
                                iconBg: '#F5ECFF',
                                iconColor: '#9333EA',
                            },
                            {
                                title: 'Net Profit',
                                value: '€1,642.35',
                                delta: '+15.2%',
                                icon: User,
                                iconBg: '#FFF4E8',
                                iconColor: '#EA580C',
                            },
                        ] as const
                    ).map((s) => (
                        <div
                            key={s.title}
                            className="flex h-[110px] flex-col justify-between rounded-[18px] border bg-white p-4"
                            style={{ borderColor: BORDER }}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <span className="text-[13px] font-semibold" style={{ color: MUTED }}>
                                    {s.title}
                                </span>
                                <span
                                    className="grid shrink-0 place-items-center rounded-[12px]"
                                    style={{
                                        width: STAT_ICON_BOX,
                                        height: STAT_ICON_BOX,
                                        backgroundColor: s.iconBg,
                                        color: s.iconColor,
                                    }}
                                >
                                    <s.icon width={STAT_ICON_PX} height={STAT_ICON_PX} strokeWidth={ICON_STROKE} aria-hidden />
                                </span>
                            </div>
                            <div className="flex items-end justify-between gap-2">
                                <span className="text-[22px] font-extrabold tracking-[-0.03em]" style={{ color: NAVY }}>
                                    {s.value}
                                </span>
                                <span className="inline-flex items-center gap-1 text-[12px] font-bold text-emerald-600">
                                    <TrendingUp className="h-[14px] w-[14px]" strokeWidth={ICON_STROKE} aria-hidden />
                                    {s.delta}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts grid */}
                <div className="mt-5 grid flex-1 grid-cols-1 gap-5 lg:grid-cols-12 lg:min-h-0">
                    <div className="flex flex-col rounded-[18px] border bg-white p-4 lg:col-span-7" style={{ borderColor: BORDER }}>
                        <div className="mb-2 flex items-start justify-between gap-2">
                            <div>
                                <h3 className="text-[15px] font-bold" style={{ color: NAVY }}>
                                    Sales Overview
                                </h3>
                                <p className="text-[12px]" style={{ color: MUTED }}>
                                    Revenue trend for the selected period
                                </p>
                            </div>
                            <button
                                type="button"
                                className="inline-flex h-[34px] items-center gap-1.5 rounded-full border bg-[#F8FAFD] px-3 text-[12px] font-semibold"
                                style={{ borderColor: BORDER, color: NAVY }}
                            >
                                This Week
                                <ChevronDown width={14} height={14} strokeWidth={ICON_STROKE} aria-hidden />
                            </button>
                        </div>
                        <div className="h-[240px] w-full min-w-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={salesLineData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor={PRIMARY} stopOpacity={0.22} />
                                            <stop offset="100%" stopColor={PRIMARY} stopOpacity={0.02} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid stroke="#EEF2F7" vertical={false} />
                                    <XAxis dataKey="day" tick={{ fill: MUTED, fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif' }} axisLine={false} tickLine={false} dy={6} />
                                    <YAxis
                                        tick={{ fill: MUTED, fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif' }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={(v) => `€${v}`}
                                    />
                                    <Tooltip content={<ChartTooltip valuePrefix="€" />} />
                                    <Area type="monotone" dataKey="sales" stroke={PRIMARY} strokeWidth={2.25} fill="url(#salesFill)" dot={false} activeDot={{ r: 4, strokeWidth: 0, fill: PRIMARY }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-[18px] border bg-white p-4 lg:col-span-5" style={{ borderColor: BORDER }}>
                        <div className="mb-1 flex items-start justify-between gap-2">
                            <h3 className="text-[15px] font-bold" style={{ color: NAVY }}>
                                Sales by Channel
                            </h3>
                            <button type="button" className="text-[12px] font-semibold" style={{ color: PRIMARY }}>
                                Details
                            </button>
                        </div>
                        <DonutBlock data={channelData} centerTitle="Total Sales" centerValue="€5,842.50" />
                    </div>

                    <div className="flex flex-col rounded-[18px] border bg-white p-4 lg:col-span-4" style={{ borderColor: BORDER }}>
                        <div className="mb-2 flex items-start justify-between gap-2">
                            <div>
                                <h3 className="text-[15px] font-bold" style={{ color: NAVY }}>
                                    Sales by Day
                                </h3>
                                <p className="text-[12px]" style={{ color: MUTED }}>
                                    Daily sales volume
                                </p>
                            </div>
                            <button
                                type="button"
                                className="inline-flex h-[34px] items-center gap-1.5 rounded-full border bg-[#F8FAFD] px-3 text-[12px] font-semibold"
                                style={{ borderColor: BORDER, color: NAVY }}
                            >
                                This Week
                                <ChevronDown width={14} height={14} strokeWidth={ICON_STROKE} aria-hidden />
                            </button>
                        </div>
                        <div className="h-[220px] w-full min-w-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={salesByDayBars} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                                    <CartesianGrid stroke="#EEF2F7" vertical={false} />
                                    <XAxis dataKey="day" tick={{ fill: MUTED, fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif' }} axisLine={false} tickLine={false} dy={6} />
                                    <YAxis tick={{ fill: MUTED, fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<ChartTooltip />} />
                                    <Bar dataKey="v" fill={PRIMARY} radius={[6, 6, 0, 0]} maxBarSize={28} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-[18px] border bg-white p-4 lg:col-span-4" style={{ borderColor: BORDER }}>
                        <h3 className="text-[15px] font-bold" style={{ color: NAVY }}>
                            Top Selling Items
                        </h3>
                        <ul className="mt-3 space-y-3">
                            {topItems.map((it) => (
                                <li key={it.name} className="flex items-center gap-3">
                                    <span className={`h-10 w-10 shrink-0 rounded-[10px] bg-gradient-to-br ${it.thumb} ring-1 ring-black/5`} />
                                    <div className="min-w-0 flex-1">
                                        <div className="truncate text-[13px] font-bold" style={{ color: NAVY }}>
                                            {it.name}
                                        </div>
                                        <div className="text-[12px]" style={{ color: MUTED }}>
                                            {it.qty} sold
                                        </div>
                                    </div>
                                    <div className="shrink-0 text-right text-[13px] font-extrabold tabular-nums" style={{ color: NAVY }}>
                                        €{it.rev.toFixed(2)}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="mt-4 text-left text-[12px] font-bold" style={{ color: PRIMARY }}>
                            View Full Report →
                        </button>
                    </div>

                    <div className="flex flex-col rounded-[18px] border bg-white p-4 lg:col-span-4" style={{ borderColor: BORDER }}>
                        <h3 className="mb-1 text-[15px] font-bold" style={{ color: NAVY }}>
                            Payment Methods
                        </h3>
                        <DonutBlock data={paymentData} centerTitle="Total Sales" centerValue="€5,842.50" />
                    </div>
                </div>

                {/* Summary strip */}
                <div
                    className="mt-5 flex flex-col gap-4 rounded-[18px] border bg-white p-4 xl:flex-row xl:items-stretch xl:gap-5"
                    style={{ borderColor: BORDER }}
                >
                    <div className="shrink-0 pt-1 text-[14px] font-extrabold xl:max-w-[140px]" style={{ color: NAVY }}>
                        Summary &amp; Insights
                    </div>
                    <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                text: 'Sales are up 18.6%',
                                bg: '#EEF2FF',
                                icon: Calendar,
                                iconColor: PRIMARY,
                            },
                            {
                                text: (
                                    <>
                                        Peak hours are between
                                        <br />
                                        6 PM – 9 PM
                                    </>
                                ),
                                bg: '#ECFDF3',
                                icon: Clock,
                                iconColor: '#16A34A',
                            },
                            {
                                text: (
                                    <>
                                        Zinger Burger is your
                                        <br />
                                        top selling item
                                    </>
                                ),
                                bg: '#F5ECFF',
                                icon: Star,
                                iconColor: '#9333EA',
                            },
                            {
                                text: (
                                    <>
                                        Takeaway orders increased
                                        <br />
                                        by 22% this week
                                    </>
                                ),
                                bg: '#FFF4E8',
                                icon: LineChart,
                                iconColor: '#EA580C',
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-2.5 rounded-[14px] p-3"
                                style={{ backgroundColor: card.bg, fontFamily: 'Inter, system-ui, sans-serif' }}
                            >
                                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-white/80">
                                    <card.icon width={18} height={18} strokeWidth={ICON_STROKE} color={card.iconColor} aria-hidden />
                                </span>
                                <p className="text-[12px] font-semibold leading-snug" style={{ color: NAVY }}>
                                    {card.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button type="button" className="shrink-0 self-start pt-1 text-[13px] font-bold xl:self-center" style={{ color: PRIMARY }}>
                        View All Reports →
                    </button>
                </div>
            </div>
        </div>
    );
}

type ReportsAnalyticsShowcaseSectionProps = {
    /** When true, omits the internal marketing navbar (use on pages that already have a site header). */
    embed?: boolean;
};

const ReportsAnalyticsShowcaseSection: React.FC<ReportsAnalyticsShowcaseSectionProps> = ({ embed = false }) => {
    return (
        <section
            id="reports-analytics"
            className="w-full min-w-0"
            style={{ backgroundColor: BG, fontFamily: 'Inter, system-ui, sans-serif' }}
            aria-label="Reports and Analytics"
        >
            {!embed && <Navbar />}
            <div className={`mx-auto w-full max-w-[1480px] px-6 pb-10 sm:px-10 ${embed ? 'pt-10' : 'pt-8'}`}>
                <div className="flex flex-col gap-9 lg:flex-row lg:items-start">
                    {/* Left column ~31% */}
                    <div className="w-full shrink-0 lg:w-[36%] lg:min-w-0">
                        <div
                            className="inline-flex h-[42px] items-center rounded-full border bg-white px-[18px]"
                            style={{ borderColor: BORDER, gap: 10 }}
                        >
                            <ChartNoAxesCombined
                                width={18}
                                height={18}
                                strokeWidth={ICON_STROKE}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                color={PRIMARY}
                                aria-hidden
                            />
                            <span className="text-[16px] font-semibold" style={{ color: PRIMARY }}>
                                Reports &amp; Analytics
                            </span>
                        </div>

                        <h1
                            className="mt-6 text-[clamp(1.375rem,3.2vw,2.375rem)] font-extrabold leading-[1.18] tracking-[-0.035em] lg:text-[40px] lg:leading-[1.2]"
                            style={{ color: NAVY }}
                        >
                            Data That Drives
                            <br />
                            Better Decisions.
                            <br />
                            <span className="block min-w-0 whitespace-nowrap" style={{ color: PRIMARY }}>
                                Grow Your Business.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-[500px] text-[19px] leading-[1.9]" style={{ color: MUTED }}>
                            Real-time reports and powerful analytics give you complete visibility of your sales, orders, staff performance and more — so you can
                            make smarter decisions and grow faster.
                        </p>

                        <ul className="mt-8 flex flex-col gap-[26px]">
                            {[
                                {
                                    Icon: BarChart3,
                                    bg: '#EEF2FF',
                                    color: PRIMARY,
                                    title: 'Sales Insights',
                                    desc: 'Track daily, weekly and monthly sales with detailed breakdowns.',
                                },
                                {
                                    Icon: PieChartIcon,
                                    bg: '#ECFDF3',
                                    color: '#16A34A',
                                    title: 'Order Analytics',
                                    desc: 'Analyze order types, channels and peak hours to optimize operations.',
                                },
                                {
                                    Icon: Tag,
                                    bg: '#F5ECFF',
                                    color: '#9333EA',
                                    title: 'Performance Reports',
                                    desc: 'Monitor staff performance, items sold and business trends.',
                                },
                                {
                                    Icon: Download,
                                    bg: '#FFF4E8',
                                    color: '#EA580C',
                                    title: 'Export & Share',
                                    desc: 'Export reports in Excel, PDF or CSV and share with your team or accountant.',
                                },
                            ].map((item) => (
                                <li
                                    key={item.title}
                                    className="flex items-start"
                                    style={{ gap: FEATURE_ROW_GAP_PX }}
                                >
                                    <span
                                        className="flex shrink-0 items-center justify-center rounded-[16px]"
                                        style={{
                                            width: FEATURE_ICON_BOX_PX,
                                            height: FEATURE_ICON_BOX_PX,
                                            backgroundColor: item.bg,
                                        }}
                                    >
                                        <item.Icon
                                            width={FEATURE_ICON_PX}
                                            height={FEATURE_ICON_PX}
                                            strokeWidth={FEATURE_ICON_STROKE}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            color={item.color}
                                            aria-hidden
                                        />
                                    </span>
                                    <div className="min-w-0 pt-[6px]">
                                        <h3 className="text-[26px] font-bold leading-[1.15] tracking-[-0.03em]" style={{ color: NAVY }}>
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-[16px] leading-[1.7]" style={{ color: MUTED }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-9 flex w-full max-w-[560px] justify-center">
                            <Link
                                to={embed ? '#features' : '/restaurant_pos'}
                                className="inline-flex h-[58px] items-center gap-2 rounded-[14px] px-7 text-[16px] font-semibold text-white no-underline transition-opacity hover:opacity-95"
                                style={{ backgroundColor: PRIMARY }}
                            >
                                Explore All Features
                                <ArrowRight width={20} height={20} strokeWidth={ICON_STROKE} aria-hidden />
                            </Link>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="min-w-0 w-full flex-1">
                        <DashboardCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportsAnalyticsShowcaseSection;
