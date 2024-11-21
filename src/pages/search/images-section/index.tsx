import { Image, ImageWrapper, ImagesContainer, Section, Title } from "./styles";
import image1 from "../../../assets/images/image_1.jpg";
import image2 from "../../../assets/images/image2.jpeg";
import image3 from "../../../assets/images/image3.webp";
import image4 from "../../../assets/images/image4.jpeg";
import image5 from "../../../assets/images/image5.jpg";
import image6 from "../../../assets/images/image6.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

function ImagesSection() {
  return (
    <Section>
      <Title>Photos</Title>
      <ImagesContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image src={image} alt="image1" />
          </ImageWrapper>
        ))}
      </ImagesContainer>
    </Section>
  );
}

export default ImagesSection;
