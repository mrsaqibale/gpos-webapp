import React from "react";
import type { LucideIcon } from "lucide-react";
import {
    ArrowRight,
    BarChart3,
    Bell,
    CalendarDays,
    CalendarRange,
    CheckCircle2,
    ClipboardList,
    Clock3,
    Fingerprint,
    LayoutDashboard,
    ShieldCheck,
    ShoppingBag,
    Settings,
    Truck,
    UserCog,
    Users,
    UsersRound,
    Wallet,
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

const featureItems: FeatureItem[] = [
    {
        title: "Role-Based Access",
        description: "Create custom roles and set permissions for secure and controlled access.",
        Icon: UserCog,
        boxClass: "bg-[#EEF2FF]",
        iconClass: "text-[#2155FF]",
    },
    {
        title: "Shift Management",
        description: "Create shifts, assign staff and manage schedules effortlessly.",
        Icon: CalendarRange,
        boxClass: "bg-[#ECFDF3]",
        iconClass: "text-[#16A466]",
    },
    {
        title: "Attendance Tracking",
        description: "Track check-in, check-out and monitor attendance in real-time.",
        Icon: Fingerprint,
        boxClass: "bg-[#F5ECFF]",
        iconClass: "text-[#8B3CF6]",
    },
    {
        title: "Performance Overview",
        description: "View staff performance, hours worked and productivity insights.",
        Icon: ShieldCheck,
        boxClass: "bg-[#FFF4E8]",
        iconClass: "text-[#E59022]",
    },
];

const sidebarItems: SidebarItem[] = [
    { label: "Dashboard", Icon: LayoutDashboard },
    { label: "Orders", Icon: ClipboardList },
    { label: "Delivery", Icon: Truck },
    { label: "Collection", Icon: ShoppingBag },
    { label: "Customers", Icon: Users },
    { label: "Staff", Icon: UsersRound, active: true },
    { label: "Attendance", Icon: Clock3 },
    { label: "Shifts", Icon: CalendarDays },
    { label: "Roles & Permissions", Icon: ShieldCheck },
    { label: "Payroll", Icon: Wallet },
    { label: "Reports", Icon: BarChart3 },
    { label: "Settings", Icon: Settings },
];

const staffRows = [
    ["John Smith", "Manager", "089 123 4567", "JS"],
    ["Sarah Johnson", "Cashier", "089 234 5678", "SJ"],
    ["Michael Brown", "Chef", "089 345 6789", "MB"],
    ["Emily Davis", "Kitchen Staff", "089 456 7890", "ED"],
    ["David Wilson", "Delivery Driver", "089 567 8901", "DW"],
];

const rolesRows = [
    ["Manager", "2", "Full Access", "bg-[#EAF9F1] text-[#16A466]"],
    ["Cashier", "3", "Billing, Orders, Customers", "bg-[#EEF2FF] text-[#2155FF]"],
    ["Chef", "4", "Kitchen, Orders", "bg-[#F5ECFF] text-[#7A36DF]"],
    ["Delivery Driver", "5", "Delivery, Orders", "bg-[#FFF4E8] text-[#D88418]"],
    ["Kitchen Staff", "4", "Kitchen", "bg-[#F4F6FA] text-[#64748B]"],
];

const shiftRows = [
    ["Morning Shift", "08:00 AM - 04:00 PM", "6 Staff", "#E5A33A"],
    ["Evening Shift", "04:00 PM - 12:00 AM", "7 Staff", "#F59E0B"],
    ["Night Shift", "12:00 AM - 08:00 AM", "5 Staff", "#2155FF"],
];

const stats = [
    ["Total Staff", "18", "+ 12.5%", UsersRound],
    ["Present Today", "14", "+ 8.3%", CalendarDays],
    ["Total Hours", "248h 30m", "+ 9.7%", Clock3],
    ["Avg. Attendance", "92%", "+ 6.4%", BarChart3],
] as const;

const bottomStrip = [
    ["Secure Access Control", "Protect your data with role-based permissions and security.", ShieldCheck],
    ["Save Time", "Automate scheduling and reduce manual work.", Clock3],
    ["Increase Productivity", "Track performance and optimize your team.", BarChart3],
    ["Happy Team", "Clear roles, fair schedules and better management.", UsersRound],
] as const;

const GposMark = () => (
    <span className="relative flex h-[32px] w-[32px] shrink-0 items-center justify-center" aria-hidden>
        <span className="absolute inset-0 rounded-[9px] bg-[#2155FF] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
        <span className="absolute inset-[5px] rounded-[6px] bg-white [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
        <span className="absolute inset-[9px] rounded-[4px] bg-[#2155FF] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
        <span className="absolute right-[4px] top-[13px] h-[7px] w-[16px] rounded-l-full bg-white" />
    </span>
);

const InitialAvatar = ({ label, index = 0 }: { label: string; index?: number }) => {
    const tones = ["bg-[#F7D9C6]", "bg-[#F4CFC4]", "bg-[#FADDD1]", "bg-[#E9D7FE]", "bg-[#DDEBFF]"];
    return (
        <span className={`grid h-[28px] w-[28px] shrink-0 place-items-center rounded-full text-[10px] font-[850] text-[#081B44] ${tones[index % tones.length]}`}>
            {label}
        </span>
    );
};

const FeatureRow = ({ title, description, Icon, boxClass, iconClass }: FeatureItem) => (
    <article className="flex items-start gap-[17px]">
        <span className={`grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[13px] ${boxClass}`}>
            <Icon className={`h-[24px] w-[24px] ${iconClass}`} strokeWidth={2.1} aria-hidden />
        </span>
        <div className="min-w-0 pt-[1px]">
            <h3 className="font-['Inter',Arial,sans-serif] text-[16px] font-[800] leading-[1.2] tracking-[-0.012em] text-[#081B44]">
                {title}
            </h3>
            <p className="mt-[5px] max-w-[360px] font-['Inter',Arial,sans-serif] text-[13px] font-[500] leading-[1.55] text-[#55627A]">
                {description}
            </p>
        </div>
    </article>
);

const Sidebar = () => (
    <aside className="flex h-full w-[138px] shrink-0 flex-col rounded-[22px] bg-[linear-gradient(180deg,#071B42_0%,#061631_100%)] px-[12px] py-[20px] text-white max-lg:hidden">
        <div className="mb-[18px] flex items-center gap-[9px] px-[3px]">
            <GposMark />
            <span className="text-[22px] font-[850] tracking-[-0.035em]">GPOS</span>
        </div>

        <nav className="grid gap-[5px]">
            {sidebarItems.map(({ label, Icon, active }) => (
                <div
                    key={label}
                    className={`flex h-[41px] items-center gap-[8px] rounded-[12px] px-[9px] text-[11.5px] font-[750] leading-[1.05] ${
                        active ? "bg-[#2155FF] text-white shadow-[0_8px_18px_rgba(33,85,255,0.35)]" : "text-white/90"
                    }`}
                >
                    <Icon className="h-[15px] w-[15px] shrink-0" strokeWidth={2.1} aria-hidden />
                    <span className="min-w-0 whitespace-normal">{label}</span>
                </div>
            ))}
        </nav>

        <div className="mt-auto grid gap-[13px]">
            <div className="flex h-[39px] items-center gap-[8px] rounded-[12px] bg-white/[0.06] px-[9px] text-[11.5px] font-[750]">
                <span className="h-[9px] w-[9px] rounded-full bg-[#17C964]" />
                <span>Main Branch</span>
            </div>
            <div className="flex items-center gap-[9px] px-[4px]">
                <span className="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#715DF5] text-[13px] font-[850]">AD</span>
                <span className="text-[11.5px] font-[750] leading-[1.25]">
                    Admin
                    <span className="block font-[500] text-white/75">Owner</span>
                </span>
            </div>
        </div>
    </aside>
);

const StatsCards = () => (
    <div className="grid grid-cols-4 gap-[14px]">
        {stats.map(([title, value, growth, Icon]) => (
            <article key={title} className="h-[96px] rounded-[16px] border border-[#E8EDF5] bg-white p-[14px] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
                <div className="flex items-start gap-[12px]">
                    <span className="grid h-[36px] w-[36px] shrink-0 place-items-center rounded-[9px] bg-[#EEF2FF] text-[#2155FF]">
                        <Icon className="h-[19px] w-[19px]" strokeWidth={2.1} aria-hidden />
                    </span>
                    <div>
                        <p className="text-[10.5px] font-[700] text-[#55627A]">{title}</p>
                        <p className="mt-[5px] text-[20px] font-[850] leading-none tracking-[-0.025em] text-[#081B44]">{value}</p>
                        <p className="mt-[9px] text-[10.5px] font-[800] text-[#16A466]">{growth} <span className="text-[#64748B]">vs last week</span></p>
                    </div>
                </div>
            </article>
        ))}
    </div>
);

const StaffMembersCard = () => (
    <section className="rounded-[18px] border border-[#E8EDF5] bg-white p-[16px] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
        <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-[850] text-[#081B44]">Staff Members</h3>
            <button type="button" className="rounded-[7px] border border-[#E8EDF5] bg-white px-[9px] py-[5px] text-[10.5px] font-[800] text-[#2155FF]">View All</button>
        </div>
        <div className="mt-[15px] grid grid-cols-[1.35fr_0.85fr_0.75fr_1fr] border-b border-[#EEF2F8] pb-[8px] text-[10.5px] font-[800] text-[#64748B]">
            <span>Staff</span><span>Role</span><span>Status</span><span>Phone</span>
        </div>
        <div className="divide-y divide-[#EEF2F8]">
            {staffRows.map(([name, role, phone, initials], index) => (
                <div key={name} className="grid grid-cols-[1.35fr_0.85fr_0.75fr_1fr] items-center py-[10px] text-[11px] font-[700] text-[#081B44]">
                    <span className="flex items-center gap-[8px]">
                        <InitialAvatar label={initials} index={index} />
                        {name}
                    </span>
                    <span>{role}</span>
                    <span><span className="rounded-[7px] bg-[#EAF9F1] px-[9px] py-[5px] text-[10px] font-[850] text-[#16A466]">Active</span></span>
                    <span className="text-[#334155]">{phone}</span>
                </div>
            ))}
        </div>
        <button type="button" className="mt-[8px] text-[11px] font-[850] text-[#2155FF]">+ Add New Staff</button>
    </section>
);

const AttendanceCard = () => {
    const bars = [
        ["88%", "0%", "0%"],
        ["84%", "5%", "0%"],
        ["83%", "0%", "0%"],
        ["76%", "10%", "4%"],
        ["75%", "9%", "3%"],
        ["78%", "6%", "0%"],
        ["76%", "0%", "0%"],
    ];
    return (
        <section className="rounded-[18px] border border-[#E8EDF5] bg-white p-[16px] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
            <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-[850] text-[#081B44]">Attendance Overview</h3>
                <button type="button" className="rounded-[7px] border border-[#E8EDF5] bg-white px-[9px] py-[5px] text-[10.5px] font-[800] text-[#334155]">This Week</button>
            </div>
            <div className="mt-[16px] grid grid-cols-4 text-center">
                {[
                    ["Present", "92%", "text-[#16A466]"],
                    ["Absent", "6%", "text-[#E11D48]"],
                    ["Late", "2%", "text-[#D88418]"],
                    ["Leaves", "4", "text-[#2155FF]"],
                ].map(([label, value, color]) => (
                    <div key={label}>
                        <p className="text-[10px] font-[800] text-[#64748B]">{label}</p>
                        <p className={`mt-[7px] text-[15px] font-[850] ${color}`}>{value}</p>
                    </div>
                ))}
            </div>
            <div className="mt-[22px] flex h-[132px] items-end justify-around border-l border-b border-[#E8EDF5] pl-[14px]">
                {bars.map(([green, orange, red], index) => (
                    <div key={index} className="flex h-full w-[17px] flex-col justify-end overflow-hidden rounded-t-[4px] bg-[#EEF2F8]">
                        {Number.parseInt(red) > 0 && <span className="w-full bg-[#E11D48]" style={{ height: red }} />}
                        {Number.parseInt(orange) > 0 && <span className="w-full bg-[#F59E0B]" style={{ height: orange }} />}
                        <span className="w-full bg-[#18B56B]" style={{ height: green }} />
                    </div>
                ))}
            </div>
            <div className="mt-[8px] grid grid-cols-7 text-center text-[9.5px] font-[700] text-[#55627A]">
                {["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"].map((day) => <span key={day}>{day}</span>)}
            </div>
        </section>
    );
};

const ShiftsCard = () => (
    <section className="rounded-[18px] border border-[#E8EDF5] bg-white p-[16px] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
        <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-[850] text-[#081B44]">Upcoming Shifts</h3>
            <button type="button" className="rounded-[7px] border border-[#E8EDF5] bg-white px-[9px] py-[5px] text-[10.5px] font-[800] text-[#2155FF]">View Calendar</button>
        </div>
        <div className="mt-[14px] grid gap-[10px]">
            {shiftRows.map(([name, time, count, color], index) => (
                <div key={name} className="grid grid-cols-[1fr_auto_116px] items-center gap-[12px] rounded-[12px] bg-[#FAFCFF] px-[12px] py-[9px]">
                    <div className="flex items-center gap-[10px]">
                        <span className="grid h-[34px] w-[34px] place-items-center rounded-[9px] bg-[#FFF4E8]" style={{ color }}>
                            <Clock3 className="h-[17px] w-[17px]" strokeWidth={2.1} aria-hidden />
                        </span>
                        <div>
                            <p className="text-[12px] font-[850] text-[#081B44]">{name}</p>
                            <p className="mt-[3px] text-[10px] font-[650] text-[#55627A]">{time}</p>
                        </div>
                    </div>
                    <span className="rounded-[7px] bg-[#EEF2FF] px-[8px] py-[5px] text-[10px] font-[850] text-[#2155FF]">{count}</span>
                    <div className="flex justify-end -space-x-2">
                        {[0, 1, 2, 3].map((n) => <InitialAvatar key={n} label="" index={index + n} />)}
                        <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#F1F5F9] text-[10px] font-[850] text-[#64748B]">+{index + 1}</span>
                    </div>
                </div>
            ))}
        </div>
        <button type="button" className="mt-[10px] text-[11px] font-[850] text-[#2155FF]">+ Add Shift</button>
    </section>
);

const RolesCard = () => (
    <section className="rounded-[18px] border border-[#E8EDF5] bg-white p-[16px] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
        <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-[850] text-[#081B44]">Roles &amp; Permissions</h3>
            <button type="button" className="rounded-[7px] border border-[#E8EDF5] bg-white px-[9px] py-[5px] text-[10.5px] font-[800] text-[#2155FF]">Manage Roles</button>
        </div>
        <div className="mt-[15px] grid grid-cols-[1fr_0.45fr_1.45fr] border-b border-[#EEF2F8] pb-[8px] text-[10.5px] font-[800] text-[#64748B]">
            <span>Role</span><span>Users</span><span>Permissions</span>
        </div>
        <div className="divide-y divide-[#EEF2F8]">
            {rolesRows.map(([role, users, tag, tagClass]) => (
                <div key={role} className="grid grid-cols-[1fr_0.45fr_1.45fr] items-center py-[11px] text-[11px] font-[750] text-[#081B44]">
                    <span>{role}</span>
                    <span>{users}</span>
                    <span><span className={`rounded-[7px] px-[8px] py-[5px] text-[10px] font-[850] ${tagClass}`}>{tag}</span></span>
                </div>
            ))}
        </div>
    </section>
);

const StaffDashboard = () => (
    <div className="min-w-0 w-full max-w-[1010px] justify-self-start">
        <div className="flex h-[760px] w-full overflow-hidden rounded-[28px] border border-[#E8EDF5] bg-white p-[22px] shadow-[0_4px_12px_rgba(15,23,42,0.05)] max-xl:h-auto">
            <Sidebar />
            <div className="min-w-0 flex-1 pl-[20px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-[20px] font-[850] tracking-[-0.025em] text-[#081B44]">Staff Overview</h2>
                    <div className="flex items-center gap-[13px]">
                        <button type="button" className="inline-flex h-[38px] items-center gap-[8px] rounded-[9px] border border-[#E8EDF5] bg-white px-[13px] text-[12px] font-[800] text-[#334155]">
                            <CalendarDays className="h-[16px] w-[16px]" strokeWidth={2.1} aria-hidden />
                            May 24 - May 31, 2024
                        </button>
                        <div className="relative grid h-[38px] w-[38px] place-items-center text-[#081B44]">
                            <Bell className="h-[20px] w-[20px]" strokeWidth={2.1} aria-hidden />
                            <span className="absolute right-[6px] top-[4px] h-[8px] w-[8px] rounded-full bg-[#FF2D55]" />
                        </div>
                        <InitialAvatar label="AD" />
                    </div>
                </div>

                <div className="mt-[20px]">
                    <StatsCards />
                </div>

                <div className="mt-[16px] grid grid-cols-[1.08fr_1fr] gap-[16px]">
                    <StaffMembersCard />
                    <AttendanceCard />
                    <ShiftsCard />
                    <RolesCard />
                </div>

                <div className="mt-[18px] grid h-[76px] grid-cols-4 items-center overflow-hidden rounded-[16px] border border-[#E8EDF5] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
                    {bottomStrip.map(([title, subtitle, Icon], index) => (
                        <article key={title} className={`flex h-full items-center gap-[12px] px-[18px] ${index > 0 ? "border-l border-[#E8EDF5]" : ""}`}>
                            <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[10px] bg-[#EEF2FF] text-[#2155FF]">
                                <Icon className="h-[21px] w-[21px]" strokeWidth={2.1} aria-hidden />
                            </span>
                            <span className="min-w-0">
                                <span className="block text-[12.5px] font-[850] leading-[1.15] text-[#081B44]">{title}</span>
                                <span className="mt-[5px] block text-[10px] font-[600] leading-[1.25] text-[#55627A]">{subtitle}</span>
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const StaffManagementSection: React.FC = () => {
    return (
        <section className="bg-[#F5F7FC] px-[40px] pb-[40px] pt-[32px] font-['Inter',Arial,sans-serif] max-lg:px-[24px] max-sm:px-[18px]">
            <div className="mx-auto grid max-w-[1480px] grid-cols-1 items-start gap-[36px] lg:grid-cols-[560px_minmax(0,1fr)] xl:grid-cols-[600px_minmax(0,1fr)]">
                <div className="pt-[4px]">
                    <div className="inline-flex h-[42px] items-center gap-[10px] rounded-full border border-[#E8EDF5] bg-white px-[18px] text-[16px] font-[600] text-[#2155FF] shadow-[0_4px_12px_rgba(15,23,42,0.035)]">
                        <Users className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden />
                        Staff Management
                    </div>

                    <h2 className="mt-[31px] font-['Inter',Arial,sans-serif] text-[clamp(34px,3.05vw,48px)] font-[850] leading-[1.1] tracking-[-0.042em] text-[#081B44]">
                        <span className="block whitespace-nowrap">Manage Your Team.</span>
                        <span className="block whitespace-nowrap">Stay in Control.</span>
                        <span className="block whitespace-nowrap text-[#2155FF]">Run Smoother.</span>
                    </h2>

                    <p className="mt-[22px] max-w-[500px] text-[17px] font-[500] leading-[1.72] text-[#55627A]">
                        From roles and permissions to shifts and attendance, GPOS gives you complete control over your staff and daily operations.
                    </p>

                    <div className="mt-[30px] grid gap-[22px]">
                        {featureItems.map((item) => (
                            <FeatureRow key={item.title} {...item} />
                        ))}
                    </div>

                    <a
                        href="#features"
                        className="mt-[36px] inline-flex h-[54px] items-center justify-center gap-[16px] rounded-[12px] bg-[#2155FF] px-[28px] text-[15px] font-[800] text-white no-underline shadow-[0_12px_24px_rgba(33,85,255,0.20)]"
                    >
                        Explore All Features
                        <ArrowRight className="h-[19px] w-[19px]" strokeWidth={2.1} aria-hidden />
                    </a>
                </div>

                <StaffDashboard />
            </div>
        </section>
    );
};

export default StaffManagementSection;
