const About = () => {
    return (
        <section id="about">
            <div className="about-grid">
                <div className="about-imgs">
                    <div className="about-main">
                        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80" alt="BMV Software Office" loading="lazy" />
                    </div>
                    <div className="about-mini">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" alt="Team Meeting" loading="lazy" />
                    </div>
                    <div className="about-exp-badge">
                        <strong>12+</strong>
                        <span>Years of<br />Excellence</span>
                    </div>
                </div>
                <div className="about-text">
                    <span className="sec-tag">About BMV Software Solution</span>
                    <div className="sec-title">India's Trusted <span>Website Development</span> Partner</div>
                    <div className="divider"></div>
                    <p className="sec-desc" style={{ marginBottom: '16px' }}>
                        BMV Software Solution is a leading web development and website selling company based in India.
                        Since 2012, we have been helping businesses of all sizes establish a strong online presence
                        with innovative digital solutions.
                    </p>
                    <p className="sec-desc">
                        Our team of 48+ experienced developers, designers, and digital marketers work together to
                        deliver projects on time, within budget, and beyond expectations.
                    </p>
                    <ul className="features">
                        <li className="feature-item">Expert Team of 48+ Professionals</li>
                        <li className="feature-item">1200+ Successful Projects</li>
                        <li className="feature-item">500+ Satisfied Clients</li>
                        <li className="feature-item">15+ Countries Served</li>
                        <li className="feature-item">24/7 Customer Support</li>
                        <li className="feature-item">100% Client Satisfaction</li>
                        <li className="feature-item">Affordable Pricing Plans</li>
                        <li className="feature-item">On-Time Delivery</li>
                    </ul>
                    <a href="#contact" className="btn btn-secondary">Know More About Us →</a>
                </div>
            </div>
        </section>
    )
}

export default About
