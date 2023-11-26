import { FC, ReactNode } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { StyledCard } from "@/components/Card/styles";

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  const [darkMode] = useAtom(darkModeAtom);

  return <StyledCard darkMode={darkMode}>{children}</StyledCard>;
};
