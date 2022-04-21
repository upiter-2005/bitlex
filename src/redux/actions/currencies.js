import axios from "axios";

// export const setLoaded = (val) => ({
//   type: "SET_LOADED",
//   payload: val,
// });

export const fetchPairs = () => (dispatch) => {
  dispatch(loadPairs(false));
  axios.get("http://localhost:3000/db.json").then(({ data }) => {
        dispatch(setPairs(data.usdt));
    });
};

export const setPairs = (items) => ({
  type: "SET_PAIRS",
  payload: items,
});

export const loadPairs = (data) => ({
  type: "LOADER_SWITCH",
  payload: data,
});
