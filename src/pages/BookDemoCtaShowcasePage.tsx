import React from 'react';
import BookDemoCtaSection from '../components/BookDemoCtaSection';

/** Standalone mockup page: includes marketing navbar per design spec. */
const BookDemoCtaShowcasePage: React.FC = () => {
    return (
        <div className="min-h-screen min-w-0 overflow-x-clip antialiased" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <BookDemoCtaSection />
        </div>
    );
};

export default BookDemoCtaShowcasePage;
