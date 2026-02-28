import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Rakesh Reddy T</h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <p className="hero-description">
          Building scalable, cloud-native applications with React, Node.js, and Azure
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#experience" className="btn btn-secondary">View My Work</a>
        </div>
        <div className="hero-contact">
          <p>📧 <a href="mailto:Rakeshreddythippana99@gmail.com">Rakeshreddythippana99@gmail.com</a></p>
          <p>📱 <a href="tel:+19132388137">+1 (913) 238-8137</a></p>
        </div>
      </div>
    </section>
  )
}
