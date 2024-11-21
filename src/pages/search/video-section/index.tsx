import { useState } from "react";
import barcelonaVideo1 from "../../../assets/videos/barcelona-video1.mp4";
import barcelonaVideo2 from "../../../assets/videos/barcelona-video2.mp4";
import barcelonaVideo3 from "../../../assets/videos/barcelona-video3.mp4";
import barcelonaVideo4 from "../../../assets/videos/barcelona-video4.mp4";
import barcelonaVideo5 from "../../../assets/videos/barcelona-video5.mp4";
import barcelonaVideo6 from "../../../assets/videos/barcelona-video6.mp4";

import {
  ArrowBackIcon,
  ArrowForwardIcon,
  BackIconButton,
  CircleButton,
  CircleIcon,
  CircleOutlinedIcon,
  ForwardIconButton,
  MainContainer,
  NavigationContainer,
  Section,
  Title,
  Video,
  VideoCard,
  VideoCardsContainer,
} from "./styles";

const videos = [
  barcelonaVideo1,
  barcelonaVideo2,
  barcelonaVideo3,
  barcelonaVideo4,
  barcelonaVideo5,
  barcelonaVideo6,
];

function VideosSection() {
  const [videoIndex, setVideoIndex] = useState(0);

  const handleClickBackButton = () => {
    if (videoIndex === 0) {
      setVideoIndex(videos.length - 1);
    } else {
      setVideoIndex((currentIndex) => currentIndex - 1);
    }
  };

  const handleClickForwardButton = () => {
    if (videoIndex === videos.length - 1) {
      setVideoIndex(0);
    } else {
      setVideoIndex((currentIndex) => currentIndex + 1);
    }
  };

  return (
    <MainContainer>
      <Section>
        <Title>Videos</Title>
        <VideoCardsContainer>
          <VideoCard>
            <Video src={videos[videoIndex]} controls />
          </VideoCard>
        </VideoCardsContainer>
        <NavigationContainer>
          <BackIconButton onClick={handleClickBackButton}>
            <ArrowBackIcon />
          </BackIconButton>
          {videos.map((_, index) => {
            return videoIndex === index ? (
              <CircleButton onClick={() => setVideoIndex(index)}>
                <CircleIcon key={index} />
              </CircleButton>
            ) : (
              <CircleButton onClick={() => setVideoIndex(index)}>
                <CircleOutlinedIcon key={index} />
              </CircleButton>
            );
          })}
          <ForwardIconButton onClick={handleClickForwardButton}>
            <ArrowForwardIcon />
          </ForwardIconButton>
        </NavigationContainer>
      </Section>
    </MainContainer>
  );
}

export default VideosSection;
