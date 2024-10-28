"use client";
import scss from "./HomeSection.module.scss";
import { HiArrowRight } from "react-icons/hi";
import { GiModernCity } from "react-icons/gi";
import { TbVip } from "react-icons/tb";
import { useRouter } from "next/navigation";

const HomeSection = () => {
  const router = useRouter();

  const categoriesTitle = [
    {
      title: "Авторемонт и техобслуживание",
    },
    {
      title: "IT/Телекоммуникации/Связь",
    },
    {
      title: "Административный персонал",
    },
    {
      title: "Безопасность и охрана",
    },
    {
      title: "Медицина и здоровье ",
    },
    {
      title: "Наука/Педагогика/Образование",
    },
    {
      title: "Продажи/Маркетинг/Реклама/PR ",
    },
    {
      title: "Повара/Официанты/Бармены/Пищевое производство",
    },
    {
      title: "Промышленность и сельское хозяйство",
    },
    {
      title: "Руководители и менеджмент",
    },
    {
      title: "Сервис/Обслуживание/Туризм",
    },
    {
      title: "Транспорт и перевозки ",
    },

    {
      title: "Строительство/Архитектура/Ремонт/Недвижимость ",
    },
    {
      title: "Творчество/Музыка/Исскуство/Культура",
    },
    {
      title: "Юриспруденция ",
    },
    {
      title: "Спорт/Фитнес/Красота ",
    },
  ];

  const vacancyBlocks = [
    {
      title: "Оператор call-центра",
      location: `Бишкек`,
      staj: "Без опыта",
      grafik: "Полный рабочий день",
      moneyOt: "50 000",
      moneyDo: "100 000",
      status: "vip",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Оператор call-центра",
      location: `Бишкек`,
      staj: "Без опыта",
      grafik: "Полный рабочий день",
      moneyOt: "50 000",
      moneyDo: "100 000",
      status: "vip",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Оператор call-центра",
      location: `Бишкек`,
      staj: "Без опыта",
      grafik: "Полный рабочий день",
      moneyOt: "50 000",
      moneyDo: "100 000",
      status: "user",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Оператор call-центра",
      location: `Бишкек`,
      staj: "Без опыта",
      grafik: "Полный рабочий день",
      moneyOt: "50 000",
      moneyDo: "100 000",
      status: "user",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Оператор call-центра",
      location: `Бишкек`,
      staj: "Без опыта",
      grafik: "Полный рабочий день",
      moneyOt: "50 000",
      moneyDo: "100 000",
      status: "user",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Оператор call-центра",
      location: `Бишкек`,
      staj: "Без опыта",
      grafik: "Полный рабочий день",
      moneyOt: "50 000",
      moneyDo: "100 000",
      status: "user",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Оператор call-центра",
      location: `Бишкек`,
      staj: "Без опыта",
      grafik: "Полный рабочий день",
      moneyOt: "50 000",
      moneyDo: "100 000",
      status: "vip",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Оператор call-центра",
      location: `Бишкек`,
      staj: "Без опыта",
      grafik: "Полный рабочий день",
      moneyOt: "50 000",
      moneyDo: "100 000",
      status: "vip",
      date: new Date().toLocaleDateString(),
    },
  ];

  return (
    <section className={scss.homeSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.category}>
            <h2>Категории</h2>
            <div className={scss.categories}>
              {categoriesTitle.map((el) => (
                <button>
                  {el.title.length >= 30
                    ? el.title.substring(0, 30) + "..."
                    : el.title}
                </button>
              ))}
              <button
                className={scss.next}
                onClick={() => router.push("/category")}
              >
                Дальше... <HiArrowRight />
              </button>
            </div>
          </div>
          <div className={scss.vacancy}>
            <h2>Вакансии</h2>
            <div className={scss.vacancyBlocks}>
              {vacancyBlocks.map((el, idx) =>
                el.status === "vip" ? (
                  <div className={scss.vacancyBlockVip} key={idx}>
                    <a>
                      <TbVip />
                    </a>
                    <div className={scss.info}>
                      <h2>
                        {el.title.length > 20
                          ? el.title.substring(0, 20) + "..."
                          : el.title}
                      </h2>
                      <div className={scss.detail}>
                        <div className={scss.text}>
                          <h4>
                            Местоположение: <br />
                            <span>{el.location}</span>
                          </h4>
                          <h4>
                            Зарплата: <br />
                            <span>{el.moneyDo}+ Сом</span>
                          </h4>
                        </div>
                        <div className={scss.text}>
                          <h4>
                            Опыт: <br /> <span>{el.staj}</span>
                          </h4>
                          <h4>
                            График: <br /> <span>{el.grafik}</span>
                          </h4>
                        </div>
                      </div>
                      <button>Откликнуться</button>
                    </div>
                    <hr />
                    <div className={scss.image}>
                      {/* <Image src={iant} alt="" /> */}
                      <h4>
                        <GiModernCity />
                        <span>iANT</span>
                      </h4>
                    </div>
                    <h6 className={scss.date}>{el.date}</h6>
                  </div>
                ) : null
              )}
              {vacancyBlocks.map((el, idx) =>
                el.status === "user" ? (
                  <div className={scss.vacancyBlockUser} key={idx}>
                    <div className={scss.info}>
                      <h2>
                        {el.title.length > 20
                          ? el.title.substring(0, 20) + "..."
                          : el.title}
                      </h2>
                      <div className={scss.detail}>
                        <div className={scss.text}>
                          <h4>
                            Местоположение: <br />
                            <span>{el.location}</span>
                          </h4>
                          <h4>
                            Зарплата: <br />
                            <span>{el.moneyDo}+ Сом</span>
                          </h4>
                        </div>
                        <div className={scss.text}>
                          <h4>
                            Опыт: <br /> <span>{el.staj}</span>
                          </h4>
                          <h4>
                            График: <br /> <span>{el.grafik}</span>
                          </h4>
                        </div>
                      </div>
                      <button>Откликнуться</button>
                    </div>
                    <hr />
                    <div className={scss.image}>
                      <h4>
                        <GiModernCity />
                        <span>iANT</span>
                      </h4>
                    </div>
                    <h6 className={scss.date}>{el.date}</h6>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
