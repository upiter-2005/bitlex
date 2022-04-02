import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../css/transition.css';

function History({ items }) {
  return (
    <section>
      <div className="container">
        <div className="order-wrap-head">
          <h4>Ордера</h4>
        </div>

        <div className="order-wrap">
          <div className="order-wrap-item">
            <span>Дата</span>
          </div>
          <div className="order-wrap-item">
            <span>Пара</span>
          </div>
          <div className="order-wrap-item">
            <span>Тип</span>
          </div>

          <div className="order-wrap-item">
            <span>Цена</span>
          </div>
          <div className="order-wrap-item">
            <span>Кол-во</span>
          </div>
          <div className="order-wrap-item">
            <span>Сумма</span>
          </div>

          {/* <div className="order-wrap-item">
              <span>Всего</span>
            </div> */}

          {/* <div className="order-wrap-item">
            <select>
              <option value="volvo">Отменить все</option>
              <option value="saab">Все</option>
              <option value="opel">Лимит</option>
              <option value="audi">Стоп-лимит</option>
              <option value="audi">Limit-Marker</option>
            </select>
          </div> */}
        </div>
        <div>
          <TransitionGroup>
          {items.map((item, index) => (
             <CSSTransition
             key={index}
             timeout={500}
             classNames="item"
           >
            <div className="order-wrap" >
              <div className="order-wrap-item">
                <span>{item.time}</span>
              </div>
              <div className="order-wrap-item">
                <span>{item.pair}/USDT</span>
              </div>
              <div className="order-wrap-item">
                <span>{item.type}</span>
              </div>
              <div className="order-wrap-item">
                <span>{item.price}</span>
              </div>
              <div className="order-wrap-item">
                <span>{item.amount}</span>
              </div>
              <div className="order-wrap-item">
                <span>{item.result}</span>
              </div>
            </div>
            </CSSTransition>
          ))}
          </TransitionGroup>
        </div>
      </div>
    </section>
  );
}
export default React.memo(History);
