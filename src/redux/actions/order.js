export const addOrderItem = (items) => ({
  type: "ADD_ORDER",
  payload: items,
});
export const addInvestOrder = (items) => ({
  type: "ADD_INVEST",
  payload: items,
});
export const setBalance = (balance) => ({
  type: "SET_BALANCE",
  payload: balance,
});
