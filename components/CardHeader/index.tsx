import { FC } from "react";
import { StyledCardHeader } from "@/components/CardHeader/styles";
import { CloseIcon } from "@/components/CloseIcon";
import { Logo } from "@/components/CardLogo";
import { NavigationBar } from "@/components/Navigation";

export const CardHeader: FC = () => {
  return (
    <StyledCardHeader>
      <div className="left-section">
        <CloseIcon />
        <Logo />
      </div>
      <div className="navigation-bar">
        <NavigationBar />
      </div>
    </StyledCardHeader>
  );
};
