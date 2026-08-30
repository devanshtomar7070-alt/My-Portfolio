import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Certificate Archive",
    category: "Web Application",
    tools: "HTML, CSS, JavaScript, Supabase, Storage",
    image: "/images/placeholder.webp",
    link: "https://certificatearchive.freebuff.app/",
  },
  {
    title: "Python Fundamentals I",
    category: "Infosys Certificate",
    tools: "Python, Control Flow, Data Types, Functions",
    image: "/images/placeholder.webp",
    link: "https://certificatearchive.freebuff.app/",
  },
  {
    title: "Python Fundamentals II",
    category: "Infosys Certificate",
    tools: "Python, OOP, File Handling, Exceptions",
    image: "/images/placeholder.webp",
    link: "https://certificatearchive.freebuff.app/",
  },
  {
    title: "Python Training Program",
    category: "LPU / Infosys Training",
    tools: "Python, Modular Architecture, OOP, 20+ Exercises",
    image: "/images/placeholder.webp",
    link: "https://certificatearchive.freebuff.app/",
  },
  {
    title: "200+ Problems Solved",
    category: "Problem Solving",
    tools: "C++, Python, Data Structures, Algorithms",
    image: "/images/placeholder.webp",
    link: "https://github.com/devanshtomar7070-alt",
  },
  {
    title: "Developer Repositories",
    category: "Open Source",
    tools: "Git, GitHub, MySQL, Web Development",
    image: "/images/placeholder.webp",
    link: "https://github.com/devanshtomar7070-alt",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;


