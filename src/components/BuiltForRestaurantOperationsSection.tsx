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
        title: "Performance Reports",
        description: "Monitor staff performance, items sold and business trends.",
        Icon: Tag,
        tone: "from-[#f4ebff] via-[#eadcff] to-[#fbf8ff]",
        iconClass: "text-[#7a36df]",
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
            className="relative overflow-hidden bg-[#f8faff] px-[39px] pb-[30px] pt-[28px] font-['Poppins',Inter,Arial,sans-serif] max-lg:px-6 max-md:px-4"
            aria-labelledby="reports-analytics-heading"
        >
            <div className="mx-auto grid w-full max-w-[1456px] items-start gap-[20px] lg:grid-cols-[610px_minmax(0,1fr)] xl:grid-cols-[660px_minmax(0,1fr)]">
                <div className="pt-[4px]">
                    <div className="inline-flex h-[36px] items-center gap-[12px] rounded-full border border-[#dce9ff] bg-[#eef5ff] px-[15px] text-[14px] font-semibold text-[#0757d8] shadow-[0_10px_28px_rgba(7,86,217,0.045),inset_0_1px_0_rgba(255,255,255,0.82)]">
                        <BarChart3 className="h-[17px] w-[17px]" strokeWidth={2.2} aria-hidden />
                        <span className="whitespace-nowrap">Reports &amp; Analytics</span>
                    </div>

                    <h2
                        id="reports-analytics-heading"
                        className="mt-[22px] font-['Inter',Arial,sans-serif] text-[clamp(29px,2.45vw,35px)] font-[850] leading-[1.18] tracking-[-0.034em] text-[#071333]"
                    >
                        <span className="block whitespace-nowrap">Data That Drives Better Decisions.</span>
                        <span className="block bg-gradient-to-r from-[#0565ff] via-[#0756e8] to-[#0249d3] bg-clip-text text-transparent drop-shadow-[0_7px_18px_rgba(5,101,255,0.10)]">
                            Grow Your Business.
                        </span>
                    </h2>

                    <p className="mt-[13px] max-w-[470px] text-justify font-['Inter',Arial,sans-serif] text-[15px] font-medium leading-[1.5] text-[#46546d]">
                        Real-time reports and powerful analytics give you complete visibility of your sales, orders, staff performance and more - so you can make smarter decisions and grow faster.
                    </p>

                    <div className="mt-[21px] space-y-[15px]">
                        {reportFeatures.map(({ title, description, Icon, tone, iconClass }) => (
                            <article key={title} className="flex items-start gap-[18px]">
                                <span
                                    className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[12px] border border-white/90 bg-gradient-to-br ${tone} shadow-[0_13px_28px_rgba(15,23,42,0.055),inset_0_1px_0_rgba(255,255,255,0.95)]`}
                                    aria-hidden
                                >
                                    <Icon className={`h-[25px] w-[25px] ${iconClass}`} strokeWidth={2.1} />
                                </span>
                                <div className="min-w-0 flex-1 pt-[3px]">
                                    <h3 className="font-['Inter',Arial,sans-serif] text-[16px] font-[850] leading-[1.2] tracking-[-0.012em] text-[#111936]">
                                        {title}
                                    </h3>
                                    <p className="mt-[4px] max-w-none whitespace-nowrap font-['Inter',Arial,sans-serif] text-[13px] font-medium leading-[1.35] text-[#2f3d55]">
                                        {description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <a
                        href="#features"
                        className="mt-[26px] inline-flex h-[46px] min-w-[196px] items-center justify-center gap-[18px] rounded-[7px] bg-gradient-to-br from-[#0866ff] via-[#0757f0] to-[#0048d4] px-[21px] font-['Poppins',Arial,sans-serif] text-[14px] font-semibold text-white no-underline shadow-[0_15px_30px_rgba(4,86,232,0.22),inset_0_1px_0_rgba(255,255,255,0.22)]"
                    >
                        Explore All Features
                        <ArrowRight className="h-[19px] w-[19px]" strokeWidth={2.1} aria-hidden />
                    </a>
                </div>

                <div className="relative flex min-w-0 justify-center lg:justify-end">
                    <div
                        className="pointer-events-none absolute -inset-x-6 top-8 h-[78%] rounded-[34px] bg-gradient-to-br from-[#eef5ff] via-[#e8f0fc] to-[#e9f1ff] opacity-60 blur-2xl"
                        aria-hidden
                    />
                    <div className="relative z-10 w-full max-w-[1034px] overflow-hidden rounded-[12px]">
                        <img
                            src={reportsAnalyticsDashboard}
                            alt="GPOS reports overview dashboard showing sales charts, channel breakdowns, and payment methods"
                            className="block h-auto w-full"
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
