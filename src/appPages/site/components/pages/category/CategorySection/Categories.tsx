"use client";
import Link from "next/link";
import scss from "./Categories.module.scss";

const Categories = () => {
  const categoriesTitle = [
    {
      title: "Авторемонт и техобслуживание",
      img: "https://static.lada.ru/files/sd/573412344/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81.jpg",
    },
    {
      title: "IT/Телекоммуникации/Связь",
      img: "https://ystu.ru/upload/resize_cache/webp/iblock/866/dsspy94mf0rpwssstvnh8wmjxh1tlask/1662526296_s_25.webp",
    },
    {
      title: "Административный персонал",
      img: "https://gboupsk.ru/images/pages/UCPK/administranivkaPROF.png",
    },
    {
      title: "Безопасность и охрана",
      img: "https://articles.tribun.com.ua/images/542/6/6ae2fc5feb3589ddce5294a7a396224f_5426.jpg",
    },
    {
      title: "Медицина и здоровье ",
      img: "https://iconinvest.ru/news/uploads/posts/2020-03/1584779424_d7.jpg",
    },
    {
      title: "Наука/Педагогика/Образование",
      img: "https://razoom.mgutm.ru/pluginfile.php/1486/course/overviewfiles/399300-PCOPKD-457-e1561383378660.jpg",
    },
    {
      title: "Продажи/Маркетинг/Реклама/PR ",
      img: "https://fractus.com.ua/wp-content/uploads/2018/08/prodazga_marketing.jpg",
    },
    {
      title: "Повара/Официанты/Бармены/Пищевое производство",
      img: "https://static.tildacdn.com/tild3262-3266-4566-b532-353733386265/personal-restorana-k.jpg",
    },
    {
      title: "Промышленность и сельское хозяйство",
      img: "https://agro.gov.kg/wp-content/uploads/af-10-project-large-3.jpg",
    },
    {
      title: "Руководители и менеджмент",
      img: "https://www.sonar2050.org/storage/publications/4095/06325670016082276838263.jpg",
    },
    {
      title: "Сервис/Обслуживание/Туризм",
      img: "https://proforientator.ru/upload/img/publications/stati/servis_turizm2.jpg",
    },
    {
      title: "Транспорт и перевозки ",
      img: "https://www.ingruz.ru/public/transportnay_logistika.jpg",
    },
    {
      title: "Строительство/Архитектура/Ремонт/Недвижимость ",
      img: "https://mperspektiva.ru/upload/resize_cache/webp/upload/iblock/752/752d721e1748f743ff0438ebc8325c6f.webp",
    },
    {
      title: "Творчество/Музыка/Исскуство/Культура",
      img: "https://tsu.ru/upload/resize_cache/iblock/f93/5ju66sxnn0rns4ed1mmuqbe315xdr0o6/728_301_2/orkestr1.jpg",
    },
    {
      title: "Юриспруденция ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeHAwmeXRHt7F7xVLRyOvrBEvliIC7GGnww&s",
    },
    {
      title: "Спорт/Фитнес/Красота ",
      img: "https://ncrdo.ru/upload/medialibrary/fdf/fdf13f2519c6c80379fb4afa60c7352b.jpg",
    },
    {
      title: "СМИ/Издательство/Полиграфия",
      img: "https://proverili.ru/uploads/media/27665/brosyurovshhik.jpg",
    },
    {
      title: "Экономика/Бухгалтерия/Банки/Аудит",
      img: "https://nipkef.ru/upload/medialibrary/3d0/1r0lrbu49e6zdqptossjqmpwpe40q811.jpg",
    },
  ];

  return (
    <section className={scss.categories}>
      <div className="container">
        <div className={scss.content}>
          {/* <div className={scss.main}>
            <Link href="/">Главная</Link> -{" "}
            <Link href="/category">Категории</Link>
          </div> */}
          <div className={scss.categoryDetails}>
            <h1>Работа по профессиям</h1>
            <div className={scss.categoryBlocks}>
              {categoriesTitle.map((el) => (
                <div className={scss.categoryBlock}>
                  <div className={scss.bg}></div>
                  <img src={el.img} alt="" />
                  <Link href="/">{el.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
