import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/Buttons";
import { Container } from "@/components/Container";
import {
  StyledContainer,
  ImageContainer,
  ButtonsContainer,
  Title,
} from "@/styles/ProfileStyle";

const ProfilePage: FC = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { scale: 0.5, rotate: -50, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const handleGoBack = () => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <Container>
      <StyledContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ImageContainer>
          <Image
            src="/Profile2.jpeg"
            alt="Profile"
            width={200}
            height={200}
            objectFit="cover"
          />
        </ImageContainer>
        <Title>Anas Fantes</Title>
        <ButtonsContainer>
          <Button text="Go Back" onClick={handleGoBack} />
          <Button text="Meet Me" href="https://cal.com/anasfantes" />
        </ButtonsContainer>
      </StyledContainer>
    </Container>
  );
};

export default ProfilePage;
