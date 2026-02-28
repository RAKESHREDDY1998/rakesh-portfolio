import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Full Stack Developer with <strong>5+ years of experience</strong> building scalable, cloud-native applications. I specialize in React and Node.js, with expertise in Azure and AWS services.
            </p>
            <p>
              My passion is creating robust, user-friendly solutions that solve real business problems. I'm skilled in designing microservices architectures, implementing CI/CD pipelines, and mentoring junior developers.
            </p>
            <p>
              I have a proven track record of:
            </p>
            <ul className="about-highlights">
              <li>Reducing API response times by 40% through optimization</li>
              <li>Achieving 90% test coverage with Jest and Mocha</li>
              <li>Cutting deployment time by 70% with Docker and Azure DevOps</li>
              <li>Building healthcare portals with HIPAA compliance</li>
              <li>Handling 1M+ monthly transactions with 99.99% uptime</li>
              <li>Mentoring developers and standardizing best practices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
