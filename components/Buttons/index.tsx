import { FC } from "react";
import { StyledButton } from "@/components/Buttons/styles";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

export const Button: FC<ButtonProps> = ({ text, onClick, href }) => {
  if (href) {
    return (
      <StyledButton onClick={onClick}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </StyledButton>
    );
  }

  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
