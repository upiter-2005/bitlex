import React from "react";
import a1 from "../assets/img/a1.png";
import a2 from "../assets/img/a2.png";
import a3 from "../assets/img/a3.png";
import c1 from '../assets/img/c1.svg';
import c2 from '../assets/img/c2.svg';
import c3 from '../assets/img/c3.svg';
import c4 from '../assets/img/c4.svg';
import c5 from '../assets/img/c5.svg';
import c6 from '../assets/img/c6.svg';
import trade1 from '../assets/img/trade1.jpg'
import api from '../assets/img/api.png'
import api2 from '../assets/img/api2.jpg'

function Home() {
  return (
    <>
      <section className="popular">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="popular-item">
                <p className="valuta">WIN / TRX</p>
                <div className="popular-item-flex">
                  <p>
                    <span className="gray">0,018090 TRX</span>{" "}
                  </p>
                </div>
                <p className="bot-valuta green">
                  +1.21% <span>Volume: 1430 TRX</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="popular-item">
                <p className="valuta">LGO / ETH</p>
                <div className="popular-item-flex">
                  <p>
                    <span className="green">0,00002641 ETH</span>{" "}
                  </p>
                </div>
                <p className="bot-valuta red">
                  -27.69% <span>Volume: 330,85743 ETH</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="popular-item">
                <p className="valuta">iPLAY / IOST</p>
                <div className="popular-item-flex">
                  <p>
                    <span className="red">0,0063 IOST</span>
                  </p>
                </div>
                <p className="bot-valuta red">
                  -49.59% <span>Volume: 3834965 IOST</span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="popular-item">
                <p className="valuta">IQ / EOS</p>
                <div className="popular-item-flex">
                  <p>
                    <span className="green">0.000676 EOS</span>{" "}
                  </p>
                </div>
                <p className="bot-valuta red">
                  -0.22% <span>Volume: 5143685 EOS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="search">
        <input type="text" placeholder="Поиск..." />
      </div>

      <div className="container">
        <div id="section-star"></div>
      </div>

      <section className="desigion">
        <h2>Особенности BITLEX EXCHANGE</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="desigion-block">
                <img src={a1} alt="sitename" />
                <h3>Непревзойденная производительность</h3>
                <span>
                  BITLEX EXCHANGE может конкурировать со скоростью и объемом
                  централизованных бирж.
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="desigion-block">
                <img src={a2} alt="sitename" />
                <h3>Объединение блокчейнов</h3>
                <span>
                  BITLEX EXCHANGE не ограничен одним блокчейном. Мы предлагаем
                  торговлю через несколько блокчейнов и стремимся поддерживать
                  все основные цифровые активы.
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="desigion-block">
                <img src={a3} alt="sitename" />
                <h3>Комплексные сделки</h3>
                <span>
                  Наш механизм сопоставления вне цепочки может обрабатывать
                  сложные типы ордеров, такие как рыночные и лимитные ордера. Мы
                  планируем внедрить маржинальную торговлю в будущем.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trade1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                Биржа, внедряющая новые технологии и новые идеи в крипто-мир
              </h2>
              <p>
                При создании BITLEX EXCHANGE мы имели цель создать её
                отличающейся от других многочисленных децентрализованных бирж,
                которые уже существуют на рынке. BITLEX EXCHANGE стремится
                создать платформу, которая будет являться самой удобной в мире,
                и обеспечит безопасную торговлю цифровыми активами для
                инвесторов и самые эффективные инструменты IEO для команд с
                отличными идеями.
              </p>
              <a href="#" className="register">
                Скачать приложение для мобильного
              </a>
              <a href="#" className="register">
                Скачать приложение для десктопа
              </a>
            </div>
            <div className="col-md-6">
              <img
                src={trade1}
                alt="sitename"
                className="img-responsive shadow-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="trade1 trade1-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={api}
                alt="sitename"
                className="img-responsive shadow-img"
              />
            </div>
            <div className="col-md-6">
              <h2 className="ta-right">Инновационная система </h2>
              <p className="ta-right">
                Биржи на блокчейнах более безопасны, чем традиционные биржи, но
                часто они медленны и сложны в использовании. BITLEX EXCHANGE
                преодолевает эти проблемы с помощью инновационных технологий и
                интуитивно понятных интерфейсов. Мы обрабатываем десятки тысяч
                транзакций, даже не контролируя Ваши активы. Более того, наш
                интерфейс идеально подходит как для начинающих, так и для
                опытных пользователей.
              </p>
              <a href="#" className="register ">
                Официальная документация API
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="trade1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Безопасность </h2>

              <p>
                Централизованные БИРЖИ жертвуют безопасностью клиентов ради
                достижения производительности. Они хранят Ваши средства,
                оставаясь уязвимыми для взлома или банкотства. Когда Вы
                используете эти системы, Вы доверяете им свои активы.
              </p>
              <p>
                С BITLEX EXCHANGE Вы всегда контролируете свои средства. Ваши
                личные ключи не подходят к нашим серверам - они зашифрованы на
                Вашем личном компьютере. Наш механизм согласования вне цепочки
                сам по себе является распределенной системой, добавляя
                дополнительную защиту для Вашего спокойствия.
              </p>
              <a href="#" className="register">
                Скачать приложение для мобильного
              </a>
            </div>
            <div className="col-md-6">
              <img
                src={api2}
                alt="sitename"
                className="img-responsive shadow-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2 className="text-center">Технологии</h2>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="contact-block">
                <img src={c1} alt="" />
                <h3>Объединение Блокчейнов (TRON, EOS, Ethereum, IOST) </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-block">
                <img src={c2} alt="" />
                <h3>Предоставление Займов и Кредитов </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-block">
                <img src={c3} alt="" />
                <h3>Децентрализованная Биржа </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-block">
                <img src={c4} alt="" />
                <h3>Повышенная Безопасность </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-block">
                <img src={c5} alt="" />
                <h3>Депозитные Центры </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-block">
                <img src={c6} alt="" />
                <h3>IEO Платформа </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
