import React from "react";

const Pairs = React.memo(function Pairs({ currensies, onChangePair }) {


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
            {currensies.map((item) => (
              <tr key={item.currency} onClick={()=> onChangePair(item)}>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.currency}/USDT</td>
                <td className="red">{item.price}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  
});
export default Pairs;
