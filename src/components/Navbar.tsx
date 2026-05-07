import { AnimatePresence, motion, Variants } from 'framer-motion';
import { CalendarDays, Menu, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Features', to: '/restaurant_pos' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Demo', to: '/get_demo' },
];

const GposWordmark = () => (
    <span className="inline-flex items-center gap-3" aria-label="GPOS">
        <span className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center">
            <span className="absolute inset-0 rounded-[14px] bg-[#0b4eea] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
            <span className="absolute inset-[7px] rounded-[9px] bg-white [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
            <span className="absolute inset-[13px] rounded-[7px] bg-[#0b4eea] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
            <span className="absolute right-[7px] top-[20px] h-[10px] w-[25px] rounded-l-full bg-white" />
        </span>
        <span className="font-['Poppins',Arial,sans-serif] text-[38px] font-extrabold leading-none tracking-[0] text-[#061236]">
            GPOS
        </span>
    </span>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const menuVariants: Variants = {
        closed: { opacity: 0, x: '100%', transition: { type: 'spring', stiffness: 300, damping: 32 } },
        open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 32 } },
    };

    const desktopClass = ({ isActive }: { isActive: boolean }) =>
        [
            "relative inline-flex h-[82px] items-center font-['Poppins',Arial,sans-serif] text-[15.5px] font-semibold leading-none text-[#07112e] no-underline transition-colors hover:text-[#084ee4]",
            isActive
                ? "text-[#084ee4] after:absolute after:bottom-[20px] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#084ee4] after:content-['']"
                : '',
        ].join(' ');

    const mobileClass = ({ isActive }: { isActive: boolean }) =>
        [
            "block border-b border-slate-100 py-4 font-['Poppins',Arial,sans-serif] text-[18px] font-semibold text-[#07112e] no-underline",
            isActive ? 'text-[#084ee4]' : '',
        ].join(' ');

    return (
        <header
            className={`sticky left-0 right-0 top-0 z-50 border-b border-[#e8ebf2] bg-white font-['Poppins',Arial,sans-serif] transition-shadow ${
                scrolled ? 'shadow-[0_8px_28px_rgba(15,23,42,0.06)]' : ''
            }`}
        >
            <div className="mx-auto flex h-[104px] w-full max-w-[1536px] items-center justify-between px-[clamp(20px,4.1vw,64px)]">
                <Link to="/" className="inline-flex shrink-0 items-center no-underline">
                    <GposWordmark />
                </Link>

                <nav className="hidden items-center gap-[50px] lg:flex" aria-label="Primary">
                    {navLinks.map((link) => (
                        <NavLink key={link.name} to={link.to} end={link.to === '/'} className={desktopClass}>
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-[22px] lg:flex">
                    <Link
                        to="https://dashboard.gposapp.com/"
                        className="inline-flex h-[54px] min-w-[120px] items-center justify-center gap-3 rounded-[9px] border border-[#e3e6ee] bg-white px-6 font-['Poppins',Arial,sans-serif] text-[16px] font-medium text-[#07112e] no-underline shadow-[0_8px_18px_rgba(15,23,42,0.03)] hover:border-[#cfd6e6]"
                    >
                        <User className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden />
                        Login
                    </Link>
                    <Link
                        to="/get_demo"
                        className="inline-flex h-[54px] min-w-[172px] items-center justify-center gap-3 rounded-[9px] bg-[#064ee4] px-6 font-['Poppins',Arial,sans-serif] text-[16px] font-semibold text-white no-underline shadow-[0_10px_24px_rgba(6,78,228,0.26)] hover:bg-[#033fc0]"
                    >
                        <CalendarDays className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden />
                        Contact Sales
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#061236] lg:hidden"
                    aria-label="Open menu"
                    aria-expanded={isOpen}
                >
                    <Menu className="h-8 w-8" aria-hidden />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-[60] bg-white px-6 pb-8 pt-5 lg:hidden"
                    >
                        <div className="flex items-center justify-between">
                            <Link to="/" onClick={() => setIsOpen(false)} className="no-underline">
                                <GposWordmark />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#061236]"
                                aria-label="Close menu"
                            >
                                <X className="h-8 w-8" aria-hidden />
                            </button>
                        </div>
                        <nav className="mt-8" aria-label="Mobile primary">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={mobileClass}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                        <div className="mt-8 grid gap-3">
                            <Link
                                to="https://dashboard.gposapp.com/"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-[52px] items-center justify-center gap-3 rounded-[9px] border border-[#e3e6ee] bg-white font-semibold text-[#07112e] no-underline"
                            >
                                <User className="h-5 w-5" aria-hidden />
                                Login
                            </Link>
                            <Link
                                to="/get_demo"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-[52px] items-center justify-center gap-3 rounded-[9px] bg-[#064ee4] font-semibold text-white no-underline"
                            >
                                <CalendarDays className="h-5 w-5" aria-hidden />
                                Contact Sales
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
