import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import type { LucideIcon } from 'lucide-react';
import {
    ArrowRight,
    BadgeCheck,
    BarChart3,
    CalendarClock,
    CalendarDays,
    ChevronDown,
    Clock3,
    Headphones,
    ShieldCheck,
    Star,
    Store,
    TrendingUp,
} from 'lucide-react';

const PRIMARY = '#2155FF';
const NAVY = '#081B44';
const MUTED = '#55627A';
const BORDER = '#E8EDF5';
const BG = '#F6F8FC';
const ICON_SOFT_BG = '#EEF3FF';
const CARD_SHADOW = '0 6px 16px rgba(15,23,42,0.05)';
const ICON_STROKE = 2.1;

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

function BookDemoNavbar() {
    const linkClass =
        'inline-flex items-center gap-1.5 text-[14px] font-semibold no-underline transition-opacity hover:opacity-80';
    return (
        <header className="border-b bg-white" style={{ borderColor: BORDER }}>
            <div className="mx-auto flex h-[84px] w-full max-w-[1480px] items-center justify-between gap-4 px-6 sm:px-10">
                <Link to="/" className="inline-flex shrink-0 items-center gap-3 no-underline">
                    <GposGradientMark />
                    <span className="text-[28px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: NAVY, fontFamily: 'Inter,system-ui,sans-serif' }}>
                        GPOS
                    </span>
                </Link>

                <nav
                    className="hidden flex-wrap items-center justify-center gap-x-7 gap-y-2 lg:flex"
                    style={{ fontFamily: 'Inter,system-ui,sans-serif' }}
                    aria-label="Primary"
                >
                    <Link to="/restaurant_pos" className={linkClass} style={{ color: NAVY }}>
                        Features
                        <ChevronDown width={18} height={18} strokeWidth={ICON_STROKE} aria-hidden />
                    </Link>
                    <Link to="/pricing" className={linkClass} style={{ color: NAVY }}>
                        Pricing
                    </Link>
                    <Link to="/get_demo" className={linkClass} style={{ color: NAVY }}>
                        Demo
                    </Link>
                    <span className={`${linkClass} cursor-default`} style={{ color: NAVY }}>
                        Resources
                        <ChevronDown width={18} height={18} strokeWidth={ICON_STROKE} aria-hidden />
                    </span>
                    <Link to="/about" className={linkClass} style={{ color: NAVY }}>
                        About Us
                    </Link>
                </nav>

                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <a
                        href="https://dashboard.gposapp.com/"
                        className="inline-flex h-[46px] min-w-[100px] items-center justify-center rounded-[11px] border bg-white px-5 text-[14px] font-semibold no-underline transition-colors hover:bg-slate-50"
                        style={{ borderColor: PRIMARY, color: PRIMARY, fontFamily: 'Inter,system-ui,sans-serif' }}
                    >
                        Login
                    </a>
                    <Link
                        to="/get_demo"
                        className="inline-flex h-[46px] min-w-[168px] items-center justify-center gap-2 rounded-[11px] px-5 text-[14px] font-semibold text-white no-underline transition-opacity hover:opacity-95"
                        style={{ backgroundColor: PRIMARY, fontFamily: 'Inter,system-ui,sans-serif' }}
                    >
                        Book a Demo
                        <ArrowRight width={18} height={18} strokeWidth={ICON_STROKE} aria-hidden />
                    </Link>
                </div>
            </div>
        </header>
    );
}

const inputBaseClass =
    'w-full rounded-[14px] border bg-white px-[18px] text-[16px] outline-none transition-[box-shadow] placeholder:text-slate-400 focus:border-[#2155FF] focus:ring-2 focus:ring-[#2155FF]/20';
const inputClassName = `${inputBaseClass} h-14`;
const inputStyle = { borderColor: BORDER, color: NAVY, fontFamily: 'Inter,system-ui,sans-serif' };

/** Form & UI labels — slightly under 15px to match mock proportions next to 16px inputs */
const labelClass = "mb-2 block text-[14px] font-semibold leading-tight tracking-[-0.01em]";

/** Two-line body under benefit titles: exactly two visual lines (each span = one line). */
const benefitDescClass =
    'mt-1 min-h-[3.0625rem] text-[15px] font-normal leading-[1.75] tracking-[-0.01em] [&>span]:block [&>span]:whitespace-normal sm:[&>span]:whitespace-nowrap';
