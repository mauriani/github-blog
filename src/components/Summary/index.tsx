import { Users, Buildings, GithubLogo, Export } from "phosphor-react";
import { SummaryContainer, SummaryCard, SummaryBio } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <div>
          <img
            src={"https://avatars.githubusercontent.com/u/32397288?v=4"}
            alt=""
          />

          <SummaryBio>
            <div>
              <h1>Cameron Williamson</h1>

              <button>
                github
                <Export size={15} />
              </button>
            </div>

            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>

            <footer>
              <button>
                <GithubLogo size={18} />
                cameronwll
              </button>
              <button>
                <Buildings size={18} />
                Rocketseat
              </button>
              <button>
                <Users size={18} />
                32 seguidores
              </button>
            </footer>
          </SummaryBio>
        </div>
      </SummaryCard>
    </SummaryContainer>
  );
}
