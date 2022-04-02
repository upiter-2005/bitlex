const initialState = {
    orders: []         
  };
  
  const order = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ORDER":
          let newList = [
              ...state.orders,
              action.payload
          ];
        return {
          ...state,
          orders: newList,
        };
      
      default:
        return state;
    }
  };
  
  export default order;
  