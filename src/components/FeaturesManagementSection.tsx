import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
    ChevronRight,
    ClipboardCheck,
    FileText,
    Gift,
    Grid2x2,
    LayoutGrid,
    ListOrdered,
    Monitor,
    Network,
    Settings,
    TableProperties,
    UserRound,
    Users,
    WalletCards,
} from 'lucide-react';

type CategoryTab = {
    label: string;
    Icon: LucideIcon;
    active?: boolean;
};

type ManagementCard = {
    title: string;
    description: string;
    Icon: LucideIcon;
    accentClass: string;
};

const tabs: CategoryTab[] = [
    { label: 'Management systems', Icon: LayoutGrid, active: true },
    { label: 'System and displays', Icon: Monitor },
    { label: 'Reports', Icon: FileText },
    { label: 'Application settings', Icon: Settings },
];

const leftCards: ManagementCard[] = [
    {
        title: 'POS terminal IP test',
        description: 'Configure and verify terminal network connection.',
        Icon: Network,
        accentClass: 'bg-[#11A8E2]',
    },
    {
        title: 'Reservation system',
        description: 'Manage bookings, guest lists and scheduled reservations.',
        Icon: Grid2x2,
        accentClass: 'bg-[#FF6A00]',
    },
    {
        title: 'Table Management system',
        description: 'Organize dining tables, sections and live table status.',
        Icon: TableProperties,
        accentClass: 'bg-[#22C7B8]',
    },
    {
        title: 'Employee Management System',
        description: 'Manage staff profiles, roles and access permissions.',
        Icon: Users,
        accentClass: 'bg-[#A53CF4]',
    },
    {
        title: 'Attendance management system',
        description: 'Track shifts, clock-ins and staff attendance records.',
        Icon: ClipboardCheck,
        accentClass: 'bg-[#FF2D55]',
    },
];

const rightCards: ManagementCard[] = [
    {
        title: 'Customer management system',
        description: 'Store customer profiles, history and contact details.',
        Icon: UserRound,
        accentClass: 'bg-[#11A8E2]',
    },
    {
        title: 'Voucher management system',
        description: 'Create discounts, vouchers and promotion campaigns.',
        Icon: Gift,
        accentClass: 'bg-[#18C37E]',
    },
    {
        title: 'Print record system',
        description: 'View receipt, kitchen and printer job history.',
        Icon: FileText,
        accentClass: 'bg-[#6A5CFF]',
    },
    {
        title: 'Drawer record system',
        description: 'Monitor cash drawer openings and register activity.',
        Icon: WalletCards,
        accentClass: 'bg-[#69B300]',
    },
    {
        title: 'All transaction records',
        description: 'Review complete payment and sales transaction logs.',
        Icon: ListOrdered,
        accentClass: 'bg-[#D92EFF]',
    },
];

const CategoryTabs = () => (
    <div className="flex flex-wrap items-center gap-[16px]">
        {tabs.map(({ label, Icon, active }) => (
            <button
                key={label}
                type="button"
                className={`inline-flex h-[62px] items-center justify-center gap-[14px] rounded-[14px] px-[34px] font-['Inter',Arial,sans-serif] text-[20px] font-[700] leading-none tracking-[-0.01em] shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
                    active
                        ? 'bg-[#003B9B] text-white'
                        : 'border border-[#E5E7EB] bg-white text-[#003B9B]'
                }`}
                aria-pressed={active ? 'true' : 'false'}
            >
                <Icon className="h-[26px] w-[26px] shrink-0" strokeWidth={2.2} aria-hidden />
                <span>{label}</span>
            </button>
        ))}
    </div>
);

const FeatureCard = ({ title, description, Icon, accentClass }: ManagementCard) => (
    <article className="relative flex h-[114px] items-center justify-between overflow-hidden rounded-[16px] border border-[#E3E8F2] bg-white p-[22px] pl-[24px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <span className={`absolute bottom-[10px] left-0 top-[10px] w-[6px] rounded-r-full ${accentClass}`} aria-hidden />

        <div className="flex min-w-0 items-center gap-[18px]">
            <span className="grid h-[48px] w-[48px] shrink-0 place-items-center rounded-[10px] bg-[#F1F4F9] text-[#64748B]">
                <Icon className="h-[24px] w-[24px]" strokeWidth={2.2} aria-hidden />
            </span>

            <div className="min-w-0">
                <h3 className="font-['Inter',Arial,sans-serif] text-[22px] font-[700] leading-[1.12] tracking-[-0.01em] text-[#003B9B]">
                    {title}
                </h3>
                <p className="mt-[8px] font-['Inter',Arial,sans-serif] text-[15px] font-[500] leading-[1.25] tracking-[-0.005em] text-[#24467A]">
                    {description}
                </p>
            </div>
        </div>

        <ChevronRight className="mr-[10px] h-[30px] w-[30px] shrink-0 text-[#003B9B]" strokeWidth={2.5} aria-hidden />
    </article>
);

const FeaturesManagementSection: React.FC = () => {
    return (
        <section className="bg-[#F3F5FA] px-[40px] pt-[20px] pb-[54px] font-['Inter',Arial,sans-serif] max-md:px-[24px] max-sm:px-[18px]">
            <div className="mx-auto w-full max-w-[1500px]">
                <CategoryTabs />

                <div className="mt-[40px] grid grid-cols-2 gap-x-[20px] max-md:grid-cols-1 max-md:gap-y-[18px]">
                    <div className="grid gap-y-[18px]">
                        {leftCards.map((card) => (
                            <FeatureCard key={card.title} {...card} />
                        ))}
                    </div>
                    <div className="grid gap-y-[18px]">
                        {rightCards.map((card) => (
                            <FeatureCard key={card.title} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesManagementSection;
