import {
    ArrowDown,
    ArrowRight,
    BarChart3,
    CircleDollarSign,
    Percent,
    PiggyBank,
    RefreshCw,
    UserRoundX,
    Users,
} from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const painItems = [
    {
        title: 'High Commission Fees',
        body: "Pay 15%-30% on every order. That's money out of your pocket.",
        Icon: Percent,
    },
    {
        title: "You Don't Own Your Customers",
        body: 'Platforms own the relationship, not you.',
        Icon: Users,
    },
    {
        title: 'Inactive Customers',
        body: 'One-time buyers disappear and never come back.',
        Icon: UserRoundX,
    },
];

const solutionCards = [
    {
        title: (
            <>
                Save <span className="text-[#0fa85c]">15%-30%</span>
                <br />
                on Every Order
            </>
        ),
        body: (
            <>
                Reduce third-party commission costs
                <br />
                and keep more profit.
            </>
        ),
        Icon: PiggyBank,
    },
    {
        title: (
            <>
                Bring Customers
                <br />
                <span className="text-[#0fa85c]">Back to You</span>
            </>
        ),
        body: (
            <>
                We convert marketplace customers
                <br />
                to WhatsApp ordering.
            </>
        ),
        Icon: WhatsAppIcon,
    },
    {
        title: (
            <>
                More <span className="text-[#0fa85c]">Repeat Orders,</span>
                <br />
                More Profit
            </>
        ),
        body: (
            <>
                Turn one-time buyers into
                <br />
                loyal, repeat customers.
            </>
        ),
        Icon: Users,
    },
    {
        title: (
            <>
                Recover <span className="text-[#0fa85c]">Inactive</span>
                <br />
                Customers
            </>
        ),
        body: (
            <>
                Re-engage and reactivate
                <br />
                lost customers automatically.
            </>
        ),
        Icon: RefreshCw,
    },
];

const metrics = [
    {
        title: '15%-30%',
        subtitle: 'Commission Saved',
        body: 'On every online order',
        Icon: ArrowDown,
    },
    {
        title: '€10K-€15K',
        subtitle: 'Saved Annually',
        body: 'More profit in your pocket',
        Icon: BarChart3,
    },
    {
        title: 'More Customers',
        subtitle: 'More Growth',
        body: 'Stronger relationships, better loyalty',
        Icon: Users,
    },
];

