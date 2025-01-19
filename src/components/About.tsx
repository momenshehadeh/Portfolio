import React from 'react';

interface SpecializationProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const Specialization: React.FC<SpecializationProps> = ({ title, icon, description }) => (
  <div className="group relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-indigo-100 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Experience: React.FC<ExperienceProps> = ({ company, role, period, description, icon }) => (
  <div className="group relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-indigo-100 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{company}</h3>
        <p className="text-indigo-600">{role}</p>
        <p className="text-sm text-gray-500">{period}</p>
      </div>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function About() {
  return (
    <section className="py-1 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-indigo-600 mb-4">Overview</h2>
          <p className="text-gray-800 max-w-4xl mx-auto">
            Computer Science graduate with proven ability to adapt in both independent and collaborative environments, 
            consistently delivers high-quality solutions under tight deadlines. Specializes in front-end development 
            with a focus on web applications. Skilled at solving problems and improving processes to achieve efficiency 
            and build scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Specialization
            title="Front-end Developer"
            icon={<img src="https://cdn-icons-png.flaticon.com/512/5339/5339181.png" alt="Front-end Development" className="w-10 h-10" />}
            description="Expertise in building responsive web applications using modern frameworks and best practices for optimal user experience."
          />
          <Specialization
            title="Cybersecurity"
            icon={<img src="https://img.icons8.com/?size=100&id=VP08IIvzEIe2&format=png&color=000000" alt="Cybersecurity" className="w-10 h-10" />}
            description="Knowledge of security principles, threat analysis, and implementing secure coding practices in web applications."
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl text-indigo-600 mb-6">Work Experience</h2>
          <p className="text-gray-800 max-w-4xl mx-auto">
          I have experience in web design, having worked on several projects that showcase my skills in creating visually appealing and user-friendly websites. My experience includes designing responsive layouts, improving user interfaces, and integrating modern web technologies. Through these projects, I have developed a strong understanding of the aesthetic and functional aspects of web design. I am passionate about delivering high-quality work that meets client expectations and enhances user experiences. This hands-on experience has honed my ability to manage projects efficiently and stay up-to-date with the latest design trends.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>
          <div className="space-y-12">
            <Experience
              company="Stack Soft Intern"
              role="Frontend Developer"
              period="May 2024 - Sep 2024"
              description="Developed and maintained responsive web applications using React and TypeScript. Implemented modern UI/UX designs and improved application performance."
              icon={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkBENlDi7Ron4OTBeGTjyTqrs4x0l5-6TFA&s" alt="Stack Soft" className="w-10 h-10" />}
            />
            <Experience
              company="Green Circle Intern"
              role="Cyber Security"
              period="Dec 2024 - Present"
              description="Conducted security assessments and implemented security measures for web applications. Participated in threat modeling and vulnerability assessments."
              icon={<img src="https://grcico.com/wp-content/uploads/2020/04/green-circle-approved-01.png" alt="Green Circle" className="w-10 h-10" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
