import actionTypes from "../../Data/actionTypes";

export const setUserDetails = (dispatch,data) => {
    return dispatch({
        type: actionTypes.SET_USER_DETAILS,
        payload: data,
      });
    };