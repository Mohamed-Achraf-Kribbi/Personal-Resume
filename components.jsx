const { useState, useEffect } = React;

// 1. Social Links Component
const SocialLinks = ({ github, linkedin, email }) => {
    return (
        <div className="social-links">
            <a href={github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href={`mailto:${email}`} className="social-link" title="Email">
                <i className="fa-solid fa-envelope"></i>
            </a>
        </div>
    );
};

// 2. Project Card Component
const ProjectCard = ({ title, description, technologies, link }) => {
    return (
        <div className="project-card">
            <div className="project-header">
                <h3 className="project-title">{title}</h3>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                )}
            </div>
            <p className="project-desc">{description}</p>
            <div className="project-tech">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
    );
};

// 3. Project List Component
const ProjectList = ({ projects }) => {
    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                />
            ))}
        </div>
    );
};

// Data & Mounting
const myExperiences = [
    {
        title: "Forest Runner",
        description: "A C++ game with custom gameplay mechanics and logic.",
        technologies: ["C++", "Game Development"],
        link: "https://github.com/Mohamed-Achraf-Kribbi/Forest-Runner.git"
    },
    {
        title: "MI-Lab",
        description: "A web project that provides resources for first and second-year MI students.",
        technologies: ["Web Development", "HTML", "CSS", "JavaScript"],
        link: "https://github.com/Mohamed-Achraf-Kribbi/MI-Lab.git"
    },
    {
        title: "Web Developer",
        description: "Designed and developed responsive web pages. Applied HTML, CSS, and JavaScript to create interactive interfaces.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        link: "" // Can add github link later
    },
    {
        title: "Graphic Designer (Freelance)",
        description: "Created logos, posters, and visual content for various clients. Used design tools to deliver high-quality assets.",
        technologies: ["Photoshop", "Illustrator", "Canva"],
        link: ""
    },
    {
        title: "Photographer",
        description: "Conducted photoshoots including portraits, events, and products. Edited and retouched photos for final delivery.",
        technologies: ["Photography", "Photo Editing", "Lightroom"],
        link: ""
    },
    {
        title: "Vice President - Fluventa Club",
        description: "Participated in organizing events and activities. Developed communication and leadership skills.",
        technologies: ["Event Management", "Communication", "Leadership"],
        link: ""
    }
];

// Mount Social Links
const socialRoot = ReactDOM.createRoot(document.getElementById('social-links-root'));
socialRoot.render(
    <SocialLinks 
        github="https://github.com/Mohamed-Achraf-Kribbi" 
        linkedin="https://www.linkedin.com/in/mohamed-achraf-kribbi-9a1243366/" 
        email="mohamedachrafkribbi@gmail.com" 
    />
);

// Mount Projects (Experiences)
const projectsRoot = ReactDOM.createRoot(document.getElementById('projects-root'));
projectsRoot.render(<ProjectList projects={myExperiences} />);
