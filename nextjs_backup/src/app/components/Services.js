'use client';

import { Layout, Smartphone, Globe, BarChart3, BrainCircuit, Workflow } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Web App Development',
            description: 'Build scalable, secure, modern web apps tailored to your business needs.',
            icon: <Globe size={40} />,
            color: 'var(--primary-blue)',
            tags: ['Frontend & Backend', 'UX/UI']
        },
        {
            title: 'Mobile App Development',
            description: 'High-performance native & cross-platform apps for iOS and Android.',
            icon: <Smartphone size={40} />,
            color: 'var(--primary-green)',
            tags: ['iOS & Android', 'Hybrid']
        },
        {
            title: 'SaaS Solutions',
            description: 'Design, build & scale multi-tenant SaaS products with subscription management.',
            icon: <Layout size={40} />,
            color: 'var(--primary-red)',
            tags: ['Multi-tenant', 'Cloud']
        },
        {
            title: 'Data Engineering & BI',
            description: 'ETL, pipelines and visualization for reliable decision-making.',
            icon: <BarChart3 size={40} />,
            color: 'var(--primary-blue)',
            tags: ['Dashboards', 'KPIs']
        },
        {
            title: 'Predictive Analytics',
            description: 'Leverage ML for forecasting, automation and improved outcomes.',
            icon: <BrainCircuit size={40} />,
            color: 'var(--primary-red)',
            tags: ['ML Models', 'Forecasting']
        },
        {
            title: 'Automation & Workflow',
            description: 'Automate reports and business workflows to save hours monthly.',
            icon: <Workflow size={40} />,
            color: 'var(--primary-green)',
            tags: ['ETL', 'RPA']
        }
    ];

    return (
        <section id="services" className="section bg-slate-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Comprehensive digital solutions designed to accelerate your business growth and operational efficiency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card p-8 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div
                                className="icon-wrapper mb-6 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: service.color }}
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-slate-50 { background-color: #f8fafc; }
        .text-slate-500 { color: #64748b; }
        .service-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
        </section>
    );
};

export default Services;