const benefitTitleClass =
    'text-[18px] font-bold leading-[1.15] tracking-[-0.02em] whitespace-normal sm:whitespace-nowrap sm:text-[19px] lg:text-[20px]';

function SelectField({
    id,
    label,
    value,
    onChange,
    options,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    options: { value: string; label: string }[];
}) {
    return (
        <div className="min-w-0">
            <label htmlFor={id} className={labelClass} style={{ color: NAVY, fontFamily: 'Inter,system-ui,sans-serif' }}>
                {label}
            </label>
            <div className="relative">
                <select
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`${inputClassName} appearance-none pr-11`}
                    style={{ ...inputStyle, fontFamily: 'Inter,system-ui,sans-serif' }}
                >
                    {options.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                <span className="pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2 text-[#55627A]">
                    <ChevronDown width={18} height={18} strokeWidth={ICON_STROKE} aria-hidden />
                </span>
            </div>
        </div>
    );
}

function TextField({
    id,
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
}: {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}) {
    return (
        <div className="min-w-0">
            <label htmlFor={id} className={labelClass} style={{ color: NAVY, fontFamily: 'Inter,system-ui,sans-serif' }}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className={inputClassName}
                style={{ ...inputStyle, fontFamily: 'Inter,system-ui,sans-serif' }}
            />
        </div>
    );
}

function DemoBookingForm() {
    const id = useId();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [restaurantType, setRestaurantType] = useState('');
    const [outlets, setOutlets] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div
            className="relative w-full max-w-[620px] rounded-[28px] border bg-white p-8 lg:ml-auto"
            style={{ borderColor: BORDER, boxShadow: CARD_SHADOW, fontFamily: 'Inter,system-ui,sans-serif' }}
        >
            <div className="pointer-events-none absolute -right-6 top-24 hidden h-[min(420px,55%)] w-[min(200px,40%)] opacity-[0.14] xl:block" aria-hidden>
                <div
                    className="h-full w-full rounded-2xl"
                    style={{
                        backgroundImage: `radial-gradient(circle, ${PRIMARY} 1.2px, transparent 1.2px)`,
                        backgroundSize: '14px 14px',
                    }}
                />
            </div>

            <div className="relative z-[1] flex gap-4">
                <span
                    className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[16px]"
                    style={{ backgroundColor: ICON_SOFT_BG }}
                >
                    <CalendarDays width={28} height={28} strokeWidth={ICON_STROKE} color={PRIMARY} aria-hidden />
                </span>
                <div className="min-w-0 pt-1">
                    <h2 className="text-[38px] font-extrabold leading-[1.1] tracking-[-0.03em]" style={{ color: NAVY }}>
                        Book a Free Demo
                    </h2>
                    <p className="mt-2 text-[15px] leading-[1.55] tracking-[-0.01em] md:whitespace-nowrap" style={{ color: MUTED }}>
                        Fill in your details and we&apos;ll get back to you shortly.
                    </p>
                </div>
            </div>

            <form className="relative z-[1] mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <TextField id={`${id}-name`} label="Full Name" value={fullName} onChange={setFullName} placeholder="John Smith" />
                    <TextField id={`${id}-email`} label="Work Email" type="email" value={email} onChange={setEmail} placeholder="you@company.com" />
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <TextField id={`${id}-phone`} label="Phone Number" type="tel" value={phone} onChange={setPhone} placeholder="+353 …" />
                    <SelectField
                        id={`${id}-type`}
                        label="Restaurant Type"
                        value={restaurantType}
                        onChange={setRestaurantType}
                        options={[
                            { value: '', label: 'Select type' },
                            { value: 'full-service', label: 'Full-service restaurant' },
                            { value: 'quick-service', label: 'Quick service / café' },
                            { value: 'takeaway', label: 'Takeaway' },
                            { value: 'bar', label: 'Bar / pub' },
                            { value: 'other', label: 'Other' },
                        ]}
                    />
                </div>
                <SelectField
                    id={`${id}-outlets`}
                    label="Number of Outlets"
                    value={outlets}
                    onChange={setOutlets}
                    options={[
                        { value: '', label: 'Select outlets' },
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                        { value: '3-5', label: '3 – 5' },
                        { value: '6+', label: '6+' },
                    ]}
                />
                <div>
                    <label htmlFor={`${id}-msg`} className={labelClass} style={{ color: NAVY, fontFamily: 'Inter,system-ui,sans-serif' }}>
                        Message (Optional)
                    </label>
                    <textarea
                        id={`${id}-msg`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className={`${inputBaseClass} resize-none py-3`}
                        style={{ ...inputStyle, height: 110, minHeight: 110, fontFamily: 'Inter,system-ui,sans-serif' }}
                        placeholder="Tell us about your setup…"
                    />
                </div>

                <button
                    type="submit"
                    className="flex h-[60px] w-full items-center justify-center gap-2 rounded-[14px] text-[18px] font-bold text-white transition-opacity hover:opacity-95"
                    style={{ backgroundColor: PRIMARY, fontFamily: 'Inter,system-ui,sans-serif', marginTop: 28 }}
                >
                    Book My Demo
                    <ArrowRight width={20} height={20} strokeWidth={ICON_STROKE} aria-hidden />
                </button>

                <div
                    className="mt-5 flex items-start justify-center gap-2.5 text-left sm:justify-center"
                    style={{ marginTop: 20, fontFamily: 'Inter,system-ui,sans-serif' }}
                >
                    <ShieldCheck
                        width={18}
                        height={18}
                        strokeWidth={ICON_STROKE}
                        className="mt-0.5 shrink-0 text-[#2155FF]"
                        aria-hidden
                    />
                    <p className="text-[14px] leading-[1.75] tracking-[-0.01em]" style={{ color: MUTED }}>
                        <span className="block">Your information is safe with us.</span>
                        <span className="block">We respect your privacy.</span>
                    </p>
                </div>
            </form>
        </div>
    );
}

