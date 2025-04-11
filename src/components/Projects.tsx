
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Farmify",
      date: "Feb 2024",
      teamSize: 4,
      objective: "Developed a Smart AI-based solution for farmers to predict plant leaf diseases using deep learning and large language models.",
      summary: "Leveraged image processing techniques to analyze leaf images and detect diseases with high accuracy. Integrated a large language model to provide farmers with actionable insights and detailed disease descriptions in a user-friendly manner. This solution empowers farmers to take timely preventive measures, improving crop health and yield.",
      role: "Responsible for training the model and conducted rigorous model evaluation and validation, ensuring the model met target performance metrics.",
      technologies: ["Deep Learning", "Image Processing", "LLMs", "Python"],
      gitLink: "https://github.com/",
      demoLink: "https://demo.com/",
    },
    {
      title: "Fake News Detection",
      date: "Oct 2023",
      teamSize: 1,
      objective: "Developed a robust Fake News Detection system using Logistic Regression to classify news articles as real or fake based on linguistic features and content patterns.",
      summary: "Applied data preprocessing techniques like tokenization and vectorization to prepare the dataset for accurate classification. Optimized the model to achieve high precision and recall.",
      role: "Solely responsible for the end-to-end ML model, including data collection, preprocessing, model selection, training and evaluation.",
      technologies: ["Logistic Regression", "NLP", "Python", "Data Processing"],
      gitLink: "https://github.com/",
    },
    {
      title: "Diabetes Predictor",
      date: "Jul 2023 - Aug 2023",
      teamSize: 1,
      objective: "Developed a comprehensive Diabetes Predictor for women using Support Vector Machine (SVM) to classify and predict the likelihood of diabetes based on key health metrics such as glucose levels, BMI, and age.",
      summary: "The model was fine-tuned to achieve high accuracy, enhancing early detection and intervention for better health outcomes. Integrated effective data preprocessing techniques to ensure reliable predictions and improve the overall model performance.",
      role: "Solely responsible for the end-to-end ML model, including data collection, preprocessing, model selection, training and evaluation.",
      technologies: ["SVM", "Machine Learning", "Python", "Data Analysis"],
      gitLink: "https://github.com/",
    },
    {
      title: "Students Complaint System",
      date: "Feb 2023 - May 2023",
      teamSize: 4,
      objective: "This project was developed to speed up the process of complaint resolution in an online mode.",
      summary: "The website is built using HTML, CSS and EJS for frontend, NodeJs, ExpressJs as Backend and MongoDB for database. It has 2 user roles as Student and Admin, where the student can register the complaint and admin can resolve it.",
      role: "Responsible for the development of Backend server and integration of database with the server.",
      technologies: ["HTML", "CSS", "EJS", "NodeJS", "ExpressJS", "MongoDB"],
      gitLink: "https://github.com/",
      demoLink: "https://demo.com/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
