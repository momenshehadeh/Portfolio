import React from "react";
import { TypeAnimation } from "react-type-animation";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import {GithubIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <main className="space-y-20 md:space-y-32">

        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-16">
          <div>
            <img
              src="https://i.pinimg.com/736x/8a/01/83/8a01833396540adfed10f743debc35b8.jpg"
              alt="Momen Shehadeh"
              className="rounded-full outline outline-gray-50 outline-[43px] outline-offset-[-40px] max-w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center p-4 sm:p-8 lg:p-16 relative z-10">
            <h1 className="text-8xl sm:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Hi I'm Momen
            </h1>
            <h2 className="text-xl sm:text-5xl text-indigo-600  mb-6 ">
              <TypeAnimation
                sequence={[
                  "Frontend Developer.",
                  1000,
                  "Cyber Security.",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>

            <div className="prose prose-sm sm:prose-lg">
              <p className="text-gray-900 mb-6">
                I'm a Computer Science Graduate from The Hashemite University
              </p>
              <div className="social-icons flex flex-wrap items-center gap-6 mt-12">
              <a href="https://www.linkedin.com/in/momen-shehadeh-11616b342"
              className="inline-flex justify-center items-center text-[4rem] p-3 bg-transparent border-2 border-blue-700 rounded-full text-blue-800 transition-transform transform hover:scale-10 hover:-translate-y-1 hover:bg-blue-200 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]">
                <LinkedinIcon color="blue" />
              </a>
              <a href="https://github.com/momenshehadeh"
              className="inline-flex justify-center items-center text-[3rem] p-3 bg-transparent border-2 border-blue-700 rounded-full text-blue-800 transition-transform transform hover:scale-10 hover:-translate-y-1 hover:bg-blue-200 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]">
                <GithubIcon color="blue"/>
              </a>
              <a href="https://www.youtube.com/@MomenShehadeh"
              className="inline-flex justify-center items-center text-[3rem] p-3 bg-transparent border-2 border-blue-700 rounded-full text-blue-800 transition-transform transform hover:scale-10 hover:-translate-y-1 hover:bg-blue-200 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]">
                <YoutubeIcon color="blue"/>
              </a>
              <a href="https://www.instagram.com/momen.shehadeh/"
              className="inline-flex justify-center items-center text-[3rem] p-3 bg-transparent border-2 border-blue-700 rounded-full text-blue-800 transition-transform transform hover:scale-10 hover:-translate-y-1 hover:bg-blue-200 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]">
                <InstagramIcon color="blue"/>
              </a>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
