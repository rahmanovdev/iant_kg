import scss from "./HeroContent.module.scss";
const HeroContent = () => {
  return (
    <div className={scss.HeroContent}>
      <div className="container">
        <div className={scss.content}>Hero Content</div>
      </div>
    </div>
  );
};

export default HeroContent;
