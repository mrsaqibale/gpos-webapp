import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Subscriber = {
    id: number;
    email: string;
    source: string;
    subscribed_at: string;
};

const AdminNewsletterPage: React.FC = () => {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubscribers = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch('/api/newsletter-list.php', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (response.status === 401) {
                    navigate('/admin/login');
                    return;
                }

                if (!response.ok) {
                    const result = await response.json();
                    throw new Error(result.message || 'Unable to load subscribers');
                }

                const data = await response.json();
                setSubscribers(data.subscribers || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unable to load subscribers');
            } finally {
                setLoading(false);
            }
        };

        fetchSubscribers();
    }, [navigate]);

    const handleExportCsv = () => {
        window.location.href = '/api/newsletter-list.php?format=csv';
    };

    return (
        <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#f8fbff] py-16 px-4">
            <div className="mx-auto w-full min-w-0 max-w-6xl rounded-3xl border border-[#032C7E]/15 bg-white p-6 shadow-[0_24px_64px_rgba(3,44,126,0.12)] sm:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-extrabold text-primary-navy">Newsletter Subscriber List</h1>
                        <p className="mt-2 max-w-2xl text-sm text-[#475569]">
                            View all newsletter signups and export subscriber details to CSV.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={handleExportCsv}
                        className="inline-flex items-center justify-center rounded-2xl bg-[#55A630] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4c952b]"
                    >
                        Export to CSV
                    </button>
                </div>

                {loading ? (
                    <p className="mt-8 text-sm text-[#475569]">Loading subscriber list...</p>
                ) : error ? (
                    <p className="mt-8 text-sm text-[#B91C1C]">{error}</p>
                ) : (
                    <div className="mt-8 overflow-x-auto rounded-3xl border border-[#E2E8F0]">
                        <table className="min-w-full divide-y divide-[#E2E8F0] bg-white text-left text-sm">
                            <thead className="bg-[#F8FAFC] text-[#334155]">
                                <tr>
                                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em]">ID</th>
                                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em]">Email</th>
                                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em]">Source</th>
                                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em]">Subscribed At</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E2E8F0]">
                                {subscribers.map((subscriber) => (
                                    <tr key={subscriber.id} className="hover:bg-[#F1F5F9]">
                                        <td className="px-6 py-4 text-[#0F172A]">{subscriber.id}</td>
                                        <td className="px-6 py-4 text-[#0F172A]">{subscriber.email}</td>
                                        <td className="px-6 py-4 text-[#334155]">{subscriber.source}</td>
                                        <td className="px-6 py-4 text-[#334155]">{subscriber.subscribed_at}</td>
                                    </tr>
                                ))}
                                {subscribers.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-8 text-center text-[#64748B]">
                                            No newsletter subscribers found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminNewsletterPage;
