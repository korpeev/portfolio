import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutme" className="mt-10">
      <div className=" py-10 border-y-2 border-black">
        <div className="container max-w-7xl px-5 mx-auto flex flex-col">
          <h1 className="text-5xl sm:text-4xl font-bold text-center uppercase">About Me</h1>

          <p className="pt-4 text-xl md:text-md text-center leading-10">
            I'm a 23 years old Junior Frontend Developer from Kazakhstan. I focused on the
            developing user friendly and responsible web application for users. My Stack List:{" "}
            <strong>
              React(React-Router-Dom), JS(ES6)Typescript, Redux/Toolkit, HTML, CSS3(SCSS/SASS)
            </strong>
            . I have experience working with libraries such as:{" "}
            <strong>Tailwindcss, Styled-Components, Mobx(state-manager), MaterialUI</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
