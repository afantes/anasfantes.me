import { FC, useState, useEffect } from "react";
import {
  StyledLoadingContainer,
  StyledTitle,
  StyledProgressBar,
} from "@/styles/LoadingStyle";
import { StyledTopCurtain, StyledBottomCurtain } from "@/styles/CurtainStyle";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { CardBody } from "@/components/CardBody";

const HomePage: FC = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");

    if (!visited) {
      setShowLoading(true);
      sessionStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setShowLoading(false);
        setShowCurtain(true);
        setTimeout(() => {
          setShowCurtain(false);
          setDisplayContent(true);
        }, 2650);
      }, 2650);
    } else {
      setDisplayContent(true);
    }
  }, []);

  return (
    <Container>
      {showLoading && (
        <StyledLoadingContainer>
          <StyledTitle>Anas Fantes</StyledTitle>
          <StyledProgressBar
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </StyledLoadingContainer>
      )}

      {showCurtain && (
        <>
          <StyledTopCurtain
            initial={{ height: "50%" }}
            animate={{ height: "0%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <StyledBottomCurtain
            initial={{ height: "50%" }}
            animate={{ height: "0%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </>
      )}

      {displayContent && (
        <Card>
          <CardHeader />
          <CardBody />
        </Card>
      )}
    </Container>
  );
};

export default HomePage;
