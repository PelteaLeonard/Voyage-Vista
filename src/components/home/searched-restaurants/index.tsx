import Card from "../card";
import { ButtonsContainer, RestaurantButton, RestaurantCards, Section, Title } from "./styles";

function SearchedRestaurants() {
  return (
      <Section>
        <Title> Most Searched Restaurants</Title>
        <ButtonsContainer>
          <RestaurantButton> Restaurant 1</RestaurantButton>
          <RestaurantButton> Restaurant 2</RestaurantButton>
          <RestaurantButton> Restaurant 3</RestaurantButton>
          <RestaurantButton> Restaurant 4</RestaurantButton>
          <RestaurantButton> Restaurant 5</RestaurantButton>
          <RestaurantButton> Restaurant 6</RestaurantButton>
        </ButtonsContainer>
        <RestaurantCards>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </RestaurantCards>
      </Section>
  );
}

export default SearchedRestaurants;
