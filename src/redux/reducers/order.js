const initialState = {
  orders: [],
  invest: [],
  usdtAmount: 1000,
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      let newList = [...state.orders, action.payload];
      return {
        ...state,
        orders: newList,
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
            return { pair: item.pair, amount: parseInt(item.amount) + parseInt(action.payload.amount) }
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
