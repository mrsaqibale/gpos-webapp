import React from 'react';
import {
    Bell,
    ChefHat,
    ClipboardList,
    Clock,
    LayoutGrid,
    Package,
    Plus,
    Receipt,
    Search,
    Settings,
    ShoppingBag,
    ShoppingCart,
    UserPlus,
    Users,
    Utensils,
    Warehouse,
    X,
} from 'lucide-react';

type LucideIcon = React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;

const features: Array<readonly [string, string, LucideIcon, string, string]> = [
    ['Smart Billing', 'Fast, accurate billing with taxes, discounts, kombos and multiple payment options.', Receipt, '#0B56EA', '#E8F0FE'],
    ['Takeaway Ready', 'Quick order creation, customer details and ready-for-pickup notifications.', ShoppingBag, '#13A35D', '#E6F6EC'],
    ['Dine-In Management', 'Table management, order tracking and seamless dine-in experience.', Utensils, '#7A22D7', '#F2E9FE'],
    ['Kitchen Display', 'Real-time order flow to kitchen with smart routing and status updates.', ChefHat, '#E59A19', '#FEF3DF'],
];

const sidebar: Array<readonly [string, LucideIcon, boolean]> = [
    ['POS', ShoppingCart, true],
    ['Orders', ClipboardList, false],
    ['Kitchen', ChefHat, false],
    ['Tables', LayoutGrid, false],
    ['Customers', Users, false],
    ['Menu', Utensils, false],
    ['Reports', Receipt, false],
    ['Inventory', Warehouse, false],
    ['Staff', UserPlus, false],
    ['Settings', Settings, false],
];

const orderRows = [
    [1, 'Margherita Pizza', '€12.50'],
    [1, 'Chicken Burger', '€9.90', 'No Onions'],
    [2, 'French Fries', '€4.00'],
    [1, 'Coca Cola (Can)', '€1.80'],
] as const;

type KitchenOrder = {
    status: 'NEW' | 'PREPARING' | 'READY';
    id: string;
    ago: string;
    where: string;
    items: string[];
    time: string;
};

const kitchen: KitchenOrder[] = [
    { status: 'NEW', id: '#1052', ago: '2 min ago', where: 'Table 5 · Dine-In', items: ['1x Margherita Pizza', '1x Chicken Burger', '2x French Fries'], time: '12:45' },
    { status: 'PREPARING', id: '#1051', ago: '6 min ago', where: 'Table 2 · Dine-In', items: ['1x Grill Wrap', '1x Coke (Can)'], time: '12:41' },
    { status: 'READY', id: '#1050', ago: '8 min ago', where: 'Takeaway', items: ['1x Pepperoni Pizza', '1x Garlic Bread'], time: '12:39' },
    { status: 'PREPARING', id: '#1049', ago: '12 min ago', where: 'Table 7 · Dine-In', items: ['1x Chicken Biryani', '1x Raita'], time: '12:33' },
    { status: 'READY', id: '#1048', ago: '15 min ago', where: 'Takeaway', items: ['2x Zinger Burger', '1x French Fries'], time: '12:30' },
];

const statusStyles: Record<KitchenOrder['status'], string> = {
    NEW: 'bg-[#FFE9E0] text-[#D9501E]',
    PREPARING: 'bg-[#FFF3DA] text-[#B9791A]',
    READY: 'bg-[#E1F5E7] text-[#1E8C49]',
};

const cardBorder: Record<KitchenOrder['status'], string> = {
    NEW: 'border-[#FFD6C2]',
    PREPARING: 'border-[#FFE3B0]',
    READY: 'border-[#C9EBD5]',
};

const bottomStats: Array<readonly [string, string, string, string, LucideIcon, string, string]> = [
    ["Today's Sales", '€1,245.60', '↑ 18.6%', 'up', Receipt, '#0B56EA', '#E8F0FE'],
    ['Orders', '86', '↑ 14.3%', 'up', ShoppingBag, '#13A35D', '#E6F6EC'],
    ['Dine-In', '32', '↑ 10.2%', 'up', Utensils, '#7A22D7', '#F2E9FE'],
    ['Takeaway', '28', '↑ 16.7%', 'up', Package, '#E59A19', '#FEF3DF'],
    ['Avg. Order Time', '18 min', '↓ 5.2%', 'down', Clock, '#0B7BA8', '#E0F2F8'],
];

