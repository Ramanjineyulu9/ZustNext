'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Let's Build Something Great</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Ready to start your digital transformation? Get in touch with our team of experts today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:shadow-md">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-blue">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Email Us</h4>
                                <p className="font-semibold">zustnext.com@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:shadow-md">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-green">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Call Us</h4>
                                <p className="font-semibold">+91 9951029140</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:shadow-md">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-red">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Visit Us</h4>
                                <p className="font-semibold">Headquarters: Guntur</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <form className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">First Name</label>
                                <input type="text" placeholder="Ram" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                                <input type="text" placeholder="P" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Business Email</label>
                                <input type="email" placeholder="ram@company.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Project Description</label>
                                <textarea rows="4" placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <button type="submit" className="btn btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 group">
                                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .bg-slate-50 { background-color: #f8fafc; }
        .text-primary-blue { color: var(--primary-blue); }
        .text-primary-green { color: var(--primary-green); }
        .text-primary-red { color: var(--primary-red); }
      `}</style>
        </section>
    );
};

export default Contact;
