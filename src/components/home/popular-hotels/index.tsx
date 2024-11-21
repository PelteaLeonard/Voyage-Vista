import Card from "../card";
import {
  ButtonsContainer,
  CardsContainer,
  LocationButton,
  Section,
  Title,
} from "./styles";

function PopularHotels() {
  return (
    <Section>
      <Title>Popular Hotels</Title>
      <ButtonsContainer>
        <LocationButton>Location 1</LocationButton>
        <LocationButton>Location 2</LocationButton>
        <LocationButton>Location 3</LocationButton>
        <LocationButton>Location 4</LocationButton>
        <LocationButton>Location 5</LocationButton>
        <LocationButton>Location 6</LocationButton>
      </ButtonsContainer>
      <CardsContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </CardsContainer>
    </Section>
  );
}
export default PopularHotels;
