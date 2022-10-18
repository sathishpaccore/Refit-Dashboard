import { RETRIEVE_CLIENTS } from "./AdminSummaryTypes";

import AdminSummaryDataService from "../../Services/API/AdminSummaryService";

export const retrieveTutorials = (params) => async (dispatch) => {
  try {

    const res = await AdminSummaryDataService.getClients(params);

    
    dispatch({
      type: RETRIEVE_CLIENTS,
      payload: res.data,
    });
  } catch (err) {
   
  }
};
