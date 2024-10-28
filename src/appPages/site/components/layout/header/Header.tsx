"use client";
import { useState } from "react";
import scss from "./Header.module.scss";
import iant from "../../../../assets/img/iant.png";
//Icons
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
//
const Header = () => {
  const [language, setLanguage] = useState("");
  const pathname = usePathname();

  const headerComponents = [
    {
      title:
        language === "ru"
          ? "Главная"
          : language === "kg"
          ? "Башкы Бет"
          : language === "en"
          ? "Home"
          : "Главная",
      href: "/",
    },
    {
      title:
        language === "ru"
          ? "Категории"
          : language === "kg"
          ? "Категорялар"
          : language === "en"
          ? "Category"
          : "Категории",
      href: "/category",
    },
    {
      title:
        language === "ru"
          ? "Вакансии"
          : language === "kg"
          ? "Вакансялар"
          : language === "en"
          ? "Vacancy"
          : "Вакансии",
      href: "/vacancy",
    },
    {
      title:
        language === "ru"
          ? "Работники"
          : language === "kg"
          ? "Жумушчулар"
          : language === "en"
          ? "Workers"
          : "Работники",
      href: "/ds",
    },
  ];

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <Image src={iant} alt="" />
            <h2>
              <span>i</span>ANT.KG
            </h2>
          </div>
          <div className={scss.actions}>
            {headerComponents.map((el) => (
              <Link
                href={el.href}
                className={pathname === el.href ? scss.active : scss.text}
              >
                {el.title}
              </Link>
            ))}
          </div>
          <div className={scss.details}>
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value="ru">Ru</option>
              <option value="kg">Kg</option>
              <option value="en">En</option>
            </select>
            <div className={scss.user}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
