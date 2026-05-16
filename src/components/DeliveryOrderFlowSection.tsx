import React from "react";
import type { LucideIcon } from "lucide-react";
import {
    ArrowRight,
    BarChart3,
    Bell,
    CalendarDays,
    CheckCircle2,
    ChefHat,
    ClipboardList,
    Flag,
    Globe,
    LayoutDashboard,
    MapPin,
    MessageCircle,
    PhoneCall,
    PackageCheck,
    Printer,
    RefreshCcw,
    Search,
    Settings,
    ShoppingBag,
    SlidersHorizontal,
    Scooter,
    Truck,
    UserRound,
    Users,
} from "lucide-react";

type FeatureItem = {
    title: string;
    description: string;
    Icon: LucideIcon;
    boxClass: string;
    iconClass: string;
};

type SidebarItem = {
    label: string;
    Icon: LucideIcon;
    active?: boolean;
};

type OrderItem = {
    id: string;
    name: string;
    type: string;
    time: string;
    price: string;
    status: string;
    typeClass: string;
    statusClass: string;
};

const featureItems: FeatureItem[] = [
    {
        title: "Collection Orders",
        description: "Quick collection orders and ready-time management for a seamless pickup experience.",
        Icon: ShoppingBag,
        boxClass: "bg-[#EEF2FF]",
        iconClass: "text-[#2155FF]",
    },
    {
        title: "Delivery Management",
        description: "Assign drivers, optimize routes and track deliveries in real-time.",
        Icon: Scooter,
        boxClass: "bg-[#ECFDF3]",
        iconClass: "text-[#16A466]",
    },
    {
        title: "Online Orders",
        description: "Receive orders from your website, social media and integrations in one system.",
        Icon: Globe,
        boxClass: "bg-[#F4ECFF]",
        iconClass: "text-[#7A36DF]",
    },
    {
        title: "Status Flow",
        description: "Real-time order status updates keep your team and customers in the loop.",
        Icon: RefreshCcw,
        boxClass: "bg-[#FFF5E9]",
        iconClass: "text-[#E59022]",
    },
];

const sidebarItems: SidebarItem[] = [
    { label: "Dashboard", Icon: LayoutDashboard },
    { label: "Orders", Icon: ClipboardList, active: true },
    { label: "Delivery", Icon: Truck },
    { label: "Collection", Icon: ShoppingBag },
    { label: "Online Orders", Icon: Globe },
    { label: "Customers", Icon: Users },
    { label: "Drivers", Icon: UserRound },
    { label: "Reports", Icon: BarChart3 },
    { label: "Settings", Icon: Settings },
];

const orders: OrderItem[] = [
    {
        id: "#1056",
        name: "John Smith",
        type: "Delivery",
        time: "12:45 PM",
        price: "€28.40",
        status: "Out for Delivery",
        typeClass: "bg-[#F0E8FF] text-[#7A36DF]",
        statusClass: "bg-[#EAF2FF] text-[#2155FF]",
    },
    {
        id: "#1055",
        name: "Sarah Johnson",
        type: "Collection",
        time: "12:30 PM",
        price: "€18.90",
        status: "Ready for Pickup",
        typeClass: "bg-[#EAF9F1] text-[#16A466]",
        statusClass: "bg-[#EAF9F1] text-[#16A466]",
    },
    {
        id: "#1054",
        name: "Mike Brown",
        type: "Delivery",
        time: "12:15 PM",
        price: "€32.50",
        status: "Preparing",
        typeClass: "bg-[#F0E8FF] text-[#7A36DF]",
        statusClass: "bg-[#FFF5E9] text-[#D88418]",
    },
    {
        id: "#1053",
        name: "Emma Wilson",
        type: "Online",
        time: "12:05 PM",
        price: "€24.10",
        status: "Confirmed",
        typeClass: "bg-[#EAF2FF] text-[#2155FF]",
        statusClass: "bg-[#EAF2FF] text-[#2155FF]",
    },
    {
        id: "#1052",
        name: "David Lee",
        type: "Delivery",
        time: "11:58 AM",
        price: "€22.30",
        status: "Assigned",
        typeClass: "bg-[#F0E8FF] text-[#7A36DF]",
        statusClass: "bg-[#F5ECFF] text-[#7A36DF]",
    },
];

