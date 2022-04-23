const initialState = {
  orders: [],
  invest: [],
  usdtAmount: 0,
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      let newList = [...state.orders, action.payload];
      return {
        ...state,
        orders: newList,
      };

    case "SET_BALANCE":
      let balance = parseFloat(action.payload).toFixed(2);
      console.log(action.payload);
      return {
        ...state,
        usdtAmount: balance,
      };

    case "ADD_INVEST":
      let isDouble = state.invest.some(
        (item) => item.pair === action.payload.pair
      );
      //console.log(isDouble);
      let investList = [];
      if (!isDouble) {
        investList = [...state.invest, action.payload];
      } else {
        investList = state.invest.map((item) => {
          console.log(item);
          if (item.pair === action.payload.pair) {
            let result =
              parseFloat(item.amount) + parseFloat(action.payload.amount);
            result = result.toFixed(2);
            return { pair: item.pair, amount: result };
          } else return item;
        });
      }
      return {
        ...state,
        invest: investList,
      };

    case "REMOVE_INVEST":
      let removeData = [];
      removeData = state.invest.map((item) => {
        if (item.pair === action.payload.currentCoin) {
          let result =
            parseFloat(item.amount) - parseFloat(action.payload.amountCoin);
          result = result.toFixed(2);
          if (result < 0.0000001) {
            return false;
          }else{ return { pair: item.pair, amount: result };}
        } else return item;
      });
      return {
        ...state,
        invest: removeData,
      };

    default:
      return state;
  }
};

export default order;
