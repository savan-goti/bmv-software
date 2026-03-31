const tickerItems = [
    'Single Vendor E-Commerce',
    'Multi Vendor Marketplace',
    'Social Media App',
    'Chat App Development',
    'Transport / Cab App',
    'Service Booking App',
    'Domain Name Suggestions',
    'Web Hosting Services',
    'Website Design',
    'SEO & Digital Marketing',
    'UI/UX Design',
    'Custom Web Applications',
]

const Ticker = () => {
    return (
        <div className="ticker-wrap">
            <div className="ticker-track">
                {/* Duplicate for seamless loop */}
                {[...tickerItems, ...tickerItems].map((item, i) => (
                    <span className="ticker-item" key={i}>{item}</span>
                ))}
            </div>
        </div>
    )
}

export default Ticker
