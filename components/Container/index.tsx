import { FC, ReactNode } from "react";
import { StyledContainer } from "@/components/Container/styles";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
