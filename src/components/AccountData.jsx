import React from "react";

function AccountData({investItems}) {

  return (
    <>
      {investItems.map((item, index) => (
        <div className="order-wrap order__col__3" key={index}>
          <div className="order-wrap-item">
            <span>{item.amount}</span>
          </div>
          <div className="order-wrap-item">
            <span>{item.pair}</span>
          </div>
          <div className="order-wrap-item">
            <span>---</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default React.memo(AccountData);
