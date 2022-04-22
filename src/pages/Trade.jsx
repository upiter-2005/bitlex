import React from "react";
import { Buy, Current, History, Pairs, Sell, LoadingPair } from "../components";
import { AccountData } from "./";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPairs } from "../redux/actions/currencies";
import { addOrderItem, setBalance } from "../redux/actions/order";

function Trade() {
  //const [pairs, setPairs] = useState([]);
  const [defaultPair, setDefaultPair] = useState({});
  const [qwe, setQwe] = useState(1);
  const [account, setAccount] = useState(0);
  //const [order, setOrder] = useState([]);

  const pairs = useSelector(({ currencies }) => currencies.items);
  const load = useSelector(({ currencies }) => currencies.isLoaded);
  const order = useSelector(({ order }) => order.orders);
  const balance = useSelector(({order})=> order.usdtAmount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPairs());
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setDefaultPair(data.default);
      dispatch(setBalance(data.account[0].amount));
    });
  }, []);

  const handlerClick = () => {
    let a = qwe;
    setQwe(a + 1);
  };

  const addOrder = (obj) => {
    dispatch(addOrderItem(obj));
  };

  const onClickChangePair = React.useCallback((obj) => {
    setDefaultPair(obj);
    console.log("onClickChangePair / callBack");
  }, []);

  // const onClickChangePair = (obj) => {
  //   setDefaultPair(obj);
  //   console.log('onClickChangePair / callBack');
  // };

  return (
    <>
      <section className="bitlex-wrap">
        <button onClick={handlerClick}>ckick</button>

        <div className="container-my">
          <div className="row">
            <div className="col-md-2">
              <div className="trade__account">
                <h4>Account</h4>
                <AccountData />
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <Current activePair={defaultPair} />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="birga-marga">
                    <div className="tab-content">
                      <div id="bm1" className="container tab-pane active">
                        <ul className="nav nav-tabs ">
                          <li className="nav-item">
                            <span className="nav-link active">Market</span>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div id="bm21" className="container tab-pane active">
                            <div className="row">
                              <Buy
                                activePair={defaultPair}
                                balance={balance}
                                makeOrder={addOrder}
                              />
                              <Sell
                                activePair={defaultPair}
                                usdt={account}
                                makeOrder={addOrder}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-0">
              <div className="d-flex justify-content-end f-container-a">
                {/* <a href="#" className="for-star">
                  <img src="img/star.svg" alt="sitename" className="star" />
                </a>
                <a href="#" id="tron">
                  TRON
                </a> */}
              </div>
              <div className="d-flex justify-content-between table-with-ico-panel">
                <p>
                  <input type="serch" placeholder="Поиск..." />
                </p>
                <a href="#" id="ch-col">
                  Изменения
                </a>
                <a href="#" id="ob-col">
                  Объем
                </a>
              </div>

              <Pairs
                currensies={pairs}
                onChangePair={onClickChangePair}
                isLoaded={load}
              />
            </div>
          </div>
        </div>
      </section>
      <History items={order} />
    </>
  );
}

export default Trade;
