import React from 'react';
import { Link } from 'react-router-dom';
import {
    CalendarDays,
    ChevronRight,
    Cloud,
    Facebook,
    Headphones,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Youtube,
} from 'lucide-react';

export type FooterProps = {
    hideTopCta?: boolean;
};

type LucideIcon = React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;

const quickLinks = [
    ['Features', '/restaurant_pos'],
    ['Pricing', '/pricing'],
    ['Live Demo', '/get_demo'],
    ['Contact Us', '/contact'],
] as const;

const brandFeatures = [
    ['Secure & Reliable', 'Bank-level security & 99.9% uptime', ShieldCheck],
    ['Cloud Based', 'Access your business from anywhere', Cloud],
    ['24/7 Support', "We're here whenever you need us", Headphones],
] as const;

const contactItems = [
    ['+353 89 123 4567', 'Mon - Fri, 9:00 AM - 6:00 PM (GMT)', Phone],
    ['hello@gpos.com', "We'll respond as soon as possible", Mail],
    ['123 Innovation Drive', 'Dublin, D02 X123, Ireland', MapPin],
] as const;

const legalLinks = [
    ['Privacy Policy', '/privacy'],
    ['Terms of Service', '/terms'],
    ['Cookie Policy', '/cookies'],
] as const;

const socialItems = [
    ['Facebook', Facebook],
    ['Instagram', Instagram],
    ['LinkedIn', Linkedin],
    ['YouTube', Youtube],
] as const;

function BrandMark() {
    return (
        <div className="flex items-start gap-[22px]">
            <span className="relative grid h-[66px] w-[66px] shrink-0 place-items-center">
                <span className="absolute inset-0 [clip-path:polygon(50%_0%,92%_25%,92%_75%,50%_100%,8%_75%,8%_25%)] bg-gradient-to-br from-[#0B6BFF] via-[#0A55F5] to-[#053FC7] shadow-[0_13px_28px_rgba(11,86,234,0.34)]" />
                <span className="absolute inset-[10px] [clip-path:polygon(50%_0%,91%_25%,91%_75%,50%_100%,9%_75%,9%_25%)] bg-[#F6FAFF]" />
                <span className="absolute inset-[19px] [clip-path:polygon(50%_0%,90%_25%,90%_75%,50%_100%,10%_75%,10%_25%)] bg-gradient-to-br from-[#0B6BFF] to-[#063BC2]" />
                <span className="relative text-[24px] font-black leading-none text-white">G</span>
            </span>
            <span className="pt-[1px] text-[43px] font-extrabold leading-none tracking-[-0.03em] text-white">GPOS</span>
        </div>
    );
}

function DarkIcon({ Icon, small = false }: { Icon: LucideIcon; small?: boolean }) {
    return (
        <span
            className={`grid shrink-0 place-items-center rounded-[10px] border border-white/[0.035] bg-[linear-gradient(145deg,rgba(18,38,70,0.92),rgba(9,24,49,0.95))] text-[#0B66FF] shadow-[0_10px_24px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.05)] ${
                small ? 'h-[52px] w-[52px]' : 'h-[50px] w-[50px]'
            }`}
        >
            <Icon className={small ? 'h-[25px] w-[25px]' : 'h-[24px] w-[24px]'} strokeWidth={2.05} aria-hidden />
        </span>
    );
}

function BrandFeature({ item }: { item: (typeof brandFeatures)[number] }) {
    const [title, description, Icon] = item;
    return (
        <article className="flex items-center gap-[19px]">
            <DarkIcon Icon={Icon} />
            <div>
                <h3 className="text-[17px] font-extrabold leading-[1.2] text-white">{title}</h3>
                <p className="mt-[8px] text-[14px] font-medium leading-[1.35] text-[#C8D2E1]">{description}</p>
            </div>
        </article>
    );
}

function ContactItem({ item }: { item: (typeof contactItems)[number] }) {
    const [title, description, Icon] = item;
    return (
        <article className="flex items-center gap-[17px]">
            <DarkIcon Icon={Icon} small />
            <div>
                <h3 className="text-[15px] font-semibold leading-[1.2] text-white">{title}</h3>
                <p className="mt-[8px] whitespace-nowrap text-[13px] font-medium leading-[1.2] text-[#C8D2E1]">{description}</p>
            </div>
        </article>
    );
}

