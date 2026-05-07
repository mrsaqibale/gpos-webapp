import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EverythingYouNeedSection from "../components/EverythingYouNeedSection";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
    BarChart3,
    BookOpen,
    Boxes,
    Calendar,
    CalendarClock,
    MonitorSmartphone,
    Package,
    ShoppingBag,
    UserRound,
    UsersRound,
    UtensilsCrossed,
    ClipboardCheck,
    Cpu,
    HeartHandshake,
    Soup,
    Sparkles,
    TicketPercent,
    PhoneCall,
    Play,
    SlidersHorizontal,
    WalletCards,
    ShieldCheck,
    Layers,
    LayoutGrid,
    Tag,
    Workflow,
    ThumbsUp,
    Zap,
    Clock,
} from "lucide-react";
import heroProductImage from "../assets/product-complete-restaurant-system-hero.png";
import "./ProductPage.css";

const productHeroBullets: { label: string; Icon: LucideIcon }[] = [
    { label: "A Complete Solution", Icon: ThumbsUp },
    { label: "Powerful Options", Icon: Zap },
    { label: "Responsive Design", Icon: Clock },
];

const PRODUCT_TOC_IDS = [
    "overview",
    "modules",
    "workflow",
    "specs",
    "benefits",
    "why-choose",
] as const;

type ProductTocId = (typeof PRODUCT_TOC_IDS)[number];

function isProductTocId(value: string): value is ProductTocId {
    return (PRODUCT_TOC_IDS as readonly string[]).includes(value);
}

