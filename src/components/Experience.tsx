
import React from "react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="bg-muted/30 dark:bg-muted/10 py-20">
      <div className="section-container">
        <h2 className="section-heading">Experience</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

            {/* Timeline item */}
            <div className="relative pl-12 md:pl-0 mb-16 animate-fade-in">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                  <div className="mb-2 text-secondary font-medium">
                    Aug 2023 - Sep 2023
                  </div>
                  <h3 className="text-xl font-bold">ML Intern</h3>
                  <div className="text-muted-foreground">
                    Savidha Foundation, Pune
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-secondary bg-background flex items-center justify-center">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>

                <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0">
                  <div className="glass rounded-xl p-6 neu-shadow">
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                      <li>
                        Used Python for Development For the ML models Libraries
                      </li>
                      <li>
                        Used scikit-learn, Matplotlib, Pandas, NLTK
                      </li>
                      <li>
                        Applied concepts of Data cleaning, Feature Engineering
                        and NLP
                      </li>
                      <li>
                        Developed a text summarizer, which summarized huge news
                        articles
                      </li>
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>Python</Badge>
                      <Badge>ML</Badge>
                      <Badge>NLP</Badge>
                      <Badge>Data Analysis</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline item */}
            <div className="relative pl-12 md:pl-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                  <div className="mb-2 text-secondary font-medium">
                    Nov 2021 - Present
                  </div>
                  <h3 className="text-xl font-bold">Computer Engineering</h3>
                  <div className="text-muted-foreground">
                    Dr. D. Y. Patil Institute of Technology
                  </div>
                  <div className="font-medium mt-1">CGPA: 9.45/10</div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-secondary bg-background flex items-center justify-center">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>

                <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0">
                  <div className="glass rounded-xl p-6 neu-shadow">
                    <p className="mb-2">
                      Pursuing Bachelor of Engineering in Computer Engineering 
                      from Dr. D. Y. Patil Institute of Technology, Pimpri (Savitribai Phule Pune University).
                    </p>
                    <p>
                      Secured Department Rank 2 in Second Year and was awarded
                      Academic Excellence Award in the year 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
