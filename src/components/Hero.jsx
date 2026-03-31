import { useEffect, useRef } from 'react'

const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '1200+', label: 'Projects Done' },
    { value: '12+', label: 'Years Exp.' },
    { value: '48', label: 'Expert Team' },
]

const Hero = () => {
    const statsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target
                        const text = el.textContent
                        const target = parseInt(text.replace(/\D/g, ''))
                        const suffix = text.replace(/[0-9]/g, '')
                        let count = 0
                        const step = Math.ceil(target / 50)
                        const timer = setInterval(() => {
                            count = Math.min(count + step, target)
                            el.textContent = count + suffix
                            if (count >= target) clearInterval(timer)
                        }, 30)
                        observer.unobserve(el)
                    }
                })
            },
            { threshold: 0.5 }
        )

        if (statsRef.current) {
            statsRef.current.querySelectorAll('.h-stat strong').forEach(el => observer.observe(el))
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className="hero" id="hero">
            <div className="hero-inner">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="badge-dot"></span> Trusted by 500+ Businesses Across India
                    </div>
                    <h1>
                        Welcome to<br />
                        <span>BMV Software</span><br />
                        Solution
                    </h1>
                    <p>
                        We design, develop &amp; sell professional websites, e-commerce stores,
                        and custom web applications that grow your business online. Fast. Reliable. Affordable.
                    </p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">🚀 Start Your Project</a>
                        <a href="#work" className="btn btn-white">📂 View Our Work</a>
                    </div>
                    <div className="hero-stats" ref={statsRef}>
                        {stats.map(stat => (
                            <div className="h-stat" key={stat.label}>
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-img-frame">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                            alt="BMV Software Team"
                            loading="eager"
                        />
                    </div>
                    <div className="hero-float hero-float-1">
                        <div className="f-icon">🏆</div>
                        <div>
                            <strong>Award Winning Agency</strong>
                            <span>Best IT Company 2024</span>
                        </div>
                    </div>
                    <div className="hero-float hero-float-2">
                        <strong>4.9★</strong>
                        <span>Google Rating</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
