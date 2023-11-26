import { FC } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { StyledCardBody, TextSection } from "@/components/CardBody/styles";
import { Button } from "@/components/Buttons";
import { CardImage } from "@/components/CardImage";

export const CardBody: FC = () => {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <StyledCardBody>
      <TextSection darkMode={darkMode}>
        <h2>FRONT-END WEB DEVELOPER</h2>
        <p>
          Hi I'm <span>Anas Fantes</span>, a passionate Front-end Developer with
          a keen eye for details based in Morocco.
        </p>
        <Button text="Resume" href="/CV.pdf" />
      </TextSection>
      <CardImage />
    </StyledCardBody>
  );
};