const bottomStrip = [
    {
        title: "Online Ordering",
        subtitle: "Website, Facebook, Instagram",
        Icon: Globe,
        boxClass: "bg-[#EEF2FF]",
        iconClass: "text-[#2155FF]",
    },
    {
        title: "WhatsApp Orders",
        subtitle: "Receive & manage via WhatsApp",
        Icon: MessageCircle,
        boxClass: "bg-[#ECFDF3]",
        iconClass: "text-[#16A466]",
    },
    {
        title: "Auto Print",
        subtitle: "Kitchen & receipt printing",
        Icon: Printer,
        boxClass: "bg-[#EEF2FF]",
        iconClass: "text-[#2155FF]",
    },
    {
        title: "Customer Updates",
        subtitle: "SMS & WhatsApp notifications",
        Icon: Bell,
        boxClass: "bg-[#F1F5FF]",
        iconClass: "text-[#2155FF]",
    },
];

const orderTabs = [
    { label: "All Orders", count: "42", active: true },
    { label: "Delivery", count: "18" },
    { label: "Collection", count: "12" },
    { label: "Online", count: "12" },
];

const statusSteps = [
    { label: "Confirmed", time: "12:05 PM", Icon: CheckCircle2, color: "#2155FF" },
    { label: "Preparing", time: "12:07 PM", Icon: ChefHat, color: "#E5A33A" },
    { label: "Ready", time: "12:25 PM", Icon: PackageCheck, color: "#16A466" },
    { label: "Out for Delivery", time: "12:32 PM", Icon: Truck, color: "#7A36DF" },
    { label: "Delivered", time: "--", Icon: Flag, color: "#94A3B8" },
];

const GposMark = ({ size = "h-[32px] w-[32px]" }: { size?: string }) => (
    <span className={`relative flex shrink-0 items-center justify-center ${size}`} aria-hidden>
        <span className="absolute inset-0 rounded-[9px] bg-[#2155FF] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
        <span className="absolute inset-[5px] rounded-[6px] bg-white [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
        <span className="absolute inset-[9px] rounded-[4px] bg-[#2155FF] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
        <span className="absolute right-[4px] top-[13px] h-[7px] w-[16px] rounded-l-full bg-white" />
    </span>
);

const FeatureRow = ({ title, description, Icon, boxClass, iconClass }: FeatureItem) => (
    <article className="flex items-start gap-[17px]">
        <span className={`grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[13px] ${boxClass}`}>
            <Icon className={`h-[24px] w-[24px] ${iconClass}`} strokeWidth={2.1} aria-hidden />
        </span>
        <div className="min-w-0 pt-[1px]">
            <h3 className="font-['Inter',Arial,sans-serif] text-[16px] font-[800] leading-[1.2] tracking-[-0.012em] text-[#081B44]">
                {title}
            </h3>
            <p className="mt-[5px] max-w-[360px] font-['Inter',Arial,sans-serif] text-[13px] font-[500] leading-[1.55] text-[#4B5B7C]">
                {description}
            </p>
        </div>
    </article>
);

const Sidebar = () => (
    <aside className="flex h-full w-[120px] shrink-0 flex-col rounded-[20px] bg-[linear-gradient(180deg,#071B42_0%,#061631_100%)] px-[10px] py-[18px] text-white max-lg:hidden">
        <div className="mb-[22px] flex items-center gap-[8px] px-[4px]">
            <GposMark />
            <span className="font-['Inter',Arial,sans-serif] text-[20px] font-[800] tracking-[-0.035em]">GPOS</span>
        </div>

        <nav className="grid gap-[8px]">
            {sidebarItems.map(({ label, Icon, active }) => (
                <div
                    key={label}
                    className={`flex h-[47px] items-center gap-[9px] rounded-[12px] px-[9px] font-['Inter',Arial,sans-serif] text-[11.5px] font-[700] ${
                        active ? "bg-[#2155FF] text-white shadow-[0_8px_18px_rgba(33,85,255,0.35)]" : "text-white/90"
                    }`}
                >
                    <Icon className="h-[16px] w-[16px] shrink-0" strokeWidth={2.1} aria-hidden />
                    <span className="truncate">{label}</span>
                </div>
            ))}
        </nav>

        <div className="mt-auto grid gap-[15px]">
            <div className="flex h-[41px] items-center gap-[9px] rounded-[12px] bg-white/[0.06] px-[10px] text-[12px] font-[700]">
                <span className="h-[10px] w-[10px] rounded-full bg-[#17C964]" />
                <span>Main Branch</span>
            </div>
            <div className="flex items-center gap-[10px] px-[5px]">
                <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#715DF5] text-[14px] font-[800]">AD</span>
                <span className="text-[12px] font-[700] leading-[1.25]">
                    Admin
                    <span className="block font-[500] text-white/75">Owner</span>
                </span>
            </div>
        </div>
    </aside>
);

