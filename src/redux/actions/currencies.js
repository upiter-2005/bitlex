import axios from "axios";

// export const setLoaded = (val) => ({
//   type: "SET_LOADED",
//   payload: val,
// });

export const fetchPairs = () => (dispatch) => {
  axios.get("http://localhost:3000/db.json").then(({ data }) => {
        dispatch(setPairs(data.usdt));
    });
};

export const setPairs = (items) => ({
  type: "SET_PAIRS",
  payload: items,
});
