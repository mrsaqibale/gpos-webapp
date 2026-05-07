import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/admin-login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }

            navigate('/admin/newsletter');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_45%,#f7fcf4_100%)] py-16 px-4">
            <div className="mx-auto w-full max-w-md rounded-3xl border border-[#032C7E]/15 bg-white p-8 shadow-[0_24px_64px_rgba(3,44,126,0.14)]">
                <h1 className="text-3xl font-extrabold text-primary-navy text-center">Admin Login</h1>
                <p className="mt-2 text-center text-[#475569]">Secure access to newsletter subscribers and exports.</p>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                    <div>
                        <label htmlFor="admin-email" className="block text-sm font-bold text-primary-navy mb-2">
                            Email
                        </label>
                        <input
                            id="admin-email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="admin@example.com"
                            className="w-full rounded-2xl border border-[#032C7E]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#55A630] focus:ring-2 focus:ring-[#55A630]/20"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="admin-password" className="block text-sm font-bold text-primary-navy mb-2">
                            Password
                        </label>
                        <input
                            id="admin-password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter password"
                            className="w-full rounded-2xl border border-[#032C7E]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#55A630] focus:ring-2 focus:ring-[#55A630]/20"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-2xl bg-[linear-gradient(135deg,#032C7E,#55A630)] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(3,44,126,0.24)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>

                    {error && <p className="text-center text-sm text-[#B91C1C]">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
