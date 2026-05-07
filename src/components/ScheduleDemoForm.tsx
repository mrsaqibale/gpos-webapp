import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Mail, Phone, Send, User } from 'lucide-react';
import { countryCodes, getPhoneMaxLength } from '../constants/countries';

export const scheduleDemoLabelClass =
    "mb-2 block font-['Poppins',Arial,sans-serif] text-[0.98rem] sm:text-[1rem] lg:text-[1rem] xl:text-[1rem] font-bold text-black";

export const scheduleDemoInputClass =
    'w-full rounded-[6px] border border-[#BFCADD] bg-white py-2.5 pl-11 pr-3 text-[1rem] text-[#1F335A] outline-none focus:border-[#1D4E9F]';

const iconClass =
    'pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#35568F]';

export const scheduleDemoSubmitButtonClass =
    'inline-flex items-center justify-center gap-2 rounded-[12px] border border-[#032c7e] bg-[#032c7e] px-6 py-2.5 text-base font-bold text-white shadow-[0_8px_18px_rgba(3,44,126,0.35)] transition-colors hover:border-[#021b4b] hover:bg-[#021b4b] disabled:cursor-not-allowed disabled:opacity-60';

export type ScheduleDemoFormMode = 'api' | 'navigate' | 'submit';

export interface ScheduleDemoFormProps {
    mode: ScheduleDemoFormMode;
    /** Avoid duplicate ids when multiple instances exist on one page */
    idPrefix?: string;
    className?: string;
    /** Called before navigating to /get_demo (e.g. close promo modal) */
    onNavigate?: () => void;
    /** Renders above the submit button (e.g. terms line on promo modal) */
    beforeSubmit?: React.ReactNode;
    /**
     * `contact` = Get Demo / contact hero layout only (markup + styling).
     * Does not change submission, validation, or API payload.
     */
    appearance?: 'default' | 'contact';
    /** Overrides default submit button label (UI only). */
    submitLabel?: string;
}

type FormState = {
    firstName: string;
    lastName: string;
    company: string;
    countryCode: string;
    phone: string;
    email: string;
};

const emptyState: FormState = {
    firstName: '',
    lastName: '',
    company: '',
    countryCode: '+353',
    phone: '',
    email: '',
};



export const scheduleDemoControlNoIconClass =
    'w-full rounded-[6px] border border-[#BFCADD] bg-white py-3.5 px-4 text-[1rem] text-[#1F335A] outline-none focus:border-[#1D4E9F]';

