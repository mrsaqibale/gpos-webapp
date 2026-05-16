import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Clock, Headphones, Mail, MapPin, Phone, ShoppingCart, Users, Zap, Globe, BookOpen, ShieldCheck, DollarSign, TrendingUp, Calendar, ArrowRight, Star, Lock, Award, BarChart3 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScheduleDemoForm from "../components/ScheduleDemoForm";
import SupportSection from "../components/SupportSection";
import GetDemoHeroSection from "../components/GetDemoHeroSection";
import WhatHappensNext from "../components/WhatHappensNext";
import "./GetDemoPage.css";
import {
    EMAIL_DISPLAY,
    EMAIL_HREF,
    OFFICE_ADDRESS_LINE_1,
    OFFICE_ADDRESS_LINE_2,
    OFFICE_ADDRESS_MAPS_HREF,
    PHONE_DISPLAY,
    PHONE_HREF,
    WHATSAPP_DISPLAY,
    WHATSAPP_HREF,
} from "../constants/contact";

export default function GetDemoPage() {
    useEffect(() => {
        if (window.location.hash !== "#schedule-demo-form") return;
        const el = document.getElementById("schedule-demo-form");
        if (!el) return;
        const t = window.setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
        return () => window.clearTimeout(t);
    }, []);

    return (
        <div className="demo-page min-h-screen w-full min-w-0 overflow-x-clip bg-white font-[Inter,system-ui,sans-serif] text-[#0f172a] antialiased">
            <Navbar />

            <main className="get-demo-main ">

                {/* New Hero Section from Image */}
                <GetDemoHeroSection />

                {/* Support Section */}
                <SupportSection />

                {/* What Happens Next Section */}
                <WhatHappensNext />
            </main>

            <Footer hideTopCta />
        </div>
    );
}
