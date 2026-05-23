import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Cloud,
    Facebook,
    Headphones,
    Instagram,
    Linkedin,
    Mail,
    ShieldCheck,
    Youtube,
} from 'lucide-react';

export type FooterProps = {
    hideTopCta?: boolean;
};

type LucideIcon = React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;

const productLinks = [
    ['Features', '/restaurant_pos'],
    ['Pricing', '/pricing'],
    ['Integrations', '/restaurant_pos'],
    ["What's New", '/restaurant_pos'],
] as const;

const solutionLinks = [
    ['Restaurants', '/restaurant_pos'],
    ['Cafes & Bakeries', '/restaurant_pos'],
    ['Retail Stores', '/shop'],
    ['Cloud Kitchens', '/restaurant_pos'],
] as const;

const companyLinks = [
    ['About Us', '/about'],
    ['Careers', '/about'],
    ['Blog', '/about'],
    ['Contact Us', '/contact'],
] as const;

const supportLinks = [
    ['Help Center', '/contact'],
    ['Documentation', '/contact'],
    ['Request Demo', '/get_demo'],
    ['System Status', '/contact'],
] as const;

const brandFeatures: Array<readonly [string, string, LucideIcon]> = [
    ['Secure & Reliable', 'Bank-level security & 99.9% uptime', ShieldCheck],
    ['Cloud Based', 'Access your business from anywhere', Cloud],
    ['24/7 Support', "We're here whenever you need us", Headphones],
];

const legalLinks = [
    ['Privacy Policy', '/privacy'],
    ['Terms of Service', '/terms'],
    ['Cookie Policy', '/cookies'],
] as const;

const socialItems: Array<readonly [string, LucideIcon]> = [
    ['Facebook', Facebook],
    ['Instagram', Instagram],
    ['LinkedIn', Linkedin],
    ['YouTube', Youtube],
];

function BrandMark() {
    return (
        <div className="flex items-center gap-[12px]">
            <span className="relative grid h-[44px] w-[44px] shrink-0 place-items-center">
                <span className="absolute inset-0 [clip-path:polygon(50%_0%,92%_25%,92%_75%,50%_100%,8%_75%,8%_25%)] bg-gradient-to-br from-[#0B6BFF] via-[#0A55F5] to-[#053FC7]" />
                <span className="absolute inset-[6px] [clip-path:polygon(50%_0%,91%_25%,91%_75%,50%_100%,9%_75%,9%_25%)] bg-white" />
                <span className="absolute inset-[12px] [clip-path:polygon(50%_0%,90%_25%,90%_75%,50%_100%,10%_75%,10%_25%)] bg-gradient-to-br from-[#0B6BFF] to-[#063BC2]" />
                <span className="relative text-[16px] font-black leading-none text-white">G</span>
            </span>
            <span className="text-[28px] font-extrabold leading-none tracking-[-0.03em] text-[#07142F]">GPOS</span>
        </div>
    );
}

