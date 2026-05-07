import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactOptions from '../components/ContactOptions';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { WHATSAPP_DISPLAY, WHATSAPP_HREF } from '../constants/contact';
import { useState } from 'react';
import ScheduleDemoForm, {
    scheduleDemoLabelClass,
    scheduleDemoControlNoIconClass,
    scheduleDemoSubmitButtonClass,
} from '../components/ScheduleDemoForm';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '+353 ',
        subject: 'General Inquiry',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        if (id === 'phone' && value.length > 14) return;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage({ type: '', text: '' });

        try {
            const response = await fetch('/api/contact-us-page.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setSubmitMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '+353 ',
                    subject: 'General Inquiry',
                    message: ''
                });
            } else {
                setSubmitMessage({ type: 'error', text: data.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setSubmitMessage({ type: 'error', text: 'Connection error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-h-screen w-full min-w-0 overflow-x-clip">
            <Navbar />

            <main className="pt-24">
                <ContactOptions
                    salesHref="/get_demo#schedule-demo-form"
                    supportHref="#contact-form"
                />

                <section id="contact-form" className="py-24 bg-white scroll-mt-24">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Contact Info */}
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary-navy mb-8">Contact Information</h3>
                                    <div className="space-y-8">
                                        <div className="flex items-start space-x-6">
                                            <div className="w-12 h-12 bg-primary-navy/10 text-primary-navy rounded-xl flex items-center justify-center flex-shrink-0">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-primary-navy">Our Office</h4>
                                                <p className="text-brand-textSecondary mt-1">Barrack St, Bansha,<br />Co. Tipperary, E34 X402, Ireland</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-6">
                                            <div className="w-12 h-12 bg-primary-navy/10 text-primary-navy rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-primary-navy">Phone Number</h4>
                                                <p className="text-brand-textSecondary mt-1">
                                                    <a href="tel:+3536221302" className="hover:text-[#55A630] transition-colors underline-offset-2 hover:underline">
                                                        062 21302
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-6">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-sm">
                                                <WhatsAppIcon variant="inverse" size={26} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-primary-navy">WhatsApp</h4>
                                                <p className="text-brand-textSecondary mt-1">
                                                    <a
                                                        href={WHATSAPP_HREF}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-[#55A630] transition-colors underline-offset-2 hover:underline"
                                                    >
                                                        {WHATSAPP_DISPLAY}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-6">
                                            <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-primary-navy">Email Address</h4>
                                                <p className="text-brand-textSecondary mt-1">demo@gposapp.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="card">
                                <h3 className="text-2xl font-bold text-primary-navy mb-8">Send us a Message</h3>
                                <ScheduleDemoForm mode="api" idPrefix="demo-section" className="!mt-0" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
