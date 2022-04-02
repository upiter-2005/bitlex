import React from "react";
import { createRef } from "react";

import moment from "moment";

function Buy({ usdt, activePair, makeOrder }) {
  const refAmount = createRef();

  const handlerSubmitOrder = (event) => {
    event.preventDefault();
    const time = moment().format("DD-MM-YYYY hh:mm:ss");

    const order = 
      {
        amount: refAmount.current.value,
        pair: activePair.currency,
        price: activePair.price,
        type: "buy",
        time: time,
        result: refAmount.current.value * activePair.price,
      }
    ;
    makeOrder(order);
  };

  return (
    <div className="col-md-6 br-1">
      <div className="d-flex justify-content-between align-items-center bt31">
        <p className="m-0 bye-btc">Купить {activePair.currency}</p>
        <span>
          <img src="img/wallet.svg" alt="" width="20px" />
          <span className="sale-btc">{usdt} USDT</span>
        </span>
      </div>
      <form onSubmit={handlerSubmitOrder}>
        <p>
          <label htmlFor="bb1">Цена:</label>
          <input type="text" className="bb1" placeholder={activePair.price} />
        </p>
        <p>
          <label htmlFor="bb1">Кол-во:</label>
          <input
            type="number"
            className="bb11"
            ref={refAmount}
            placeholder={activePair.currency}
            min="0"
          />
        </p>
        <div className="d-flex justify-content-end f-container-a">
          <a href="#">25%</a>
          <a href="#">50%</a>
          <a href="#">75%</a>
          <a href="#">100%</a>
        </div>
        <p>
          <label htmlFor="bb1">Всего:</label>
          <input type="text" id="bb3" className="blcahin" placeholder={usdt} />
        </p>
        <button type="submit" className="enter">
          Купить <span>{activePair.currency}</span>
        </button>
      </form>
    </div>
  );
}
export default Buy;