const OrdersCard = () => (
    <div className="rounded-[20px] border border-[#E7ECF5] bg-white px-[18px] py-[17px] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
        <h3 className="text-[18px] font-[800] tracking-[-0.02em] text-[#081B44]">Orders</h3>
        <div className="mt-[13px] divide-y divide-[#EEF2F8]">
            {orders.map((order) => (
                <div key={order.id} className="grid grid-cols-[1.08fr_86px_74px_80px] items-center gap-[10px] py-[14px]">
                    <div>
                        <div className="flex items-center gap-[10px]">
                            <span className="text-[15px] font-[800] text-[#081B44]">{order.id}</span>
                            <span className={`rounded-[7px] px-[9px] py-[5px] text-[11px] font-[800] ${order.typeClass}`}>{order.type}</span>
                        </div>
                        <p className="mt-[10px] text-[13px] font-[650] text-[#334155]">{order.name}</p>
                    </div>
                    <span className="text-[12px] font-[700] text-[#64748B]">{order.time}</span>
                    <span className="text-[14px] font-[850] text-[#081B44]">{order.price}</span>
                    <span className={`justify-self-end rounded-[7px] px-[9px] py-[5px] text-[11px] font-[800] ${order.statusClass}`}>{order.status}</span>
                </div>
            ))}
        </div>
        <a href="#features" className="mt-[14px] inline-flex items-center gap-[9px] text-[14px] font-[800] text-[#2155FF] no-underline">
            View All Orders
            <ArrowRight className="h-[17px] w-[17px]" strokeWidth={2.1} aria-hidden />
        </a>
    </div>
);

