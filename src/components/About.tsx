
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-muted/30 dark:bg-muted/10 py-20">
      <div className="section-container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="glass rounded-2xl p-6 neu-shadow">
              <h3 className="text-xl font-bold mb-3">Who I Am</h3>
              <p className="text-muted-foreground">
                I'm a Computer Engineering student at Dr. D. Y. Patil Institute of Technology, Pimpri, 
                with a passion for Machine Learning and software development. I enjoy solving complex problems 
                and building applications that make a positive impact.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 neu-shadow">
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-muted-foreground">
                <strong>Bachelor of Engineering in Computer Engineering</strong>
                <br />
                Dr. D. Y. Patil Institute of Technology, Pimpri <br />
                Savitribai Phule Pune University <br />
                Nov 2021 - Present | CGPA: 9.45/10
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass rounded-2xl p-6 neu-shadow">
              <h3 className="text-xl font-bold mb-3">My Focus</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Machine Learning & Deep Learning</li>
                <li>Web Development</li>
                <li>Natural Language Processing</li>
                <li>Data Analysis & Feature Engineering</li>
                <li>Full Stack Development with React and Node.js</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 neu-shadow">
              <h3 className="text-xl font-bold mb-3">Career Goals</h3>
              <p className="text-muted-foreground">
                I aim to combine my passion for software engineering with advanced machine learning 
                techniques to build intelligent solutions that solve real-world problems. I'm particularly 
                interested in applications of ML in healthcare, agriculture, and education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
