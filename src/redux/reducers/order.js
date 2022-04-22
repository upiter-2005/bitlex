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
      let balance = action.payload.toFixed(2);
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
          if(item.pair === action.payload.pair){
            let result = parseFloat(item.amount) + parseFloat(action.payload.amount) 
            result = result.toFixed(2);
            return { pair: item.pair, amount: result}
          }else return item;
        });
      }

      return {
        ...state,
        invest: investList,
      };

    default:
      return state;
  }
};

export default order;
