import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <img src={heroImg} className="profile-img" alt="Raja R Profile" />
          <div className="hero-text">
            <h1>RAJAR</h1>
            <p className="contact">
              Phone: <a href="tel:+919566932710">+91 9566932710</a> | 
              Email: <a href="mailto:raja.r2024aiml@sece.ac.in">raja.r2024aiml@sece.ac.in</a>
            </p>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://leetcode.com/yourprofile/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </div>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>EDUCATION</h2>
        <ul className="timeline">
          <li>
            <strong>B.E CSE(AIML)</strong> – Sri Eshwar College of Engineering | CGPA: 7.8 (2024-2028)
          </li>
          <li>
            <strong>HSC</strong> – Jsr Hr. Sec. School | 80% (2023-2024)
          </li>
          <li>
            <strong>SSLC</strong> – Jsr Hr. Sec. School | 70.8% (2021-2022)
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>PROJECTS</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Deep Fake Voice Detection (2025)</h3>
            <ul>
              <li>Developed a machine learning model to detect AI-generated fake voices using audio features like pitch and frequency patterns.</li>
              <li>Trained on ASVspoof dataset to improve accuracy and prevent voice-based fraud.</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>Let’s Socialize</h3>
            <ul>
              <li>Built a responsive social media platform using React with features like posts, stories, and user suggestions.</li>
              <li>Implemented state management and client-side routing for smooth user experience.</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>Vitamin D Deficiency Prediction System</h3>
            <ul>
              <li>Created a machine learning model to predict Vitamin D deficiency using patient health data.</li>
              <li>Applied preprocessing, feature engineering, and evaluation for accurate predictions.</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>Movie Streaming Platform (MERN)</h3>
            <ul>
              <li>Developed a full-stack movie streaming application using MongoDB, Express.js, React, and Node.js.</li>
              <li>Implemented authentication, movie browsing, search functionality, and responsive UI.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* Internships Section */}
      <section id="internships" className="section">
        <h2>INTERNSHIPS</h2>
        <div className="timeline">
          <div className="internship">
            <h3>MERN Stack Developer Intern – Better Tomorrow</h3>
            <p>Dec 2025 – Jan 2026</p>
            <ul>
              <li>Built and deployed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>
              <li>Implemented authentication, CRUD operations, and RESTful APIs.</li>
              <li>Deployed applications on AWS (EC2 / Amplify).</li>
              <li>Used Git and GitHub for version control and collaboration.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section id="certs-achievements" className="section">
        <div className="dual-section">
          <div>
            <h2>CERTIFICATIONS</h2>
            <ul>
              <li>C Programming Course (Hands-On) | SkillRack</li>
              <li>C++ Programming Course | SkillRack</li>
            </ul>
          </div>
          <div>
            <h2>ACHIEVEMENTS</h2>
            <ul>
              <li>Runner-Up – Creatathon, Sri Eshwar College of Engineering (2025)</li>
              <li>Participated – Kalam (Paper Presentation), Karpagam College of Engineering (2025)</li>
              <li>Participated – Hilaricas (Web Designing), Hindusthan College of Arts & Science (2025)</li>
              <li>Participated – Fiestaa ’25 (Paper Presentation), KPR College of Engineering</li>
              <li>Finalist – Agentica 2.0 Hackathon, IIIT Sri City (2026)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coding Profiles & Skills */}
      <section id="profiles-skills" className="section">
        <div className="dual-section">
          <div>
            <h2>CODING PROFILES</h2>
            <ul>
              <li><a href="https://leetcode.com/yourprofile/" target="_blank" rel="noopener noreferrer">LeetCode: Solved 120+ problems | Global Rank: 1,432,459</a></li>
              <li><a href="https://skillrack.com/yourprofile/" target="_blank" rel="noopener noreferrer">SkillRack: Solved 550+ problems | 3 Certificates | 80+ Bronze</a></li>
            </ul>
          </div>
          <div>
            <h2>SKILLS</h2>
            <ul className="skills-list">
              <li>Programming: C, C++, Python, Java</li>
              <li>Core Concepts: DSA, OOPS, DBMS</li>
              <li>Web Technologies: HTML, CSS, JavaScript, React.js, Bootstrap, React Router DOM, JSON Server, Git</li>
              <li>Data Science & Libraries: Pandas, NumPy, Seaborn, Matplotlib</li>
              <li>Data Visualization: Matplotlib, Seaborn</li>
              <li>Tools: VS Code, Canva, Excel, PowerPoint, GitHub, Git, Figma</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

