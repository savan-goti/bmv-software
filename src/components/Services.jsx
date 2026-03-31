import { useState } from 'react'

const services = [
    {
        cat: 'ecom',
        icon: '🛍️',
        iconBg: '#eff6ff',
        badge: 'Website + App',
        badgeClass: '',
        title: 'Single Vendor E-Commerce',
        desc: 'Complete online store for your own brand — product catalog, cart, secure checkout, payment gateway, order tracking, and a dedicated mobile app for iOS & Android.',
        tech: ['React', 'Node.js', 'Flutter'],
        link: 'Get a Quote →',
    },
    {
        cat: 'ecom',
        icon: '🏪',
        iconBg: '#fff7ed',
        badge: 'Website + App',
        badgeClass: 'srv-badge-orange',
        title: 'Multi Vendor E-Commerce',
        desc: 'Build your own marketplace like Amazon or Flipkart — multiple sellers, individual dashboards, commission management, reviews, and a powerful buyer + seller mobile app.',
        tech: ['Laravel', 'Vue.js', 'React Native'],
        link: 'Get a Quote →',
    },
    {
        cat: 'app',
        icon: '📲',
        iconBg: '#fdf4ff',
        badge: 'Mobile App',
        badgeClass: 'srv-badge-purple',
        title: 'Social Media App',
        desc: 'Custom social networking app with user profiles, posts, stories, reels, likes, comments, follow system, real-time notifications, and a fully moderated admin panel.',
        tech: ['React Native', 'Firebase', 'Node.js'],
        link: 'Get a Quote →',
    },
    {
        cat: 'app',
        icon: '💬',
        iconBg: '#f0fdf4',
        badge: 'Mobile App',
        badgeClass: 'srv-badge-green',
        title: 'Chat App',
        desc: 'Real-time messaging app with one-on-one & group chats, voice/video calls, media sharing, end-to-end encryption, read receipts, and online status — like WhatsApp for your brand.',
        tech: ['Flutter', 'Socket.io', 'WebRTC'],
        link: 'Get a Quote →',
    },
    {
        cat: 'app',
        icon: '🚗',
        iconBg: '#fefce8',
        badge: 'Mobile App',
        badgeClass: 'srv-badge-yellow',
        title: 'Transport App',
        desc: 'Uber/Ola-like cab booking app with real-time GPS tracking, driver & rider apps, fare calculation, booking history, ratings, and a live admin dashboard for fleet management.',
        tech: ['React Native', 'Google Maps', 'Node.js'],
        link: 'Get a Quote →',
    },
    {
        cat: 'app',
        icon: '🔧',
        iconBg: '#fff1f2',
        badge: 'Mobile App',
        badgeClass: 'srv-badge-red',
        title: 'Service Booking App',
        desc: 'On-demand service booking app for salons, cleaners, electricians, plumbers & more — slot booking, provider profiles, live tracking, payments, and reviews built-in.',
        tech: ['Flutter', 'Laravel', 'Stripe'],
        link: 'Get a Quote →',
    },
    {
        cat: 'web',
        icon: '🌐',
        iconBg: '#eff6ff',
        badge: '',
        badgeClass: '',
        title: 'Website Design & Development',
        desc: 'Beautiful, fast, fully responsive websites — landing pages, business sites, portfolios, blogs — crafted to convert visitors into paying customers.',
        tech: ['Next.js', 'WordPress', 'Tailwind'],
        link: 'Learn More →',
    },
    {
        cat: 'web',
        icon: '⚙️',
        iconBg: '#ecfeff',
        badge: '',
        badgeClass: '',
        title: 'Custom Web Applications',
        desc: 'Scalable, secure web apps — ERP, CRM, portals, HR systems, dashboards — engineered precisely to your unique business workflows and requirements.',
        tech: ['React', 'Django', 'PostgreSQL'],
        link: 'Learn More →',
    },
    {
        cat: 'web',
        icon: '🔍',
        iconBg: '#fff1f2',
        badge: '',
        badgeClass: '',
        title: 'SEO & Digital Marketing',
        desc: 'Rank higher on Google. Our certified SEO experts drive organic traffic, run Google Ads campaigns, and deliver measurable growth results every month.',
        tech: ['SEO', 'Google Ads', 'Analytics'],
        link: 'Learn More →',
    },
    {
        cat: 'infra',
        icon: '🔗',
        iconBg: '#f0fdf4',
        badge: 'Free Consultation',
        badgeClass: 'srv-badge-green',
        title: 'Domain Name Suggestions',
        desc: "Struggling to find the perfect domain? Our experts suggest catchy, SEO-friendly, brandable domain names for your business — and handle registration for .com, .in, .net & more.",
        tech: ['.com', '.in', '.net', '.io'],
        link: 'Get Suggestions →',
    },
    {
        cat: 'infra',
        icon: '🖥️',
        iconBg: '#fdf4ff',
        badge: 'Starting ₹999/yr',
        badgeClass: 'srv-badge-purple',
        title: 'Web Hosting Services',
        desc: 'Fast, secure, and reliable hosting plans — Shared Hosting, VPS, Cloud, and Dedicated Servers. 99.9% uptime guarantee with SSL certificate, daily backups & 24/7 support.',
        tech: ['Shared', 'VPS', 'Cloud', 'Dedicated'],
        link: 'View Plans →',
    },
    {
        cat: 'web',
        icon: '🎨',
        iconBg: '#fff7ed',
        badge: '',
        badgeClass: '',
        title: 'UI/UX Design',
        desc: 'Stunning, user-first design experiences — wireframes, prototypes, design systems, and pixel-perfect UI that keeps users engaged and boosts your conversion rates.',
        tech: ['Figma', 'Adobe XD', 'Prototype'],
        link: 'Learn More →',
    },
]

const tabs = [
    { label: 'All Services', cat: 'all' },
    { label: 'E-Commerce', cat: 'ecom' },
    { label: 'Mobile Apps', cat: 'app' },
    { label: 'Web & Design', cat: 'web' },
    { label: 'Domain & Hosting', cat: 'infra' },
]

const Services = () => {
    const [activeCat, setActiveCat] = useState('all')

    return (
        <section className="services-section" id="services">
            <div className="sec-head sec-head-center">
                <span className="sec-tag">What We Offer</span>
                <div className="sec-title">Our <span>Core Services</span></div>
                <div className="divider divider-center"></div>
                <p className="sec-desc">
                    From stunning website designs to powerful web applications — we deliver
                    end-to-end digital solutions tailored for your business.
                </p>
            </div>

            <div className="srv-tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.cat}
                        className={`srv-tab ${activeCat === tab.cat ? 'active' : ''}`}
                        onClick={() => setActiveCat(tab.cat)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="services-grid" id="servicesGrid">
                {services
                    .filter(s => activeCat === 'all' || s.cat === activeCat)
                    .map((service, i) => (
                        <div className="srv-card" key={i}>
                            <div className="srv-icon" style={{ background: service.iconBg }}>
                                {service.icon}
                            </div>
                            {service.badge && (
                                <div className={`srv-badge ${service.badgeClass}`}>{service.badge}</div>
                            )}
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <div className="srv-tech">
                                {service.tech.map(t => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                            <a href="#contact" className="srv-link">{service.link}</a>
                        </div>
                    ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
                    Don't see what you need?{' '}
                    <a href="#contact" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                        Contact us for a custom solution →
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Services
