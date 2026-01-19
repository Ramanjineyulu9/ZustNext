import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Replace these with your actual Service ID, Template ID, and Public Key
        // You can find these in your EmailJS dashboard: https://dashboard.emailjs.com/admin
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_HERE';
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_HERE';
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE';

        if (SERVICE_ID === 'YOUR_SERVICE_ID_HERE') {
            // Simulation mode if keys are missing
            setTimeout(() => {
                console.log("EmailJS Simulation: Email sent successfully!");
                setSubmitStatus('success');
                setIsSubmitting(false);
                e.target.reset();
            }, 1500);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="section bg-white">
            <div className="container">
                <div className="text-center mb-16" style={{ marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        Let's Build Something Great
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg mx-auto"
                        style={{ maxWidth: '600px' }}
                    >
                        Ready to start your digital transformation? Get in touch with our team of experts today.
                    </motion.p>
                </div>

                <div className="grid lg-grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <div className="contact-info-card transition-all">
                            <div className="contact-icon-wrapper" style={{ color: 'var(--primary-blue)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="contact-label">Email Us</h4>
                                <p className="contact-value">zustnext.com@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-info-card transition-all">
                            <div className="contact-icon-wrapper" style={{ color: 'var(--primary-green)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="contact-label">Call Us</h4>
                                <p className="contact-value">+91 9951029140</p>
                            </div>
                        </div>

                        <div className="contact-info-card transition-all">
                            <div className="contact-icon-wrapper" style={{ color: 'var(--primary-red)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="contact-label">Visit Us</h4>
                                <p className="contact-value">Guntur, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ gridColumn: 'span 2' }}
                        className="mobile-full-width"
                    >
                        <form ref={formRef} onSubmit={sendEmail} className="contact-form-container">
                            <div className="form-gradient-bar"></div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" name="user_name" placeholder="Ram" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name="user_lastname" placeholder="P" className="form-input" />
                                </div>
                                <div className="form-group full-width">
                                    <label className="form-label">Business Email</label>
                                    <input type="email" name="user_email" placeholder="ram@company.com" className="form-input" required />
                                </div>
                                <div className="form-group full-width">
                                    <label className="form-label">Project Description</label>
                                    <textarea name="message" rows="4" placeholder="Tell us about your project or business challenges..." className="form-input form-textarea" required></textarea>
                                </div>
                                <div className="form-group full-width">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary submit-btn group"
                                        style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        {!isSubmitting && <Send size={20} className="group-hover-translate" />}
                                    </motion.button>
                                </div>

                                <AnimatePresence>
                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="form-group full-width"
                                            style={{ marginTop: '1rem', padding: '1rem', background: '#dcfce7', borderRadius: '0.5rem', border: '1px solid #86efac', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#166534' }}
                                        >
                                            <CheckCircle2 size={20} />
                                            <span>Message sent successfully! We'll get back to you soon.</span>
                                        </motion.div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="form-group full-width"
                                            style={{ marginTop: '1rem', padding: '1rem', background: '#fee2e2', borderRadius: '0.5rem', border: '1px solid #fca5a5', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#991b1b' }}
                                        >
                                            <AlertCircle size={20} />
                                            <span>Failed to send message. Please try again later or email us directly.</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .contact-info-card {
          display: flex;
          gap: 1rem;
          padding: 1.75rem;
          background: #f8fafc;
          border-radius: 1rem;
          border: 1px solid #f1f5f9;
        }
        .contact-info-card:hover { shadow: var(--shadow-lg); transform: translateY(-4px); background: white; }
        .contact-icon-wrapper {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .contact-label { font-size: 10px; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 0.25rem; }
        .contact-value { font-weight: 700; color: #1e293b; }
        .contact-form-container {
          background: white;
          padding: 2.5rem;
          border-radius: 2.5rem;
          border: 1px solid #f1f5f9;
          box-shadow: var(--shadow-xl);
          position: relative;
          overflow: hidden;
        }
        .form-gradient-bar { position: absolute; top: 0; left: 0; width: 100%; h: 8px; background: linear-gradient(to right, var(--primary-blue), var(--primary-green), var(--primary-red)); opacity: 0.3; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.75rem; }
        .form-group.full-width { grid-column: span 2; }
        .form-label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; }
        .form-input { padding: 1rem 1.25rem; border-radius: 0.75rem; background: #f8fafc; border: 1px solid #f1f5f9; outline: none; transition: all 0.3s ease; font-size: 14px; }
        .form-input:focus { border-color: var(--primary-blue); box-shadow: 0 0 0 4px rgba(9, 116, 176, 0.1); background: white; }
        .form-textarea { resize: none; }
        .submit-btn { width: 100%; padding: 1.25rem; background: #0f172a; color: white; display: flex; gap: 0.75rem; font-size: 1.125rem; }
        .submit-btn:hover { background: #1e293b; }
        .group:hover .group-hover-translate { transform: translate(4px, -4px); transition: transform 0.3s ease; }
        @media (max-width: 767px) {
          .form-grid { grid-template-columns: 1fr; }
          .form-group.full-width { grid-column: span 1; }
          .mobile-full-width { grid-column: span 3 !important; }
        }
      `}} />
        </section>
    );
};

export default Contact;