const Footer: React.FC<FooterProps> = ({ hideTopCta: _hideTopCta = false }) => {
    void _hideTopCta;

    return (
        <footer className="w-full overflow-x-clip bg-[#F8FAFE] px-[17px] pb-[24px] pt-[34px] font-['Poppins',Inter,Arial,sans-serif] text-white">
            <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[18px] border border-white/[0.04] bg-[radial-gradient(circle_at_18%_8%,rgba(21,74,148,0.2),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(11,86,234,0.11),transparent_31%),linear-gradient(135deg,#061326_0%,#041023_47%,#031024_100%)] px-[48px] pb-[46px] pt-[52px] shadow-[0_24px_55px_rgba(2,8,23,0.22),inset_0_1px_0_rgba(255,255,255,0.045)]">
                <div className="grid grid-cols-1 items-start gap-[44px] lg:grid-cols-[400px_260px_340px_300px] lg:gap-0">
                    <section className="flex flex-col items-start justify-start pr-[42px]">
                        <BrandMark />
                        <p className="mt-[30px] max-w-[330px] text-[21px] font-medium leading-[1.5] text-[#C8D2E1]">
                            All-in-one POS and business management system to simplify operations, delight customers and grow your business.
                        </p>
                    </section>

                    <nav className="flex flex-col items-start justify-start border-white/10 lg:border-l lg:px-[44px] lg:pt-[15px]" aria-label="Footer quick links">
                        <h2 className="text-[22px] font-extrabold leading-none text-white">Quick Links</h2>
                        <ul className="mt-[42px] w-full space-y-[33px]">
                            {quickLinks.map(([label, to]) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="group flex items-center justify-between text-[16px] font-medium leading-none text-[#E5EAF2] no-underline transition hover:text-white"
                                    >
                                        <span>{label}</span>
                                        <ChevronRight className="h-[18px] w-[18px] text-[#A6B3C4] transition group-hover:translate-x-0.5 group-hover:text-white" strokeWidth={2.05} aria-hidden />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <section className="flex flex-col items-start justify-start border-white/10 lg:border-l lg:px-[45px] lg:pt-[15px]">
                        <h2 className="text-[22px] font-extrabold leading-none text-white">Contact Us</h2>
                        <div className="mt-[38px] space-y-[29px]">
                            {contactItems.map((item) => (
                                <ContactItem key={item[0]} item={item} />
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col items-start justify-start border-white/10 lg:border-l lg:pl-[45px] lg:pt-[15px]">
                        <h2 className="text-[22px] font-extrabold leading-none text-white">Get Started</h2>
                        <p className="mt-[33px] max-w-[290px] text-[17px] font-medium leading-[1.55] text-[#C8D2E1]">
                            See how GPOS can simplify your operations and grow your business.
                        </p>
                        <Link
                            to="/get_demo"
                            className="mt-[34px] inline-flex h-[73px] w-[280px] items-center justify-center gap-[14px] rounded-[8px] bg-gradient-to-r from-[#075BFF] to-[#004BE8] text-[18px] font-extrabold text-white no-underline shadow-[0_18px_35px_rgba(11,86,234,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_21px_40px_rgba(11,86,234,0.4)]"
                        >
                            <CalendarDays className="h-[25px] w-[25px]" strokeWidth={2.15} aria-hidden />
                            Book a Free Demo
                            <ChevronRight className="h-[22px] w-[22px]" strokeWidth={2.15} aria-hidden />
                        </Link>
                    </section>
                </div>

                <div className="mt-[36px] grid grid-cols-1 items-start justify-items-center gap-[24px] border-t border-white/[0.08] pt-[26px] md:grid-cols-3 md:gap-[40px]">
                    {brandFeatures.map((item) => (
                        <BrandFeature key={item[0]} item={item} />
                    ))}
                </div>

                <div className="mt-[32px] border-t border-white/[0.12] pt-[32px]">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
                        <p className="text-[15px] font-medium leading-none text-[#C8D2E1]">© 2024 GPOS System. All rights reserved.</p>

                        <nav className="flex flex-wrap items-center justify-center gap-[27px] text-[15px] font-medium leading-none text-[#C8D2E1]" aria-label="Legal links">
                            {legalLinks.map(([label, to], index) => (
                                <React.Fragment key={label}>
                                    {index > 0 && <span className="h-[22px] w-px bg-white/[0.18]" aria-hidden />}
                                    <Link to={to} className="text-[#C8D2E1] no-underline transition hover:text-white">
                                        {label}
                                    </Link>
                                </React.Fragment>
                            ))}
                        </nav>

                        <div className="flex items-center justify-start gap-[22px] md:justify-end">
                            {socialItems.map(([label, Icon]) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="grid h-[52px] w-[52px] place-items-center rounded-full border border-white/[0.035] bg-[linear-gradient(145deg,rgba(18,38,70,0.94),rgba(10,24,48,0.97))] text-white no-underline shadow-[0_12px_26px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.055)] transition hover:-translate-y-0.5 hover:text-[#9FC0FF]"
                                >
                                    <Icon className="h-[22px] w-[22px]" strokeWidth={2.05} aria-hidden />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
