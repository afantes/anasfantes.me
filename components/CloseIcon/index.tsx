import { FC } from "react";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { StyledCloseIcon } from "@/components/CloseIcon/styles";

export const CloseIcon: FC = () => {
  const router = useRouter();
  const [darkMode] = useAtom(darkModeAtom);

  const handleCloseClick = () => {
    router.push("/profile");
  };

  return (
    <StyledCloseIcon darkMode={darkMode} onClick={handleCloseClick}>
      <MdClose />
    </StyledCloseIcon>
  );
};
