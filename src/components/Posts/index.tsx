import { useNavigate } from "react-router-dom";
import { PostContainer } from "./styles";

interface IPost {
  id: number;
  created_at: string;
  body: string;
  title: string;
  number: number;
}

interface IProps {
  data: IPost[];
}

export function Post({ data }: IProps) {
  const navigate = useNavigate();

  function handleNavigateToPost(numberPost: number) {
    console.log(numberPost);
    navigate("/posts", {
      state: {
        number: numberPost,
      },
    });
  }
  return (
    <PostContainer>
      {data.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => handleNavigateToPost(item.number)}
        >
          <div>
            <h1>{item.title}</h1>
            <span>{item.created_at}</span>
          </div>

          <p>{item.body}</p>
        </button>
      ))}
    </PostContainer>
  );
}
