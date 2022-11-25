import { Header } from "../../components/Header";
import { Post } from "../../components/Posts";
import { Summary } from "../../components/Summary";

import { Container, Content } from "./styles";
export function Home() {
  return (
    <Container>
      <Header />
      <Summary />

      <Content>
        <header>
          <p>Publicações</p>
          <span>6 publicações</span>
        </header>

        <div>
          <input placeholder="Buscar conteúdo" />
        </div>

        <Post />
      </Content>
    </Container>
  );
}
