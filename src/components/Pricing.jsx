const plans = [
    {
        label: 'Starter',
        name: 'Basic Plan',
        price: '9,999',
        period: 'One-time payment • Best for startups',
        featured: false,
        btnClass: 'btn-plan-primary',
        features: [
            { text: '5 Page Responsive Website', included: true },
            { text: 'Mobile-Friendly Design', included: true },
            { text: 'Contact Form Integration', included: true },
            { text: 'Basic SEO Setup', included: true },
            { text: 'Google Maps Integration', included: true },
            { text: 'Free Domain (1 Year)', included: true },
            { text: '1 Month Free Support', included: true },
            { text: 'E-Commerce Features', included: false },
            { text: 'Live Chat Integration', included: false },
        ],
    },
    {
        label: 'Best Value',
        name: 'Business Plan',
        price: '24,999',
        period: 'One-time payment • Best for businesses',
        featured: true,
        btnClass: 'btn-plan-accent',
        features: [
            { text: 'Up to 15 Pages Website', included: true },
            { text: 'CMS (WordPress / Custom)', included: true },
            { text: 'E-Commerce Ready', included: true },
            { text: 'Advanced SEO Optimization', included: true },
            { text: 'WhatsApp / Live Chat', included: true },
            { text: 'Free Domain + Hosting (1 Year)', included: true },
            { text: 'Speed & Performance Optimization', included: true },
            { text: 'Social Media Integration', included: true },
            { text: '6 Months Free Support', included: true },
        ],
    },
    {
        label: 'Enterprise',
        name: 'Premium Plan',
        price: '59,999',
        period: 'One-time payment • Best for enterprises',
        featured: false,
        btnClass: 'btn-plan-primary',
        features: [
            { text: 'Unlimited Pages', included: true },
            { text: 'Custom Web Application', included: true },
            { text: 'Payment Gateway Integration', included: true },
            { text: 'Full SEO Campaign', included: true },
            { text: 'Admin Dashboard & Panel', included: true },
            { text: 'Free Domain + Premium Hosting', included: true },
            { text: 'Analytics & Reporting', included: true },
            { text: 'Multi-Language Support', included: true },
            { text: '12 Months Priority Support', included: true },
        ],
    },
]

const Pricing = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="sec-head sec-head-center">
                <span className="sec-tag">Plans & Pricing</span>
                <div className="sec-title">Transparent <span>Website Packages</span></div>
                <div className="divider divider-center"></div>
                <p className="sec-desc">
                    No hidden fees. Choose the plan that fits your budget. All plans include free domain and hosting for 1 year.
                </p>
            </div>
            <div className="pricing-grid">
                {plans.map((plan, i) => (
                    <div className={`p-card ${plan.featured ? 'featured' : ''}`} key={i}>
                        {plan.featured && <span className="featured-badge">🔥 Most Popular</span>}
                        <p className="p-label">{plan.label}</p>
                        <div className="p-name">{plan.name}</div>
                        <div className="p-price"><sup>₹</sup>{plan.price}</div>
                        <p className="p-period">{plan.period}</p>
                        <hr className="p-divider" />
                        <ul className="p-features">
                            {plan.features.map((f, j) => (
                                <li key={j}>
                                    <span className={f.included ? 'check' : 'cross'}>
                                        {f.included ? '✔' : '✗'}
                                    </span>
                                    {f.text}
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className={`btn-plan ${plan.btnClass}`}>Get Started →</a>
                    </div>
                ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '28px', color: 'var(--gray)', fontSize: '0.88rem' }}>
                Need a custom solution?{' '}
                <a href="#contact" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                    Contact us for a tailored quote →
                </a>
            </p>
        </section>
    )
}

export default Pricing
