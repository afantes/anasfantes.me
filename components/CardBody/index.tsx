import { FC } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { StyledCardBody, TextSection } from "@/components/CardBody/styles";
import { Button } from "@/components/Buttons";
import { CardImage } from "@/components/CardImage";

export const CardBody: FC = () => {
  const [darkMode] = useAtom(darkModeAtom);
  const bodyVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <StyledCardBody>
      <TextSection
        variants={bodyVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, delay: 0.5 }}
        darkMode={darkMode}
      >
        <h2>FRONT-END WEB DEVELOPER</h2>
        <p>
          Hi I'm <span>Anas Fantes</span>, a passionate Front-end Software
          Engineer with a keen eye for details, based in Morocco.
        </p>
        <Button text="Resume" href="/CV.pdf" />
      </TextSection>
      <CardImage />
    </StyledCardBody>
  );
};