const benefits: {
    Icon: LucideIcon;
    title: string;
    desc: [string, string];
}[] = [
    {
        Icon: CalendarClock,
        title: 'Personalized Demo',
        desc: ['See GPOS in action for', 'your restaurant type.'],
    },
    {
        Icon: Headphones,
        title: 'Expert Consultation',
        desc: ['Get answers to your questions', 'from our product experts.'],
    },
    {
        Icon: BarChart3,
        title: 'Tailored for You',
        desc: ['Solutions designed to fit', 'your unique business needs.'],
    },
    {
        Icon: BadgeCheck,
        title: 'No Obligations',
        desc: ["It's completely free with", 'no commitment.'],
    },
];

const brands = ['SpiceHub', 'CAFE 99', 'BURGER BARN', 'The Meal Bowl', 'Pizza Palace', 'Chai Point', 'URBAN BITES'] as const;

const stats: {
    Icon: LucideIcon;
    value: string;
    label: [string, string];
}[] = [
    { Icon: Store, value: '1000+', label: ['Restaurants', 'Trust GPOS'] },
    { Icon: TrendingUp, value: '30%+', label: ['Average Increase', 'in Sales'] },
    { Icon: Clock3, value: '10+ Hours', label: ['Saved Every', 'Week'] },
    { Icon: Star, value: '4.8/5', label: ['Customer', 'Satisfaction'] },
];

export type BookDemoCtaSectionProps = {
    /** Hide marketing navbar when embedding under an existing site header. */
    embed?: boolean;
};

