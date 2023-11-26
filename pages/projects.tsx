import { FC } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { StyledParagraph, StyledLink } from "@/styles/ProjectsStyle";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsWrapper } from "@/components/ProjectsWrapper";

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "EPL Score",
    description:
      "Project built with Next.js to provide information on Premier League matches of the current month",
    link: "https://github.com/afantes/NextEPLScore",
    technologies: ["TypeScript", "React", "Next.js"],
  },
  {
    title: "Github Explorer",
    description:
      "Project built with Next.js to provide a tool for discovering and exploring GitHub repos of a specified user",
    link: "https://github.com/afantes/NextGithubExplorer",
    technologies: ["JavaScript", "React", "Next.js"],
  },
  {
    title: "Todo List",
    description:
      "Project built with Next.js to provide a tool that assists users in their task and time management",
    link: "https://github.com/afantes/NextTodoList",
    technologies: ["JavaScript", "React", "Next.js"],
  },
  {
    title: "FastFingers Game",
    description:
      "An innovative online game designed to assist users in enhancing their typing skills while having fun",
    link: "https://github.com/afantes/JSFastFingersGame",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Get Next Line",
    description:
      "42 Network project on programming a function in C language that returns a line read from a file descriptor",
    link: "https://github.com/afantes/get_next_line",
    technologies: ["C"],
  },
  {
    title: "Printf",
    description:
      "42 Network Project that mimics the real printf function in C and an intro about variadic functions",
    link: "https://github.com/afantes/ft_printf",
    technologies: ["C"],
  },
];

const Projects: FC = () => {
  const [darkMode] = useAtom(darkModeAtom);
  return (
    <Container>
      <Card>
        <CardHeader />
        <ProjectsWrapper>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ProjectsWrapper>
        <StyledParagraph darkMode={darkMode}>
          You can find more projects{" "}
          <StyledLink
            href="https://github.com/afantes?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </StyledLink>
        </StyledParagraph>
      </Card>
    </Container>
  );
};

export default Projects;
