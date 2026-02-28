import './Education.css'

export default function Education() {
  const educations = [
    {
      degree: "Master's in Computer Information Systems and Technology",
      institution: 'University of Central Missouri'
    },
    {
      degree: "Bachelor's in Electronics and Communication Engineering",
      institution: 'JNTU, Hyderabad'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          {educations.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="degree-icon">🎓</div>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
