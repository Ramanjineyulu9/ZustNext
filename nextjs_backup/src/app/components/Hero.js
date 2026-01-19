'use client';

import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="section relative overflow-hidden flex items-center min-h-screen pt-20">
            {/* Background Shapes */}
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-red-50 rounded-full blur-3xl -z-10 opacity-50"></div>

            <div className="container grid md:grid-row-2 lg:grid-cols-2 gap-12 items-center">
                <div className="hero-text animate-slideIn">
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                        Everything you need to <span className="text-primary-blue">Optimize</span> your business
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Zustnext empowers your business with cutting-edge analytics, automation, and high-performance applications designed to drive real growth.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="btn btn-primary px-8 py-4 text-lg">
                            Start Free Trial
                        </button>
                        <button className="btn bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
                            Watch Demo
                        </button>
                    </div>
                    <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            No credit card required
                        </span>
                        <span className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            14-day free trial
                        </span>
                    </div>
                </div>

                <div className="hero-visual relative animate-fadeIn">
                    {/* Abstract Zoho PageSense style graphic */}
                    <div className="relative z-10 p-4 bg-white rounded-2xl shadow-2xl border border-slate-100">
                        <img
                            src="https://www.zoho.com/pagesense/images/pagesense-feature-banner.png"
                            alt="Analytics Dashboard"
                            className="rounded-lg w-full h-auto"
                        />
                    </div>

                    {/* Floating accoutrements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-yellow rounded-xl shadow-lg -rotate-12 -z-10 flex items-center justify-center text-3xl">
                        📊
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-green rounded-full shadow-lg -z-10 flex items-center justify-center opacity-20">
                    </div>
                </div>
            </div>

            <style jsx>{`
        .bg-blue-50 { background-color: #eff6ff; }
        .bg-red-50 { background-color: #fef2f2; }
        .text-primary-blue { color: var(--primary-blue); }
        .text-primary-green { color: var(--primary-green); }
        .bg-primary-yellow { background-color: var(--primary-yellow); }
        .bg-primary-green { background-color: var(--primary-green); }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .text-slate-900 { color: #0f172a; }
        .text-slate-600 { color: #475569; }
        .text-slate-700 { color: #334155; }
        .text-slate-500 { color: #64748b; }
        .border-slate-100 { border-color: #f1f5f9; }
        .border-slate-200 { border-color: #e2e8f0; }
      `}</style>
        </section>
    );
};

export default Hero;
