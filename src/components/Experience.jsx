import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      company: 'Cigna',
      position: 'Full Stack Developer',
      period: 'May 2025 – Present',
      highlights: [
        'Built scalable healthcare portals using React.js, Redux, and JWT authentication, reducing data breach risk by 60%',
        'Engineered microservices in Node.js for billing and scheduling, handling 1M+ monthly transactions with 99.99% uptime',
        'Integrated Azure Blob Storage and Functions for secure document workflows, improving HIPAA compliance',
        'Automated CI/CD pipelines using Jenkins, Docker, and Azure DevOps, cutting deployment time by 70%',
        'Refactored legacy code into modular React and Node components, reducing tech debt by 40%',
        'Implemented role-based access control (RBAC) using JWT and middleware for enhanced security',
        'Developed responsive UI with React.js, Bootstrap, and Material UI, improving mobile engagement by 25%',
        'Designed optimized PostgreSQL schemas, increasing data retrieval speed by 35%',
        'Containerized Node.js services with Docker for consistent, rollback-ready deployments',
        'Built unit and integration test suites using Jest and Mocha, achieving 90% coverage'
      ]
    },
    {
      company: 'PNC Financial',
      position: 'Full Stack Developer',
      period: 'Mar 2024 – Apr 2025',
      highlights: [
        'Rebuilt onboarding platform using Angular and Node.js, improving registration speed by 50%',
        'Engineered AWS Lambda functions for fraud detection, reducing transaction anomalies by 35%',
        'Implemented real-time alerting via WebSockets and Twilio SMS, improving client response by 22%',
        'Ensured GDPR and PCI compliance with secure authentication and data encryption',
        'Designed MongoDB schemas handling 500K+ entries daily with optimized aggregation strategies',
        'Built serverless services using AWS Lambda, S3, and API Gateway for scalable architecture',
        'Integrated Angular UI with Node.js APIs and JWT authentication for secure dashboards',
        'Created robust testing suites using Jasmine and Mocha for deployment quality'
      ]
    },
    {
      company: 'Verizon',
      position: 'Software Engineer',
      period: 'Jan 2021 – July 2023',
      highlights: [
        'Led full-stack development of internal productivity tools using React, Express, and MySQL',
        'Built mobile-first, responsive interfaces improving mobile usability scores by 30%',
        'Designed RESTful APIs in Express with Firebase Authentication, reducing manual reporting by 80%',
        'Migrated JavaScript modules to modern ES6+ syntax, boosting load performance by 25%',
        'Developed backend services with MySQL supporting high-volume operations with indexed queries',
        'Implemented end-to-end testing frameworks using Mocha and Selenium for regression testing',
        'Integrated Firebase services for authentication, real-time data sync, and session control',
        'Practiced Agile workflows with JIRA and Git for efficient sprint management'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-header">
                <h3>{exp.company}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <p className="position">{exp.position}</p>
              <ul className="responsibilities">
                {exp.highlights.map((highlight, hidx) => (
                  <li key={hidx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
