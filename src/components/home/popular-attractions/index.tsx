import Card from "../card";
import {
  AttractionButton,
  AttractionsCards,
  ButtonsContainer,
  Section,
  Title,
} from "./styles";

function PopularAttractions() {
  return (

      <Section>
        <Title>Popular Attractions</Title>
        <ButtonsContainer>
          <AttractionButton>Attraction 1</AttractionButton>
          <AttractionButton>Attraction 2</AttractionButton>
          <AttractionButton>Attraction 3</AttractionButton>
          <AttractionButton>Attraction 4</AttractionButton>
          <AttractionButton>Attraction 5</AttractionButton>
          <AttractionButton>Attraction 7</AttractionButton>
        </ButtonsContainer>
        <AttractionsCards>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </AttractionsCards>
      </Section>
  
  );
}
export default PopularAttractions;
