import actionTypes from "../../Data/actionTypes";

export const setFromTo = (dispatch,data) => {
    return dispatch({
        type: actionTypes.SET_FROM_TO,
        payload: data,
      });
};