import React from 'react';
import { Check, Printer, ScanLine, Settings, Shield, WalletCards, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import printerCardImage from '../assets/printer.png.png';
import cashDrawerCardImage from '../assets/cash-drawer.png.png';
import scannerCardImage from '../assets/scanner.png.png';
import heroBannerImage from '../assets/hero-pos-banner-latest-v4.png';

const HomeSetupSection = () => {
    return (
        <section className="-mt-4 min-w-0 overflow-x-clip bg-[#EEF2F7] pb-8 pt-0 lg:-mt-6 lg:pb-10 lg:pt-0">
            <div className="mx-auto w-full min-w-0 max-w-[1700px] pl-0 pr-0 sm:pl-0 sm:pr-2 lg:pl-0 lg:pr-4 xl:pl-0 xl:pr-6">
                <div className="w-full min-w-0 p-0">
                    <div className="grid min-w-0 gap-4 lg:grid-cols-[38%_62%] xl:grid-cols-[36%_64%]">
                        <div className="rounded-xl px-2 py-3 text-center sm:p-3 lg:text-left">
                            <h2 className="flex flex-col gap-3 text-center font-['Open_Sans',Arial,sans-serif] text-[34px] font-bold leading-[1.1] tracking-[-0.5px] text-[#0B1A3C] md:text-[46px] lg:text-left lg:text-[52px]">
                                <span className="block">Everything You</span>
                                <span className="block">Need to Get Started</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-[22rem] font-['Open_Sans',Arial,sans-serif] text-[17px] leading-[1.4] text-[#4B5D7D] lg:mx-0">
                                Complete POS setup with optional hardware - ready for your restaurant.
                            </p>
                            <div className="mx-auto mt-5 flex w-fit max-w-full flex-col items-start gap-3 lg:mx-0">
                                <span className="inline-flex items-center gap-2.5 text-[1.08rem] font-semibold text-[#243A63]">
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1F63E8] text-white">
                                        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                                    </span>
                                    Easy installation
                                </span>
                                <span className="inline-flex items-center gap-2.5 text-[1.08rem] font-semibold text-[#243A63]">
                                    <Zap className="h-4.5 w-4.5 text-[#1F63E8]" strokeWidth={2.7} aria-hidden />
                                    Works with all devices
                                </span>
                                <span className="inline-flex items-center gap-2.5 text-[1.08rem] font-semibold text-[#243A63]">
                                    <Shield className="h-4.5 w-4.5 text-[#1F63E8]" strokeWidth={2.4} aria-hidden />
                                    Secure &amp; reliable
                                </span>
                            </div>
                            <Link
                                to="/get_demo"
                                className="button-82-pushable button-82-pushable--contact mt-5 hidden w-auto no-underline lg:inline-flex"
                            >
                                <span className="button-82-shadow" aria-hidden />
                                <span className="button-82-edge" aria-hidden />
                                <span className="button-82-front text whitespace-nowrap">Book Free Demo</span>
                            </Link>
                        </div>

                        <div className="rounded-2xl bg-transparent p-2.5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
                            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
                                <article className="min-h-[208px] rounded-2xl border border-[#E3E9F2] bg-white p-2.5 shadow-[0_4px_14px_rgba(15,23,42,0.04)] sm:min-h-[236px] sm:p-4">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1F63E8] text-white">
                                        <Settings className="h-4 w-4" strokeWidth={2.2} aria-hidden />
                                    </span>
                                    <div className="mt-3 rounded-xl border border-[#EEF2F8] bg-[#F8FAFD] p-3 text-center sm:p-5">
                                        <img
                                            src={heroBannerImage}
                                            alt="GPOS screen interface"
                                            className="mx-auto h-[132px] w-full max-w-[178px] object-contain sm:h-[120px] sm:max-w-[170px]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="mt-3 text-[1.1rem] font-extrabold leading-tight tracking-[-0.02em] text-[#1A2A49] sm:text-[1.7rem]">GPOS Display</h3>
                                    <p className="mt-1 text-[0.9rem] leading-[1.28] text-[#5E6E86] sm:text-[1.14rem]">Pre-configured POS interface ready to use</p>
                                </article>

                                <article className="min-h-[208px] rounded-2xl border border-[#E3E9F2] bg-white p-2.5 shadow-[0_4px_14px_rgba(15,23,42,0.04)] sm:min-h-[236px] sm:p-4">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1F63E8] text-white">
                                        <WalletCards className="h-4 w-4" strokeWidth={2.2} aria-hidden />
                                    </span>
                                    <div className="mt-3 rounded-xl border border-[#EEF2F8] bg-[#F8FAFD] p-3 text-center sm:p-5">
                                        <img
                                            src={cashDrawerCardImage}
                                            alt="Cash drawer"
                                            className="mx-auto h-[132px] w-full max-w-[178px] object-contain sm:h-[120px] sm:max-w-[170px]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="mt-3 text-[1.1rem] font-extrabold leading-tight tracking-[-0.02em] text-[#1A2A49] sm:text-[1.7rem]">Cash Drawer</h3>
                                    <p className="mt-1 text-[0.9rem] leading-[1.28] text-[#5E6E86] sm:text-[1.14rem]">Secure, sturdy drawer for smooth transactions</p>
                                </article>

                                <article className="min-h-[208px] rounded-2xl border border-[#E3E9F2] bg-white p-2.5 shadow-[0_4px_14px_rgba(15,23,42,0.04)] sm:min-h-[236px] sm:p-4">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1F63E8] text-white">
                                        <ScanLine className="h-4 w-4" strokeWidth={2.2} aria-hidden />
                                    </span>
                                    <div className="mt-3 rounded-xl border border-[#EEF2F8] bg-[#F8FAFD] p-3 text-center sm:p-5">
                                        <img
                                            src={scannerCardImage}
                                            alt="Barcode scanner"
                                            className="mx-auto h-[132px] w-full max-w-[178px] object-contain sm:h-[120px] sm:max-w-[170px]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="mt-3 text-[1.1rem] font-extrabold leading-tight tracking-[-0.02em] text-[#1A2A49] sm:text-[1.7rem]">Barcode Scanner</h3>
                                    <p className="mt-1 text-[0.9rem] leading-[1.28] text-[#5E6E86] sm:text-[1.14rem]">Quick item lookup and inventory</p>
                                </article>

                                <article className="min-h-[208px] rounded-2xl border border-[#E3E9F2] bg-white p-2.5 shadow-[0_4px_14px_rgba(15,23,42,0.04)] sm:min-h-[236px] sm:p-4">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1F63E8] text-white">
                                        <Printer className="h-4 w-4" strokeWidth={2.2} aria-hidden />
                                    </span>
                                    <div className="mt-3 rounded-xl border border-[#EEF2F8] bg-[#F8FAFD] p-3 text-center sm:p-5">
                                        <img
                                            src={printerCardImage}
                                            alt="Receipt printer"
                                            className="mx-auto h-[132px] w-full max-w-[178px] object-contain sm:h-[120px] sm:max-w-[170px]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="mt-3 text-[1.1rem] font-extrabold leading-tight tracking-[-0.02em] text-[#1A2A49] sm:text-[1.7rem]">Receipt Printer</h3>
                                    <p className="mt-1 text-[0.9rem] leading-[1.28] text-[#5E6E86] sm:text-[1.14rem]">Fast, reliable thermal printing for orders</p>
                                </article>
                            </div>

                            <div className="mt-4 flex justify-center lg:hidden">
                                <Link
                                    to="/get_demo"
                                    className="button-82-pushable button-82-pushable--contact inline-flex w-auto no-underline"
                                >
                                    <span className="button-82-shadow" aria-hidden />
                                    <span className="button-82-edge" aria-hidden />
                                    <span className="button-82-front text whitespace-nowrap">Book Free Demo</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeSetupSection;
