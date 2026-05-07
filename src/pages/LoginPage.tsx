import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login:', { email, password });
    };

    return (
        <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_45%,#f7fcf4_100%)]">
            <Navbar />
            <main className="pt-28 pb-16 px-4">
                <div className="max-w-md mx-auto rounded-2xl border border-[#032C7E]/15 bg-white p-6 shadow-[0_18px_44px_rgba(3,44,126,0.14)]">
                    <h1 className="text-3xl font-extrabold text-primary-navy text-center">Login</h1>
                    <p className="mt-2 text-center text-brand-textSecondary">Access your GPOS dashboard</p>

                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-primary-navy mb-1">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-[#032C7E]/20 bg-white px-4 py-3 outline-none focus:border-[#55A630] focus:ring-2 focus:ring-[#55A630]/20"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-bold text-primary-navy mb-1">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full rounded-xl border border-[#032C7E]/20 bg-white px-4 py-3 outline-none focus:border-[#55A630] focus:ring-2 focus:ring-[#55A630]/20"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-[linear-gradient(135deg,#032C7E,#55A630)] text-white font-bold py-3 shadow-[0_10px_24px_rgba(3,44,126,0.3)] hover:brightness-105 transition"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LoginPage;
