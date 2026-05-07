import React from 'react';
import {
    BarChart3,
    Cloud,
    GraduationCap,
    Headphones,
    MessageSquare,
    Route,
    Smartphone,
    Star,
    UserCheck,
} from 'lucide-react';

const Features = () => {
    const topFeatures = [
        {
            title: 'Smart Insights',
            description: 'Get real-time reports and insights to reduce costs, save time and boost profits.',
            Icon: BarChart3,
            iconBg: '#EAF2FF',
            iconColor: '#2563EB',
        },
        {
            title: 'Manage Anywhere',
            description: 'Access your business in real-time from any device, anytime, anywhere.',
            Icon: Route,
            iconBg: '#DCFCE7',
            iconColor: '#16A34A',
        },
        {
            title: 'Reach More Customers',
            description: 'Increase sales with online orders, website integration, collection and delivery options.',
            Icon: Smartphone,
            iconBg: '#EDE9FE',
            iconColor: '#7C3AED',
        },
    ] as const;

    const supportBenefits = [
        {
            title: '24/7 Support',
            Icon: Headphones,
            iconBg: '#EAF2FF',
            iconColor: '#2563EB',
        },
        {
            title: '1-on-1 Onboarding',
            Icon: UserCheck,
            iconBg: '#DCFCE7',
            iconColor: '#16A34A',
        },
        {
            title: 'Unlimited Training',
            Icon: GraduationCap,
            iconBg: '#EDE9FE',
            iconColor: '#7C3AED',
        },
        {
            title: 'Experts You Can Trust',
            Icon: MessageSquare,
            iconBg: '#FFEDD5',
            iconColor: '#EA580C',
        },
    ] as const;

    const ratingStars = Array.from({ length: 5 });
    const supportImagePath = '/assets/support-restaurant.png';

    return (
        <section id="product" className="w-full min-w-0 overflow-x-clip bg-[#F8FBFF] px-2 py-8 sm:px-3 md:px-4 md:py-12 lg:px-3 2xl:px-17">
            <div className="mx-auto w-full">
                <article className="min-w-0 rounded-[28px] border border-[#DDE8F7] bg-[rgba(255,255,255,0.92)] px-4 py-7 text-center shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-7 md:px-12 md:py-12">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-2.5 text-[15px] font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,0.25)]">
                        <Cloud className="h-4 w-4" strokeWidth={2.4} aria-hidden />
                        Cloud Powered
                    </span>

                    <h2 className="mt-7 text-[32px] font-extrabold leading-[1.12] text-[#061536] md:text-[40px] xl:text-[48px]">
                        Run Your Restaurant <span className="text-[#2563EB]">Smarter</span>, Anywhere
                    </h2>

                    <p className="mx-auto mt-4 max-w-[900px] text-[16px] leading-[1.6] text-[#667085] md:text-[18px]">
                        GPOS gives you the tools to make better decisions, manage with ease, and grow your business.
                    </p>

                    <div className="mx-auto mt-[42px] grid max-w-[1240px] grid-cols-1 gap-7 md:grid-cols-3 md:gap-[52px]">
                        {topFeatures.map(({ title, description, Icon, iconBg, iconColor }) => (
                            <div key={title} className="text-center">
                                <span
                                    className="mx-auto inline-flex h-[92px] w-[92px] items-center justify-center rounded-full"
                                    style={{ backgroundColor: iconBg }}
                                >
                                    <Icon className="h-[38px] w-[38px]" style={{ color: iconColor }} strokeWidth={2.2} />
                                </span>
                                <h3 className="mt-5 text-[24px] font-extrabold text-[#071A44]">{title}</h3>
                                <span className="mx-auto mt-3 block h-[3px] w-[46px] rounded-full bg-[#2563EB]" />
                                <p className="mx-auto mt-3 max-w-[310px] text-[17px] leading-[1.6] text-[#667085]">{description}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="mt-[26px] rounded-[28px] border border-[#DDE8F7] bg-[rgba(255,255,255,0.92)] px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:px-9 md:py-9">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[46%_54%] lg:gap-[42px]">
                        <div>
                            <img
                                src={supportImagePath}
                                alt="Restaurant owner using phone and tablet for support"
                                className="h-[260px] w-full rounded-[14px] object-cover md:h-[380px]"
                                loading="lazy"
                            />
                        </div>

                        <div className="text-left md:pr-3 xl:pr-5">
                            <h3 className="text-[30px] font-extrabold leading-[1.18] text-[#061536] md:text-[34px] xl:text-[38px]">
                                We&apos;re Here for You, <span className="text-[#2563EB]">24/7</span>
                            </h3>

                            <p className="mt-[18px] max-w-[650px] text-[16px] leading-[1.7] text-[#667085] md:text-[18px]">
                                Get round-the-clock support, personalized onboarding, and unlimited training to help your business succeed.
                            </p>

                            <div className="mt-[34px]">
                                <p className="flex items-center gap-2 text-[22px] font-extrabold text-[#061536]">
                                    <Star className="h-6 w-6 text-[#F59E0B]" fill="currentColor" />
                                    Rated by Restaurant Owners
                                </p>

                                <div className="mt-3 flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center gap-1.5">
                                        {ratingStars.map((_, index) => (
                                            <Star
                                                key={index}
                                                className="h-7 w-7 text-[#F59E0B]"
                                                fill="currentColor"
                                                aria-hidden
                                            />
                                        ))}
                                    </span>
                                    <span className="text-[16px] font-bold text-[#334155]">4.8/5 average customer rating</span>
                                </div>

                                <p className="mt-2 text-[14px] text-[#667085]">
                                    Based on feedback from restaurants using GPOS every day.
                                </p>
                            </div>

                            <div className="mt-[34px] grid grid-cols-1 gap-[18px] pr-2 sm:grid-cols-2 xl:grid-cols-4 xl:pr-4">
                                {supportBenefits.map(({ title, Icon, iconBg, iconColor }, index) => (
                                    <div
                                        key={title}
                                        className={`flex items-center gap-3 ${index < supportBenefits.length - 1 ? 'xl:border-r xl:border-[#E6EDF7] xl:pr-4' : ''}`}
                                    >
                                        <span
                                            className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
                                            style={{ backgroundColor: iconBg }}
                                        >
                                            <Icon className="h-5 w-5" style={{ color: iconColor }} strokeWidth={2.2} />
                                        </span>
                                        <span className="text-[16px] font-semibold leading-snug text-[#475569]">{title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Features;
