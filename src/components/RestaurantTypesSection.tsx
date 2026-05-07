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
        <section className="bg-[linear-gradient(180deg,#fbfcff_0%,#f7faff_58%,#f2f7ff_100%)] px-[clamp(20px,2.45vw,38px)] py-[28px] font-['Poppins',Inter,Arial,sans-serif] text-[#07112e]">
            <div className="mx-auto max-w-[1460px]">
                <div className="text-center">
                    <h2 className="text-[clamp(36px,3.18vw,50px)] font-extrabold leading-[1.08] tracking-[0] text-[#07112e]">
                        Built for <span className="text-[#064ee4]">Every</span> Type of Food Business
                    </h2>
                    <p className="mx-auto mt-[18px] max-w-none text-[20px] font-medium leading-[1.45] text-[#3c4659]">
                        <span className="block whitespace-nowrap">
                            GPOS is designed to help all food businesses manage orders, customers and operations
                        </span>
                        <span className="block">smarter and more efficiently.</span>
                    </p>
                </div>

                <div className="mt-[36px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-6">
                    {industryCards.map(({ title, description, Icon, image }) => (
                        <article
                            key={title}
                            className="flex h-[505px] flex-col overflow-hidden rounded-[11px] border border-[#e2e8f2] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                        >
                            <div className="flex h-[282px] flex-col items-center px-[15px] pb-[12px] pt-[26px] text-center">
                                <span className="inline-flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#eef3ff] text-[#064ee4]">
                                    <Icon className="h-[47px] w-[47px]" strokeWidth={2.05} aria-hidden />
                                </span>
                                <h3 className="mt-[22px] text-[22px] font-extrabold leading-[1.1] text-[#07112e]">
                                    {title}
                                </h3>
                                <p className="mt-[14px] text-[14px] font-medium leading-[1.5] text-[#273244]">
                                    {description}
                                </p>
                            </div>

                            <div className="mt-auto px-[2px] pb-[2px]">
                                <img
                                    src={image}
                                    alt=""
                                    className="h-[221px] w-full rounded-[8px] object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-[26px] flex min-h-[121px] items-center justify-between rounded-[10px] border border-[#dbe4f6] bg-[#f3f7ff] px-[50px] shadow-[0_10px_26px_rgba(15,23,42,0.035)]">
                    <div className="flex items-center gap-[28px]">
                        <span className="inline-flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#064ee4] text-white">
                            <Users className="h-[36px] w-[36px]" strokeWidth={2.4} aria-hidden />
                        </span>
                        <p className="text-[22px] font-medium leading-[1.45] text-[#121b2d]">
                            No matter what type of food business you run,
                            <span className="block">
                                GPOS helps you <span className="font-extrabold text-[#064ee4]">save time, reduce costs and grow faster.</span>
                            </span>
                        </p>
                    </div>
                    <button
                        type="button"
                        className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full text-[#064ee4] hover:bg-white"
                        aria-label="Learn more"
                    >
                        <ArrowRight className="h-[29px] w-[29px]" strokeWidth={2.4} aria-hidden />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RestaurantTypesSection;
