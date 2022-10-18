import { OrderTypes } from "./OrderTypes";

export const selectedOrderData = (order) => {
  
  return {
    type: OrderTypes.SELECTED_ORDER,
    payload: order,
  };
};

export const removeSelectedOrderData = () => {
  return {
    type: OrderTypes.REMOVE_SELECTED_ORDER,
  };
};

export const certificateURLData = (certificate) => {
  return {
    type: OrderTypes.CERTIFICATE_URL,
    payload: certificate,
  };
};

export const removeCertificateURLData = () => {
  return {
    type: OrderTypes.REMOVED_CERTIFICATE_URL,
  };
};
