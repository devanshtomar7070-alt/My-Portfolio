import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science and Engineering (August 2025 – Present) in Phagwara, Punjab. Building strong foundations in data structures, algorithms, and practical software engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Infosys Python Programming Training</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed comprehensive Infosys Python programming training (June 2025 – July 2026) covering OOP, data structures, file handling, modular architecture, and 20+ programming exercises.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary & Secondary Education</h4>
                <h5>Army Public School</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed Higher Secondary Education at Army Public School, Delhi (2024–2025) and Secondary Education at Army Public School, Nehru Road Lucknow with 88.2% (2022–2023).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
