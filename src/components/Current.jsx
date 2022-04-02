import React from "react";

const Current = React.memo(function Current({ activePair }) {
  return (
    <div className="bit-stripe">
      <div className="bit-stripe-1">
        <img src={activePair.image} alt="" />
        <span className="bold-v">{activePair.currency}</span>
        <span className="thin-v">/ USDT</span>
      </div>
      <div className="bit-stripe-2">
        <p>Последняя цена</p>
        <div className="bit-stripe-2-ch">
          <span className="green">${activePair.price}</span>
        </div>
      </div>

      <div className="bit-stripe-3">
        <p>Макс за 24ч</p>
        <div>
          <span>${activePair.price}</span>
        </div>
      </div>
      <div className="bit-stripe-3">
        <p>Мин за 24ч</p>
        <div>
          <span>${activePair.price}</span>
        </div>
      </div>
    </div>
  );
});

export default Current;
