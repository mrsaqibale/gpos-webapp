import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    Users,
    Zap,
    BarChart3,
    ShieldCheck,
    Clock,
    MessageSquare,
    ArrowRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import {
    WHATSAPP_DISPLAY,
    WHATSAPP_HREF,
    PHONE_DISPLAY,
    PHONE_HREF,
    EMAIL_DISPLAY,
    EMAIL_HREF,
    OFFICE_ADDRESS_LINE_1,
    OFFICE_ADDRESS_LINE_2,
    OFFICE_ADDRESS_MAPS_HREF,
} from '../constants/contact';

const salesBenefits = [
    {
        icon: <Zap size={20} />,
        title: 'Custom Pricing',
        desc: 'Get a tailored quote based on your restaurant size and needs.',
    },
    {
        icon: <Users size={20} />,
        title: 'Dedicated Onboarding',
        desc: 'A personal onboarding specialist to set up your system end-to-end.',
    },
    {
        icon: <BarChart3 size={20} />,
        title: 'Live Product Demo',
        desc: 'See GPOS in action with a walkthrough personalised to your business.',
    },
    {
        icon: <ShieldCheck size={20} />,
        title: 'Enterprise Support',
        desc: 'Priority SLA, dedicated account manager, and 24/7 assistance.',
    },
];

const trustPoints = [
    'No commitment required',
    'Response within 1 business day',
    'Free onboarding included',
    'Cancel anytime',
];

type FormData = {
    firstName: string;
    lastName: string;
    businessName: string;
    email: string;
    phone: string;
    outlets: string;
    message: string;
};

const emptyForm: FormData = {
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    phone: '',
    outlets: '',
    message: '',
};

