import { FC } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiC,
} from "react-icons/si";
import {
  CardContainer,
  ProjectTitle,
  ProjectDescription,
  IconContainer,
} from "@/components/ProjectCard/styles";

const getTechnologyIcon = (technology, isDarkMode) => {
  switch (technology) {
    case "HTML":
      return <SiHtml5 />;
    case "CSS":
      return <SiCss3 />;
    case "JavaScript":
      return <SiJavascript />;
    case "React":
      return <SiReact />;
    case "Next.js":
      return (
        <img
          src="/nextjs.svg"
          className={isDarkMode ? "white-svg" : ""}
          alt="Next.js"
          style={{ width: "1em", height: "1.2em" }}
        />
      );
    case "TypeScript":
      return <SiTypescript />;
    case "C":
      return <SiC />;
    default:
      return null;
  }
};

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  index: number;
}

export const ProjectCard: FC<Project> = ({
  title,
  description,
  link,
  technologies,
  index,
}) => {
  const [darkMode] = useAtom(darkModeAtom);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 1 },
    },
  };

  return (
    <CardContainer
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      darkMode={darkMode}
      onClick={() => window.open(link, "_blank")}
    >
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription darkMode={darkMode}>{description}</ProjectDescription>
      <IconContainer darkMode={darkMode}>
        {technologies.map((tech) => getTechnologyIcon(tech, darkMode))}
      </IconContainer>
    </CardContainer>
  );
};
