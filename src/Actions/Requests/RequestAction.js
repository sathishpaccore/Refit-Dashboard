import { RequestTypes } from "./RequestTypes";

// export const request = () => async (dispatch) => {
//   try {
//     const res = await RequestDataService.addRequest();
//     dispatch({
//       type: RequestTypes.ADD_REQUEST_SUCCESSFUL,
//       payload: res.data,
//     });
//   } catch (err) {

//   }
// };

export const getClientDetails = (clientDetails) => {
  return {
    type: RequestTypes.GET_CLIENT_DETAILS,
    payload: clientDetails,
  };
};

export const removeClientDetails = () => {
  return {
    type: RequestTypes.REMOVE_CLIENT_DETAILS,
  };
};