export default function ProductPage() {
    const [activeToc, setActiveToc] = useState<ProductTocId>(() => {
        if (typeof window === "undefined") return "overview";
        const id = window.location.hash.replace(/^#/, "");
        return isProductTocId(id) ? id : "overview";
    });
    const [activeTab, setActiveTab] = useState<"core" | "operations" | "insights">("core");

    useEffect(() => {
        const syncFromHash = () => {
            const id = window.location.hash.replace(/^#/, "");
            if (isProductTocId(id)) {
                setActiveToc(id);
            }
        };
        window.addEventListener("hashchange", syncFromHash);
        window.addEventListener("popstate", syncFromHash);
        return () => {
            window.removeEventListener("hashchange", syncFromHash);
            window.removeEventListener("popstate", syncFromHash);
        };
    }, []);

    const selectToc = (id: ProductTocId) => {
        setActiveToc(id);
        const base = `${window.location.pathname}${window.location.search}`;
        window.history.pushState(null, "", `${base}#${id}`);
    };

    const tabData = {
        core: { title: "POS Core Engine" },
        operations: { title: "Operations Layer" },
        insights: { title: "Insights & Reporting" },
    };

    const whyChooseModules = [
        { title: "Reservation System", subtitle: "Manage bookings easily", icon: CalendarClock },
        { title: "Order Management System", subtitle: "Handle orders efficiently", icon: ShoppingBag },
        { title: "Table Management System", subtitle: "Organize table layouts", icon: UtensilsCrossed },
        { title: "Employee Management System", subtitle: "Track staff schedules", icon: UsersRound },
        { title: "Attendance Management System", subtitle: "Monitor attendance & shifts", icon: ClipboardCheck },
        { title: "Food Management System", subtitle: "Manage your menu items", icon: Soup },
        { title: "Customer Management System", subtitle: "Enhance customer relations", icon: UserRound },
        { title: "Voucher Management System", subtitle: "Create and track promotions", icon: TicketPercent },
        { title: "Call Management System", subtitle: "Manage delivery call orders", icon: PhoneCall },
        { title: "Drawer Record System", subtitle: "Track cash drawer activities", icon: WalletCards },
        { title: "ACL Management System", subtitle: "Control staff access & permissions", icon: ShieldCheck },
        { title: "Stock Management System", subtitle: "Monitor inventory levels", icon: Boxes },
    ] as const;

    const tabModuleTitles: Record<"core" | "operations" | "insights", readonly string[]> = {
        core: [
            "Reservation System",
            "Order Management System",
            "Table Management System",
            "Food Management System",
        ],
        operations: [
            "Employee Management System",
            "Attendance Management System",
            "Customer Management System",
            "Call Management System",
        ],
        insights: [
            "Voucher Management System",
            "Drawer Record System",
            "ACL Management System",
            "Stock Management System",
        ],
    };

    const workflowSteps = [
        {
            step: "01",
            title: "Set Up the Product",
            desc: "Configure your menu, categories, pricing, and base restaurant workflow.",
        },
        {
            step: "02",
            title: "Run Daily Operations",
            desc: "Use GPOS across orders, service handling, billing, staff usage, and customer flow.",
        },
        {
            step: "03",
            title: "Review Business Activity",
            desc: "See reports, patterns, and operational visibility from the same product environment.",
        },
    ];

    const specs = [
        { label: "Product Type", value: "Restaurant POS Software" },
        { label: "Deployment Style", value: "Single connected product environment" },
        { label: "Business Focus", value: "Restaurants, cafes, takeaway, fast food" },
        { label: "Core Model", value: "All-in-one monthly package" },
        { label: "Price", value: "€79 / month" },
        { label: "Premium Feature Lock", value: "No" },
        { label: "Hidden Charges", value: "No" },
        { label: "Main Goal", value: "Operations + billing + visibility in one system" },
    ];

    const overviewCards: { title: string; body: string; Icon: LucideIcon }[] = [
        {
            title: "Product-Oriented",
            body: "GPOS is designed like a complete software product, not like a single-purpose counter screen.",
            Icon: Boxes,
        },
        {
            title: "Operationally Practical",
            body: "It supports real restaurant routines including sales flow, team usage, service activity, and business review.",
            Icon: ClipboardCheck,
        },
        {
            title: "Simple to Learn",
            body: "The system is structured to reduce confusion and help teams adopt it more easily.",
            Icon: BookOpen,
        },
    ];

    const benefits: { title: string; description: string; Icon: LucideIcon }[] = [
        {
            title: "Modern interface",
            description: "Looks more modern than traditional POS screens",
            Icon: MonitorSmartphone,
        },
        {
            title: "Clear structure",
            description: "Feels structured instead of cluttered",
            Icon: Layers,
        },
        {
            title: "Connected workflows",
            description: "Connects multiple restaurant tasks in one product",
            Icon: Boxes,
        },
        {
            title: "Straightforward pricing",
            description: "Keeps pricing simple with no feature fragmentation",
            Icon: Tag,
        },
    ];

    const tocNavLinks: { id: ProductTocId; label: string; Icon: LucideIcon }[] = [
        { id: "overview", label: "Overview", Icon: BookOpen },
        { id: "modules", label: "Modules", Icon: LayoutGrid },
        { id: "workflow", label: "Workflow", Icon: Workflow },
        { id: "specs", label: "Technical Specs", Icon: Cpu },
        { id: "benefits", label: "Benefits", Icon: Sparkles },
        { id: "why-choose", label: "Why Choose Us", Icon: HeartHandshake },
    ];

    return (
        <div className="product-page w-full min-w-0 max-w-full overflow-x-visible lg:overflow-x-clip">
            <Navbar />
            <EverythingYouNeedSection />
            <section className="mb-0 max-lg:overflow-x-visible overflow-x-clip bg-[#F7F9FC] pt-[100px] font-[Inter,Arial,sans-serif] text-[#0f172a]">
                <div className="mx-auto flex w-full max-w-none flex-col px-5 pb-0 pt-0 sm:px-6 sm:pb-0 lg:grid lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-stretch lg:gap-2 lg:pl-[52px] lg:pr-6 lg:pb-0 lg:pt-0 xl:gap-3 xl:pl-[56px] xl:pr-8 xl:pb-0 xl:pt-0">
                    <div className="order-1 text-left lg:order-1 lg:col-start-2 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:items-start lg:pl-4 lg:pr-0 lg:pt-12 xl:pl-5 xl:pt-14">
                        <div className="w-full min-w-0 max-w-[760px] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-x-visible">
                            <h1 className="mb-0 mt-0 w-full min-w-min text-center font-['Open_Sans',Arial,sans-serif] text-[clamp(1.2rem,4.2vw,1.65rem)] font-bold leading-[1.12] tracking-[-0.35px] text-[#0B1A3C] sm:text-[clamp(1.5rem,2.9vw,1.95rem)] sm:leading-[1.12] md:text-[44px] md:leading-[1.08] lg:text-left lg:text-[clamp(34px,1.72vw+18px,56px)] lg:leading-[1.06]">
                                <span className="block whitespace-nowrap">Complete Restaurant System</span>
                                <span className="mt-1 block whitespace-nowrap text-[#1E63E9] sm:mt-1.5 md:mt-2 lg:mt-2.5">
                                    Software + Hardware Together
                                </span>
                            </h1>
                        </div>

                        <p className="mt-4 w-full max-w-[760px] text-center font-['Open_Sans',Arial,sans-serif] text-[16px] font-medium leading-[1.45] text-[#55627A] sm:text-[17px] md:text-[20px] lg:text-left lg:text-[22px]">
                            GPOS is not just software. It is a complete restaurant system that combines POS software,
                            hardware compatibility, and operational tools into one connected platform.
                        </p>

                        <div className="mb-4 mt-3 flex justify-center lg:hidden">
                            <div className="relative flex w-full justify-center px-0 pb-14 sm:pb-0">
                                <img
                                    src={heroProductImage}
                                    alt="GPOS complete setup: touchscreen with order management, receipt printer, barcode scanner, and branded cash drawer on a restaurant counter"
                                    className="min-h-[280px] h-auto w-full max-w-none object-contain object-top sm:h-[min(540px,92vw)] md:h-[min(700px,96vw)]"
                                    loading="eager"
                                />
                            </div>
                        </div>

                        <div className="mx-auto mt-6 flex w-full max-w-[760px] flex-col gap-5 md:mt-8 lg:mx-0">
                            <ul className="w-fit shrink-0 space-y-3 text-left font-['Open_Sans',Arial,sans-serif] text-[22px] font-medium leading-[1.4] text-[#1C2A41]">
                                {productHeroBullets.map(({ label, Icon }) => (
                                    <li key={label} className="flex items-center justify-start gap-3">
                                        <span
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                                            style={{ backgroundColor: "#E6F0FF" }}
                                            aria-hidden
                                        >
                                            <Icon
                                                className="h-5 w-5"
                                                style={{ color: "#1E4B8A" }}
                                                strokeWidth={2.2}
                                                aria-hidden
                                            />
                                        </span>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mx-auto mt-6 flex w-full max-w-[760px] flex-nowrap items-center justify-center gap-2.5 sm:gap-3 lg:mx-0 lg:justify-start lg:gap-3">
                            <Link
                                to="/get_demo"
                                className="button-82-pushable button-82-pushable--contact inline-block no-underline w-full md:w-auto"
                            >
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text w-full">
                                    <Calendar size={16} aria-hidden="true" />
                                    <span>Book Demo</span>
                                </span>
                            </Link>
                            <Link
                                to="/pricing"
                                className="button-82-pushable button-82-pushable--shop inline-block no-underline w-full md:w-auto"
                            >
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text w-full">
                                    <Tag size={16} aria-hidden="true" />
                                    <span>View Pricing</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="order-2 mb-10 hidden min-h-0 min-w-0 justify-center lg:order-2 lg:col-start-1 lg:row-start-1 lg:mb-0 lg:flex lg:items-start lg:justify-start lg:self-stretch lg:pt-2 lg:pr-1 lg:pl-0">
                        <div className="inline-flex max-h-none w-full max-w-full shrink-0 items-start justify-start">
                            <img
                                src={heroProductImage}
                                alt="GPOS complete setup: touchscreen with order management, receipt printer, barcode scanner, and branded cash drawer on a restaurant counter"
                                className="h-auto w-full max-w-[min(100%,860px)] object-contain object-left object-top lg:h-auto lg:max-h-[640px] lg:w-auto lg:max-w-[min(100%,980px)] xl:max-h-[700px]"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container content-grid">
                    <aside className="sticky-nav">
                        <div className="sticky-card sticky-card--toc">
                            <h4 className="sticky-card__title">Want to Know ?</h4>
                            <nav
                                className="sticky-card__nav"
                                aria-label="Shop page sections"
                                role="tablist"
                            >
                                {tocNavLinks.map(({ id, label, Icon }) => (
                                    <a
                                        key={id}
                                        id={`tab-${id}`}
                                        href={`#${id}`}
                                        role="tab"
                                        aria-controls={`panel-${id}`}
                                        aria-selected={activeToc === id}
                                        className={`button-82-pushable sticky-toc-aside-btn inline-block no-underline w-full${activeToc === id ? " sticky-toc-aside-btn--active" : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            selectToc(id);
                                        }}
                                    >
                                        <span className="button-82-shadow"></span>
                                        <span className="button-82-edge"></span>
                                        <span className="button-82-front text w-full">
                                            <Icon size={18} strokeWidth={2.25} aria-hidden="true" />
                                            <span>{label}</span>
                                        </span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    <div className="content-right">
                        <div className="content-main-card">
                            <div
                                className="content-main-panel"
                                role="tabpanel"
                                id={`panel-${activeToc}`}
                                aria-labelledby={`tab-${activeToc}`}
                            >
                                {activeToc === "overview" && (
                                    <section
                                        id="overview"
                                        className="inner-section inner-section--solo first-inner"
                                        aria-label="Overview"
                                    >
                                        <div className="section-heading">
                                            <h2>What Kind of Product is GPOS?</h2>
                                            <p className="overview-lead overview-lead--first">
                                                GPOS is POS software built specifically for restaurants, designed as
                                                one connected system.
                                            </p>
                                            <p className="overview-lead overview-lead--second">
                                                Billing, daily workflow, customer handling, and business visibility
                                                all sit in the same product so your team works from a single,
                                                coherent environment.
                                            </p>
                                        </div>

                                        <div className="overview-grid">
                                            {overviewCards.map((card, index) => (
                                                <div className="overview-card" key={card.title}>
                                                    <div className="overview-card__head">
                                                        <div
                                                            className={
                                                                index % 2 === 0
                                                                    ? "module-icon module-icon--blue module-icon--inline"
                                                                    : "module-icon module-icon--green module-icon--inline"
                                                            }
                                                        >
                                                            <card.Icon size={22} strokeWidth={2} aria-hidden />
                                                        </div>
                                                        <h3>{card.title}</h3>
                                                    </div>
                                                    <p>{card.body}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {activeToc === "modules" && (
                                    <section
                                        id="modules"
                                        className="inner-section inner-section--solo"
                                        aria-label="Modules"
                                    >
                                        <div className="section-heading">
                                            <h2 className="modules-heading-single-line">
                                                All-in-One Tools Built for Your Success
                                            </h2>
                                        </div>

                                        <div className="tabs-wrapper">
                                            <div className="tabs-nav">
                                                <button
                                                    type="button"
                                                    className={activeTab === "core" ? "tab-btn active" : "tab-btn"}
                                                    onClick={() => setActiveTab("core")}
                                                >
                                                    POS Core
                                                </button>
                                                <button
                                                    type="button"
                                                    className={activeTab === "operations" ? "tab-btn active" : "tab-btn"}
                                                    onClick={() => setActiveTab("operations")}
                                                >
                                                    Operations
                                                </button>
                                                <button
                                                    type="button"
                                                    className={activeTab === "insights" ? "tab-btn active" : "tab-btn"}
                                                    onClick={() => setActiveTab("insights")}
                                                >
                                                    Insights
                                                </button>
                                            </div>

                                            <div className="tab-panel tab-panel--modules">
                                                <div className="tab-content tab-content--modules-intro">
                                                    <h3>{tabData[activeTab].title}</h3>
                                                </div>

                                                <div className="modules-grid modules-grid--in-tab">
                                                    {whyChooseModules
                                                        .filter((m) =>
                                                            (tabModuleTitles[activeTab] as readonly string[]).includes(m.title)
                                                        )
                                                        .map((module, index) => (
                                                            <div className="module-card module-card--modules-tab" key={module.title}>
                                                                <div className="module-card__head">
                                                                    <div
                                                                        className={
                                                                            index % 2 === 0
                                                                                ? "module-icon module-icon--blue module-icon--inline"
                                                                                : "module-icon module-icon--green module-icon--inline"
                                                                        }
                                                                    >
                                                                        <module.icon size={22} strokeWidth={2} aria-hidden />
                                                                    </div>
                                                                    <h3>{module.title}</h3>
                                                                </div>
                                                                <p>{module.subtitle}</p>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {activeToc === "workflow" && (
                                    <section
                                        id="workflow"
                                        className="inner-section inner-section--solo"
                                        aria-label="Workflow"
                                    >
                                        <div className="section-heading">
                                            <h2>How the Product Fits Into Daily Use</h2>
                                            <p>
                                                GPOS is intended to support the complete cycle from setup to
                                                daily use to ongoing business review.
                                            </p>
                                        </div>

                                        <div className="workflow-list">
                                            {workflowSteps.map((item, index) => (
                                                <div className="workflow-card" key={index}>
                                                    <div className="workflow-card__head">
                                                        <div className="workflow-step">{item.step}</div>
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <p className="workflow-card__desc">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {activeToc === "specs" && (
                                    <section
                                        id="specs"
                                        className="inner-section inner-section--solo"
                                        aria-label="Technical specifications"
                                    >
                                        <div className="section-heading">
                                            <h2>Quick Product Specification</h2>
                                        </div>

                                        <div className="specs-box specs-box--table">
                                            <table className="specs-table">
                                                <tbody>
                                                    {specs.map((item, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{item.label}</th>
                                                            <td>{item.value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>
                                )}

                                {activeToc === "benefits" && (
                                    <section
                                        id="benefits"
                                        className="inner-section inner-section--solo"
                                        aria-label="Benefits"
                                    >
                                        <div className="section-heading section-heading--benefits">
                                            <h2 className="benefits-section-title">
                                                <span className="benefits-section-title__label">Benefits</span>
                                                <span className="benefits-section-title__text">
                                                    What Makes GPOS Different as a Product
                                                </span>
                                            </h2>
                                            <p>
                                                The product is designed to feel cleaner, simpler, and more
                                                connected than many traditional restaurant systems.
                                            </p>
                                        </div>

                                        <div className="benefits-grid">
                                            {benefits.map((item, index) => (
                                                <div className="benefit-card" key={item.title}>
                                                    <div className="benefit-card__head">
                                                        <div
                                                            className={
                                                                index % 2 === 0
                                                                    ? "module-icon module-icon--blue module-icon--inline"
                                                                    : "module-icon module-icon--green module-icon--inline"
                                                            }
                                                        >
                                                            <item.Icon size={22} strokeWidth={2} aria-hidden />
                                                        </div>
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <p>{item.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {activeToc === "why-choose" && (
                                    <div
                                        id="why-choose"
                                        className="inner-section inner-section--solo why-choose-panel"
                                        aria-label="Why choose us"
                                    >
                                        <div
                                            className="why-choose-panel__video-slot"
                                            role="region"
                                            aria-label="Product video placeholder"
                                        >
                                            <div className="why-choose-panel__video-frame">
                                                <img
                                                    src="/assets/modern.png"
                                                    alt=""
                                                    className="why-choose-panel__sample"
                                                />
                                                <div className="why-choose-panel__video-overlay">
                                                    <span className="why-choose-panel__play" aria-hidden="true">
                                                        <Play size={28} strokeWidth={2.25} />
                                                    </span>
                                                    <p className="why-choose-panel__video-hint">
                                                        Sample frame — replace with your video embed
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
