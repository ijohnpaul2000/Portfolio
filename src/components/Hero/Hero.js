import React, { useEffect, useState } from "react";
import Typical from "react-typical";
import Projects from "../ProjectLink/ProjectLinks";

import Socials from "../Socials/Socials";
import { Wrapper, TypicalWrapper } from "./HeroStyles";

const Hero = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 18000);
  }, []);

  return (
    <Wrapper>
      <TypicalWrapper>
        <Typical
          steps={[
            "Hello. 👋",
            1000,
            "I am John Paul. 🤓",
            1000,
            "I am an IT Intern.✨",
            1000,
            "and aspiring web developer.🖥️",
            1000,
            "you can check more of me here. ⬇️",
            1000,
          ]}
          loop={""}
          wrapper="p"
        />
      </TypicalWrapper>
      {showComponent && <Socials />}
      {showComponent && <Projects />}
    </Wrapper>
  );
};

export default Hero;
