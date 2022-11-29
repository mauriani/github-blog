import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header } from "../../components/Header";
import { Post } from "../../components/Posts";
import { SummaryProfile } from "../../components/SummaryProfile";

import api from "../../services";

import { Container, Content } from "./styles";
import { Loading } from "../../components/Loading";

interface IPostHome {
  id: number;
  created_at: string;
  body: string;
  title: string;
  number: number;
}
export function Home() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [posts, setPost] = useState<IPostHome[]>([]);
  const [search, setSearch] = useState("");

  async function fetchPosts() {
    try {
      setloading(true);
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
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  function handleSetSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  async function handleSearchPost(event: FormEvent) {
    event.preventDefault();

    const ursename = "mauriani";
    const repo = "reactjs-github-blog-challenge";

    const response = await api.get(
      `search/issues?q=${search}%20repo:${ursename}/${repo}`
    );

    const { total_count, items } = response.data;

    if (total_count == 0) {
      toast.error("Nenhum post encontrado sobre esse assunto!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setSearch("");
    } else {
      navigate("/posts", {
        state: {
          number: items[0].number,
        },
      });
      setSearch("");
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {loading == true ? (
        <Loading />
      ) : (
        <Container>
          <Header />
          <SummaryProfile />

          <Content>
            <header>
              <p>Publicações</p>
              <span>{posts.length} publicações</span>
            </header>

            <form onSubmit={handleSearchPost}>
              <input
                placeholder="Buscar conteúdo"
                onChange={handleSetSearch}
                value={search}
              />
            </form>

            <Post data={posts} />
          </Content>
        </Container>
      )}
    </>
  );
}
