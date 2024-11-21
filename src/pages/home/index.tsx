import PopularAttractions from "../../components/home/popular-attractions";
import PopularHotels from "../../components/home/popular-hotels";
import SearchTrip from "../../components/home/search-trip";
import SearchedRestaurants from "../../components/home/searched-restaurants";
import {
  BannerContainer,
  InnerContainer,
  MainContainer,
  MaskContainer,
  SectionsContainer,
  Title,
  UspContainer,
  UspIcon,
  UspText,
  UspsContainer,
} from "./styles";

function Home() {
  return (
    <MainContainer>
      <BannerContainer>
        <MaskContainer>
          <InnerContainer>
            <Title>Your trip starts here</Title>
            <UspsContainer>
              <UspContainer>
                <UspIcon />
                <UspText>Travel agnostics</UspText>
              </UspContainer>
            </UspsContainer>
            <SearchTrip />
          </InnerContainer>
        </MaskContainer>
      </BannerContainer>
      <SectionsContainer>
        <PopularHotels />
        <PopularAttractions />
        <SearchedRestaurants />
      </SectionsContainer>
    </MainContainer>
  );
}
export default Home;
