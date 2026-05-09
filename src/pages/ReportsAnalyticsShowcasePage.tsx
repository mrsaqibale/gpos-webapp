import React from 'react';
import ReportsAnalyticsShowcaseSection from '../components/ReportsAnalyticsShowcaseSection';

/** Full-viewport mockup page: includes its own marketing navbar per design spec (no duplicate site Navbar). */
const ReportsAnalyticsShowcasePage: React.FC = () => {
    return (
        <div className="min-h-screen min-w-0 overflow-x-clip antialiased [font-family:Inter,system-ui,sans-serif]">
            <ReportsAnalyticsShowcaseSection />
        </div>
    );
};

export default ReportsAnalyticsShowcasePage;
