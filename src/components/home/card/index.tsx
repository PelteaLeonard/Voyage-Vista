import {
  Image,
  Name,
  ImageWrapper,
  MainContainer,
  DetailsContainer,
  ReviewsContainer,
  RatingWrapper,
  RatingGrade,
  NumberOfReviews,
} from "./styles";
import turkeyImage from "../../../assets/images/Turkey.jpg";
import { Rating } from "@mui/material";

function Card() {
  return (
    <MainContainer>
      <ImageWrapper>
        <Image src={turkeyImage} alt="image" />
      </ImageWrapper>
      <DetailsContainer>
        <Name>Best Hotel 1</Name>
        <RatingWrapper>
          <Rating />
        </RatingWrapper>
        <ReviewsContainer>
          <RatingGrade>4.5/5</RatingGrade>
          <NumberOfReviews>187 reviews</NumberOfReviews>
        </ReviewsContainer>
      </DetailsContainer>
    </MainContainer>
  );
}

export default Card;
