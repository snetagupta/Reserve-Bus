import actionTypes from "../../Data/actionTypes";

export const setBusData = (dispatch,data) => {
    return dispatch({
        type: actionTypes.SET_BUSDATA,
        payload: data,
      });
    };
