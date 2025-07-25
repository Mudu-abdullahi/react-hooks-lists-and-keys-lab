import React from "react";
import Links from "./Links";

const About = () => {
  const bio = "I am a frontend developer";
  const github = "https://github.com/yourname";
  const linkedin = "https://linkedin.com/in/yourname";

  return (
    <section id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <Links github={github} linkedin={linkedin} />
    </section>
  );
};

export default About;
