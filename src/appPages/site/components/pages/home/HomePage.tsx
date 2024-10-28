import HeroContent from "./HeroContent/HeroContent";
import HomeSection from "./HeroContent/HomeSection";
import scss from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={scss.content}>
      <HeroContent />
      <HomeSection />
    </div>
  );
};

export default HomePage;
