import { useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Header } from "../../components/Header";
import { Post } from "../../components/Posts";
import { Summary } from "../../components/Summary";

import api from "../../services";

import { Container, Content } from "./styles";

interface IPost {
  id: number;
  created_at: string;
  body: string;
  title: string;
}
export function Home() {
  const [post, setPost] = useState([]);

  async function fetchPosts() {
    const response = await api.get(
      "repos/mauriani/reactjs-github-blog-challenge/issues"
    );

    const newItem = response.data.map((elem: IPost) => ({
      id: elem.id,
      created_at: formatDistance(new Date(elem.created_at), Date.now(), {
        addSuffix: true,
        locale: ptBR,
      }),
      body: `${elem.body.slice(0, 25)}...`,
      title: elem.title,
    }));

    setPost(newItem);
  }

  console.log(post);

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

        <Post />
      </Content>
    </Container>
  );
}