const PainSolutionSection = () => {
    return (
        <section className="bg-[#f7f9ff] px-[clamp(20px,4.1vw,64px)] py-[18px] font-['Poppins',Inter,Arial,sans-serif] text-[#07112e] lg:h-[660px] lg:overflow-hidden">
            <div className="mx-auto max-w-[1460px] lg:h-full">
                <div className="relative overflow-hidden rounded-[14px] border border-[#e6ebf4] bg-white px-[34px] pb-[12px] pt-[24px] shadow-[0_18px_55px_rgba(15,23,42,0.06)] lg:h-full">
                    <div className="pointer-events-none absolute left-[41.5%] top-0 hidden h-[520px] w-[160px] -skew-x-[12deg] bg-gradient-to-r from-transparent via-[#f2f6ff] to-transparent lg:block" />
                    <div className="pointer-events-none absolute left-[43%] top-[188px] hidden h-[260px] w-[160px] bg-[radial-gradient(circle,rgba(6,78,228,0.16)_1px,transparent_2px)] [background-size:12px_12px] opacity-40 lg:block" />

                    <div className="relative grid gap-[46px] lg:grid-cols-[0.92fr_1fr]">
                        <div className="pl-[36px]">
                            <h2 className="text-[32px] font-extrabold leading-[1.16] tracking-[0] text-[#07112e]">
                                Stop Losing Money to
                                <span className="block text-[#064ee4]">Third-Party Apps</span>
                            </h2>
                            <p className="mt-[14px] max-w-[520px] text-[15px] font-medium leading-[1.45] text-[#20283a]">
                                Delivery platforms charge high commissions (15%-30%) and own your customer relationship.
                                <span className="block">You lose profit, data, and repeat business.</span>
                            </p>

                            <div className="mt-[20px] max-w-[480px]">
                                {painItems.map(({ title, body, Icon }, index) => (
                                    <div
                                        key={title}
                                        className={`grid grid-cols-[56px_1fr] items-center gap-[16px] py-[7px] ${
                                            index !== painItems.length - 1 ? 'border-b border-[#edf0f5]' : ''
                                        }`}
                                    >
                                        <span className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#ffecef]">
                                            <Icon className="h-[29px] w-[29px] text-[#c9283a]" strokeWidth={2.4} aria-hidden />
                                        </span>
                                        <span>
                                            <span className="block text-[17px] font-extrabold leading-[1.15] text-[#07112e]">
                                                {title}
                                            </span>
                                            <span className="mt-[5px] block whitespace-nowrap text-[13px] font-medium leading-[1.32] text-[#20283a]">
                                                {body}
                                            </span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pl-[26px] pr-[10px]">
                            <h2 className="text-[32px] font-extrabold leading-[1.16] tracking-[0] text-[#07112e]">
                                We Help You Keep More.
                                <span className="block text-[#064ee4]">Grow More.</span>
                            </h2>
                            <p className="mt-[14px] max-w-[585px] text-[15px] font-semibold leading-[1.45] text-[#101827]">
                                GPOS brings your customers back to you on WhatsApp, reduces commission costs, and helps
                                you build a loyal base of repeat customers.
                            </p>

                            <div className="mt-[18px] grid max-w-[660px] grid-cols-1 gap-[10px] sm:grid-cols-2">
                                {solutionCards.map(({ title, body, Icon }) => (
                                    <div
                                        key={body}
                                        className="grid min-h-[110px] grid-cols-[48px_1fr] gap-[12px] rounded-[10px] border border-[#d9eadf] bg-[#f8fffb]/80 p-[13px] shadow-[0_7px_22px_rgba(15,23,42,0.018)]"
                                    >
                                        <span className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#42bf6c] text-white">
                                            <Icon className="h-[27px] w-[27px]" strokeWidth={2.25} aria-hidden />
                                        </span>
                                        <span>
                                            <span className="block text-[13px] font-extrabold leading-[1.18] text-[#07112e]">
                                                {title}
                                            </span>
                                            <span className="mt-[7px] block text-[12px] font-medium leading-[1.25] text-[#384256]">
                                                {body}
                                            </span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-[46.8%] top-[44%] hidden h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#064ee4] text-white shadow-[0_12px_25px_rgba(6,78,228,0.3)] lg:flex">
                        <ArrowRight className="h-[30px] w-[30px]" strokeWidth={3} aria-hidden />
                    </div>

                    <div className="relative mt-[18px] rounded-[10px] border border-[#dbe4f6] bg-[#eef4ff] px-[22px] py-[6px]">
                        <div className="grid items-center gap-[16px] lg:grid-cols-[1.16fr_0.82fr_0.86fr_1fr]">
                            <div className="grid grid-cols-[86px_1fr] items-center gap-[14px]">
                                <div className="relative h-[84px]">
                                    <span className="absolute bottom-[6px] left-[6px] flex h-[60px] w-[54px] items-center justify-center rounded-[24px_24px_20px_20px] bg-gradient-to-b from-[#1e6bff] to-[#0642c6] text-[34px] font-extrabold text-white shadow-[0_12px_20px_rgba(6,78,228,0.2)]">
                                        $
                                    </span>
                                    <span className="absolute left-[15px] top-[8px] h-[18px] w-[38px] rounded-[50%] bg-[#226cff]" />
                                    {[0, 1, 2, 3, 4].map((coin) => (
                                        <span
                                            key={coin}
                                            className="absolute right-[6px] h-[11px] w-[24px] rounded-full border border-[#e7a71e] bg-[#ffc43b]"
                                            style={{ bottom: `${15 + coin * 7}px` }}
                                        />
                                    ))}
                                </div>
                                <div>
                                    <p className="whitespace-nowrap text-[18px] font-extrabold leading-[1.1] text-[#064ee4]">
                                        Save €10,000 - €15,000
                                    </p>
                                    <p className="mt-[1px] text-[16px] font-extrabold leading-[1.1] text-[#07112e]">
                                        Every Year
                                    </p>
                                    <p className="mt-[5px] text-[11.5px] font-medium leading-[1.22] text-[#111827]">
                                        By bringing orders in-house and keeping more of what you earn.
                                    </p>
                                </div>
                            </div>

                            {metrics.map(({ title, subtitle, body, Icon }) => (
                                <div key={title} className="grid grid-cols-[42px_1fr] items-center gap-[9px] border-l border-[#d8e0f0] pl-[20px]">
                                    <span className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#064ee4] bg-white text-[#064ee4]">
                                        <Icon className="h-[22px] w-[22px]" strokeWidth={2.2} aria-hidden />
                                    </span>
                                    <span>
                                        <span className="block whitespace-nowrap text-[14px] font-extrabold leading-[1.08] text-[#064ee4]">
                                            {title}
                                        </span>
                                        <span className="mt-[3px] block whitespace-nowrap text-[11.5px] font-semibold leading-[1.1] text-[#07112e]">
                                            {subtitle}
                                        </span>
                                        <span className="mt-[5px] block text-[10.5px] font-medium leading-[1.2] text-[#20283a]">
                                            {body}
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-[10px] flex min-h-[56px] items-center gap-[16px] rounded-[10px] bg-[#064ee4] px-[24px] text-white shadow-[0_14px_30px_rgba(6,78,228,0.2)]">
                        <span className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#28c866]">
                            <WhatsAppIcon className="h-[25px] w-[25px] text-white" aria-hidden />
                        </span>
                        <p className="text-[15px] font-semibold leading-[1.28]">
                            We bring your customers back to you on WhatsApp
                            <span className="block">so you keep more profit and build lasting relationships.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainSolutionSection;
