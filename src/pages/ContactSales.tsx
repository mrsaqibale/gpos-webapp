import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield, Users, Clock, MapPin, MessageCircle, Phone, Mail, Calendar,
  ArrowRight, Star, Lock, TrendingUp, Zap, Headphones, ChevronDown,
  Send, CheckCircle, Store, BarChart3, ShoppingCart, Heart, Bell,
  Rocket, Package, ChefHat,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/support-agent-headset.png";
import {
  WHATSAPP_DISPLAY, WHATSAPP_HREF,
  PHONE_DISPLAY, PHONE_HREF,
  EMAIL_DISPLAY, EMAIL_HREF,
} from "../constants/contact";

function Badge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-full px-4 py-2 mb-6">
      <Icon className="w-4 h-4 text-[#2563EB]" />
      <span className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase">{label}</span>
    </div>
  );
}

function IconBox({ icon: Icon, color = "blue" }: { icon: React.ElementType; color?: "blue" | "green" | "orange" }) {
  const bg = color === "green" ? "bg-[#DCFCE7]" : color === "orange" ? "bg-[#FEF3C7]" : "bg-[#EFF6FF]";
  const ic = color === "green" ? "text-[#16A34A]" : color === "orange" ? "text-[#D97706]" : "text-[#2563EB]";
  return (
    <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
      <Icon className={`w-5 h-5 ${ic}`} />
    </div>
  );
}

