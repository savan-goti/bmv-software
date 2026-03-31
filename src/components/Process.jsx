const steps = [
    { icon: '💬', title: 'Discovery Call', desc: 'We understand your business goals, target audience, and requirements.' },
    { icon: '🎨', title: 'Design & Plan', desc: 'We create wireframes and design mockups for your approval.' },
    { icon: '⚙️', title: 'Development', desc: 'Our developers build your website with clean, optimized code.' },
    { icon: '🧪', title: 'Testing & QA', desc: 'We rigorously test on all devices and browsers before launch.' },
    { icon: '🚀', title: 'Launch & Support', desc: 'We go live and provide continuous support and maintenance.' },
]

const Process = () => {
    return (
        <section className="process-section">
            <div className="sec-head sec-head-center">
                <span className="sec-tag">How We Work</span>
                <div className="sec-title">Our Simple <span>5-Step Process</span></div>
                <div className="divider divider-center"></div>
            </div>
            <div className="process-steps">
                <div className="process-line"></div>
                {steps.map((step, i) => (
                    <div className="process-step" key={i}>
                        <div className="p-circle">{step.icon}</div>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Process