const BookDemoCtaSection: React.FC<BookDemoCtaSectionProps> = ({ embed = false }) => {
    return (
        <div className="relative min-w-0 overflow-x-clip" style={{ backgroundColor: BG, fontFamily: 'Inter,system-ui,sans-serif' }}>
            <div
                className="pointer-events-none absolute right-0 top-[200px] z-0 hidden h-[min(640px,70vh)] w-[min(280px,22vw)] opacity-[0.12] lg:block"
                aria-hidden
            >
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `radial-gradient(circle, ${PRIMARY} 1px, transparent 1px)`,
                        backgroundSize: '16px 16px',
                        maskImage: 'linear-gradient(90deg, transparent, black 35%)',
                    }}
                />
            </div>

            {!embed && <Navbar />}

            <div className="relative z-[1] mx-auto w-full max-w-[1480px] px-6 pt-9 pb-[42px] sm:px-10">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:gap-12">
                    <div className="min-w-0 lg:max-w-none" style={{ width: '100%' }}>
                        <div
                            className="inline-flex h-[42px] items-center gap-2.5 rounded-full border bg-white px-[18px]"
                            style={{ borderColor: BORDER, gap: 10 }}
                        >
                            <CalendarDays width={18} height={18} strokeWidth={ICON_STROKE} color={PRIMARY} aria-hidden />
                            <span className="text-[14px] font-bold uppercase tracking-wide" style={{ color: PRIMARY }}>
                                GET STARTED TODAY
                            </span>
                        </div>

                        <h1
                            className="mt-6 max-w-[640px] text-[clamp(1.625rem,4vw,2.75rem)] font-extrabold leading-[1.12] tracking-[-0.03em] md:leading-[1.08] lg:text-[38px]"
                            style={{ color: NAVY }}
                        >
                            <span className="block max-[480px]:whitespace-normal md:whitespace-nowrap">Ready to Simplify</span>
                            <span className="block max-[480px]:whitespace-normal md:whitespace-nowrap">Your Restaurant Operations?</span>
                            <span
                                className="block max-[480px]:whitespace-normal md:whitespace-nowrap"
                                style={{ color: PRIMARY }}
                            >
                                Let&apos;s Show You How GPOS Can Help.
                            </span>
                        </h1>

                        <p className="mt-[30px] max-w-[600px] text-[20px] leading-[1.85] tracking-[-0.015em]" style={{ color: MUTED }}>
                            <span className="block">Book a personalized demo with our experts and see how</span>
                            <span className="block">
                                GPOS can help you save time, increase sales and grow your business.
                            </span>
                        </p>

                        <div className="mt-10 grid w-full min-w-0 grid-cols-1 gap-x-8 gap-y-[34px] sm:grid-cols-2">
                            {benefits.map(({ Icon, title, desc }) => (
                                <div key={title} className="flex min-w-0 gap-4">
                                    <span
                                        className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full"
                                        style={{ backgroundColor: ICON_SOFT_BG }}
                                    >
                                        <Icon width={28} height={28} strokeWidth={ICON_STROKE} color={PRIMARY} aria-hidden />
                                    </span>
                                    <div className="min-w-0 flex-1 pt-0.5">
                                        <h3 className={benefitTitleClass} style={{ color: NAVY }}>
                                            {title}
                                        </h3>
                                        <p className={benefitDescClass} style={{ color: MUTED }}>
                                            <span>{desc[0]}</span>
                                            <span>{desc[1]}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="min-w-0">
                        <DemoBookingForm />
                    </div>
                </div>
            </div>

            <div className="relative z-[1] mx-auto w-full max-w-[1480px] px-6 pb-10 sm:px-10">
                <div className="flex items-center gap-5">
                    <div className="h-px flex-1 bg-[#E8EDF5]" aria-hidden />
                    <p className="shrink-0 text-center text-[16px] font-semibold leading-snug tracking-[-0.01em]" style={{ color: NAVY }}>
                        <span className="block">Trusted by 1000+ restaurants</span>
                        <span className="block">and growing</span>
                    </p>
                    <div className="h-px flex-1 bg-[#E8EDF5]" aria-hidden />
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-[0.45] grayscale">
                    {brands.map((name) => (
                        <span
                            key={name}
                            className="whitespace-nowrap text-[14px] font-bold tracking-[0.06em] text-[#081B44]"
                            style={{ fontFamily: 'Inter,system-ui,sans-serif' }}
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-[1] mx-auto w-full max-w-[1480px] px-6 pb-12 sm:px-10">
                <div className="rounded-[24px] border bg-white p-7" style={{ borderColor: BORDER, boxShadow: CARD_SHADOW }}>
                    <div className="grid grid-cols-1 divide-y divide-[#E8EDF5] lg:grid-cols-4 lg:divide-x lg:divide-y-0">
                        {stats.map(({ Icon, value, label }) => (
                            <div key={label.join('-')} className="flex flex-col items-center gap-4 px-2 py-8 text-center lg:py-7 lg:px-6">
                                <span
                                    className="flex h-[62px] w-[62px] items-center justify-center rounded-full"
                                    style={{ backgroundColor: ICON_SOFT_BG }}
                                >
                                    <Icon width={28} height={28} strokeWidth={ICON_STROKE} color={PRIMARY} aria-hidden />
                                </span>
                                <div>
                                    <p className="text-[40px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: PRIMARY }}>
                                        {value}
                                    </p>
                                    <p
                                        className="mt-2 text-center text-[16px] font-normal leading-[1.75] tracking-[-0.01em]"
                                        style={{ color: MUTED }}
                                    >
                                        <span className="block">{label[0]}</span>
                                        <span className="block">{label[1]}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDemoCtaSection;