function FeatureRow({ icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <IconBox icon={icon} />
      <div>
        <p className="font-semibold text-[#0F172A] text-sm leading-snug">{title}</p>
        <p className="text-[#64748B] text-sm leading-snug mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function StatPill({ icon: Icon, label, sub }: { icon: React.ElementType; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#2563EB]" />
      </div>
      <div>
        <p className="font-bold text-[#0F172A] text-sm leading-none">{label}</p>
        <p className="text-[#64748B] text-xs leading-tight mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#F0F4FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-12">
              <Badge icon={Shield} label="We've Got Your Back" />
              <h1 className="text-4xl lg:text-[2.6rem] font-extrabold text-[#0F172A] leading-[1.15] mb-4">
                We're Here to Support<br />Your Restaurant,{" "}
                <span className="text-[#2563EB]">Always.</span>
              </h1>
              <p className="text-[#64748B] text-base leading-relaxed mb-8 max-w-md">
                From setup to everyday support — our team is with you at every step. Your success is our priority.
              </p>
              <div className="space-y-5 mb-8">
                <FeatureRow icon={Users} title="Real People, Real Support" desc="Talk to our friendly experts who understand the restaurant business." />
                <FeatureRow icon={Clock} title="Fast Response" desc="We typically respond within 1 hour during business hours." />
                <FeatureRow icon={MapPin} title="Ireland & UK Support" desc="Local support teams ready to help restaurants across Ireland & the UK." />
                <FeatureRow icon={Shield} title="Onboarding & Training" desc="We help you get started the right way with full onboarding and training." />
              </div>
            </div>
            <div className="relative bg-[#F8FAFC] lg:min-h-[500px] flex flex-col">
              <div className="flex-1 overflow-hidden">
                <img src={heroImg} alt="Support agent" className="w-full h-full object-cover object-top" style={{ minHeight: 320 }} />
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-lg p-6 m-6 lg:absolute lg:bottom-6 lg:left-6 lg:right-6 lg:m-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A] text-base leading-tight">Ready to See GPOS in Action?</p>
                    <p className="text-[#64748B] text-xs leading-snug mt-0.5">Book a free demo and see how GPOS can transform your restaurant operations.</p>
                  </div>
                </div>
                <Link
                  to="/get_demo"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl py-3.5 px-5 flex items-center justify-center gap-2 transition-colors text-sm mt-2 no-underline"
                >
                  <Calendar className="w-4 h-4" />
                  Book Your Free Demo
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </Link>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex -space-x-2">
                    {["#60A5FA", "#34D399", "#F87171"].map((c, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: c }}>
                        {["A", "B", "C"][i]}
                      </div>
                    ))}
                  </div>
                  <p className="text-[#64748B] text-xs leading-tight">
                    Trusted by <span className="font-semibold text-[#0F172A]">1,000+</span> restaurant owners across Ireland & the UK.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatPill icon={Star} label="Trusted by 1,000+" sub="Restaurant owners across Ireland & UK." />
          <StatPill icon={CheckCircle} label="No Hidden Fees" sub="Transparent pricing. No surprises." />
          <StatPill icon={Lock} label="Secure & Reliable" sub="Your data is safe with enterprise-grade security." />
          <StatPill icon={Store} label="Built for Restaurants" sub="All the tools you need to run and grow your restaurant." />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ fullName: "", restaurantName: "", email: "", phone: "", businessType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); };

  return (
    <section className="bg-[#F0F4FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
            <div className="bg-[#F8FAFC] p-10 lg:p-12 border-r border-[#E2E8F0]">
              <Badge icon={Send} label="Send Us a Message" />
              <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-[#0F172A] leading-[1.15] mb-4">
                We'd Love to<br />Hear <span className="text-[#2563EB]">From You</span>
              </h2>
              <p className="text-[#64748B] text-sm leading-relaxed mb-8 max-w-xs">
                Fill out the form and our team will get back to you as soon as possible. Let's find the perfect solution for your restaurant.
              </p>
              <div className="space-y-5">
                <FeatureRow icon={Zap} title="Fast Response" desc="We typically respond within 1 hour during business hours." />
                <FeatureRow icon={Headphones} title="Real Human Support" desc="Talk to real people who understand your restaurant business." />
                <FeatureRow icon={Shield} title="Secure & Private" desc="Your information is safe with us. We never share your details." />
                <FeatureRow icon={MapPin} title="Ireland & UK Support" desc="Proudly supporting restaurants across Ireland & the UK." />
              </div>
            </div>
            <div className="p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-1">Send us a Message</h3>
              <p className="text-[#64748B] text-sm mb-8">We're here to help your restaurant grow.</p>
              {submitted && (
                <div className="mb-6 bg-[#DCFCE7] border border-[#86EFAC] rounded-xl px-4 py-3 flex items-center gap-2 text-[#16A34A] text-sm font-medium">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Message sent! We'll get back to you within 1 hour.
                </div>
              )}
              <form onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Full Name <span className="text-[#2563EB]">*</span></label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                      <input name="fullName" value={form.fullName} onChange={handle} required placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder:text-[#94A3B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Restaurant Name <span className="text-[#2563EB]">*</span></label>
                    <div className="relative">
                      <Store className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                      <input name="restaurantName" value={form.restaurantName} onChange={handle} required placeholder="Enter restaurant name"
                        className="w-full pl-10 pr-4 py-3 border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder:text-[#94A3B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Email Address <span className="text-[#2563EB]">*</span></label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                      <input type="email" name="email" value={form.email} onChange={handle} required placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder:text-[#94A3B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Phone Number <span className="text-[#2563EB]">*</span></label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                      <input type="tel" name="phone" value={form.phone} onChange={handle} required placeholder="Enter your phone number"
                        className="w-full pl-10 pr-4 py-3 border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder:text-[#94A3B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">Business Type <span className="text-[#94A3B8] font-normal">(Optional)</span></label>
                  <div className="relative">
                    <select name="businessType" value={form.businessType} onChange={handle}
                      className="w-full pl-4 pr-10 py-3 border border-[#E2E8F0] rounded-xl text-sm bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] appearance-none transition-colors">
                      <option value="">Select your business type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="cafe">Cafe</option>
                      <option value="takeaway">Takeaway</option>
                      <option value="pub">Pub & Bar</option>
                      <option value="hotel">Hotel</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-1.5">How can we help you? <span className="text-[#2563EB]">*</span></label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={5} placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder:text-[#94A3B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] resize-y transition-colors" />
                </div>
                <button type="submit" className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl py-3.5 px-5 flex items-center justify-center gap-2 transition-colors text-sm">
                  <Send className="w-4 h-4" />Send Message
                </button>
                <p className="text-center text-xs text-[#94A3B8] flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  By submitting this form, you agree to our <Link to="/privacy" className="text-[#2563EB] hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelCard({ icon: Icon, title, desc, detail, btnLabel, btnIcon: BtnIcon, href }: {
  icon: React.ElementType; title: string; desc: string; detail: string; btnLabel: string; btnIcon: React.ElementType; href?: string;
}) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-[#2563EB]" />
      </div>
      <h3 className="font-bold text-[#0F172A] text-lg mb-2">{title}</h3>
      <p className="text-[#64748B] text-sm leading-relaxed mb-4">{desc}</p>
      <p className="text-[#2563EB] font-semibold text-base mb-5 whitespace-pre-line">{detail}</p>
      <a href={href || "#"} className="w-full border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#0F172A] transition-colors no-underline">
        <BtnIcon className="w-4 h-4 text-[#2563EB]" />{btnLabel}
      </a>
    </div>
  );
}

function ReachSection() {
  return (
    <section className="bg-[#F0F4FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge icon={Headphones} label="Get in Touch" />
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4">
            Multiple Ways to <span className="text-[#2563EB]">Reach Us</span>
          </h2>
          <p className="text-[#64748B] text-base max-w-lg mx-auto leading-relaxed">
            Choose the easiest way to connect with our team.<br />We're always ready to help your restaurant grow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <ChannelCard icon={MessageCircle} title="WhatsApp" desc="Chat with us instantly on WhatsApp for quick support." detail={WHATSAPP_DISPLAY} btnLabel="Chat on WhatsApp" btnIcon={MessageCircle} href={`https://wa.me/3532210200`} />
          <ChannelCard icon={Phone} title="Phone" desc="Speak directly with our team during business hours." detail={PHONE_DISPLAY} btnLabel="Call Us" btnIcon={Phone} href={PHONE_HREF} />
          <ChannelCard icon={Mail} title="Email" desc="Send us an email and we'll get back to you ASAP." detail={EMAIL_DISPLAY} btnLabel="Send Email" btnIcon={Mail} href={EMAIL_HREF} />
          <ChannelCard icon={Clock} title="Business Hours" desc="We're available to help you during the following hours." detail={"Mon – Fri\n9AM – 6PM IST"} btnLabel="View Timezone" btnIcon={Calendar} />
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Shield className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <p className="font-bold text-[#0F172A] text-sm">We Respond Fast</p>
              <p className="text-[#64748B] text-xs mt-0.5 leading-tight">Our average response time is less than 1 hour during business hours.</p>
            </div>
          </div>
          <StatPill icon={Zap} label="Quick Response" sub="We reply within 1 hour on average" />
          <StatPill icon={Users} label="Real People" sub="Talk to real humans who understand restaurants" />
          <StatPill icon={MapPin} label="Local Support" sub="Proudly supporting restaurants across Ireland & UK" />
        </div>
      </div>
    </section>
  );
}

function CRMSection() {
  const basicFeatures = ["Point of Sale (POS)", "Kitchen & Order Management", "Menu & Inventory Management", "Reports & Analytics", "Multi-Branch Management", "Basic Support"];
  const crmFeatures = [
    { label: "Customer Database", desc: "Build a complete customer profile and history." },
    { label: "Loyalty & Rewards", desc: "Create loyalty programs that bring customers back." },
    { label: "WhatsApp Marketing", desc: "Send offers, updates & reminders directly on WhatsApp." },
    { label: "Campaigns & Promotions", desc: "Run targeted campaigns and boost repeat orders." },
    { label: "Customer Insights", desc: "Track behavior, preferences & lifetime value." },
    { label: "Priority Support", desc: "Get faster support when you need it." },
  ];
  const wowStats = [{ val: "2X", label: "More Repeat Customers" }, { val: "35%", label: "Higher Average Order Value" }, { val: "40%", label: "More Revenue Growth" }];
  const bottomItems = [
    { icon: Users, title: "Bring Customers Back", desc: "Re-engage inactive customers and win them back." },
    { icon: TrendingUp, title: "Increase Order Value", desc: "Upsell, cross-sell and run personalized offers." },
    { icon: Heart, title: "Build Loyalty", desc: "Reward your best customers and build long-term loyalty." },
    { icon: Rocket, title: "Grow Faster", desc: "Data-driven insights help you make smarter decisions." },
    { icon: Bell, title: "Stay Top of Mind", desc: "WhatsApp campaigns keep your brand in their mind." },
  ];
  const crmIcons = [Users, Star, MessageCircle, TrendingUp, BarChart3, Headphones];
  const basicIcons = [BarChart3, ChefHat, Package, BarChart3, Store, Headphones];

  return (
    <section className="bg-[#F0F4FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge icon={ArrowRight} label="Why Upgrade to CRM Plan?" />
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-3 leading-tight">
            Upgrade to CRM. Grow Your Restaurant.<br />
            <span className="text-[#2563EB]">More Customers. More Orders. More Profit.</span>
          </h2>
          <p className="text-[#64748B] text-base max-w-2xl mx-auto">
            The Basic Plan helps you run your restaurant. The CRM Plan helps you grow it.<br />
            Upgrade and unlock the tools that bring customers back and keep them coming.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 border-r border-[#E2E8F0]">
              <div className="inline-block border border-[#CBD5E1] rounded-full px-3 py-1 text-xs font-semibold text-[#475569] mb-4 tracking-wide uppercase">Basic Plan</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Run Your Restaurant</h3>
              <p className="text-[#64748B] text-sm mb-6">Everything you need for daily operations.</p>
              <div className="space-y-3.5">
                {basicFeatures.map((f, i) => {
                  const Ic = basicIcons[i];
                  return (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#F1F5F9] flex items-center justify-center flex-shrink-0">
                        <Ic className="w-3 h-3 text-[#64748B]" />
                      </div>
                      <span className="text-[#334155] text-sm">{f}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-8 border-r border-[#E2E8F0] relative">
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full flex items-center justify-center z-10 text-xs font-bold text-[#475569]">VS</div>
              <div className="inline-block bg-[#2563EB] rounded-full px-3 py-1 text-xs font-semibold text-white mb-4 tracking-wide uppercase">CRM Plan</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Grow Your Restaurant</h3>
              <p className="text-[#64748B] text-sm mb-6">Everything in Basic, plus powerful CRM tools.</p>
              <div className="space-y-3.5">
                {crmFeatures.map((f, i) => {
                  const Ic = crmIcons[i];
                  return (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Ic className="w-3 h-3 text-[#2563EB]" />
                      </div>
                      <div>
                        <span className="font-semibold text-[#0F172A] text-sm">{f.label}</span>
                        <p className="text-[#64748B] text-xs mt-0.5">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-8 bg-[#F8FAFC]">
              <h3 className="font-bold text-[#0F172A] text-lg mb-1">More Engagement.</h3>
              <h3 className="font-bold text-[#0F172A] text-lg mb-6">More Repeat Orders.</h3>
              <div className="flex items-end gap-1 h-28 mb-6">
                {[20, 30, 25, 40, 50, 55, 70, 80, 90, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i >= 7 ? "#2563EB" : "#BFDBFE" }} />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {wowStats.map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-extrabold text-[#2563EB]">{s.val}</p>
                    <p className="text-xs text-[#64748B] leading-tight mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl px-4 py-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <p className="text-xs font-medium text-[#1E40AF]">CRM turns one-time customers into loyal, repeat buyers.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#E2E8F0] px-8 py-5 grid grid-cols-2 md:grid-cols-5 gap-4">
            {bottomItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-xs">{item.title}</p>
                  <p className="text-[#64748B] text-xs mt-0.5 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1E3A8A] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Store className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">Don't Just Run Your Restaurant.</p>
              <p className="text-blue-200 font-bold text-lg leading-tight">Grow It.</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20" />
          <div className="flex-1 text-center md:text-left">
            <p className="text-blue-200 text-sm">Basic Plan gets you started.</p>
            <p className="text-blue-200 text-sm font-semibold">CRM Plan takes you further.</p>
          </div>
          <ArrowRight className="w-6 h-6 text-white/40 hidden md:block" />
          <Link to="/pricing" className="bg-white text-[#1E3A8A] font-bold rounded-xl px-6 py-3 text-sm hover:bg-blue-50 transition-colors flex items-center gap-2 flex-shrink-0 no-underline">
            <TrendingUp className="w-4 h-4" />Upgrade to CRM Plan
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProfitRow({ label, val, negative, highlight }: { label: string; val: string; negative?: boolean; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center py-2.5 border-b border-[#E2E8F0] last:border-0">
      <span className={`text-sm ${highlight ? "text-[#0F172A] font-bold" : "text-[#334155]"}`}>{label}</span>
      <span className={`text-sm font-semibold ${negative ? "text-[#DC2626]" : highlight ? "text-[#0F172A] text-base" : "text-[#334155]"}`}>{val}</span>
    </div>
  );
}

function ProfitSection() {
  const savings = [
    { icon: TrendingUp, color: "orange" as const, metric: "€10.50", label: "More Profit Per Order", sub: "Save up to on every order" },
    { icon: BarChart3, color: "green" as const, metric: "€210.00", label: "More Profit Per Day", sub: "(On 20 Orders) in your pocket" },
    { icon: Calendar, color: "blue" as const, metric: "€6,300.00", label: "More Profit Per Month", sub: "(On 20 Orders/Day) extra profit" },
    { icon: Shield, color: "blue" as const, metric: null, label: "Own Your Customers", sub: "No middlemen. No commission. Just your business, your customers, your profit." },
  ];

  return (
    <section className="bg-[#F0F4FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge icon={TrendingUp} label="Save More Profit From Every Order" />
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-3 leading-tight">
            Keep More Profit From Every Order.<br />
            <span className="text-[#2563EB]">It's Your Money. Keep It.</span>
          </h2>
          <p className="text-[#64748B] text-base max-w-2xl mx-auto">
            Delivery platforms take a big cut of every order. GPOS helps you reduce costs, increase profits, and grow your business — every single day.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="bg-[#FEF2F2] border-b border-[#FECACA] px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#DC2626] rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#DC2626] text-base">Delivery Apps</p>
                <p className="text-[#EF4444] text-xs">High Commissions. Lower Profits.</p>
              </div>
            </div>
            <div className="px-6 py-4">
              <ProfitRow label="Customer Order Value" val="€50.00" />
              <ProfitRow label="Delivery Platform Commission (20%)" val="-€10.00" negative />
              <ProfitRow label="Payment Processing Fee (2.5%)" val="-€1.25" negative />
              <ProfitRow label="Other Fees & Charges" val="-€0.75" negative />
              <ProfitRow label="Your Profit Per Order" val="€38.00" highlight />
            </div>
            <div className="px-6 pb-5">
              <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl px-4 py-3 flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-[#DC2626] flex-shrink-0" />
                <p className="text-xs font-medium text-[#DC2626]">You're losing €12.00 on every order to delivery platforms.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="bg-[#DCFCE7] border-b border-[#86EFAC] px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#16A34A] rounded-lg flex items-center justify-center">
                <Store className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#16A34A] text-base">With GPOS</p>
                <p className="text-[#15803D] text-xs">No Commissions. More Profit.</p>
              </div>
            </div>
            <div className="px-6 py-4">
              <ProfitRow label="Customer Order Value" val="€50.00" />
              <ProfitRow label="Delivery Platform Commission" val="€0.00" />
              <ProfitRow label="Payment Processing Fee (0.5%)" val="-€0.25" negative />
              <ProfitRow label="Other Fees & Charges" val="-€0.25" negative />
              <ProfitRow label="Your Profit Per Order" val="€49.50" highlight />
            </div>
            <div className="px-6 pb-5">
              <div className="bg-[#DCFCE7] border border-[#86EFAC] rounded-xl px-4 py-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                <p className="text-xs font-medium text-[#16A34A]">Keep €11.50 more profit on every order with GPOS.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-6">
          {savings.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 flex flex-col items-center text-center">
              <IconBox icon={s.icon} color={s.color} />
              {s.metric && <p className="text-2xl font-extrabold text-[#0F172A] mt-3 mb-1">{s.metric}</p>}
              <p className="font-semibold text-[#0F172A] text-sm mt-2">{s.label}</p>
              <p className="text-[#64748B] text-xs mt-1 leading-tight">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#1E3A8A] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="text-white font-bold text-xl mb-1">Ready to Keep More of Your Profits?</p>
            <p className="text-blue-200 text-sm">Join 1,000+ restaurant owners who switched to GPOS and stopped giving their profits away.</p>
          </div>
          <Link
            to="/get_demo"
            className="bg-white text-[#1E3A8A] font-bold rounded-xl px-6 py-3 text-sm hover:bg-blue-50 transition-colors flex items-center gap-2 flex-shrink-0 no-underline"
          >
            <Calendar className="w-4 h-4" />Book a Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ContactSales() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#F0F4FF]">
      <Navbar />
      <main className="pt-[72px]">
        <HeroSection />
        <ContactSection />
        <ReachSection />
        <CRMSection />
        <ProfitSection />
      </main>
      <Footer />
    </div>
  );
}
