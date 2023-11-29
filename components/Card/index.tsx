import { FC, ReactNode } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { StyledCard } from "@/components/Card/styles";

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  const [darkMode] = useAtom(darkModeAtom);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <StyledCard
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      darkMode={darkMode}
    >
      {children}
    </StyledCard>
  );
};
