import React from "react";
import { createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeInvest, setBalance } from "../redux/actions/order";

import moment from "moment";

function Sell({ activePair, balance, makeOrder, investItems }) {
  const refAmount = createRef();
  const dispatch = useDispatch();

  const handlerSubmitOrder = (event) => {
    event.preventDefault();
    const time = moment().format("DD-MM-YYYY hh:mm:ss");

    const order = {
      amount: refAmount.current.value,
      pair: activePair.currency,
      price: activePair.price,
      type: "sell",
      time: time,
      result: refAmount.current.value * activePair.price,
    };

    let isExist = investItems.some((item) => item.pair === activePair.currency);
    if (isExist) {
      let currentCoin = activePair.currency;
      let amountCoin = order.amount;
      let calcBalance = parseFloat(order.result) + parseFloat(balance);
      
        dispatch(setBalance(calcBalance));
        dispatch(removeInvest({ currentCoin, amountCoin }));
        makeOrder(order);
      
    } else {
      return false;
    }
  };

  return (
    <div className="col-md-6">
      <div className="d-flex justify-content-between align-items-center bt31">
        <p className="m-0 sel-btc">Продать {activePair.currency}</p>
        <span>
          <img src="img/wallet.svg" alt="" width="20px" />
          <span className="sale-btc">- {activePair.currency}</span>{" "}
        </span>
      </div>
      <form onSubmit={handlerSubmitOrder}>
        <p>
          <label htmlFor="bb1">Цена:</label>
          <input
            type="number"
            className="bb1"
            placeholder={activePair.currency}
          />
        </p>
        <p>
          <label htmlFor="bb1">Кол-во:</label>
          <input
            type="number"
            className="bb11"
            ref={refAmount}
            placeholder="0"
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
          <input
            type="text"
            id="bb3"
            className="blcahin"
            placeholder={activePair.currency}
          />
        </p>
        <button type="submit" className="enter">
          Продать <span>{activePair.currency}</span>
        </button>
      </form>
    </div>
  );
}
export default Sell;