const ContactSales = () => {
    const [formData, setFormData] = useState<FormData>(emptyForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('/api/contact-sales.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            let data: { success?: boolean; message?: string } = {};
            try {
                data = await response.json();
            } catch {
                data = { success: response.ok };
            }

            if (data.success || response.ok) {
                setSubmitted(true);
                setFormData(emptyForm);
            } else {
                setSubmitError(data.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setSubmitError('Connection error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const labelClass =
        "block text-sm font-bold text-[#1F335A] mb-1.5";
    const inputClass =
        'w-full rounded-lg border border-[#BFCADD] bg-white px-4 py-2.5 text-[0.97rem] text-[#1F335A] outline-none transition focus:border-[#1D4E9F] focus:ring-2 focus:ring-[#1D4E9F]/10 placeholder:text-gray-400';

    return (
        <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white">
            <Navbar />

            <main className="pt-20">
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-[#032c7e] via-[#1D4E9F] to-[#0f3d8c] py-20 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none select-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#55A630]/10 blur-3xl" />
                    </div>
                    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white mb-6">
                            <MessageSquare size={15} />
                            Talk to our Sales Team
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                            Let's Grow Your{' '}
                            <span className="text-[#55A630]">Restaurant Business</span>
                        </h1>
                        <p className="text-lg text-white/75 max-w-2xl mx-auto mb-8">
                            Speak with a GPOS expert and discover how our POS system can be
                            tailored to your restaurant's specific needs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {trustPoints.map(point => (
                                <span
                                    key={point}
                                    className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 rounded-full px-3 py-1"
                                >
                                    <CheckCircle size={13} className="text-[#55A630]" />
                                    {point}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits strip */}
                <section className="bg-gray-50 border-b border-gray-100 py-10">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {salesBenefits.map(b => (
                                <div key={b.title} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#032c7e]/10 text-[#032c7e] flex items-center justify-center mt-0.5">
                                        {b.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#1F335A] text-sm">{b.title}</p>
                                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main content: form + contact info */}
                <section className="py-20 bg-white">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                            {/* Contact info */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Get in Touch</h2>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Our sales team is available Monday – Friday, 9am–6pm IST. Fill
                                        in the form and we'll get back to you within one business day.
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    {/* Phone */}
                                    <a
                                        href={PHONE_HREF}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-[#032c7e]/10 text-[#032c7e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#032c7e] group-hover:text-white transition-colors">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Phone</p>
                                            <p className="text-[#1F335A] font-semibold group-hover:text-[#55A630] transition-colors">
                                                {PHONE_DISPLAY}
                                            </p>
                                        </div>
                                    </a>

                                    {/* WhatsApp */}
                                    <a
                                        href={WHATSAPP_HREF}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1da851] transition-colors">
                                            <WhatsAppIcon variant="inverse" size={22} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">WhatsApp</p>
                                            <p className="text-[#1F335A] font-semibold group-hover:text-[#55A630] transition-colors">
                                                {WHATSAPP_DISPLAY}
                                            </p>
                                        </div>
                                    </a>

                                    {/* Email */}
                                    <a
                                        href={EMAIL_HREF}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email</p>
                                            <p className="text-[#1F335A] font-semibold group-hover:text-[#55A630] transition-colors">
                                                {EMAIL_DISPLAY}
                                            </p>
                                        </div>
                                    </a>

                                    {/* Address */}
                                    <a
                                        href={OFFICE_ADDRESS_MAPS_HREF}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-[#032c7e]/10 text-[#032c7e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#032c7e] group-hover:text-white transition-colors">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Office</p>
                                            <p className="text-[#1F335A] font-semibold group-hover:text-[#55A630] transition-colors leading-snug">
                                                {OFFICE_ADDRESS_LINE_1}<br />{OFFICE_ADDRESS_LINE_2}
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                {/* Response time badge */}
                                <div className="flex items-center gap-3 rounded-xl bg-[#f0f7ff] border border-[#1D4E9F]/15 p-4">
                                    <Clock size={20} className="text-[#1D4E9F] flex-shrink-0" />
                                    <p className="text-sm text-[#1F335A]">
                                        <span className="font-bold">Average response time:</span>{' '}
                                        under 4 business hours.
                                    </p>
                                </div>

                                {/* CTA to demo */}
                                <div className="rounded-xl border border-[#55A630]/30 bg-[#55A630]/5 p-5">
                                    <p className="text-sm font-bold text-[#0f172a] mb-1">
                                        Prefer a live demo first?
                                    </p>
                                    <p className="text-xs text-gray-500 mb-3">
                                        Book a free 30-minute demo and see GPOS live before you commit.
                                    </p>
                                    <Link
                                        to="/get_demo"
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#55A630] hover:text-[#3d7a23] transition-colors"
                                    >
                                        Book a Free Demo <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>

                            {/* Sales Form */}
                            <div className="lg:col-span-3">
                                <div className="rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-100/80 p-8">
                                    {submitted ? (
                                        <div className="flex flex-col items-center text-center py-10">
                                            <div className="w-16 h-16 rounded-full bg-[#55A630]/10 flex items-center justify-center mb-5">
                                                <CheckCircle size={36} className="text-[#55A630]" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                                                Message Received!
                                            </h3>
                                            <p className="text-gray-500 max-w-sm">
                                                Thanks for reaching out. A member of our sales team will
                                                contact you within one business day.
                                            </p>
                                            <button
                                                onClick={() => setSubmitted(false)}
                                                className="mt-7 text-sm font-semibold text-[#1D4E9F] hover:underline"
                                            >
                                                Send another message
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <h2 className="text-xl font-bold text-[#0f172a] mb-6">
                                                Tell Us About Your Business
                                            </h2>

                                            {submitError && (
                                                <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                                                    {submitError}
                                                </div>
                                            )}

                                            <form onSubmit={handleSubmit} className="space-y-5">
                                                {/* Name row */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="firstName" className={labelClass}>
                                                            First Name <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            id="firstName"
                                                            type="text"
                                                            required
                                                            placeholder="John"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            className={inputClass}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="lastName" className={labelClass}>
                                                            Last Name <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            id="lastName"
                                                            type="text"
                                                            required
                                                            placeholder="Smith"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            className={inputClass}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Business name */}
                                                <div>
                                                    <label htmlFor="businessName" className={labelClass}>
                                                        Business / Restaurant Name <span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        id="businessName"
                                                        type="text"
                                                        required
                                                        placeholder="e.g. The Spice Garden"
                                                        value={formData.businessName}
                                                        onChange={handleChange}
                                                        className={inputClass}
                                                    />
                                                </div>

                                                {/* Email + Phone */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="email" className={labelClass}>
                                                            Email Address <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            required
                                                            placeholder="john@example.com"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className={inputClass}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="phone" className={labelClass}>
                                                            Phone Number <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            id="phone"
                                                            type="tel"
                                                            required
                                                            placeholder="+353 87 000 0000"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className={inputClass}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Number of outlets */}
                                                <div>
                                                    <label htmlFor="outlets" className={labelClass}>
                                                        Number of Outlets
                                                    </label>
                                                    <select
                                                        id="outlets"
                                                        value={formData.outlets}
                                                        onChange={handleChange}
                                                        className={inputClass}
                                                    >
                                                        <option value="">Select an option</option>
                                                        <option value="1">1 outlet</option>
                                                        <option value="2-5">2 – 5 outlets</option>
                                                        <option value="6-10">6 – 10 outlets</option>
                                                        <option value="11+">11+ outlets</option>
                                                    </select>
                                                </div>

                                                {/* Message */}
                                                <div>
                                                    <label htmlFor="message" className={labelClass}>
                                                        How Can We Help?
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        rows={4}
                                                        placeholder="Tell us about your restaurant and what you're looking for..."
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className={`${inputClass} resize-none`}
                                                    />
                                                </div>

                                                {/* Submit */}
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#032c7e] bg-[#032c7e] px-6 py-3 text-base font-bold text-white shadow-[0_8px_18px_rgba(3,44,126,0.30)] transition-all hover:bg-[#021b4b] hover:border-[#021b4b] disabled:cursor-not-allowed disabled:opacity-60"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                            </svg>
                                                            Sending…
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send size={16} />
                                                            Contact Sales Team
                                                        </>
                                                    )}
                                                </button>

                                                <p className="text-center text-xs text-gray-400">
                                                    By submitting, you agree to our{' '}
                                                    <Link to="/privacy" className="underline hover:text-[#1D4E9F]">
                                                        Privacy Policy
                                                    </Link>
                                                    . We'll never share your data.
                                                </p>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactSales;
