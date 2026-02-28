import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages & Scripting',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Bash', 'Shell', 'Java', 'Python']
    },
    {
      category: 'Front-End',
      skills: ['React.js', 'Angular', 'Redux', 'Context API', 'Bootstrap', 'Material UI', 'Chart.js', 'Responsive Design', 'Lazy Loading', 'WebSockets']
    },
    {
      category: 'Back-End & APIs',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'JWT Auth', 'Firebase Auth', 'Stripe Integration', 'Twilio API']
    },
    {
      category: 'Cloud Platforms',
      skills: ['Azure App Services', 'Azure AKS', 'Azure Blob Storage', 'Azure DevOps', 'EC2', 'S3', 'Lambda', 'RDS', 'API Gateway']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase Realtime Database']
    },
    {
      category: 'DevOps & Containerization',
      skills: ['Docker', 'Jenkins', 'GitHub Actions', 'Azure DevOps Pipelines', 'Nginx', 'CI/CD Automation']
    },
    {
      category: 'Testing Tools',
      skills: ['Jest', 'Mocha', 'Chai', 'Jasmine', 'Cypress', 'Selenium']
    },
    {
      category: 'Monitoring & Logging',
      skills: ['ELK Stack', 'Prometheus', 'Azure Monitor', 'Application Insights']
    },
    {
      category: 'Tools & Utilities',
      skills: ['Git', 'Postman', 'Swagger', 'JIRA', 'VS Code', 'Webpack', 'Babel']
    },
    {
      category: 'Methodologies',
      skills: ['Agile Scrum', 'Test-Driven Development', 'CI/CD', 'Code Review', 'Mentoring']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-card">
              <h3>{cat.category}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, sidx) => (
                  <span key={sidx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
