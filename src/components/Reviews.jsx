const reviews = [
    {
        text: 'BMV Software transformed our outdated website into a modern, fast-loading platform. Our online orders increased by 40% within 2 months. Outstanding service!',
        name: 'Rajesh Kumar',
        role: 'CEO, StyleMart India',
        platform: '⭐ Google Review',
        initials: 'RK',
        gradient: 'linear-gradient(135deg,#1a3c8f,#3b70e8)',
    },
    {
        text: 'They delivered our healthcare portal on time and within budget. The team was professional, responsive, and the result exceeded our expectations completely.',
        name: 'Dr. Priya Mehta',
        role: 'Director, MediCare Hospital',
        platform: '⭐ Google Review',
        initials: 'PM',
        gradient: 'linear-gradient(135deg,#059669,#10b981)',
    },
    {
        text: "We've worked with several agencies but BMV Software stands apart. Their technical expertise, creativity, and communication are world-class. Highly recommend!",
        name: 'Amit Shah',
        role: 'Founder, PropSearch Realty',
        platform: '⭐ Google Review',
        initials: 'AS',
        gradient: 'linear-gradient(135deg,#f97316,#ef4444)',
    },
    {
        text: 'Got my Shopify store built in just 7 days! The design is gorgeous and the performance is excellent. Sales have gone up significantly since launch. Thank you BMV!',
        name: 'Sneha Patel',
        role: 'Owner, Ethnic Wear Boutique',
        platform: '⭐ Clutch Review',
        initials: 'SP',
        gradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    },
    {
        text: 'BMV built our custom ERP system from scratch. It has saved us 20+ hours of work every week. The quality of code and documentation is truly exceptional.',
        name: 'Vikas Trivedi',
        role: 'CTO, LogisticsPro Ltd.',
        platform: '⭐ Clutch Review',
        initials: 'VT',
        gradient: 'linear-gradient(135deg,#0891b2,#22d3ee)',
    },
    {
        text: "Our restaurant website now gets 200+ online reservations monthly! BMV's team understood our vision perfectly and delivered a beautiful, functional website.",
        name: 'Meena Rao',
        role: 'Owner, TastyBite Restaurants',
        platform: '⭐ Google Review',
        initials: 'MR',
        gradient: 'linear-gradient(135deg,#dc2626,#f87171)',
    },
]

const Reviews = () => {
    return (
        <section id="reviews">
            <div className="sec-head sec-head-center">
                <span className="sec-tag">Client Reviews</span>
                <div className="sec-title">What Our <span>Clients Say</span></div>
                <div className="divider divider-center"></div>
                <p className="sec-desc">
                    500+ happy clients trust BMV Software Solution. Here's what some of them have to say.
                </p>
            </div>
            <div className="reviews-grid">
                {reviews.map((review, i) => (
                    <div className="review-card" key={i}>
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">{review.text}</p>
                        <div className="review-author">
                            <div
                                className="r-avatar-fallback"
                                style={{ background: review.gradient }}
                            >
                                {review.initials}
                            </div>
                            <div>
                                <strong>{review.name}</strong>
                                <span>{review.role}</span>
                                <span className="review-platform">{review.platform}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews
