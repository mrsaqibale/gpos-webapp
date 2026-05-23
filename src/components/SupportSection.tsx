import React from 'react';
import { Link } from 'react-router-dom';
import { 
    ShieldCheck, 
    Users, 
    Clock, 
    MapPin, 
    Star, 
    Award, 
    Lock, 
    BarChart3 
} from 'lucide-react';

const SupportSection: React.FC = () => {
    return (
        <section className="support-section py-16 lg:py-24">
            <div className="mx-auto w-full max-w-[1200px]">
                <div className="support-container rounded-[32px] bg-white p-8 lg:p-12">
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="support-left">
                            <div className="support-badge inline-flex items-center gap-2 rounded-full bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#003B8E]">
                                <ShieldCheck className="h-4 w-4" />
                                We've Got Your Back
                            </div>
                            <h2 className="mt-6 font-['Open_Sans',system-ui,sans-serif] text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-tight text-[#0B1F3A]">
                                We're Here to Support Your Restaurant, <span className="text-[#0052FF]">Always.</span>
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                                From setup to everyday support — our team is with you at every step. Your success is our priority.
                            </p>

                            <div className="mt-10 space-y-9">
                                <div className="support-feature flex items-start gap-5">
                                    <div className="feature-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                        <Users className="h-7 w-7" fill="currentColor" stroke="none" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-[1.125rem] font-bold text-[#0B1F3A]">Real People, Real Support</h4>
                                        <p className="mt-1.5 text-[15px] leading-relaxed text-[#5F6368]">Talk to our friendly experts who understand the restaurant business.</p>
                                    </div>
                                </div>
                                <div className="support-feature flex items-start gap-5">
                                    <div className="feature-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                        <Clock className="h-7 w-7" strokeWidth={2.5} />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-[1.125rem] font-bold text-[#0B1F3A]">Fast Response</h4>
                                        <p className="mt-1.5 text-[15px] leading-relaxed text-[#5F6368]">We typically respond within 1 hour during business hours.</p>
                                    </div>
                                </div>
                                <div className="support-feature flex items-start gap-5">
                                    <div className="feature-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                        <MapPin className="h-7 w-7" fill="currentColor" stroke="none" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-[1.125rem] font-bold text-[#0B1F3A]">Ireland & UK Support</h4>
                                        <p className="mt-1.5 text-[15px] leading-relaxed text-[#5F6368]">Local support teams ready to help restaurants across Ireland & the UK.</p>
                                    </div>
                                </div>
                                <div className="support-feature flex items-start gap-5">
                                    <div className="feature-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0052FF]">
                                        <ShieldCheck className="h-7 w-7" fill="currentColor" stroke="none" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-[1.125rem] font-bold text-[#0B1F3A]">Onboarding & Training</h4>
                                        <p className="mt-1.5 text-[15px] leading-relaxed text-[#5F6368]">We help you get started the right way with full onboarding and training.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content (Image) */}
                        <div className="support-right relative">
                            <div className="support-image-container overflow-hidden rounded-[24px] shadow-2xl">
                                <img
                                    src="/src/assets/home-premium-pos-setup-transparent.png"
                                    alt="GPOS Support"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Features Bar */}
                    <div className="mt-20 grid grid-cols-1 gap-y-8 border-t border-[#e2e8f0] pt-12 md:grid-cols-4 md:gap-y-0">
                        <div className="bottom-feature flex items-center gap-5 md:pr-4">
                            <div className="feature-icon flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#0052FF]">
                                <Star className="h-6 w-6 fill-[#0052FF] stroke-none" />
                            </div>
                            <div>
                                <h5 className="text-base font-bold text-[#0B1F3A]">Trusted by 1,000+</h5>
                                <p className="mt-0.5 text-sm leading-tight text-[#64748B]">Restaurant owners across Ireland & UK.</p>
                            </div>
                        </div>
                        <div className="bottom-feature flex items-center gap-5 border-[#e2e8f0] md:border-l md:px-6">
                            <div className="feature-icon flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#0052FF]">
                                <Award className="h-8 w-8" fill="currentColor" stroke="none" />
                            </div>
                            <div>
                                <h5 className="text-base font-bold text-[#0B1F3A]">No Hidden Fees</h5>
                                <p className="mt-0.5 text-sm leading-tight text-[#64748B]">Transparent pricing. No surprises.</p>
                            </div>
                        </div>
                        <div className="bottom-feature flex items-center gap-5 border-[#e2e8f0] md:border-l md:px-6">
                            <div className="feature-icon flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#0052FF]">
                                <Lock className="h-8 w-8" fill="currentColor" stroke="none" />
                            </div>
                            <div>
                                <h5 className="text-base font-bold text-[#0B1F3A]">Secure & Reliable</h5>
                                <p className="mt-0.5 text-sm leading-tight text-[#64748B]">Your data is safe with enterprise-grade security.</p>
                            </div>
                        </div>
                        <div className="bottom-feature flex items-center gap-5 border-[#e2e8f0] md:border-l md:pl-6">
                            <div className="feature-icon flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#0052FF]">
                                <BarChart3 className="h-8 w-8" fill="currentColor" stroke="none" />
                            </div>
                            <div>
                                <h5 className="text-base font-bold text-[#0B1F3A]">Built for Restaurants</h5>
                                <p className="mt-0.5 text-sm leading-tight text-[#64748B]">All the tools you need to run and grow your restaurant.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
