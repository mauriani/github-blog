import { useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Header } from "../../components/Header";
import { Post } from "../../components/Posts";
import { Summary } from "../../components/Summary";

import api from "../../services";

import { Container, Content } from "./styles";

interface IPostHome {
  id: number;
  created_at: string;
  body: string;
  title: string;
  number: number;
}
export function Home() {
  const [posts, setPost] = useState<IPostHome[]>([]);

  async function fetchPosts() {
    const response = await api.get(
      "repos/mauriani/reactjs-github-blog-challenge/issues"
    );

    const newItem = response.data.map((elem: IPostHome) => ({
      id: elem.id,
      created_at: formatDistance(new Date(elem.created_at), Date.now(), {
        addSuffix: true,
        locale: ptBR,
      }),
      body: `${elem.body.slice(0, 100)}...`,
      title: elem.title,
      number: elem.number,
    }));

    setPost(newItem);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
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

        <Post data={posts} />
      </Content>
    </Container>
  );
}
