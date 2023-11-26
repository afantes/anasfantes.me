import { FC } from "react";
import Image from "next/image";
import { StyledLogo } from "@/components/CardLogo/styles";

export const Logo: FC = () => {
  return (
    <StyledLogo>
      <Image src="/Logo.jpeg" alt="Logo" width={75} height={75} />
    </StyledLogo>
  );
};
