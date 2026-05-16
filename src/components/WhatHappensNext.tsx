import React from 'react';
import {
    Phone,
    Monitor,
    Users,
    FileText,
    Settings,
    Zap,
    ShieldCheck,
    Tag,
    Lock,
    CheckCircle,
    Clock
} from 'lucide-react';

const WhatHappensNext: React.FC = () => {
    const steps = [
        {
            step: 1,
            title: 'We Contact You',
            description: 'Our team will reach out to understand your restaurant setup and requirements.',
            duration: 'Within 24 Hours',
            Icon: Phone,
        },
        {
            step: 2,
            title: 'Live System Walkthrough',
            description: 'See GPOS in action. We\'ll show you billing, reports, orders, kitchen & more — live.',
            duration: '30-45 Minutes',
            Icon: Monitor,
        },
        {
            step: 3,
            title: 'Setup & Pricing Discussion',
            description: 'We discuss the best setup for your business and share simple, transparent pricing.',
            duration: '15-20 Minutes',
            Icon: Users,
        },
        {
            step: 4,
            title: 'Custom Quote',
            description: 'Receive a tailored proposal with hardware and software options that fit your budget.',
            duration: 'Instant',
            Icon: FileText,
        },
        {
            step: 5,
            title: 'Expert Onboarding',
            description: 'Our team helps you set up your menu, staff, and hardware for a smooth transition.',
            duration: '1-3 Days',
            Icon: Settings,
        },
        {
            step: 6,
            title: 'Go Live & Support',
            description: 'Launch your new system with confidence. Our team is here 24/7 for anything you need.',
            duration: 'Always On',
            Icon: Zap,
        },
    ];

    return (
        <section className="bg-[#f8fafc] py-20 px-5">
            <div className="max-w-[1200px] mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2563eb] text-white">
                        <Zap size={12} className="fill-current" />
                    </span>
                    What Happens Next?
                </div>

                <h2 className="text-4xl md:text-[52px] font-extrabold text-[#0B1F3A] mb-4 tracking-tight leading-tight">
                    It&apos;s Simple. Fast. No Pressure.
                </h2>
                <p className="text-[17px] text-slate-500 max-w-2xl mx-auto mb-16 font-medium">
                    We make the demo process easy so you can see real value before making any decision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {steps.map((item, idx) => (
                        <div key={idx} className="relative group bg-white p-6 rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-[15px] shadow-lg ring-4 ring-white transition-transform group-hover:scale-110">
                                {item.step}
                            </div>

                            <div className="w-24 h-24 mx-auto mb-2 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb] transition-transform group-hover:scale-105">
                                <item.Icon size={42} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">{item.title}</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 min-h-[4.5rem]">
                                {item.description}
                            </p>

                            <div className="border-t border-slate-50 flex items-center justify-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                                <Clock size={14} strokeWidth={2.5} />
                                {item.duration}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Clarity Bar */}
                <div className="bg-[#f1f5f9]/50 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100">
                    <div className="flex items-center gap-4 text-left">
                        <div className="w-14 h-14 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb]">
                            <ShieldCheck size={28} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-[#0B1F3A]">No Pressure. Just Clarity.</h4>
                            <p className="text-[15px] text-slate-500">Our goal is to help you make the right decision for your restaurant.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb]">
                                <Tag size={18} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pricing</div>
                                <div className="text-[15px] font-bold text-[#0B1F3A]">Transparent</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb]">
                                <Lock size={18} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fees</div>
                                <div className="text-[15px] font-bold text-[#0B1F3A]">No Hidden</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb]">
                                <CheckCircle size={18} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Decision</div>
                                <div className="text-[15px] font-bold text-[#0B1F3A]">100% Yours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatHappensNext;
