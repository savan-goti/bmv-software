const projects = [
    {
        img: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80',
        alt: 'E-Commerce Project',
        title: 'StyleMart E-Commerce Store',
        category: 'E-Commerce · Fashion',
        tags: ['Shopify', 'React', 'UI/UX'],
    },
    {
        img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
        alt: 'Healthcare Portal',
        title: 'MediCare Patient Portal',
        category: 'Web App · Healthcare',
        tags: ['Laravel', 'Vue.js', 'MySQL'],
    },
    {
        img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
        alt: 'Real Estate Website',
        title: 'PropSearch Real Estate',
        category: 'Website · Real Estate',
        tags: ['Next.js', 'Node.js', 'SEO'],
    },
    {
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
        alt: 'Event Website',
        title: 'EventPro Management Platform',
        category: 'Web App · Events',
        tags: ['React', 'Firebase', 'Stripe'],
    },
    {
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        alt: 'Restaurant Website',
        title: 'TastyBite Restaurant Website',
        category: 'Website · Food & Beverage',
        tags: ['WordPress', 'WooCommerce'],
    },
    {
        img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80',
        alt: 'EdTech Platform',
        title: 'EduLearn LMS Platform',
        category: 'Web App · EdTech',
        tags: ['Angular', 'Django', 'AWS'],
    },
]

const Portfolio = () => {
    return (
        <section id="work" style={{ background: 'var(--light)' }}>
            <div className="sec-head sec-head-center">
                <span className="sec-tag">Our Portfolio</span>
                <div className="sec-title">Recent <span>Work & Projects</span></div>
                <div className="divider divider-center"></div>
                <p className="sec-desc">
                    A glimpse of the stunning digital experiences we've created for our clients across India and globally.
                </p>
            </div>
            <div className="work-grid">
                {projects.map((project, i) => (
                    <div className="work-card" key={i}>
                        <div className="work-img">
                            <img src={project.img} alt={project.alt} loading="lazy" />
                            <div className="work-overlay">
                                <a href="#contact">View Project ↗</a>
                            </div>
                        </div>
                        <div className="work-info">
                            <h4>{project.title}</h4>
                            <span>{project.category}</span>
                            <div className="work-tags">
                                {project.tags.map(tag => (
                                    <span className="work-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <a href="#contact" className="btn btn-secondary">View All Projects →</a>
            </div>
        </section>
    )
}

export default Portfolio