function FeatureItem({ item }: { item: (typeof features)[number] }) {
    const [title, description, Icon, color, bg] = item;
    return (
        <article className="flex items-start gap-[14px] border-t border-[#E5EBF4] pt-[14px] first:border-t-0 first:pt-0">
            <span className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-[12px]" style={{ background: bg, color }}>
                <Icon className="h-[22px] w-[22px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="min-w-0 pt-[2px]">
                <h3 className="text-[15px] font-extrabold leading-[1.2] tracking-[-0.012em] text-[#07142F]">{title}</h3>
                <p className="mt-[4px] max-w-[340px] text-[13px] font-medium leading-[1.5] text-[#5A6478]">{description}</p>
            </div>
        </article>
    );
}

function PosDashboardMock() {
    return (
        <div className="overflow-hidden rounded-[16px] border border-[#E1E7F1] bg-white shadow-[0_18px_38px_rgba(15,23,42,0.10)]">
            <div className="grid grid-cols-[140px_minmax(0,1fr)]">
                {/* Sidebar */}
                <aside className="flex flex-col gap-[4px] bg-[#1B2440] p-[12px] text-white">
                    <div className="mb-[10px] flex items-center gap-[8px] px-[6px] pt-[2px]">
                        <span className="grid h-[24px] w-[24px] place-items-center rounded-[6px] bg-gradient-to-br from-[#0B6BFF] to-[#063BC2] text-[12px] font-black">G</span>
                        <span className="text-[15px] font-extrabold tracking-[-0.02em]">GPOS</span>
                    </div>
                    {sidebar.map(([label, Icon, active]) => (
                        <button
                            key={label}
                            type="button"
                            className={`flex h-[32px] items-center gap-[10px] rounded-[8px] px-[10px] text-left text-[12px] font-semibold transition ${active ? 'bg-[#0B56EA] text-white' : 'text-[#A6B3C4] hover:bg-white/5 hover:text-white'}`}
                        >
                            <Icon className="h-[14px] w-[14px]" strokeWidth={2.15} aria-hidden />
                            {label}
                        </button>
                    ))}
                    <div className="mt-auto rounded-[8px] bg-white/5 p-[8px]">
                        <div className="flex items-center gap-[6px] text-[11px] font-semibold text-white">
                            <span className="h-[8px] w-[8px] rounded-full bg-[#22C56B]" />
                            Online
                        </div>
                        <p className="mt-[2px] text-[10px] font-medium text-[#A6B3C4]">Main Branch</p>
                    </div>
                </aside>

                {/* Main area */}
                <div className="flex flex-col bg-[#F6F8FC]">
                    {/* Top bar */}
                    <div className="flex items-center justify-between gap-[10px] border-b border-[#E5EBF4] bg-white px-[16px] py-[12px]">
                        <div className="flex items-center gap-[10px]">
                            <h4 className="text-[14px] font-extrabold tracking-[-0.012em] text-[#07142F]">New Order</h4>
                            <div className="flex items-center gap-[2px] rounded-[8px] bg-[#F1F4FA] p-[2px] text-[11px] font-bold">
                                <button type="button" className="rounded-[6px] bg-[#0B56EA] px-[10px] py-[5px] text-white">Dine-In</button>
                                <button type="button" className="px-[10px] py-[5px] text-[#5A6478]">Takeaway</button>
                                <button type="button" className="px-[10px] py-[5px] text-[#5A6478]">Delivery</button>
                            </div>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <div className="flex h-[28px] items-center gap-[6px] rounded-[8px] border border-[#E1E7F1] bg-white px-[10px] text-[11px] text-[#9BA7BD]">
                                <Search className="h-[12px] w-[12px]" strokeWidth={2.15} aria-hidden />
                                Search items...
                            </div>
                            <span className="relative grid h-[28px] w-[28px] place-items-center rounded-full bg-[#F1F4FA] text-[#5A6478]">
                                <Bell className="h-[13px] w-[13px]" strokeWidth={2.15} aria-hidden />
                                <span className="absolute right-[3px] top-[3px] h-[6px] w-[6px] rounded-full bg-[#E11D48]" />
                            </span>
                            <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-gradient-to-br from-[#0B6BFF] to-[#063BC2] text-[11px] font-bold text-white">M</span>
                        </div>
                    </div>

                    {/* Two-column content */}
                    <div className="grid grid-cols-[1fr_1.15fr] gap-[12px] p-[12px]">
                        {/* Order column */}
                        <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#E5EBF4] bg-white p-[12px]">
                            <div className="flex items-center justify-between rounded-[8px] bg-[#F6F8FC] px-[10px] py-[7px]">
                                <div>
                                    <p className="text-[12px] font-bold leading-none text-[#07142F]">Table 5</p>
                                    <p className="mt-[3px] text-[10px] font-medium leading-none text-[#5A6478]">Dine-In</p>
                                </div>
                                <div className="flex items-center gap-[6px] text-[10px] font-semibold">
                                    <button type="button" className="flex items-center gap-[3px] rounded-[6px] bg-[#0B56EA] px-[7px] py-[4px] text-white">
                                        <Plus className="h-[10px] w-[10px]" strokeWidth={2.4} aria-hidden />
                                        Customer
                                    </button>
                                    <span className="grid h-[20px] w-[20px] place-items-center rounded-[6px] border border-[#E1E7F1] text-[#5A6478]">···</span>
                                </div>
                            </div>

                            <div className="space-y-[6px]">
                                {orderRows.map(([qty, name, price, note], i) => (
                                    <div key={i} className="flex items-center gap-[8px] text-[11px]">
                                        <span className="grid h-[20px] w-[20px] shrink-0 place-items-center rounded-[6px] bg-[#F1F4FA] text-[10px] font-bold text-[#07142F]">{qty}</span>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate font-semibold leading-tight text-[#07142F]">{name}</p>
                                            {note ? <p className="text-[9px] font-medium leading-tight text-[#9BA7BD]">{note}</p> : null}
                                        </div>
                                        <span className="font-bold text-[#07142F]">{price}</span>
                                        <button type="button" className="grid h-[16px] w-[16px] place-items-center rounded-[4px] text-[#C5D2E5] hover:text-[#E11D48]">
                                            <X className="h-[10px] w-[10px]" strokeWidth={2.4} aria-hidden />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button type="button" className="self-start text-[10px] font-bold text-[#0B56EA]">+ Add Note</button>

                            <div className="space-y-[5px] border-t border-dashed border-[#E5EBF4] pt-[8px] text-[11px]">
                                <div className="flex justify-between text-[#5A6478]"><span>Subtotal</span><span className="font-semibold text-[#07142F]">€28.20</span></div>
                                <div className="flex justify-between text-[#5A6478]"><span>Discount</span><span className="font-semibold text-[#E11D48]">-€2.20</span></div>
                                <div className="flex justify-between text-[#5A6478]"><span>Tax (5%)</span><span className="font-semibold text-[#07142F]">€2.34</span></div>
                                <div className="flex items-center justify-between border-t border-[#E5EBF4] pt-[6px] text-[13px] font-extrabold text-[#07142F]"><span>Total</span><span>€28.34</span></div>
                            </div>

                            <div className="grid grid-cols-2 gap-[6px]">
                                <button type="button" className="h-[30px] rounded-[7px] border border-[#C5D2E5] bg-white text-[11px] font-bold text-[#07142F]">Save Order</button>
                                <button type="button" className="h-[30px] rounded-[7px] bg-[#0B56EA] text-[11px] font-bold text-white">Charge €28.34</button>
                            </div>
                        </div>

                        {/* Kitchen column */}
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex items-center justify-between">
                                <h5 className="text-[13px] font-extrabold tracking-[-0.012em] text-[#07142F]">Kitchen Orders</h5>
                                <div className="flex items-center gap-[4px] text-[10px] font-bold">
                                    <span className="rounded-full bg-[#0B56EA] px-[8px] py-[3px] text-white">All (12)</span>
                                    <span className="rounded-full border border-[#E1E7F1] px-[8px] py-[3px] text-[#5A6478]">New (4)</span>
                                    <span className="rounded-full border border-[#E1E7F1] px-[8px] py-[3px] text-[#5A6478]">Preparing (5)</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-[6px]">
                                {kitchen.map((o, i) => (
                                    <article key={i} className={`flex flex-col gap-[5px] rounded-[8px] border bg-white p-[8px] ${cardBorder[o.status]}`}>
                                        <div className="flex items-center justify-between text-[9px] font-bold">
                                            <span className={`rounded-[4px] px-[5px] py-[1.5px] ${statusStyles[o.status]}`}>{o.status}</span>
                                            <span className="text-[#9BA7BD]">{o.ago}</span>
                                        </div>
                                        <p className="text-[11px] font-extrabold leading-tight text-[#07142F]">Order {o.id}</p>
                                        <p className="text-[9px] font-medium leading-tight text-[#5A6478]">{o.where}</p>
                                        <div className="space-y-[2px] text-[10px] font-medium leading-tight text-[#27344E]">
                                            {o.items.map((it, j) => <p key={j}>{it}</p>)}
                                        </div>
                                        <p className="mt-auto text-[9px] font-bold text-[#E11D48]">Time: {o.time}</p>
                                    </article>
                                ))}
                                <article className="flex flex-col items-center justify-center gap-[4px] rounded-[8px] border border-dashed border-[#E1E7F1] bg-white p-[8px] text-center">
                                    <ChefHat className="h-[18px] w-[18px] text-[#9BA7BD]" strokeWidth={2.05} aria-hidden />
                                    <p className="text-[9px] font-bold text-[#5A6478]">No more orders</p>
                                    <p className="text-[8px] font-medium text-[#9BA7BD]">You're all caught up!</p>
                                </article>
                            </div>
                        </div>
                    </div>

                    {/* Bottom stats */}
                    <div className="grid grid-cols-5 gap-[8px] border-t border-[#E5EBF4] bg-white px-[12px] py-[10px]">
                        {bottomStats.map(([label, value, delta, dir, Icon, color, bg]) => (
                            <div key={label} className="flex items-center gap-[8px]">
                                <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[8px]" style={{ background: bg, color }}>
                                    <Icon className="h-[15px] w-[15px]" strokeWidth={2.15} aria-hidden />
                                </span>
                                <div className="min-w-0">
                                    <p className="truncate text-[9px] font-semibold leading-none text-[#5A6478]">{label}</p>
                                    <p className="mt-[3px] truncate text-[13px] font-extrabold leading-none tracking-[-0.012em] text-[#07142F]">{value}</p>
                                    <p className={`mt-[3px] text-[9px] font-bold leading-none ${dir === 'up' ? 'text-[#13A35D]' : 'text-[#E11D48]'}`}>{delta}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const OperationsManagementSection: React.FC = () => {
    return (
        <section className="relative overflow-x-clip bg-[linear-gradient(180deg,#F8FAFE_0%,#F4F8FF_100%)] px-5 py-[52px] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F] lg:px-8 lg:py-[84px]">
            <div className="relative mx-auto max-w-[1200px]">
                <div className="grid grid-cols-1 items-start gap-[36px] lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-[44px]">
                    <div className="pt-[6px]">
                        <span className="inline-flex items-center gap-[8px] rounded-full border border-[#DDE6F2] bg-white px-[14px] py-[7px] text-[12px] font-extrabold leading-none tracking-[-0.005em] text-[#0649C9]">
                            <LayoutGrid className="h-[14px] w-[14px]" strokeWidth={2.2} aria-hidden />
                            Operations Management
                        </span>

                        <h2 className="mt-[16px] text-[clamp(28px,5vw,42px)] font-extrabold leading-[1.06] tracking-[-0.028em] text-[#07142F]">
                            Run Your Daily<br />Operations<br />
                            <span className="bg-gradient-to-r from-[#075BFF] via-[#0B56EA] to-[#0A66FF] bg-clip-text text-transparent">Without Chaos.</span>
                        </h2>

                        <p className="mt-[14px] max-w-[400px] text-[14px] font-medium leading-[1.55] tracking-[-0.005em] text-[#5A6478]">
                            Handle billing, dine-in, takeaway and kitchen operations seamlessly — all from one powerful system built for restaurants.
                        </p>

                        <div className="mt-[22px] space-y-[14px]">
                            {features.map((item) => (
                                <FeatureItem key={item[0]} item={item} />
                            ))}
                        </div>
                    </div>

                    <PosDashboardMock />
                </div>
            </div>
        </section>
    );
};

export default OperationsManagementSection;