function LinkColumn({ title, items }: { title: string; items: ReadonlyArray<readonly [string, string]> }) {
    return (
        <nav aria-label={title}>
            <h3 className="text-[15px] font-extrabold leading-none tracking-[-0.012em] text-[#07142F]">{title}</h3>
            <ul className="mt-[20px] space-y-[14px]">
                {items.map(([label, to]) => (
                    <li key={label}>
                        <Link
                            to={to}
                            className="text-[13px] font-medium leading-[1.4] text-[#5A6478] no-underline transition hover:text-[#0B56EA]"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function BrandFeature({ item }: { item: (typeof brandFeatures)[number] }) {
    const [title, description, Icon] = item;
    return (
        <article className="flex items-center gap-[12px]">
            <span className="grid h-[36px] w-[36px] shrink-0 place-items-center rounded-full bg-[#E8F0FE] text-[#0B56EA]">
                <Icon className="h-[18px] w-[18px]" strokeWidth={2.15} aria-hidden />
            </span>
            <div className="min-w-0">
                <h4 className="text-[12px] font-extrabold leading-[1.2] tracking-[-0.012em] text-[#07142F]">{title}</h4>
                <p className="mt-[2px] text-[11px] font-medium leading-[1.35] text-[#5A6478]">{description}</p>
            </div>
        </article>
    );
}

const Footer: React.FC<FooterProps> = ({ hideTopCta: _hideTopCta = false }) => {
    void _hideTopCta;
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setEmail('');
    };

    return (
        <footer className="w-full overflow-x-clip border-t border-[#DDE6F2] bg-white font-['Poppins',Inter,Arial,sans-serif] text-[#07142F]">
            <div className="mx-auto w-full max-w-[1440px] px-[20px] pb-[24px] pt-[36px] lg:px-[48px] lg:pb-[28px] lg:pt-[44px]">
                <div className="grid grid-cols-1 items-start gap-[36px] lg:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))_1.2fr] lg:gap-[28px]">
                    <section className="flex flex-col">
                        <BrandMark />
                        <p className="mt-[18px] max-w-[260px] text-[13px] font-medium leading-[1.55] text-[#5A6478]">
                            All-in-one POS and business management system to simplify operations, delight customers and grow your business.
                        </p>
                        <div className="mt-[22px] space-y-[14px]">
                            {brandFeatures.map((item) => (
                                <BrandFeature key={item[0]} item={item} />
                            ))}
                        </div>
                    </section>

                    <LinkColumn title="Product" items={productLinks} />
                    <LinkColumn title="Solutions" items={solutionLinks} />
                    <LinkColumn title="Company" items={companyLinks} />
                    <LinkColumn title="Support" items={supportLinks} />

                    <section className="flex flex-col">
                        <span className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#E8F0FE] text-[#0B56EA]">
                            <Mail className="h-[20px] w-[20px]" strokeWidth={2.15} aria-hidden />
                        </span>
                        <h3 className="mt-[14px] text-[16px] font-extrabold leading-[1.2] tracking-[-0.018em] text-[#07142F]">Stay in the loop</h3>
                        <p className="mt-[6px] text-[12px] font-medium leading-[1.5] text-[#5A6478]">
                            Get product updates, tips and exclusive offers.
                        </p>
                        <form onSubmit={handleSubscribe} className="mt-[16px] flex flex-col gap-[10px]">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                aria-label="Email address"
                                className="h-[40px] w-full rounded-[8px] border border-[#DDE6F2] bg-white px-[14px] text-[13px] font-medium leading-none text-[#07142F] placeholder:text-[#9BA7BD] focus:border-[#0B56EA] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="inline-flex h-[40px] items-center justify-center rounded-[8px] bg-[#1259EA] text-[13px] font-bold tracking-[-0.005em] text-white transition hover:bg-[#0E4FD1]"
                            >
                                Subscribe
                            </button>
                        </form>
                    </section>
                </div>

                <div className="mt-[28px] grid grid-cols-1 items-center gap-[16px] border-t border-[#E5EBF4] pt-[18px] md:grid-cols-[1fr_auto_auto] md:gap-[28px]">
                    <p className="text-[12px] font-medium leading-none text-[#5A6478]">
                        © {new Date().getFullYear()} GPOS System. All rights reserved.
                    </p>

                    <nav className="flex flex-wrap items-center justify-start gap-[16px] text-[12px] font-medium leading-none text-[#5A6478] md:justify-center" aria-label="Legal links">
                        {legalLinks.map(([label, to], index) => (
                            <React.Fragment key={label}>
                                {index > 0 && <span className="h-[14px] w-px bg-[#C5D2E5]" aria-hidden />}
                                <Link to={to} className="text-[#5A6478] no-underline transition hover:text-[#0B56EA]">
                                    {label}
                                </Link>
                            </React.Fragment>
                        ))}
                    </nav>

                    <div className="flex items-center gap-[10px] md:justify-end">
                        <span className="text-[12px] font-bold leading-none text-[#07142F]">Follow Us</span>
                        {socialItems.map(([label, Icon]) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                className="grid h-[32px] w-[32px] place-items-center rounded-full bg-[#EEF3FB] text-[#07142F] no-underline transition hover:bg-[#1259EA] hover:text-white"
                            >
                                <Icon className="h-[14px] w-[14px]" strokeWidth={2.05} aria-hidden />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
