import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>I'm always interested in hearing about new opportunities and connecting with fellow developers.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:Rakeshreddythippana99@gmail.com">Rakeshreddythippana99@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+19132388137">+1 (913) 238-8137</a>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/rakeshreddy</a>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/rakeshreddy</a>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
