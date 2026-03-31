const whyItems = [
    {
        num: '01',
        title: 'Experienced & Certified Team',
        desc: '12+ years of expertise with certified developers in all major technologies and frameworks.',
    },
    {
        num: '02',
        title: 'Affordable Pricing, Premium Quality',
        desc: 'We offer the best value for money — no hidden charges, transparent pricing, and quality results.',
    },
    {
        num: '03',
        title: 'On-Time Delivery Guaranteed',
        desc: 'We respect your deadlines. Every project is delivered on schedule with rigorous quality checks.',
    },
    {
        num: '04',
        title: 'Ongoing Support & Maintenance',
        desc: "Our relationship doesn't end at launch. We provide dedicated support to keep your site running perfectly.",
    },
]

const WhyChooseUs = () => {
    return (
        <section className="why-section" id="why">
            <div className="why-grid">
                <div className="why-img">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80" alt="Why BMV Software" loading="lazy" />
                </div>
                <div className="why-text">
                    <span className="sec-tag" style={{ color: '#fb923c' }}>Why Choose Us</span>
                    <div className="sec-title">
                        Why <span style={{ color: '#93c5fd' }}>BMV Software</span> is the Right Choice
                    </div>
                    <div className="divider"></div>
                    <p className="sec-desc">
                        We don't just build websites — we build digital business engines that generate leads, sales, and growth 24/7.
                    </p>
                    <div className="why-list">
                        {whyItems.map(item => (
                            <div className="why-item" key={item.num}>
                                <div className="why-num">{item.num}</div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
