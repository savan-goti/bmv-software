import { useState } from 'react'

const faqData = [
    { q: 'How long does it take to build a website?', a: 'A basic 5-page website typically takes 7–10 working days. Business websites with CMS take 2–3 weeks, while custom web applications can take 4–8 weeks depending on complexity.' },
    { q: 'Do you provide free domain and hosting?', a: "Yes! All our plans include a free domain name and hosting for 1 year. After the first year, renewal costs are very affordable and we'll remind you in advance." },
    { q: 'Will my website be mobile-friendly?', a: 'Absolutely. Every website we build is fully responsive and tested on all screen sizes — mobile, tablet, and desktop. Mobile-first design is our standard approach.' },
    { q: 'Can I update my website content myself?', a: 'Yes! We build websites with user-friendly CMS (like WordPress) so you can easily update text, images, blogs, and products without any technical knowledge.' },
    { q: 'What technologies do you use?', a: 'We use modern technologies including React, Next.js, Vue.js, Laravel, Node.js, WordPress, Shopify, Flutter, and more — depending on what best fits your project needs.' },
    { q: 'Do you offer post-launch support?', a: 'Yes! We offer 1–12 months of free support depending on your plan. After that, we have affordable Annual Maintenance Contracts (AMC) to keep your site running smoothly.' },
    { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfer, credit/debit cards, and PayPal. We typically work with a 50% advance payment and balance upon project completion and approval.' },
    { q: 'Can you redesign my existing website?', a: 'Absolutely! Website redesign is one of our specialties. We can revamp your existing site while preserving your SEO rankings, content, and domain authority.' },
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <section id="faq">
            <div className="sec-head sec-head-center">
                <span className="sec-tag">FAQs</span>
                <div className="sec-title">Frequently Asked <span>Questions</span></div>
                <div className="divider divider-center"></div>
            </div>
            <div className="faq-grid">
                {faqData.map((item, i) => (
                    <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
                        <button className="faq-q" onClick={() => toggle(i)}>
                            {item.q}
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-a">
                            <div className="faq-a-inner">{item.a}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ
