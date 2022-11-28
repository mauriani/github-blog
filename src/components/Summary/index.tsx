import { useEffect, useState } from "react";
import { Users, Buildings, GithubLogo, Export } from "phosphor-react";

import { SummaryContainer, SummaryCard, SummaryBio } from "./styles";
import api from "../../services";

interface IPropsSummary {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: string;
  html_url: string;
  company: string;
}

export function Summary() {
  const [loading, setloading] = useState(true);
  const [profile, setProfile] = useState<IPropsSummary>({} as IPropsSummary);

  async function getData() {
    try {
      setloading(true);
      const response = await api.get("mauriani");

      const { login, name, avatar_url, bio, followers, html_url, company } =
        response.data;

      const newItem = {
        name,
        login,
        avatar_url,
        bio,
        followers,
        html_url,
        company,
      };

      setProfile(newItem);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  function navigateToProfile() {
    window.location.href = profile.html_url;
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("profile", profile);
  return (
    <>
      {loading == true ? null : (
        <SummaryContainer>
          <SummaryCard>
            <div>
              <img src={profile.avatar_url} alt="" />

              <SummaryBio>
                <div>
                  <h1>{profile.name}</h1>

                  <button onClick={() => navigateToProfile()}>
                    github
                    <Export size={15} />
                  </button>
                </div>

                <p>{profile.bio}</p>

                <footer>
                  <button>
                    <GithubLogo size={18} />
                    {profile.login}
                  </button>
                  <button>
                    <Buildings size={18} />
                    {profile.company}
                  </button>
                  <button>
                    <Users size={18} />
                    {profile.followers} seguidores
                  </button>
                </footer>
              </SummaryBio>
            </div>
          </SummaryCard>
        </SummaryContainer>
      )}
    </>
  );
}
