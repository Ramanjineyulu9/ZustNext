'use client';

const About = () => {
    const stats = [
        { label: 'Projects Delivered', value: '500+' },
        { label: 'Team Members', value: '50+' },
        { label: 'Years Experience', value: '10+' },
        { label: 'Client Satisfaction', value: '98%' }
    ];

    return (
        <section id="about" className="section bg-slate-50">
            <div className="container grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-square bg-blue-100 rounded-3xl overflow-hidden shadow-2xl rotate-2 relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                            alt="Team Meeting"
                            className="w-full h-full object-cover -rotate-2 scale-110"
                        />
                    </div>
                    <div className="absolute top-10 -left-10 w-full h-full border-4 border-primary-blue rounded-3xl -z-0"></div>

                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex gap-4 items-center border border-slate-100">
                        <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white text-2xl">
                            ✓
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Certified Partner</p>
                            <p className="text-lg font-bold">Trusted Globally</p>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                    <h2 className="text-4xl font-bold mb-6">Transforming Ideas into Digital Reality</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Zustnext is a leading technology partner dedicated to transforming businesses through innovative digital solutions. We combine strategic thinking with technical excellence to help our clients scale and succeed in a rapidly evolving digital landscape.
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-8">
                        {stats.map(stat => (
                            <div key={stat.label}>
                                <h4 className="text-3xl font-extrabold text-primary-blue mb-1">{stat.value}</h4>
                                <p className="text-sm font-medium text-gray-500 uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-white border-l-4 border-primary-blue rounded-r-xl shadow-sm italic text-gray-700">
                        "Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance efficiency, and unlock new opportunities."
                    </div>
                </div>
            </div>

            <style jsx>{`
        .bg-blue-100 { background-color: #dbeafe; }
        .text-primary-blue { color: var(--primary-blue); }
        .text-primary-green { color: var(--primary-green); }
        .border-primary-blue { border-color: var(--primary-blue); }
      `}</style>
        </section>
    );
};

export default About;
