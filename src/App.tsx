import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import RestaurantPos from './pages/RestaurantPos';
import PricingPage from './pages/PricingPage';
import ProductPage from './pages/ProductPage';
import GetDemoPage from './pages/GetDemoPage';
import LoginPage from './pages/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminNewsletterPage from './pages/AdminNewsletterPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ScrollToTop from './components/ScrollToTop';


function App() {
    return (
        <div className="min-h-screen w-full min-w-0 overflow-x-clip">
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/restaurant_pos" element={<RestaurantPos />} />
                    <Route path="/shop" element={<ProductPage />} />
                    <Route path="/product" element={<Navigate to="/shop" replace />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/get_demo" element={<GetDemoPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin/login" element={<AdminLoginPage />} />
                    <Route path="/admin/newsletter" element={<AdminNewsletterPage />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/cookies" element={<CookiePolicy />} />
                    {/* Redirect others to home for now */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
