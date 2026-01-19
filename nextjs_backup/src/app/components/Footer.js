'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image src="/logo.svg" alt="Zustnext Logo" width={32} height={32} className="brightness-200" />
                            <span className="text-2xl font-extrabold tracking-tight text-white">
                                Zust<span className="text-primary-blue">next</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            Empowering businesses with modern technology solutions. Your partner in digital transformation.
                        </p>
                        <div className="flex gap-4">
                            {/* Social icons could go here */}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Solutions</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#services" className="hover:text-white transition-colors">Web Apps</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Mobile Apps</Link></li>
                            <li><Link href="#products" className="hover:text-white transition-colors">SaaS Products</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Automation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Zustnext. All rights reserved.</p>
                </div>
            </div>

            <style jsx>{`
        .text-primary-blue { color: var(--primary-blue); }
        .bg-slate-900 { background-color: #0f172a; }
        .text-slate-400 { color: #94a3b8; }
        .border-slate-800 { border-color: #1e293b; }
      `}</style>
        </footer>
    );
};

export default Footer;
