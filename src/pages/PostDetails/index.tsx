import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Export,
  CaretLeft,
  Calendar,
  GithubLogo,
  ChatCircle,
} from "phosphor-react";

import {
  Container,
  SummaryCard,
  SummaryContainer,
  ContentPost,
  PostParagraph,
} from "./styles";
import api from "../../services";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";

interface LocationParams {
  number: number;
}

interface IPostDetails {
  id: number;
  body: string;
  title: string;
  login: string;
  created_at: string;
  comments: number;
  html_url: string;
}

export function PostDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);
  const [post, setPost] = useState<IPostDetails>({} as IPostDetails);
  const state = location.state as LocationParams;
  const { number } = state;

  async function getOnePost() {
    try {
      setloading(true);

      const response = await api.get(
        `repos/mauriani/reactjs-github-blog-challenge/issues/${number}`
      );

      const { title, id, body, created_at, user, comments, html_url } =
        response.data;

      const newItem = {
        id,
        title,
        body,
        login: user.login,
        created_at: formatDistance(new Date(created_at), Date.now(), {
          addSuffix: true,
          locale: ptBR,
        }),
        comments,
        html_url,
      };

      setPost(newItem);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  function handleGoBack() {
    navigate("/");
  }

  function handleNavigateToPostGit() {
    window.location.replace(`${post.html_url}`);
  }

  useEffect(() => {
    getOnePost();
  }, []);

  return (
    <>
      {loading == true ? (
        <Loading />
      ) : (
        <Container>
          <Header />
          <SummaryContainer>
            <SummaryCard>
              <div>
                <button onClick={handleGoBack}>
                  <CaretLeft size={15} style={{ marginRight: 8 }} />
                  voltar
                </button>

                <button onClick={handleNavigateToPostGit}>
                  ver no github
                  <Export size={15} style={{ marginLeft: 8 }} />
                </button>
              </div>

              <h1>{post.title}</h1>

              <footer>
                <button>
                  <GithubLogo size={18} />
                  {post.login}
                </button>
                <button>
                  <Calendar size={18} />
                  {post.created_at}
                </button>
                <button>
                  <ChatCircle size={18} />
                  {post.comments} comentários
                </button>
              </footer>
            </SummaryCard>
          </SummaryContainer>

          <ContentPost>
            <PostParagraph>
              <ReactMarkdown
                children={post.body}
                linkTarget={"_blank"}
                remarkPlugins={[remarkGfm]}
              />
            </PostParagraph>
          </ContentPost>
        </Container>
      )}
    </>
  );
}
