import sample from "lodash.sample";
import React, { useEffect } from "react";
import styled from "styled-components";
import { bgList } from "./utils";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Home = () => {
  const [bg, setBg] = React.useState("1.gif");
  const [spotifyUrl, setSpotifyUrl] = React.useState("");
  const [playlist, setPlaylist] = React.useState();
  useEffect(() => {
    const interval = setInterval(() => {
      const temp = sample(bgList);
      setBg(temp);
    }, 30000);

    return () => clearInterval(interval);
  }, []);
  const handleUrl = () => {
    let a = spotifyUrl.split("/")[3];
    let b = spotifyUrl.split("/")[4];
    const url = "https://open.spotify.com/embed/" + a + "/" + b;
    setPlaylist(url);
  };
  return (
    <Container bg={bg}>
      <Header>
        <img src="logo.png" alt="Logo" />
      </Header>
      <Content>
        <Left>
          <AmbienceContainer>
            <Heading>Ambience Noise</Heading>
            <PlayerContainer>
              <AudioPlayer
                src="1.mp3"
                // other props here
                loop
              />
              <AudioPlayer
                src="2.mp3"
                // other props here
                loop
              />
              <AudioPlayer
                src="3.mp3"
                // other props here
                loop
              />
              <AudioPlayer
                src="4.mp3"
                // other props here
                loop
              />
            </PlayerContainer>
          </AmbienceContainer>
        </Left>
        <Right>
          <AmbienceContainer>
            <iframe
              title="aaa"
              //   src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0ieekvzt1Ic?si=ba4cf028f6f0428f"
              src={playlist}
              width="100%"
              height="100%"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </AmbienceContainer>
        </Right>
      </Content>
      <Footer>
        <input onChange={(e) => setSpotifyUrl(e.target.value)} />
        <Button onClick={() => handleUrl()}>Change Playlist</Button>
      </Footer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: cover;
  .rhap_container {
    background: none;
  }
  .rhap_current-time {
    color: black;
  }
  .rhap_time {
    color: black;
  }
`;
const Left = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  audio {
    background: none;
    width: 100%;
    margin: 20px 0;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  width: 48%;
  height: 100%;
  justify-content: start;
`;
const AmbienceContainer = styled.div`
  width: 486px;
  height: 650px;
  overflow: hidden;
  /* padding: 10px; */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1755) 0%,
    rgba(255, 255, 255, 0.126) 100%
  );
  backdrop-filter: blur(40px);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
`;
const Heading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 32px;
  margin: 20px 0;
  font-weight: 600;
`;
const PlayerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Header = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: center;
`;
const Footer = styled.div`
  /* padding: 2px 0; */
  height: 150px;
  align-self: center;
  background-color: #0d0d0e;
  width: 28%;
  border-radius: 16px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  input {
    width: 80%;
    padding: 10px;
    background-color: #333;
    border: none;
    border-radius: 12px;
    color: #fff;
    :focus {
      outline: none;
    }
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  border: none;
  background-color: #1bb954;
  padding: 10px 10px;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;
export default Home;