const CountrySelect = ({
    value,
    onChange,
    integrated = false,
}: {
    value: string;
    onChange: (val: string) => void;
    integrated?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Keep the country dropdown open while interacting with the combined phone field.
            if (target.closest('[data-phone-combo="true"]')) {
                return;
            }
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedCountry = countryCodes.find((c) => c.code === value) || countryCodes.find(c => c.iso === 'ie') || countryCodes[0];

    const getCountryName = (iso: string) => {
        try {
            return new Intl.DisplayNames(['en'], { type: 'region' }).of(iso.toUpperCase()) || iso.toUpperCase();
        } catch {
            return iso.toUpperCase();
        }
    };

    const filteredCountries = countryCodes.filter((c) =>
        c.code.includes(searchQuery) ||
        getCountryName(c.iso).toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.iso.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div ref={ref} className={`relative block shrink-0 h-full ${integrated ? 'w-[108px]' : 'w-[100px]'}`}>
            <button
                type="button"
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (!isOpen) setSearchQuery('');
                }}
                className={`flex h-full w-full items-center justify-between bg-no-repeat px-2 text-[1rem] text-[#1F335A] outline-none ${integrated
                    ? 'rounded-none border-0 bg-transparent py-2.5'
                    : 'border-2 border-[#B8C8E0] bg-white py-2 focus:border-[#1D4E9F]'
                    }`}
                style={{
                    backgroundPosition: 'right 0.35rem center',
                    backgroundSize: '1em 1em',
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    paddingRight: '1.5rem',
                }}
            >
                <img src={`https://flagcdn.com/w20/${selectedCountry.iso}.png`} className="w-5 object-contain" alt="" />
                <span className="text-sm ml-1 font-medium truncate">{selectedCountry.code}</span>
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-[240px] max-h-64 flex flex-col bg-white border-2 border-[#B8C8E0] shadow-[0_8px_18px_rgba(30,99,233,0.15)] z-[100] overflow-hidden">
                    <div className="p-2 border-b border-gray-100 bg-white">
                        <input
                            type="text"
                            placeholder="Search country..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full text-sm outline-none px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#1D4E9F] focus:bg-white transition-colors"
                            autoFocus
                        />
                    </div>
                    <div className="overflow-y-auto hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {filteredCountries.map((country, index) => (
                            <button
                                key={`${country.iso}-${index}`}
                                type="button"
                                onClick={() => {
                                    onChange(country.code);
                                    setIsOpen(false);
                                }}
                                className="flex items-center w-full px-3 py-2.5 hover:bg-[#F0F5FF] transition-colors text-left"
                            >
                                <img src={`https://flagcdn.com/w20/${country.iso}.png`} className="w-5 mr-3 shrink-0 object-contain shadow-sm" alt="" />
                                <span className="text-sm font-medium truncate text-[#1F335A] flex-1">{getCountryName(country.iso)}</span>
                                <span className="text-xs font-bold text-gray-500 ml-2 shrink-0">{country.code}</span>
                            </button>
                        ))}
                        {filteredCountries.length === 0 && (
                            <div className="px-3 py-4 text-center text-sm text-gray-500">No countries found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const contactLabelClass =
    'mb-1.5 block text-[13px] font-semibold text-[#0B1F3A] sm:text-sm';

const contactInputClass =
    'box-border w-full h-[46px] rounded-[10px] border border-[#CBD5E1] bg-white py-0 pl-11 pr-3.5 text-sm text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#003B8E] focus:ring-2 focus:ring-[#003B8E]/20';

const contactPhoneComboClass =
    'flex min-h-[46px] min-w-0 w-full rounded-[10px] border border-[#CBD5E1] bg-white transition focus-within:border-[#003B8E] focus-within:ring-2 focus-within:ring-[#003B8E]/20';

const contactSubmitButtonClass =
    'inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-[10px] border border-[#003B8E] bg-[#003B8E] text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(0,59,142,0.25)] transition-colors hover:border-[#002d6b] hover:bg-[#002d6b] disabled:cursor-not-allowed disabled:opacity-60';

const ScheduleDemoForm: React.FC<ScheduleDemoFormProps> = ({
    mode,
    idPrefix = 'schedule-demo',
    className = '',
    onNavigate,
    beforeSubmit,
    appearance = 'default',
    submitLabel,
}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormState>(emptyState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

    const pid = (field: keyof FormState) => `${idPrefix}-${field}`;
    const isContact = appearance === 'contact';
    const labelClass = isContact ? contactLabelClass : scheduleDemoLabelClass;
    const inputClass = isContact ? contactInputClass : scheduleDemoInputClass;
    const resolvedSubmitLabel = submitLabel ?? 'Send Details';
    const phoneFieldLabel = isContact ? 'Phone Number' : 'Phone';
    const emailFieldLabel = isContact ? 'Email Address' : 'Email';

    const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const digitsOnly = val.replace(/\D/g, '');
        const maxLength = getPhoneMaxLength(formData.countryCode);

        // Prevent typing more digits than allowed
        if (digitsOnly.length > maxLength) {
            return;
        }

        setFormData((prev) => ({ ...prev, phone: val }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // closePopup handle

        if (mode === 'navigate') {
            onNavigate?.();
            navigate('/get_demo');
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage({ type: '', text: '' });

        try {
            const response = await fetch('/gpos-auth/website/gposapp/getformData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName.trim(),
                    lastName: formData.lastName.trim(),
                    company: formData.company.trim(),
                    phone: `${formData.countryCode} ${formData.phone}`.trim(),
                    email: formData.email,
                    address: '',
                }),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const result = await response.json();
            if (!result?.success) {
                throw new Error('Submission failed');
            }

            setSubmitMessage({ type: 'success', text: 'Thanks! Your demo request has been submitted.' });
            setFormData(emptyState);
            if (mode === 'submit') {
                onNavigate?.();
            }

        } catch {
            setSubmitMessage({ type: 'error', text: 'Submission failed. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const phoneComboWrapClass = isContact ? contactPhoneComboClass : 'flex min-w-0 w-full rounded-[6px] border border-[#BFCADD] bg-white focus-within:border-[#1D4E9F]';
    const phoneInputClass = isContact
        ? 'box-border w-full min-w-0 border-0 bg-transparent py-2 pl-9 pr-2 text-sm text-[#0f172a] outline-none placeholder:text-slate-400'
        : 'box-border w-full min-w-0 border-0 bg-transparent py-2 pl-9 pr-2 text-[1rem] text-[#1F335A] outline-none';

    const nameRowGap = isContact ? 'gap-4' : 'gap-2';
    const nameRowCols = isContact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]';

    const formSpacing = isContact ? 'mt-0 space-y-5' : 'mt-5 space-y-4';

    return (
        <form className={`${formSpacing} ${className}`.trim()} onSubmit={handleSubmit}>
            <div className={`grid ${nameRowCols} ${nameRowGap}`}>
                <label className="block" htmlFor={pid('firstName')}>
                    <span className={labelClass}>First Name</span>
                    <span className="relative block">
                        <User className={iconClass} aria-hidden />
                        <input
                            id={pid('firstName')}
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            required
                            value={formData.firstName}
                            onChange={handleChange('firstName')}
                            className={inputClass}
                            autoComplete="given-name"
                        />
                    </span>
                </label>
                <label className="block" htmlFor={pid('lastName')}>
                    <span className={labelClass}>Last Name</span>
                    <span className="relative block">
                        <User className={iconClass} aria-hidden />
                        <input
                            id={pid('lastName')}
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange('lastName')}
                            className={inputClass}
                            autoComplete="family-name"
                        />
                    </span>
                </label>
            </div>
            {/* Single column so phone (country + digits) stays full width in narrow sidebars (e.g. pricing 30% column). */}
            <div className="grid grid-cols-1 gap-2">
                <label className="block min-w-0" htmlFor={pid('company')}>
                    <span className={scheduleDemoLabelClass}>Business/Compony</span>
                    <span className="relative block min-w-0">
                        <Briefcase className={iconClass} aria-hidden />
                        <input
                            id={pid('company')}
                            name="company"
                            type="text"
                            placeholder="Business/Compony"
                            value={formData.company}
                            onChange={handleChange('company')}
                            className={scheduleDemoInputClass}
                            autoComplete="organization"
                        />
                    </span>
                </label>
                <label className="block min-w-0" htmlFor={pid('phone')}>
                    <span className={scheduleDemoLabelClass}>Phone</span>
                    <div
                        className="flex min-w-0 w-full rounded-[6px] border border-[#BFCADD] bg-white focus-within:border-[#1D4E9F]"
                        data-phone-combo="true"
                    >
                        <CountrySelect
                            value={formData.countryCode}
                            onChange={(val) => setFormData((prev) => ({ ...prev, countryCode: val }))}
                            integrated
                        />
                        <span className="w-px shrink-0 bg-[#D4E0F2]" aria-hidden />
                        <span className="relative block min-w-0 flex-1">
                            <Phone className="pointer-events-none absolute left-2.5 top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#35568F]" aria-hidden />
                            <input
                                id={pid('phone')}
                                name="phone"
                                type="tel"
                                placeholder="(555) 000-0123"
                                required
                                pattern="[\d\s()+-]{7,}"
                                title="Phone number must have at least 7 digits."
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                className="box-border w-full min-w-0 border-0 bg-transparent py-2 pl-9 pr-2 text-[1rem] text-[#1F335A] outline-none"
                                autoComplete="tel"
                            />
                        </span>
                    </div>
                </label>
            </div>
            <label className="block" htmlFor={pid('email')}>
                <span className={scheduleDemoLabelClass}>Email</span>
                <span className="relative block">
                    <Mail className={iconClass} aria-hidden />
                    <input
                        id={pid('email')}
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange('email')}
                        className={scheduleDemoInputClass}
                        autoComplete="email"
                    />
                </span>
            </label>

            {mode === 'api' && submitMessage.text ? (
                <div
                    className={`rounded-xl p-4 text-sm font-bold ${submitMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}
                >
                    {submitMessage.text}
                </div>
            ) : null}

            {beforeSubmit}

            <div className={isContact ? 'pt-1' : 'flex justify-center pt-1'}>
                <button
                    type="submit"
                    disabled={mode === 'api' && isSubmitting}
                    className={isContact ? contactSubmitButtonClass : scheduleDemoSubmitButtonClass}
                >
                    {mode === 'api' && isSubmitting ? (
                        'Submitting...'
                    ) : (
                        <>
                            <Send className="h-[17px] w-[17px]" aria-hidden />
                            <span>{resolvedSubmitLabel}</span>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

export default ScheduleDemoForm;
