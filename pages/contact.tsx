import { FC, useState } from "react";
import swal from "sweetalert";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import {
  StyledForm,
  Row,
  HalfWidthInput,
  StyledTextArea,
  StyledButton,
} from "@/styles/ContactStyle";

const Contact: FC = () => {
  const [darkMode] = useAtom(darkModeAtom);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setSubject("");
    setMessage("");
    swal("Your message has been sent", "", "success");
  };

  return (
    <Container>
      <Card>
        <CardHeader />
        <StyledForm darkMode={darkMode} onSubmit={handleSubmit}>
          <Row>
            <HalfWidthInput
              darkMode={darkMode}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <HalfWidthInput
              darkMode={darkMode}
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
            />
          </Row>
          <StyledTextArea
            darkMode={darkMode}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          />
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </Card>
    </Container>
  );
};

export default Contact;
