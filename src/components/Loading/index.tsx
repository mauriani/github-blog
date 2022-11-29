import Lottie from "react-lottie";

import animationData from "../../assets/loadGit.json";

import { Container } from "./styles";

export function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} style={{ height: 300, width: 300 }} />
    </Container>
  );
}
