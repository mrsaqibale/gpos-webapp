import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PosBundleSection from "../components/PosBundleSection";
import HomeSetupSection from "../components/HomeSetupSection";
import LogoCarousel from "../components/LogoCarousel";
import RestaurantNeedsOnePosSection from "../components/RestaurantNeedsOnePosSection";
import HomePricingMockup from "../components/HomePricingMockup";
import "./PricingPage.css";

export default function PricingPage() {
    return (
        <div className="pricing-page w-full min-w-0 max-w-full">
            <Navbar />
            <PosBundleSection />
            <HomeSetupSection />
            <LogoCarousel />
            <HomePricingMockup
                secondaryCtaLabel="Buy Now"
                secondaryCtaTo="https://dashboard-gpos.gtechnexa.com"
            />
            <RestaurantNeedsOnePosSection />
            <Footer />
        </div>
    );
}
