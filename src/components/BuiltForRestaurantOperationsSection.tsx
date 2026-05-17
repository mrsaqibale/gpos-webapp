import React from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BarChart3, Download, PieChart, Tag } from "lucide-react";
import reportsAnalyticsDashboard from "../assets/features-reports-analytics-dashboard-main.png?url";

type FeatureItem = {
    title: string;
    description: string;
    Icon: LucideIcon;
    tone: string;
    iconClass: string;
};

const reportFeatures: FeatureItem[] = [
    {
        title: "Sales Insights",
        description: "Track daily, weekly and monthly sales with detailed breakdowns.",
        Icon: BarChart3,
        tone: "from-[#edf6ff] via-[#e5f0ff] to-[#f8fbff]",
        iconClass: "text-[#0757e8]",
    },
    {
        title: "Order Analytics",
        description: "Analyze order types, channels and peak hours to optimize operations.",
        Icon: PieChart,
        tone: "from-[#e9fbf0] via-[#def7e9] to-[#f8fffb]",
        iconClass: "text-[#18a864]",
    },
    {
        title: "Export & Share",
        description: "Export reports in Excel, PDF or CSV and share with your team or accountant.",
        Icon: Download,
        tone: "from-[#fff5e8] via-[#ffecd6] to-[#fffaf3]",
        iconClass: "text-[#eb981f]",
    },
];

const BuiltForRestaurantOperationsSection: React.FC = () => {
    return (
        <section
            id="features"
            className="relative overflow-hidden bg-[#F8FAFC] px-[39px] pb-[30px] pt-[28px] font-['Poppins',Inter,Arial,sans-serif] max-lg:px-6 max-md:px-4"
            aria-labelledby="reports-analytics-heading"
        >
            <div className="mx-auto grid w-full max-w-[1456px] items-start gap-[22px] lg:grid-cols-[640px_minmax(0,1fr)] xl:grid-cols-[670px_minmax(0,1fr)]">
                <div className="pt-[4px]">
                    <div className="inline-flex h-[36px] items-center gap-[12px] rounded-full border border-[#dce9ff] bg-[#eef5ff] px-[15px] text-[14px] font-semibold text-[#0757d8] shadow-[0_10px_28px_rgba(7,86,217,0.045),inset_0_1px_0_rgba(255,255,255,0.82)]">
                        <BarChart3 className="h-[17px] w-[17px]" strokeWidth={2.2} aria-hidden />
                        <span className="whitespace-nowrap">Reports &amp; Analytics</span>
                    </div>

                    <h2
                        id="reports-analytics-heading"
                        className="mt-[24px] font-['Inter',Arial,sans-serif] text-[clamp(36px,3.35vw,52px)] font-[740] leading-[1.08] tracking-[-0.04em] text-[#071333]"
                    >
                        <span className="block whitespace-nowrap">Data That Drives</span>
                        <span className="block whitespace-nowrap">Better Decisions.</span>
                        <span className="block bg-gradient-to-r from-[#0565ff] via-[#0756e8] to-[#0249d3] bg-clip-text text-transparent drop-shadow-[0_7px_18px_rgba(5,101,255,0.10)]">
                            Grow Your Business.
                        </span>
                    </h2>

                    <p className="mt-[16px] max-w-[555px] font-['Inter',Arial,sans-serif] text-[16px] font-[500] leading-[1.55] text-[#4B5B7C]">
                        Real-time reports and powerful analytics give you complete visibility of your sales, orders, staff performance and more.
                    </p>

                    <div className="mt-[22px] grid gap-[18px]">
                        {reportFeatures.map(({ title, description, Icon, tone, iconClass }) => (
                            <article key={title} className="flex items-start gap-[18px]">
                                <span
                                    className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[13px] border border-white/90 bg-gradient-to-br ${tone} shadow-[0_13px_28px_rgba(15,23,42,0.055),inset_0_1px_0_rgba(255,255,255,0.95)]`}
                                    aria-hidden
                                >
                                    <Icon className={`h-[24px] w-[24px] ${iconClass}`} strokeWidth={2.1} />
                                </span>
                                <div className="min-w-0 flex-1 pt-[1px]">
                                    <h3 className="font-['Inter',Arial,sans-serif] text-[16px] font-[800] leading-[1.2] tracking-[-0.012em] text-[#081B44]">
                                        {title}
                                    </h3>
                                    <p className="mt-[5px] max-w-[390px] font-['Inter',Arial,sans-serif] text-[13px] font-[500] leading-[1.55] text-[#4B5B7C]">
                                        {description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-[26px] flex w-full max-w-[540px] justify-center">
                        <a
                            href="#features"
                            className="inline-flex h-[46px] min-w-[196px] items-center justify-center gap-[18px] rounded-[7px] bg-gradient-to-br from-[#0866ff] via-[#0757f0] to-[#0048d4] px-[21px] font-['Poppins',Arial,sans-serif] text-[14px] font-semibold text-white no-underline shadow-[0_15px_30px_rgba(4,86,232,0.22),inset_0_1px_0_rgba(255,255,255,0.22)]"
                        >
                            Explore All Features
                            <ArrowRight className="h-[19px] w-[19px]" strokeWidth={2.1} aria-hidden />
                        </a>
                    </div>
                </div>

                <div className="relative flex min-w-0 justify-center lg:justify-end">
                    <div
                        className="pointer-events-none absolute -inset-x-4 top-8 h-[70%] rounded-[34px] bg-gradient-to-br from-[#eef5ff] via-[#e8f0fc] to-[#e9f1ff] opacity-55 blur-2xl"
                        aria-hidden
                    />
                    <div className="relative z-10 flex w-full max-w-[820px] items-start justify-end overflow-hidden rounded-[12px]">
                        <img
                            src={reportsAnalyticsDashboard}
                            alt="GPOS reports overview dashboard showing sales charts, channel breakdowns, and payment methods"
                            className="block h-auto max-h-[610px] w-full object-contain object-top"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuiltForRestaurantOperationsSection;
