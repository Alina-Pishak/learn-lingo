import {
  DecoratedText,
  HeroContainer,
  HeroImg,
  HeroText,
  HeroTitle,
  HeroWrapper,
} from "./Hero.styled";
import img1x from "../../images/girl-with-mac-1x.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button/Button";
// import img2x from "../../images/girl-with-mac-2x.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <HeroContainer>
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
          <Button
            type="button"
            onClick={() => navigate("/teachers")}
            variant="hero"
          >
            Get started
          </Button>
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
    </div>
  );
};

export default Hero;
