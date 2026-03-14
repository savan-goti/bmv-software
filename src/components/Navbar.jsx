import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Technologies', href: '#technology' },
    { label: 'Our Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
]

const sidebarLinks = [
    { label: 'Home', href: '#hero', icon: '🏠' },
    { label: 'Services', href: '#services', icon: '⚙️' },
    { label: 'About Us', href: '#about', icon: 'ℹ️' },
    { label: 'Technologies', href: '#technology', icon: '💻' },
    { label: 'Why Choose Us', href: '#why', icon: '⭐' },
    { label: 'Our Work', href: '#work', icon: '💼' },
    { label: 'Plans & Pricing', href: '#pricing', icon: '💰' },
    { label: 'Client Reviews', href: '#reviews', icon: '💬' },
    { label: 'FAQs', href: '#faq', icon: '❓' },
    { label: 'Contact Us', href: '#contact', icon: '📩' },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const sections = document.querySelectorAll('section[id]')
            let current = ''

            // Threshold in pixels from the top of the viewport
            const threshold = 160

            sections.forEach(s => {
                const rect = s.getBoundingClientRect()
                // A section is active if it's currently at the top defined by threshold
                if (rect.top <= threshold && rect.bottom >= threshold) {
                    current = s.id
                }
            })

            // Very top of page
            if (window.scrollY < 100) current = 'hero'

            if (current && current !== activeSection) {
                const isNavLink = navLinks.some(link => link.href === `#${current}`)
                if (isNavLink) {
                    setActiveSection(current)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        // Initial detection
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [activeSection])

    const openSidebar = () => {
        setSidebarOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
        document.body.style.overflow = ''
    }

    return (
        <>
            <div id="navbar" className={scrolled ? 'scrolled' : ''}>
                <div className="nav-inner">
                    <div className="logo-wrap">
                        <div className="logo-icon">BMV</div>
                        <div className="logo-text">
                            BMV Software
                            <small>Solution Pvt. Ltd.</small>
                        </div>
                    </div>
                    <ul className="nav-menu">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-actions">
                        <a href="#contact" className="btn btn-primary">Get Free Quote</a>
                    </div>
                    <button className="hamburger" onClick={openSidebar} aria-label="Open menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`overlay ${sidebarOpen ? 'open' : ''}`}
                onClick={closeSidebar}
            />

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-head">
                    <span className="sidebar-logo">BMV Software Solution</span>
                    <button className="sidebar-close" onClick={closeSidebar}>✕</button>
                </div>
                <ul className="sidebar-menu">
                    {sidebarLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href} onClick={closeSidebar}>
                                <span className="s-icon">{link.icon}</span> {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="sidebar-cta">
                    <a href="#contact" onClick={closeSidebar}>🚀 Get Free Consultation</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
