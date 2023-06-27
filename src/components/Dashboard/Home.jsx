import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Helmet>
        <title>Home - Skill Studio</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Welcome to Skill Studio!
        </h2>
        <p className="text-lg text-gray-800 mb-4">
          Hi, I'm Mahmudul Islam, a highly skilled frontend web developer with a
          passion for creating visually stunning and user-friendly websites.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          I specialize in modern web technologies including HTML, CSS, and
          JavaScript, and have extensive experience in building responsive and
          interactive web applications using frameworks like React.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          With a meticulous eye for design and a focus on delivering exceptional
          user experiences, I strive to create web solutions that captivate and
          engage users.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Throughout my career, I have successfully completed various projects
          for clients across different industries, ensuring high-quality
          deliverables that meet their unique requirements.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          I am constantly expanding my skillset and staying up-to-date with the
          latest web development trends and technologies to provide cutting-edge
          solutions to my clients.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Take a moment to explore my portfolio and discover the range of
          projects I have worked on. If you have any inquiries or project
          opportunities, feel free to get in touch. I would love to discuss how
          I can contribute to your next web development project.
        </p>
      </div>
    </div>
  );
};

export default Home;
