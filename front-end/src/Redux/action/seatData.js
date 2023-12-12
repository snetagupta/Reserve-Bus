import actionTypes from "../../Data/actionTypes";

export const setSeatData=(dispatch,data) =>{
    return dispatch({
        type:actionTypes.SET_SEATDATA,
        payload:data,
    });
};
