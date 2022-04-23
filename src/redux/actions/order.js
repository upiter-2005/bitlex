export const addOrderItem = (items) => ({
  type: "ADD_ORDER",
  payload: items,
});
export const addInvestOrder = (items) => ({
  type: "ADD_INVEST",
  payload: items,
});
export const removeInvest = (order) => ({
  type: "REMOVE_INVEST",
  payload: order,
});
export const setBalance = (balance) => ({
  type: "SET_BALANCE",
  payload: balance,
});
