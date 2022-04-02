const initialState = {
    items: [],
    isLoaded: false,                  
  };
  
  const currencies = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PAIRS":
        return {
          ...state,
          items: action.payload,
          //isLoaded: true,
        };
      
      default:
        return state;
    }
  };
  
  export default currencies;
  