const TrackingCard = () => (
    <div className="rounded-[20px] border border-[#E7ECF5] bg-white p-[17px] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
        <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-[800] tracking-[-0.02em] text-[#081B44]">Live Order Tracking</h3>
            <a href="#features" className="inline-flex items-center gap-[8px] text-[13px] font-[800] text-[#2155FF] no-underline">
                View on Map
                <ArrowRight className="h-[15px] w-[15px]" strokeWidth={2.1} aria-hidden />
            </a>
        </div>

        <div className="relative mt-[16px] h-[215px] overflow-hidden rounded-[16px] border border-[#E7ECF5] bg-[#F2F6FB]">
            <div className="absolute inset-0 opacity-[0.65] [background-image:linear-gradient(35deg,transparent_0,transparent_44%,rgba(255,255,255,0.85)_45%,rgba(255,255,255,0.85)_48%,transparent_49%),linear-gradient(145deg,transparent_0,transparent_45%,rgba(255,255,255,0.82)_46%,rgba(255,255,255,0.82)_49%,transparent_50%)] [background-size:64px_64px]" />
            <div className="absolute left-[18px] top-[18px] h-[70px] w-[82px] rotate-[-16deg] rounded-[22px] bg-[#DDF5E6]" />
            <div className="absolute right-[20px] top-[16px] h-[70px] w-[96px] rotate-[18deg] rounded-[22px] bg-[#DDEFFC]" />
            <div className="absolute bottom-[20px] left-[34px] h-[75px] w-[94px] rotate-[12deg] rounded-[22px] bg-[#E5F6DE]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 215" fill="none" aria-hidden>
                <path d="M98 150L155 86L232 136L316 64" stroke="#2155FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute left-[89px] top-[139px] grid h-[26px] w-[26px] place-items-center rounded-full border-[4px] border-[#2155FF] bg-white" />
            <span className="absolute left-[244px] top-[123px] grid h-[32px] w-[32px] place-items-center rounded-full bg-[#935B2E] text-[16px] shadow-[0_6px_12px_rgba(15,23,42,0.15)]">👨</span>
            <span className="absolute left-[306px] top-[47px] grid h-[38px] w-[38px] place-items-center rounded-[11px] bg-[#15A669] text-white shadow-[0_8px_18px_rgba(21,166,105,0.24)]">
                <MapPin className="h-[20px] w-[20px]" strokeWidth={2.1} aria-hidden />
            </span>
        </div>

        <div className="mt-[16px] grid grid-cols-[1.4fr_0.75fr_0.85fr_42px] items-center gap-[14px]">
            <div className="flex items-center gap-[12px]">
                <span className="grid h-[54px] w-[54px] place-items-center rounded-full bg-[#F1D8C4] text-[28px]">👨</span>
                <div>
                    <p className="text-[12px] font-[650] text-[#64748B]">Driver</p>
                    <p className="text-[15px] font-[850] text-[#081B44]">Alex Johnson</p>
                    <p className="text-[12px] font-[700] text-[#4B5B7C]"><span className="text-[#F59E0B]">★</span> 4.9</p>
                </div>
            </div>
            <div>
                <p className="text-[12px] font-[650] text-[#64748B]">ETA</p>
                <p className="mt-[5px] text-[15px] font-[850] text-[#081B44]">18 min</p>
            </div>
            <div>
                <p className="text-[12px] font-[650] text-[#64748B]">Distance</p>
                <p className="mt-[5px] text-[15px] font-[850] text-[#081B44]">2.4 km</p>
            </div>
            <button type="button" className="grid h-[38px] w-[38px] place-items-center rounded-[11px] border border-[#E7ECF5] bg-white text-[#2155FF]">
                <PhoneCall className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden />
            </button>
        </div>
    </div>
);

const StatusFlowCard = () => (
    <div className="rounded-[20px] border border-[#E7ECF5] bg-white p-[18px] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
        <h3 className="text-[18px] font-[800] tracking-[-0.02em] text-[#081B44]">Order Status Flow</h3>
        <div className="relative mt-[24px] grid grid-cols-5 gap-[10px]">
            <div className="absolute left-[9%] right-[9%] top-[21px] h-[2px] bg-[#E7ECF5]" />
            {statusSteps.map(({ label, time, Icon, color }) => (
                <div key={label} className="relative z-10 flex flex-col items-center text-center">
                    <span
                        className="grid h-[43px] w-[43px] place-items-center rounded-full border-2 bg-white"
                        style={{ borderColor: color, color }}
                    >
                        <Icon className="h-[20px] w-[20px]" strokeWidth={2.1} aria-hidden />
                    </span>
                    <span className="mt-[11px] min-h-[28px] text-[12px] font-[850] leading-[1.15]" style={{ color }}>
                        {label}
                    </span>
                    <span className="mt-[6px] text-[11px] font-[700] text-[#334155]">{time}</span>
                </div>
            ))}
        </div>
    </div>
);

const DashboardShowcase = () => (
    <div className="min-w-0 w-full max-w-[880px] justify-self-start mr-[10px] max-lg:mr-0">
        <div className="flex h-[620px] w-full overflow-hidden rounded-[26px] border border-[#E7ECF5] bg-white p-[16px] shadow-[0_4px_12px_rgba(15,23,42,0.05)] max-xl:h-auto">
            <Sidebar />

            <div className="min-w-0 flex-1 pl-[16px]">
                <div className="flex items-start justify-between gap-[14px]">
                    <h2 className="pt-[7px] text-[21px] font-[850] tracking-[-0.03em] text-[#081B44]">Order Management</h2>
                    <div className="flex items-center gap-[10px]">
                        <div className="flex h-[40px] w-[160px] items-center gap-[8px] rounded-[9px] border border-[#E7ECF5] bg-white px-[11px] text-[#94A3B8]">
                            <Search className="h-[17px] w-[17px]" strokeWidth={2.1} aria-hidden />
                            <span className="text-[12px] font-[600]">Search orders...</span>
                        </div>
                        <div className="relative grid h-[40px] w-[40px] place-items-center text-[#081B44]">
                            <Bell className="h-[21px] w-[21px]" strokeWidth={2.1} aria-hidden />
                            <span className="absolute right-[6px] top-[4px] h-[8px] w-[8px] rounded-full bg-[#FF2D55]" />
                        </div>
                        <span className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#F4D7C6] text-[20px]">👨</span>
                    </div>
                </div>

                <div className="mt-[18px] flex items-center justify-between gap-[12px]">
                    <div className="flex h-[44px] items-center overflow-hidden rounded-[11px] border border-[#E7ECF5] bg-white">
                        {orderTabs.map(({ label, count, active }) => (
                            <button
                                key={label}
                                type="button"
                                className={`flex h-full min-w-[92px] items-center justify-center gap-[7px] border-r border-[#EEF2F8] px-[11px] text-[12px] font-[800] ${
                                    active ? "bg-[#2155FF] text-white" : "bg-white text-[#334155]"
                                }`}
                            >
                                {label}
                                <span className={active ? "text-white/90" : "text-[#64748B]"}>{count}</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-[9px]">
                        <button type="button" className="inline-flex h-[43px] items-center gap-[8px] whitespace-nowrap rounded-[10px] border border-[#E7ECF5] bg-white px-[12px] text-[12px] font-[800] text-[#334155]">
                            <CalendarDays className="h-[17px] w-[17px]" strokeWidth={2.1} aria-hidden />
                            Today, 31 May 2024
                        </button>
                        <button type="button" className="inline-flex h-[43px] items-center gap-[8px] rounded-[10px] border border-[#E7ECF5] bg-white px-[12px] text-[12px] font-[800] text-[#334155]">
                            <SlidersHorizontal className="h-[17px] w-[17px] text-[#2155FF]" strokeWidth={2.1} aria-hidden />
                            Filters
                        </button>
                    </div>
                </div>

                <div className="mt-[18px] grid grid-cols-[0.95fr_1.22fr] gap-[14px]">
                    <OrdersCard />
                    <div className="grid gap-[20px]">
                        <TrackingCard />
                        <StatusFlowCard />
                    </div>
                </div>
            </div>
        </div>
        <BottomFeatureStrip />
    </div>
);

const BottomFeatureStrip = () => (
    <div className="mt-[18px] grid min-h-[76px] w-full grid-cols-[1fr_1fr_1fr_1.16fr] items-center overflow-hidden rounded-[16px] border border-[#E3EAF5] bg-white shadow-[0_12px_28px_rgba(15,23,42,0.052),inset_0_1px_0_rgba(255,255,255,0.95)] max-lg:grid-cols-2 max-sm:grid-cols-1">
            {bottomStrip.map(({ title, subtitle, Icon, boxClass, iconClass }, index) => (
                <article
                    key={title}
                    className={`flex h-full min-w-0 items-center gap-[11px] px-[15px] py-[14px] max-lg:min-h-[76px] ${
                        index > 0 ? "border-l border-[#E7ECF5] max-lg:border-l-0" : ""
                    } ${index === bottomStrip.length - 1 ? "px-[18px]" : ""}`}
                >
                    <span className={`grid h-[41px] w-[41px] shrink-0 place-items-center rounded-[13px] ${boxClass} shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]`}>
                        <Icon className={`h-[20px] w-[20px] ${iconClass}`} strokeWidth={2.15} aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                        <span className="block whitespace-nowrap text-[13px] font-[850] leading-[1.15] tracking-[-0.01em] text-[#081B44]">{title}</span>
                        <span className="mt-[5px] block text-[10.8px] font-[600] leading-[1.25] text-[#4B5B7C]">{subtitle}</span>
                    </span>
                </article>
            ))}
    </div>
);

const DeliveryOrderFlowSection: React.FC = () => {
    return (
        <section className="bg-[#F5F7FC] px-[40px] pb-[40px] pt-[36px] font-['Inter',Arial,sans-serif] max-lg:px-[24px] max-sm:px-[18px]">
            <div className="mx-auto max-w-[1480px] pr-[18px] max-lg:pr-0">
                <div className="grid grid-cols-1 items-start gap-[36px] lg:grid-cols-[640px_minmax(0,1fr)] xl:grid-cols-[680px_minmax(0,1fr)]">
                    <div className="pt-[4px]">
                        <div className="inline-flex h-[36px] items-center gap-[10px] rounded-full border border-[#E7ECF5] bg-white px-[15px] text-[14px] font-[700] text-[#2155FF] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
                            <Truck className="h-[17px] w-[17px]" strokeWidth={2.1} aria-hidden />
                            Delivery &amp; Order Flow
                        </div>

                        <h2 className="mt-[24px] font-['Inter',Arial,sans-serif] text-[clamp(36px,3.35vw,52px)] font-[740] leading-[1.08] tracking-[-0.04em] text-[#081B44]">
                            <span className="block whitespace-nowrap">Smooth Order Flow.</span>
                            <span className="block whitespace-nowrap">Happy Customers.</span>
                            <span className="block whitespace-nowrap text-[#2155FF]">More Repeat Orders.</span>
                        </h2>

                        <p className="mt-[16px] max-w-[555px] text-[16px] font-[500] leading-[1.55] text-[#4B5B7C]">
                            Manage collection, delivery and online orders in one place. Real-time status tracking keeps your customers informed at every step.
                        </p>

                        <div className="mt-[22px] grid gap-[18px]">
                            {featureItems.map((item) => (
                                <FeatureRow key={item.title} {...item} />
                            ))}
                        </div>

                        <div className="mt-[25px] flex w-full max-w-[555px] justify-center">
                            <a
                                href="#features"
                                className="inline-flex h-[44px] items-center justify-center gap-[11px] rounded-[8px] bg-[#2155FF] px-[20px] text-[13px] font-[800] text-white no-underline shadow-[0_10px_20px_rgba(33,85,255,0.18)]"
                            >
                                Explore All Features
                                <ArrowRight className="h-[16px] w-[16px]" strokeWidth={2.1} aria-hidden />
                            </a>
                        </div>
                    </div>

                    <DashboardShowcase />
                </div>
            </div>
        </section>
    );
};

export default DeliveryOrderFlowSection;
