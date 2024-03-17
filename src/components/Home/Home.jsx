import {
  DecoratedText,
  HeroButton,
  HeroContainer,
  HeroImg,
  HeroText,
  HeroTitle,
  HeroWrapper,
} from "./Home.styled";
import img1x from "../../images/girl-with-mac-1x.jpg";
// import img2x from "../../images/girl-with-mac-2x.jpg";

const Home = () => {
  return (
    <HeroContainer className="container">
      <HeroWrapper>
        <HeroTitle>
          Unlock your potential with the best{" "}
          <DecoratedText>language</DecoratedText> tutors
        </HeroTitle>
        <HeroText>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </HeroText>
        <HeroButton type="button">Get started</HeroButton>
      </HeroWrapper>
      <div>
        <HeroImg
          src={img1x}
          alt="girl with laptop"
          // srcSet={`${img2x} 2x`}
          width={568}
          height={530}
        />
      </div>
    </HeroContainer>
  );
};

export default Home;
