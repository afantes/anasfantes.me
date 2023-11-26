import { FC, ReactNode } from "react";
import { Wrapper } from "@/components/ProjectsWrapper/styles";

interface ProjectsWrapperProps {
  children: ReactNode;
}

export const ProjectsWrapper: FC<ProjectsWrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
