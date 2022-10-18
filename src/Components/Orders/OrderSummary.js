import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Static/OrderSummary.css";
import {
  selectedOrderData,
  removeSelectedOrderData,
  removeCertificateURLData,
  certificateURLData,
} from "../../Actions/Orders/OrderActions";
import http from "../../Helpers/AuthHelpers/http-common";
import { getOrderDetails } from "../../Services/API/OrdersService";

const OrderSummary = () => {
  let { orderId } = useParams();
  
  let order = useSelector((state) => state.order);

  let certURL = useSelector((state) => state.certificate);
  const dispatch = useDispatch();

  const fetchOrderDetail = async (orderId, clientID) => {
    try {
      let data = {};
    data["OrderID"] = orderId;
    data["ClientID"] = clientID;
    const response = await getOrderDetails(data);
    
    dispatch(selectedOrderData(response.data));
    if(response.data.Attachment){
      getCertificateURL(
      response.data.Attachment,
      orderId,
      sessionStorage.getItem("LenderID")
    );
   
    }
    } catch (error) {
  
    }
    
    
    // const response = await http
    //   .post("/orders/OrderDetails", data)
    //   .catch((err) => {
    //     console.log("Err: ", err);
    //   });

    // if (response.data.Attachment) {
    // getCertificateURL(
    //   response.data.Attachment,
    //   orderId,
    //   sessionStorage.getItem("LenderID")
    // );
    // dispatch(selectedOrderData(response.data));
    //}
  };

  const getCertificateURL = async (hasAttachment, orderId, lenderId) => {
    
    if (hasAttachment) {
      let fileData = "";
      let data = {};
      data["OrderID"] = orderId;
      data["LenderID"] = lenderId;
      try {
        const response = await http.post("/orders/GetCertificate", data)

        dispatch(certificateURLData(response.data));
      } catch (err) {

      }
      // const response = await http
      //   .post("/orders/GetCertificate", data)
      //   .catch((err) => {
          
      //   });
       
    } else {
      document.getElementById("certPanel").style.display = "none";
    }
  };

  useEffect(() => {
    
    if (
      orderId &&
      orderId !== "" &&
      sessionStorage.getItem("ClientID") &&
      sessionStorage.getItem("ClientID") !== ""
    )
      fetchOrderDetail(orderId, sessionStorage.getItem("ClientID"));
 
    return () => {
      dispatch(removeSelectedOrderData());
      dispatch(removeCertificateURLData());
    };
  }, [orderId]);

  return (
    <>
      <div className="container margin_top_110px">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-6">
            <h1 className="h4 text-center text-lg-left text-md-left text_yellow">
              Order Summary
            </h1>
          </div>
          <div className="col-6 col-lg-2 col-md-3 pr-lg-0 text-lg-right text-md-right text-right">
            <a
              href="/dashboard"
              className="border_radius_10px btn btn_about pl-4 pr-4 text-white"
            >
              Dashboard
            </a>
          </div>
          <div className="col-6 col-lg-2 col-md-3 pl-md-0  text-lg-right text-md-right">
            <a
              href="/placeorder"
              className="border_radius_10px btn btn_about pl-4 pr-4 text-white"
            >
              New Request
            </a>
          </div>
        </div>
        <div className="border_radius_10px card col-12 col-lg-12 col-md-12 mt-4 mt-lg-4 mt-md-4">
          <div className="card-body pl-0 pl-md-2 pr-0">
            <h5 className="font-weight-bold h4">Order Info</h5>
            {typeof order !== "undefined" && Object.keys(order).length === 0 ? (
              <div>...Loading</div>
            ) : (
              <>
                <div className="mt-4 mt-lg-4 mt-md-4 row">
                  <div className="col-6 col-lg-5 col-md-5">
                    <p className="font-weight-normal">Order Info</p>
                  </div>
                  <div className="col-6 col-lg-7 col-md-7">
                    <p className="text-muted">
                      : <label id="lblOrderID">{order.OrderID}</label>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-5 col-md-5">
                    <p>Flood Certification No</p>
                  </div>
                  <div className="col-5 col-lg-7 col-md-7">
                    <p className="text-muted">
                      :{" "}
                      <label id="lblFloodCertNO">
                        {order.FloodCertificationIdentifier}
                      </label>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-5 col-md-5">
                    <p>Action Type</p>
                  </div>
                  <div className="col-6 col-lg-7 col-md-7">
                    <p className="text-muted">
                      : <label id="lblActionType">{order.ActionType}</label>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-5 col-md-5">
                    <p>Status</p>
                  </div>
                  <div className="col-6 col-lg-7 col-md-7">
                    <p className="text-muted">
                      : <label id="lblStatus">{order.Status}</label>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-5 col-md-5">
                    <p>Response Status</p>
                  </div>
                  <div className="col-6 col-lg-7 col-md-7">
                    <p className="text-muted">
                      : <label id="lblResStatus">{order.ResponseStatus === 'Status' || order.ResponseStatus === '' ? 'Review In Progress' : order.ResponseStatus}</label>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-5 col-md-5">
                    <p className="">Response Code</p>
                  </div>
                  <div className="col-6 col-lg-7 col-md-7">
                    <p className="text-muted">
                      : <label id="lblResCode">{order.ResponseCode}</label>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-5 col-md-5">
                    <p>Order Date</p>
                  </div>
                  <div className="col-6 col-lg-7 col-md-7">
                    <p className="text-muted">
                      : <label id="lblOrderDate">{order.Request_Date}</label>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-5 col-md-5">
                    <p>Resp. Description</p>
                  </div>
                  <div className="col-6 col-lg-7 col-md-7">
                    <p className="text-muted">
                      :{" "}
                      <label id="lblResDescription">
                        {order.ResponseDescription}
                      </label>
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div id="certPanel" className="col-12 pl-0 pr-0">
          <div className="border_radius_10px card col-12 col-lg-12 col-md-12 mt-4 mt-lg-4 mt-md-4">
            <div className="card-body pl-0 pl-md-2 pr-0">
              <h5 className="font-weight-bold h4">Order Certificate</h5>
              {typeof certURL !== "undefined" &&
              Object.keys(certURL).length === 0 ? (
                <div>We are unable to proccess the request.</div>
              ) : (
                <>
                  <div className="mt-lg-3 mt-3 mt-md-3">
                    {/* <!-- <iframe src="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf" width="100%" height="500px"> --> */}
                    <iframe
                      id="attachment"
                      src={certURL.FileData}
                      width="100%"
                      height="500px"
                    ></iframe>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
