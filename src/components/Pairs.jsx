import React from "react";
import { LoadingPair } from "./";

const Pairs = React.memo(function Pairs({
  currensies,
  onChangePair,
  isLoaded,
}) {
  return (
    <div className="history-wrap">
      <table className="table table-with-ico" id="eos-table">
        <tbody>
          <tr>
            <th scope="col">Пара</th>
            <th scope="col">Imgs</th>
            <th scope="col">Цена</th>
          </tr>
          {/* currency fetch list */}
          {isLoaded
            ? currensies.map((item) => (
                <tr key={item.currency} onClick={() => onChangePair(item)}>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>{item.currency}/USDT</td>
                  <td className="red">{item.price}</td>
                </tr>
              ))
            : Array(10)
                .fill("")
                .map((item) => <LoadingPair />)}
        </tbody>
      </table>
    </div>
  );
});
export default Pairs;
