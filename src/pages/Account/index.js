import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../components";
import AccountData from "../../components/AccountData";
import { useState } from "react";
import { useSelect } from "react-redux";

function Account() {
  const items = useSelector(({ order }) => order.orders);
  const [open, switchModal] = useState(false);
  const invest = useSelector(({ order }) => order.invest);
  return (
    <section className="bitlex-wrap">
      <h2>Account</h2>
      <button onClick={() => switchModal(true)}>Open Modal</button>
      <Modal isActive={open} setActive={switchModal}>
        <div>
          {items ? (
            items.map((item, index) => (
              <div className="order-wrap" key={index}>
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
            ))
          ) : (
            <div>No orders</div>
          )}
        </div>
      </Modal>
      <div className="container">
        <div className="order-wrap-head">{/* <h4>Ордера</h4> */}</div>

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
        </div>
      </div>
      <div>
        {items ? (
          items.map((item, index) => (
            <div className="order-wrap" key={index}>
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
          ))
        ) : (
          <div>No orders</div>
        )}
      </div>

      <div className="order-wrap order__col__3">
        <div className="order-wrap-item">
          <span>Кол-во</span>
        </div>
        <div className="order-wrap-item">
          <span>Пара</span>
        </div>
        <div className="order-wrap-item">
          <span>Сумма</span>
        </div>
      </div>

      <AccountData investItems={invest} />
    </section>
  );
}

export default Account;
