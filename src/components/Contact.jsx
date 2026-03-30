import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', company: '', service: '', budget: '', details: '',
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        // --- GOOGLE SHEETS INTEGRATION ---
        // Replace this URL with your actual Google Apps Script Web App URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx4dn0MHmf5psamib7nZCPI4HCEIQ61vbwi-ERYJGdNpMNA_wweUP4fYgUjISTudo8/exec'

        try {
            await fetch(scriptURL, {
                method: 'POST',
                body: new FormData(e.target),
            })

            alert('Data successfully saved!')
            setFormData({
                name: '', email: '', phone: '', company: '',
                service: '', budget: '', details: ''
            })
        } catch (error) {
            console.error(error)
            alert('Error submitting form')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="contact-section" id="contact">
            <div className="sec-head sec-head-center">
                <span className="sec-tag">Get In Touch</span>
                <div className="sec-title">Start Your <span>Project Today</span></div>
                <div className="divider divider-center"></div>
            </div>
            <div className="contact-grid">
                <div className="contact-info">
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>
                        Let's Build Something<br />Amazing Together
                    </h3>
                    <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '28px' }}>
                        Have a project in mind? Fill out the form and our team will get back to you within 2 business hours with a free consultation.
                    </p>
                    <div className="c-item">
                        <div className="c-icon">📍</div>
                        <div><strong>Office Address</strong><span>Shop No.01 Golden Ashtha Karanjade sector R3 Navi Mumbai 410206</span></div>
                    </div>
                    <div className="c-item">
                        <div className="c-icon">📞</div>
                        <div><strong>Phone / WhatsApp</strong><span>+91 93228 01354 / +91 76001 10159</span></div>
                    </div>
                    <div className="c-item">
                        <div className="c-icon">✉️</div>
                        <div><strong>Email Us</strong><span><a href="mailto:info@lyrovix.com">info@lyrovix.com</a></span></div>
                    </div>
                    <div className="c-item">
                        <div className="c-icon">⏰</div>
                        <div><strong>Working Hours</strong><span>Mon – Sat: 9:00 AM to 7:00 PM IST</span></div>
                    </div>
                    <div className="social-row">
                        <a href="#" className="social-btn" aria-label="Facebook">f</a>
                        <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
                        <a href="#" className="social-btn" aria-label="Twitter">tw</a>
                        <a href="#" className="social-btn" aria-label="YouTube">yt</a>
                        <a href="#" className="social-btn" aria-label="Instagram">ig</a>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Send Us a Message</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input type="text" id="name" name="name" placeholder="e.g. Rajesh Kumar" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input type="email" id="email" name="email" placeholder="rajesh@email.com" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone / WhatsApp</label>
                            <input type="tel" id="phone" name="phone" placeholder="+91 93228 01354" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company Name</label>
                            <input type="text" id="company" name="company" placeholder="Your Company Ltd." value={formData.company} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="service">Service Required</label>
                            <select id="service" name="service" value={formData.service} onChange={handleChange}>
                                <option value="">Select a service</option>
                                <option>Website Design &amp; Development</option>
                                <option>E-Commerce Development</option>
                                <option>Mobile App Development</option>
                                <option>Custom Web Application</option>
                                <option>SEO &amp; Digital Marketing</option>
                                <option>Ready-Made Website</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="budget">Your Budget</label>
                            <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                                <option value="">Select budget range</option>
                                <option>Under ₹10,000</option>
                                <option>₹10,000 – ₹25,000</option>
                                <option>₹25,000 – ₹60,000</option>
                                <option>₹60,000+</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">Project Details *</label>
                        <textarea id="details" name="details" placeholder="Tell us about your project, goals, and timeline..." value={formData.details} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-btn" disabled={isLoading}>
                        {isLoading ? '⏳ Sending...' : "🚀 Send My Request — It's Free!"}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
