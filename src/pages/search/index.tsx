import ImagesSection from "./images-section";
import VideosSection from "./video-section";
import DetailsSection from "./details-section";
import { Title, MainContainer, BannerContainer, MaskContainer, ContentWrapper, ContentContainer } from "./styles";

function Search() {
  return (
    <MainContainer>
      <BannerContainer>
        <MaskContainer />
      </BannerContainer>
      <ContentWrapper>
        <ContentContainer>
          <Title>Barcelona</Title>
          <DetailsSection />
          <ImagesSection />
          <VideosSection />
        </ContentContainer>
      </ContentWrapper>
    </MainContainer>
  );
}

export default Search;
