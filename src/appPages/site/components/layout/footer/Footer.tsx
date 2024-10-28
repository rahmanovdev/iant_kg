import scss from "./Footer.module.scss";
import iant from "../../../../assets/img/iant.png";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.img}>
            <Image src={iant} alt="" />
            <h2>
              <span>i</span>ANT.KG
            </h2>
          </div>
          <div className={scss.hr}></div>
          <div className={scss.text}>
            <h3>Соискателям</h3>
            <h4>Вакансии</h4>
            <h4>Компании</h4>
            <h4>Личный кабинет</h4>
          </div>
          <div className={scss.hr}></div>
          <div className={scss.text}>
            <h3>Работодателям</h3>
            <h4>Добавить вакансию</h4>
            <h4>Работники</h4>
            <h4>Личный кабинет</h4>
          </div>
          <div className={scss.hr}></div>
          <div className={scss.text}>
            <h3>Информация</h3>
            <h4>Служба поддержки</h4>
            <h4>Пользовательское соглашение</h4>
            <h4>Контакты</h4>
          </div>
          <div className={scss.hr}></div>
          <div className={scss.share}>
            <a className={scss.instagram}>
              <BsInstagram />
            </a>
            <a className={scss.tiktok}>
              <AiFillTikTok />
            </a>
            <a className={scss.telegram}>
              <FaTelegram />
            </a>
            <a className={scss.whatsapp}>
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
        <h6>
          "<span>i</span>ANT.KG" - работа в Кыргызстане, проект основан в 2024
          году
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
