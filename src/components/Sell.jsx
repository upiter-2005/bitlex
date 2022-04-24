import React from "react";
import { createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeInvest, setBalance } from "../redux/actions/order";

import moment from "moment";

function Sell({ activePair, balance, makeOrder, investItems }) {
  const refAmount = createRef();
  const dispatch = useDispatch();
  let investBalanceCoin;
  investItems.map((item) => {
    if (item.pair === activePair.currency) {
      investBalanceCoin = item.amount;
      return false;
    }
  });

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
    
    console.log(investBalanceCoin);
    if (isExist) {
      let currentCoin = activePair.currency;
      let amountCoin = order.amount;
      if (investBalanceCoin >= amountCoin) {
        let calcBalance = parseFloat(order.result) + parseFloat(balance);

        dispatch(setBalance(calcBalance));
        dispatch(removeInvest({ currentCoin, amountCoin }));
        makeOrder(order);
      }else{
        alert('У вас нет столько монет, введите меньшее количество')
      }
    } else {
      alert('Нет монеты на балансе');
    }
  };

  return (
    <div className="col-md-6">
      <div className="d-flex justify-content-between align-items-center bt31">
        <p className="m-0 sel-btc">Продать {activePair.currency}</p>
        <span>
          <img src="img/wallet.svg" alt="" width="20px" />
          <span className="sale-btc">{investBalanceCoin} - {activePair.currency}</span>{" "}
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
            min="0"
            step="0.0001"
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
