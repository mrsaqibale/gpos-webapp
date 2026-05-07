import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PainSolutionSection from '../components/PainSolutionSection';
import RestaurantTypesSection from '../components/RestaurantTypesSection';
import MainPosUiShowcaseSection from '../components/MainPosUiShowcaseSection';
import DeliveryCustomerRecoverySection from '../components/DeliveryCustomerRecoverySection';
import StaffReportsSection from '../components/StaffReportsSection';
import FeaturePreviewSection from '../components/FeaturePreviewSection';
import PricingPreviewSection from '../components/PricingPreviewSection';
import DemoCtaSection from '../components/DemoCtaSection';
import Testimonials from '../components/Testimonials';
import { X } from 'lucide-react';

import FAQAccordion from '../components/FAQ';
import ScheduleDemoForm from '../components/ScheduleDemoForm';

/** Once per browser tab session: auto-open promo on first visit to Home only (not on return navigation). */
const PROMO_SESSION_FIRST_VISIT_KEY = 'gpos_promo_first_visit_shown';

const INACTIVITY_MS = 5 * 60 * 1000;

const Home = () => {
    const [showPromoPopup, setShowPromoPopup] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(5 * 24 * 60 * 60 + 6 * 60 * 60 + 37 * 60 + 43);
    const inactivityTimerRef = useRef<number | null>(null);
    const firstLandTimerRef = useRef<number | null>(null);

    const openPromoFromUserAction = () => {
        if (firstLandTimerRef.current !== null) {
            window.clearTimeout(firstLandTimerRef.current);
            firstLandTimerRef.current = null;
        }
        sessionStorage.setItem(PROMO_SESSION_FIRST_VISIT_KEY, 'true');
        setShowPromoPopup(true);
    };

    /** Promo stays available from CTA actions, but the mockup home page should not auto-open a modal. */
    useEffect(() => {
        return () => {
            if (firstLandTimerRef.current !== null) {
                window.clearTimeout(firstLandTimerRef.current);
                firstLandTimerRef.current = null;
            }
        };
    }, []);

    /**
     * While this page is mounted (user is on Home), reopen promo after 5 minutes without activity.
     * Timer clears when navigating away because Home unmounts.
     */
    useEffect(() => {
        const resetInactivityTimer = () => {
            if (localStorage.getItem('gpos_promo_submitted') === 'true') return;

            if (inactivityTimerRef.current !== null) {
                window.clearTimeout(inactivityTimerRef.current);
            }
            inactivityTimerRef.current = window.setTimeout(() => {
                if (localStorage.getItem('gpos_promo_submitted') === 'true') return;
                setShowPromoPopup(true);
            }, INACTIVITY_MS);
        };

        const activityEvents: (keyof WindowEventMap)[] = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
        activityEvents.forEach((eventName) => {
            window.addEventListener(eventName, resetInactivityTimer, { passive: true });
        });

        resetInactivityTimer();

        return () => {
            if (inactivityTimerRef.current !== null) {
                window.clearTimeout(inactivityTimerRef.current);
                inactivityTimerRef.current = null;
            }
            activityEvents.forEach((eventName) => {
                window.removeEventListener(eventName, resetInactivityTimer);
            });
        };
    }, []);

    useEffect(() => {
        if (!showPromoPopup) return;
        const timer = window.setInterval(() => {
            setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => window.clearInterval(timer);
    }, [showPromoPopup]);

    useEffect(() => {
        if (!showPromoPopup) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [showPromoPopup]);

    const closePopup = () => {
        setShowPromoPopup(false);
    };

    const countdownText = useMemo(() => {
        const days = Math.floor(secondsLeft / (24 * 60 * 60));
        const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
        const seconds = secondsLeft % 60;
        return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }, [secondsLeft]);

    return (
        <div className="home-premium min-h-screen w-full min-w-0 overflow-x-clip bg-[#F6F9FF] font-['Poppins',Inter,Arial,sans-serif] text-[#07142F] antialiased [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased]">
            <Navbar />

            <main className="home-premium-main m-0 p-0">
                <Hero onGetStartedClick={openPromoFromUserAction} />
                <PainSolutionSection />
                <RestaurantTypesSection />
                <MainPosUiShowcaseSection />
                <DeliveryCustomerRecoverySection />
                <StaffReportsSection />
                <FeaturePreviewSection />
                <PricingPreviewSection />
                <DemoCtaSection />

                <Testimonials />
                <FAQAccordion />
            </main>

            <Footer hideTopCta />

            {/* Floating CTA */}
            {showPromoPopup && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-black/52 px-3 py-5 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] sm:px-5 sm:py-8">
                    <div className="relative w-full max-w-[22rem] overflow-hidden rounded-[10px] border border-[#D4D9E2] bg-white px-3.5 pb-3.5 pt-10 shadow-[0_14px_32px_rgba(2,12,36,0.28)] sm:max-w-[24rem] sm:px-4 sm:pb-4 sm:pt-11 md:max-w-[28rem] lg:max-w-[34rem] lg:rounded-[12px] lg:px-7 lg:pb-6 lg:pt-12 xl:max-w-[38rem] xl:px-8 xl:pb-7 xl:pt-12">
                        <button
                            type="button"
                            onClick={closePopup}
                            className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-red-700 bg-red-600 text-white shadow-md transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            aria-label="Close popup"
                        >
                            <X className="h-5 w-5 stroke-[2.5]" aria-hidden />
                        </button>

                        <div className="mx-auto w-full min-w-0">
                            <h2 className="text-center font-['Open_Sans',Arial,sans-serif] text-[1.05rem] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B1A3C] sm:text-[1.15rem] md:text-[1.2rem]">
                                Complete POS System for only €79
                            </h2>
                            <p className="mt-1 text-center font-['Poppins',Arial,sans-serif] text-[0.8rem] text-[#5A6E91] sm:text-[0.85rem]">
                                Simplify sales. Grow faster.
                            </p>
                            <p className="mt-1 text-center font-['Open_Sans',Arial,sans-serif] text-[0.9rem] font-bold text-[#0B1A3C] sm:text-[0.95rem]">
                                WAS €109, NOW FROM <span className="text-[#55A630]">€79</span>*
                            </p>
                            <p className="mt-1 text-center font-['Poppins',Arial,sans-serif] text-[0.7rem] leading-snug text-[#657A9A] sm:text-[0.75rem]">
                                Offer ends in {countdownText}
                            </p>

                            <ScheduleDemoForm
                                mode="submit"
                                idPrefix="promo"
                                className="!mt-2 !space-y-2.5"
                                onNavigate={closePopup}
                                beforeSubmit={
                                    <p className="text-center font-['Poppins',Arial,sans-serif] text-[11px] leading-tight text-[#64748B] sm:text-xs">
                                        By submitting your details you agree to our terms and privacy policy.
                                    </p>
                                }
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
