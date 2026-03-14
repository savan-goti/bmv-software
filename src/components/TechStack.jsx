import { useState, useEffect, useRef } from 'react'

const techData = {
    frontend: {
        label: '⚡ Frontend Development',
        items: [
            { icon: '⚛️', name: 'React.js', type: 'Frontend Library', level: 95 },
            { icon: '💚', name: 'Vue.js', type: 'Progressive Framework', level: 88 },
            { icon: '🅰️', name: 'Angular', type: 'Frontend Framework', level: 82 },
            { icon: '🔷', name: 'Next.js', type: 'React Framework', level: 90 },
            { icon: '🌊', name: 'Tailwind CSS', type: 'CSS Framework', level: 93 },
            { icon: '🟨', name: 'JavaScript', type: 'Core Language', level: 97 },
        ],
    },
    backend: {
        label: '🔧 Backend Development',
        items: [
            { icon: '🐘', name: 'Laravel', type: 'PHP Framework', level: 94 },
            { icon: '🐍', name: 'Python', type: 'Backend Language', level: 86 },
            { icon: '☕', name: 'Java', type: 'Enterprise Backend', level: 80 },
            { icon: '🟢', name: 'Node.js', type: 'JS Runtime', level: 91 },
            { icon: '🔥', name: 'Django', type: 'Python Framework', level: 79 },
            { icon: '⚡', name: 'Spring Boot', type: 'Java Framework', level: 75 },
        ],
    },
    mobile: {
        label: '📱 Mobile App Development',
        items: [
            { icon: '🦋', name: 'Flutter', type: 'Cross-Platform', level: 92 },
            { icon: '⚛️', name: 'React Native', type: 'Cross-Platform', level: 89 },
            { icon: '🍎', name: 'Swift', type: 'iOS Native', level: 74 },
            { icon: '🤖', name: 'Kotlin', type: 'Android Native', level: 77 },
            { icon: '🔮', name: 'Ionic', type: 'Hybrid App', level: 70 },
            { icon: '🔥', name: 'Firebase', type: 'Backend as Service', level: 88 },
        ],
    },
    database: {
        label: '🗄️ Databases',
        items: [
            { icon: '🐬', name: 'MySQL', type: 'Relational DB', level: 96 },
            { icon: '🍃', name: 'MongoDB', type: 'NoSQL Database', level: 87 },
            { icon: '🐘', name: 'PostgreSQL', type: 'Relational DB', level: 82 },
            { icon: '🔴', name: 'Redis', type: 'Cache & Queue', level: 78 },
            { icon: '🔶', name: 'SQLite', type: 'Lightweight DB', level: 72 },
            { icon: '🌿', name: 'Supabase', type: 'Open Source BaaS', level: 70 },
        ],
    },
    cloud: {
        label: '☁️ Cloud & DevOps',
        items: [
            { icon: '☁️', name: 'AWS', type: 'Cloud Platform', level: 84 },
            { icon: '🔵', name: 'Google Cloud', type: 'Cloud Platform', level: 78 },
            { icon: '🐳', name: 'Docker', type: 'Containerization', level: 80 },
            { icon: '⚙️', name: 'GitHub CI/CD', type: 'DevOps Pipeline', level: 85 },
            { icon: '▲', name: 'Vercel', type: 'Deployment', level: 88 },
            { icon: '🟣', name: 'DigitalOcean', type: 'Cloud Hosting', level: 76 },
        ],
    },
}

const categories = [
    { label: 'All Technologies', cat: 'all' },
    { label: 'Frontend', cat: 'frontend' },
    { label: 'Backend', cat: 'backend' },
    { label: 'Mobile', cat: 'mobile' },
    { label: 'Database', cat: 'database' },
    { label: 'Cloud & DevOps', cat: 'cloud' },
]

const TechStack = () => {
    const [activeCat, setActiveCat] = useState('all')
    const [animatedGroups, setAnimatedGroups] = useState(new Set())
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const group = entry.target.dataset.tgroup
                        setAnimatedGroups(prev => new Set([...prev, group]))
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.tech-group').forEach(g => observer.observe(g))
        }

        return () => observer.disconnect()
    }, [])

    const visibleGroups = activeCat === 'all'
        ? Object.entries(techData)
        : Object.entries(techData).filter(([key]) => key === activeCat)

    return (
        <section className="tech-section" id="technology" ref={sectionRef}>
            <div className="sec-head sec-head-center">
                <span className="sec-tag">Technologies We Use</span>
                <div className="sec-title">Powered by <span>Modern Technologies</span></div>
                <div className="divider divider-center"></div>
                <p className="sec-desc">
                    We work with industry-leading technologies to build fast, scalable, and future-proof digital products for our clients.
                </p>
            </div>

            <div className="tech-cats">
                {categories.map(c => (
                    <button
                        key={c.cat}
                        className={`tech-cat-btn ${activeCat === c.cat ? 'active' : ''}`}
                        onClick={() => setActiveCat(c.cat)}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            {visibleGroups.map(([key, group]) => (
                <div className="tech-group" key={key} data-tgroup={key}>
                    <div className="tech-group-label">{group.label}</div>
                    <div className="tech-cards">
                        {group.items.map(tech => (
                            <div className="tech-card" key={tech.name}>
                                <span className="tc-icon">{tech.icon}</span>
                                <span className="tc-name">{tech.name}</span>
                                <span className="tc-type">{tech.type}</span>
                                <div className="tc-bar">
                                    <div
                                        className="tc-bar-fill"
                                        style={{ width: animatedGroups.has(key) ? `${tech.level}%` : '0%' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default TechStack
