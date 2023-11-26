import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { FaLinkedin, FaGithub, FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import {
  StyledNavigationBar,
  LinksContainer,
  StyledLink,
  IconsContainer,
  IconLink,
  ModeIcon,
} from "@/components/Navigation/styles";

export const NavigationBar: FC = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <StyledNavigationBar>
      <LinksContainer>
        <Link href="/" passHref>
          <StyledLink
            darkMode={darkMode}
            className={router.pathname === "/" ? "active" : ""}
          >
            Whoami
          </StyledLink>
        </Link>
        <Link href="/projects" passHref>
          <StyledLink
            darkMode={darkMode}
            className={router.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink
            darkMode={darkMode}
            className={router.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </StyledLink>
        </Link>
      </LinksContainer>
      <IconsContainer>
        <IconLink
          darkMode={darkMode}
          href="https://www.linkedin.com/in/anas-fantes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          darkMode={darkMode}
          href="https://github.com/afantes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </IconLink>
        <ModeIcon darkMode={darkMode} onClick={toggleDarkMode}>
          {darkMode ? <MdOutlineLightMode /> : <FaRegMoon />}
        </ModeIcon>
      </IconsContainer>
    </StyledNavigationBar>
  );
};
