'use client';

import { ArrowRight } from 'lucide-react';

const Products = () => {
    const products = [
        {
            name: 'Email Automation',
            description: 'Intelligent email automation solution to boost engagement and conversions.',
            color: '#EA4335', // red
            accent: 'AI-Powered',
            category: 'Marketing'
        },
        {
            name: 'Results Platform',
            description: 'Secure, user-friendly platform for educational institutions to publish results.',
            color: '#4285F4', // blue
            accent: 'Secure',
            category: 'Education'
        },
        {
            name: 'Analytics Dashboard',
            description: 'Real-time business intelligence with customizable reports and KPI tracking.',
            color: '#FBBC05', // yellow
            accent: 'Real-time',
            category: 'Analytics'
        },
        {
            name: 'Project Suite',
            description: 'Comprehensive project management with task tracking and collaboration.',
            color: '#34A853', // green
            accent: 'Productivity',
            category: 'Collaboration'
        },
        {
            name: 'CRM System',
            description: 'End-to-end CRM solution for managing customer interactions and sales.',
            color: '#4285F4', // blue
            accent: 'Sales',
            category: 'Customer Support'
        },
        {
            name: 'Inventory Sync',
            description: 'Automated inventory tracking and order management for retail businesses.',
            color: '#EA4335', // red
            accent: 'Automation',
            category: 'Logistics'
        }
    ];

    return (
        <section id="products" className="section bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold mb-4">Our Powerful Products</h2>
                        <p className="text-gray-600 text-lg">
                            Innovative tools built to streamline your operations and maximize efficiency.
                        </p>
                    </div>
                    <button className="vibrant-link flex items-center gap-2 text-lg">
                        View All Products <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="product-card p-10 rounded-2xl transition-all duration-300 relative overflow-hidden group"
                            style={{ background: `${product.color}08`, border: `1px solid ${product.color}15` }}
                        >
                            <div
                                className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"
                                style={{ background: product.color }}
                            ></div>

                            <div className="flex justify-between items-start mb-6">
                                <div
                                    className="w-12 h-1 bg-white rounded-full"
                                    style={{ backgroundColor: product.color }}
                                ></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                                    {product.category}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-slate-900 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-sm font-semibold px-3 py-1 rounded bg-white shadow-sm border border-slate-100">
                                    {product.accent}
                                </span>
                                <button
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md border border-slate-50 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white"
                                >
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1);
          background: white !important;
          border-color: #e2e8f0 !important;
        }
      `}</style>
        </section>
    );
};

export default Products;
