const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-brand">
                    <div className="logo-wrap">
                        <div className="logo-icon">BMV</div>
                        <div className="logo-text" style={{ color: '#fff' }}>
                            BMV Software
                            <small style={{ color: 'rgba(255,255,255,0.4)' }}>Solution Pvt. Ltd.</small>
                        </div>
                    </div>
                    <p className="footer-desc">
                        India's trusted website development & selling company since 2012. We design, develop, and grow businesses across India and 15+ countries globally.
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                        <a href="#" aria-label="Twitter">tw</a>
                        <a href="#" aria-label="YouTube">yt</a>
                        <a href="#" aria-label="Instagram">ig</a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#services">Website Design</a></li>
                        <li><a href="#services">E-Commerce Development</a></li>
                        <li><a href="#services">Mobile App Development</a></li>
                        <li><a href="#services">Custom Web Apps</a></li>
                        <li><a href="#services">SEO & Marketing</a></li>
                        <li><a href="#services">UI/UX Design</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#work">Portfolio</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <span>📍</span>
                            123 Tech Park, Sector 18, Noida, UP 201301
                        </li>
                        <li>
                            <span>📞</span>
                            +91 98765 43210
                        </li>
                        <li>
                            <span>✉️</span>
                            info@bmvsoftware.com
                        </li>
                        <li>
                            <span>⏰</span>
                            Mon–Sat: 9AM – 7PM
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {currentYear} BMV Software Solution Pvt. Ltd. All Rights Reserved.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
