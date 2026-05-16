import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Features', to: '/restaurant_pos' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Demo', to: '/get_demo' },
    { name: 'Resources', to: '#', dropdown: true },
    { name: 'About Us', to: '/about' },
];

const GposWordmark = () => (
    <span className="inline-flex items-center gap-[13px]" aria-label="GPOS">
        <span className="relative flex h-[49px] w-[49px] shrink-0 items-center justify-center">
            <span className="absolute inset-0 rounded-[14px] bg-[#0b55f0] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
            <span className="absolute inset-[7px] rounded-[9px] bg-white [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
            <span className="absolute inset-[13px] rounded-[7px] bg-[#0b55f0] [clip-path:polygon(50%_0,93%_25%,93%_74%,50%_100%,7%_74%,7%_25%)]" />
            <span className="absolute right-[7px] top-[20px] h-[10px] w-[25px] rounded-l-full bg-white" />
        </span>
        <span className="font-['Poppins',Arial,sans-serif] text-[35px] font-extrabold leading-none tracking-[-0.02em] text-[#07122f]">
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
            "inline-flex h-[92px] items-center gap-[10px] font-['Poppins',Arial,sans-serif] text-[17px] font-semibold leading-none text-[#07122f] no-underline transition-colors hover:text-[#0757e8]",
            isActive ? 'text-[#0757e8]' : '',
        ].join(' ');

    const mobileClass = ({ isActive }: { isActive: boolean }) =>
        [
            "flex items-center justify-between rounded-[10px] px-3 py-3 font-['Poppins',Arial,sans-serif] text-[16px] font-semibold text-[#07122f] no-underline",
            isActive ? 'bg-[#eef5ff] text-[#0757e8]' : '',
        ].join(' ');

    return (
        <header
            className={`sticky left-0 right-0 top-0 z-50 border-b border-[#e8ebf2] bg-white font-['Poppins',Arial,sans-serif] transition-shadow ${
                scrolled ? 'shadow-[0_8px_28px_rgba(15,23,42,0.06)]' : ''
            }`}
        >
            <div className="mx-auto flex h-[92px] w-full max-w-[1536px] items-center justify-between px-[42px] max-md:h-[78px] max-md:px-5">
                <Link to="/" className="inline-flex shrink-0 items-center no-underline">
                    <GposWordmark />
                </Link>

                <nav className="hidden items-center gap-[38px] xl:gap-[48px] lg:flex" aria-label="Primary">
                    {navLinks.map((link) => (
                        <NavLink key={link.name} to={link.to} end={link.to === '/'} className={desktopClass}>
                            {link.name}
                            {link.dropdown && <ChevronDown className="h-[19px] w-[19px]" strokeWidth={2.4} aria-hidden />}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-[25px] lg:flex">
                    <Link
                        to="https://dashboard.gposapp.com/"
                        className="inline-flex h-[47px] min-w-[99px] items-center justify-center rounded-[8px] border border-[#0b3d91] bg-white px-6 font-['Poppins',Arial,sans-serif] text-[16px] font-semibold text-[#07347f] no-underline shadow-[0_8px_18px_rgba(15,23,42,0.025)]"
                    >
                        Login
                    </Link>
                    <Link
                        to="/get_demo"
                        className="inline-flex h-[47px] min-w-[155px] items-center justify-center rounded-[8px] bg-gradient-to-br from-[#0866ff] via-[#0757f2] to-[#004ad9] px-7 font-['Poppins',Arial,sans-serif] text-[16px] font-semibold text-white no-underline shadow-[0_11px_23px_rgba(4,82,232,0.26),inset_0_1px_0_rgba(255,255,255,0.22)]"
                    >
                        Book a Demo
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#dfe8f7] bg-white text-[#07122f] shadow-[0_8px_18px_rgba(15,23,42,0.04)] lg:hidden"
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
                                className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#dfe8f7] bg-white text-[#07122f]"
                                aria-label="Close menu"
                            >
                                <X className="h-8 w-8" aria-hidden />
                            </button>
                        </div>
                        <nav className="mt-8 grid gap-1" aria-label="Mobile primary">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={mobileClass}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="h-5 w-5" aria-hidden />}
                                </NavLink>
                            ))}
                        </nav>
                        <div className="mt-8 grid gap-3">
                            <Link
                                to="https://dashboard.gposapp.com/"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-[#0b3d91] bg-white text-[16px] font-semibold text-[#07347f] no-underline"
                            >
                                Login
                            </Link>
                            <Link
                                to="/get_demo"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-[48px] items-center justify-center rounded-[8px] bg-gradient-to-br from-[#0866ff] via-[#0757f2] to-[#004ad9] text-[16px] font-semibold text-white no-underline shadow-[0_11px_23px_rgba(4,82,232,0.22)]"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
