import React from 'react';
import './Projects.css'; 





const projectsData = [
    { 
        id: 1, 
        title: "Mario", 
        description: "", 
        technologies: ["3Ds MAX"], 
        github: "https://github.com/hmelisuneli",
        image: "/images/Project1.png"
    },
    { 
        id: 2, 
        title: "Town", 
        description: "", 
        technologies: ["3Ds MAX"], 
        github: "https://github.com/hmelisuneli",  
        image: "/images/Project2.png"
    },
    { 
        id: 3, 
        title: "Project 3", 
        description: "React task8", 
        technologies: ["react", "Redux", "WebPack"], 
        github: "https://github.com/hmelisuneli", 
        demo: "https://7-time.vercel.app/",
        image: "/images/Project3.png"
    },
    { 
        id: 4, 
        title: "Project 4", 
        description: "React task9", 
        technologies: ["HTML", "CSS", "JavaScript"], 
        github: "https://github.com/hmelisuneli", 
        demo: "https://vercel.com/new/hmelisunelis-projects/success?developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=task-10-4e43n36sa-hmelisunelis-projects.vercel.app&projectName=task-10&s=https%3A%2F%2Fgithub.com%2Fhmelisuneli%2Ftask-10&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1&slug=app-future&slug=en-US&slug=new&slug=hmelisunelis-projects&slug=success",
        image: "/images/image22.png"
    },
    { 
        id: 5, 
        title: "Project 5", 
        description: "React task10", 
        technologies: ["React", "Firebase", "Node.js"], 
        github: "", 
        demo: "/",
        image: "/images/Project5.png"
    },
    { 
        id: 6, 
        title: "Project 6", 
        description: "Building a mobile app with React Native", 
        technologies: ["React Native", "Redux"], 
        github: "#", 
        demo: "#",
        image: "/images/Project6.jpg"
    },
    { 
        id: 6, 
        title: "Project 6", 
        description: "Building a mobile app with React Native", 
        technologies: ["React Native", "Redux"], 
        github: "#", 
        demo: "#",
        image: "/images/Project6.jpg"
    },
    { 
        id: 8, 
        title: "Project 6", 
        description: "Building a mobile app with React Native", 
        technologies: ["React Native", "Redux"], 
        github: "#", 
        demo: "#",
        image: "/images/Project6.jpg"
    },
    { 
        id: 9, 
        title: "Project 6", 
        description: "Building a mobile app with React Native", 
        technologies: ["React Native", "Redux"], 
        github: "#", 
        demo: "#",
        image: "/images/Project6.jpg"
    },
    { 
        id: 10, 
        title: "Project 6", 
        description: "Building a mobile app with React Native", 
        technologies: ["React Native", "Redux"], 
        github: "#", 
        demo: "#",
        image: "/images/Project6.jpg"
    },
    { 
        id: 11, 
        title: "Project 6", 
        description: "Building a mobile app with React Native", 
        technologies: ["React Native", "Redux"], 
        github: "#", 
        demo: "#",
        image: "/images/Project6.jpg"
    },
    { 
        id: 12, 
        title: "Project 6", 
        description: "Building a mobile app with React Native", 
        technologies: ["React Native", "Redux"], 
        github: "#", 
        demo: "#",
        image: "/images/Project6.jpg"
    }
];




function Projects() {   
    return (
        <div className="projects-container">
            {projectsData.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image"/>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-list">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                    <div className="project-icons">
                        <i className="bi bi-github" onClick={() => window.open(project.github, "_blank")}></i>
                        <i className="fas fa-external-link-alt" onClick={() => window.open(project.demo, "_blank")}></i>
                    </div>
                </div>
            ))}
        </div>
    );
}



export default Projects;
