import { Briefcase, Code, User, Brain, GraduationCap, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI & Frontend Developer | Applied Mathematics Student
            </h3>

            <p className="text-muted-foreground">
              Currently pursuing a Bachelor's of Applied Mathematics with a Computer Science minor at UC Berkeley (2027). 
              I specialize in AI-powered web applications and machine learning solutions, with experience at ASSIST.org 
              and California State University, Los Angeles.
            </p>

            <p className="text-muted-foreground">
              My passion lies in creating intelligent, scalable solutions that combine cutting-edge AI technology with 
              intuitive user experiences. I've successfully integrated GPT-4 APIs, developed ML frameworks for disaster 
              response, and tutored 40+ students in STEM subjects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Jose_Flores_Resume.pdf"
                download="Jose_Flores_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building intelligent systems with GPT-4 integration, predictive models, and neural networks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive web applications with React, JavaScript, and modern UI frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">STEM Education</h4>
                  <p className="text-muted-foreground">
                    Teaching and mentoring students in computer science, mathematics, and statistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
