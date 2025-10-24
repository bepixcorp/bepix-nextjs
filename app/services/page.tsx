export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Mobile Friendly"],
      icon: "🌐"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and reach.",
      features: ["Social Media Marketing", "Content Strategy", "Analytics & Reporting", "Brand Development"],
      icon: "📈"
    },
    {
      title: "Consulting Services",
      description: "Expert consulting to help optimize your business processes and strategies.",
      features: ["Business Analysis", "Process Optimization", "Strategic Planning", "Performance Review"],
      icon: "💼"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Setup", "Security Implementation", "24/7 Monitoring"],
      icon: "☁️"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
      features: ["Data Visualization", "Predictive Analytics", "Custom Dashboards", "Real-time Reporting"],
      icon: "📊"
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
      features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Issue Resolution"],
      icon: "🔧"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions tailored to meet your business needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">We start by understanding your needs, goals, and challenges.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">We create a detailed plan tailored to your specific requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Our expert team executes the plan with precision and care.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing support to ensure your continued success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <div className="text-3xl font-bold mb-4">$99<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li>Basic consultation</li>
                <li>Email support</li>
                <li>Monthly reports</li>
                <li>Up to 5 hours</li>
              </ul>
              <button className="btn w-full">Get Started</button>
            </div>
            
            <div className="card text-center border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <div className="text-3xl font-bold mb-4">$299<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li>Full consultation</li>
                <li>Priority support</li>
                <li>Weekly reports</li>
                <li>Up to 20 hours</li>
                <li>Advanced analytics</li>
              </ul>
              <button className="btn w-full">Get Started</button>
            </div>
            
            <div className="card text-center">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">$599<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li>Dedicated team</li>
                <li>24/7 support</li>
                <li>Daily reports</li>
                <li>Unlimited hours</li>
                <li>Custom solutions</li>
                <li>On-site visits</li>
              </ul>
              <button className="btn w-full">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your business grow</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn">Schedule Consultation</button>
            <button className="btn" style={{ background: 'transparent', border: '2px solid #4f46e5', color: '#4f46e5' }}>
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
