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
           Motivated and detail-oriented Computer Science graduate seeking an entry-level software development
position where I can apply my strong programming skills, problem-solving abilities, and passion for technology
to contribute to innovative projects and grow professionally within a dynamic team environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Specialization
            title="Front-end Developer"
            icon={<img src="https://cdn-icons-png.flaticon.com/512/5339/5339181.png" alt="Front-end Development" className="w-10 h-10" />}
            description="A front-end developer builds the visual and interactive parts of websites and web applications.
They use HTML, CSS, JavaScript and React to create user-friendly, responsive designs that work across devices and browsers."
          />
          <Specialization
            title="Back-end Developer"
            icon={<img src="https://cdn-icons-png.flaticon.com/512/6213/6213731.png" alt="Back-end Developer" className="w-10 h-10" />}
            description="A back-end developer works on the server-side of websites and applications.
They build and manage databases, servers, and APIs, ensuring everything runs smoothly behind the scenes and supports the front-end with data and functionality."
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl text-indigo-600 mb-6">Work Experience</h2>
          <p className="text-gray-800 max-w-4xl mx-auto">
          I have experience in web design, having worked on several projects that showcase my skills in creating visually appealing and user-friendly websites.
My experience includes designing responsive layouts, improving user interfaces, and integrating modern web technologies.
Through these projects, I have developed a strong understanding of the aesthetic and functional aspects of web design.
I am passionate about delivering high-quality work that meets client expectations and enhances user experiences. 
This hands-on experience has honed my ability to manage projects efficiently and stay up-to-date with the latest design trends.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>
          <div className="space-y-12">
            <Experience
              company="Stack Soft Intern"
              role="Frontend Developer"
              period="June 2024 - Sep 2024"
              description="Developed and maintained responsive web applications using React and TypeScript. Implemented modern UI/UX designs and improved application performance."
              icon={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkBENlDi7Ron4OTBeGTjyTqrs4x0l5-6TFA&s" alt="Stack Soft" className="w-10 h-10" />}
            />
            <Experience
              company="Idel Innovation House Intern"
              role="Backend Developer"
              period="Nov 2024 - May 2025"
              description="developer works on the server-side of websites and applications.
They build and manage databases, servers, and APIs, ensuring everything runs smoothly behind the scenes and supports the front-end with data and functionality."
              icon={<img src="https://media.licdn.com/dms/image/v2/D4D0BAQHV0KPQfYEZjA/company-logo_200_200/company-logo_200_200/0/1725194167057/iih_ai_logo?e=2147483647&v=beta&t=C9DeRjP5t7nISQctsvdQmzFatkPJSLqNh40prTPBZlQ" alt="Idel Innoviation House" className="w-10 h-10" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
