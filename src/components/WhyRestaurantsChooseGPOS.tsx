import { ArrowRight, Clock, Smile, TrendingUp, Wallet } from "lucide-react";
import { HERO_PRIMARY_CTA_SURFACE } from "../constants/heroCta";

const benefits = [
    {
        title: "Save Time",
        desc: "Automate tasks and manage everything in one place.",
        icon: Clock,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Increase Sales",
        desc: "Smart insights and offers help you sell more every day.",
        icon: TrendingUp,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Reduce Costs",
        desc: "Optimize inventory and operations to cut down waste.",
        icon: Wallet,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Happy Customers",
        desc: "Faster service and better experience bring them back.",
        icon: Smile,
        color: "bg-orange-100 text-orange-600",
    },
] as const;

export default function WhyRestaurantsChooseGPOS() {
    return (
        <section className="w-full bg-[#F8FBFF] pb-10 pl-6 pr-4 pt-0 sm:pb-12 sm:pl-8 sm:pr-6 lg:pb-14 lg:pl-[80px] lg:pr-10 xl:pl-[96px] xl:pr-14">
            <div className="relative mx-auto w-full max-w-none">
                <div className="rounded-[28px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50 px-6 pb-6 pt-4 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:pb-8 sm:pt-5 lg:px-10 lg:pb-10 lg:pt-6 xl:px-12 xl:pb-12">
                    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_2fr]">
                        <div>
                            <p className="text-xs font-extrabold uppercase tracking-wide text-[#0756D9]">
                                WHY RESTAURANTS CHOOSE GPOS
                            </p>

                            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#061536] sm:text-3xl lg:text-4xl">
                                More Than Just a <span className="text-[#0756D9]">POS</span>
                            </h2>

                            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 sm:mt-4 lg:max-w-2xl">
                                We provide the tools, support and reliability you need to run your restaurant with
                                confidence.
                            </p>

                            <button
                                type="button"
                                className={`mt-7 inline-flex h-12 items-center justify-center gap-3 rounded-[12px] px-6 text-sm ${HERO_PRIMARY_CTA_SURFACE}`}
                            >
                                Start Free Demo
                                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-6 md:gap-x-5 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0">
                            {benefits.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className={`relative text-center ${
                                            index !== benefits.length - 1
                                                ? "lg:border-r lg:border-slate-200 lg:pr-6 xl:pr-8"
                                                : ""
                                        }`}
                                    >
                                        <div
                                            className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14 ${item.color}`}
                                        >
                                            <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} aria-hidden />
                                        </div>

                                        <h3 className="mt-3 text-[0.9375rem] font-black leading-tight text-[#061536] sm:mt-5 sm:text-lg">
                                            {item.title}
                                        </h3>

                                        <p className="mx-auto mt-1.5 max-w-full px-0.5 text-xs leading-snug text-slate-600 sm:mt-2 sm:max-w-[190px] sm:px-0 sm:text-sm sm:leading-6">
                                            {item.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
