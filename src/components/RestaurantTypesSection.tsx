import React from 'react';
import { ArrowRight, ChefHat, Coffee, Pizza, ShoppingBag, Store, Truck, Users } from 'lucide-react';
import restaurantsImage from '../assets/industry-restaurants.jpg';
import takeawaysImage from '../assets/industry-takeaways.jpg';
import cafesImage from '../assets/industry-cafes.jpg';
import foodTrucksImage from '../assets/industry-food-trucks.jpg';
import cloudKitchensImage from '../assets/industry-cloud-kitchens.jpg';
import pizzeriasImage from '../assets/industry-pizzerias.jpg';

type IndustryCard = {
    title: string;
    description: React.ReactNode;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    image: string;
};

const industryCards: IndustryCard[] = [
    {
        title: 'Restaurants',
        description: (
            <>
                Manage dine-in, takeaway
                <br />
                & delivery orders
                <br />
                seamlessly.
            </>
        ),
        Icon: Store,
        image: restaurantsImage,
    },
    {
        title: 'Takeaways',
        description: (
            <>
                Streamline takeaway
                <br />
                & collection orders
                <br />
                with ease.
            </>
        ),
        Icon: ShoppingBag,
        image: takeawaysImage,
    },
    {
        title: 'Cafes',
        description: (
            <>
                Perfect for cafes
                <br />
                & coffee shops of
                <br />
                all sizes.
            </>
        ),
        Icon: Coffee,
        image: cafesImage,
    },
    {
        title: 'Food Trucks',
        description: (
            <>
                Manage on-the-go
                <br />
                business easily
                <br />
                from anywhere.
            </>
        ),
        Icon: Truck,
        image: foodTrucksImage,
    },
    {
        title: 'Cloud Kitchens',
        description: (
            <>
                Boost online orders
                <br />
                & kitchen efficiency
                <br />
                in one place.
            </>
        ),
        Icon: ChefHat,
        image: cloudKitchensImage,
    },
    {
        title: 'Pizzerias',
        description: (
            <>
                Specially designed for
                <br />
                pizzerias & more.
            </>
        ),
        Icon: Pizza,
        image: pizzeriasImage,
    },
];

const RestaurantTypesSection: React.FC = () => {
    return (
        <section className="relative bg-[linear-gradient(180deg,#FAFCFF_0%,#F4F8FF_58%,#EFF4FE_100%)] px-5 py-[52px] font-['Poppins',Inter,Arial,sans-serif] text-[#07112e] lg:px-8 lg:py-[84px]">
            <div className="pointer-events-none absolute -left-32 top-32 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(11,86,234,0.06)_0%,rgba(11,86,234,0)_70%)] blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(20,167,95,0.06)_0%,rgba(20,167,95,0)_70%)] blur-3xl" />
            <div className="relative mx-auto max-w-[1200px]">
                <div className="text-center">
                    <span className="home-eyebrow inline-flex items-center gap-[8px] rounded-full border border-[#E0E8F8] bg-white/80 px-[16px] py-[8px] text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#0649C9] backdrop-blur">
                        For every food business
                    </span>
                    <h2 className="mt-[18px] text-[clamp(36px,3.18vw,52px)] font-extrabold leading-[1.05] tracking-[-0.028em] text-[#07112e]">
                        Built for <span className="bg-gradient-to-r from-[#075BFF] via-[#0B56EA] to-[#0A66FF] bg-clip-text text-transparent">Every</span> Type of Food Business
                    </h2>
                    <p className="mx-auto mt-[20px] max-w-none text-[20px] font-medium leading-[1.5] tracking-[-0.005em] text-[#3C4659]">
                        <span className="block whitespace-nowrap">
                            GPOS is designed to help all food businesses manage orders, customers and operations
                        </span>
                        <span className="block">smarter and more efficiently.</span>
                    </p>
                </div>

                <div className="mt-[40px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-6">
                    {industryCards.map(({ title, description, Icon, image }) => (
                        <article
                            key={title}
                            className="home-tile group flex h-full min-h-[510px] flex-col overflow-hidden rounded-[18px] border border-white/70 bg-white/95 backdrop-blur"
                        >
                            <div className="flex flex-1 flex-col items-center px-[16px] pb-[12px] pt-[28px] text-center">
                                <span className="home-chip inline-flex h-[84px] w-[84px] items-center justify-center rounded-full border border-white/70 bg-[linear-gradient(145deg,#F4F8FF_0%,#E2EBFE_100%)] text-[#064ee4]">
                                    <Icon className="h-[44px] w-[44px]" strokeWidth={2.05} aria-hidden />
                                </span>
                                <h3 className="mt-[22px] text-[22px] font-extrabold leading-[1.1] tracking-[-0.018em] text-[#07112e]">
                                    {title}
                                </h3>
                                <p className="mt-[14px] min-h-[64px] text-[14px] font-medium leading-[1.55] text-[#27344E]">
                                    {description}
                                </p>
                            </div>

                            <div className="relative mt-auto px-[6px] pb-[6px]">
                                <div className="overflow-hidden rounded-[12px]">
                                    <img
                                        src={image}
                                        alt=""
                                        className="h-[221px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="home-card mt-[34px] flex min-h-[128px] items-center justify-between rounded-[18px] border border-white/70 bg-[linear-gradient(160deg,#F4F8FF_0%,#EAF1FF_100%)] px-[50px]">
                    <div className="flex items-center gap-[30px]">
                        <span className="home-chip inline-flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[linear-gradient(145deg,#1768FF_0%,#003FC9_100%)] text-white">
                            <Users className="h-[34px] w-[34px]" strokeWidth={2.2} aria-hidden />
                        </span>
                        <p className="text-[22px] font-medium leading-[1.45] tracking-[-0.005em] text-[#121B2D]">
                            No matter what type of food business you run,
                            <span className="block">
                                GPOS helps you <span className="font-extrabold text-[#0649C9]">save time, reduce costs and grow faster.</span>
                            </span>
                        </p>
                    </div>
                    <button
                        type="button"
                        className="home-chip inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/90 text-[#0649C9] transition hover:bg-white hover:translate-y-[-1px]"
                        aria-label="Learn more"
                    >
                        <ArrowRight className="h-[26px] w-[26px]" strokeWidth={2.4} aria-hidden />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RestaurantTypesSection;
