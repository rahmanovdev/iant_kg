import scss from "./HeroContent.module.scss";
import { FiSearch } from "react-icons/fi";
import iant from "../../../../../assets/img/iant.png";
import Image from "next/image";

const HeroContent = () => {
  return (
    <>
      <div className={scss.heroContent}>
        <div className={scss.bg}></div>
        <div className="container">
          <div className={scss.content}>
            <h1>
              <span>i</span>ANT.KG — находи подработку быстро и удобно!
            </h1>
            <div className={scss.welcomeInfo}>
              <Image src={iant} alt="" />
              <p>
                Наша платформа создана для тех, кто ищет гибкую работу или
                разовые проекты, чтобы легко подзаработать. Удобный поиск,
                актуальные вакансии, и только проверенные работодатели — на
                iANT.KG!
              </p>
            </div>
            <div className={scss.input}>
              <input type="text" placeholder="Искать по вакансиям" />
              <button>
                Найти <FiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
