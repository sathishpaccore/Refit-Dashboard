import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Sidenav from "./SideNav";

// const bull = (

//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  return (
    <Box>
      {/* <Sidenav /> */}
      <div className="">
        <Card sx={{ minWidth: 175 }}>
          <CardContent>
            <div className="row">
              <div className="form-group col-lg-6 col-md-6 col-12">
                <h5 className="text-center font-weight-bold mt-4 mb-4 ml-4 ">
                  Borrower Information
                </h5>

                <div className="row">
                  <div className="form-group col-lg-6 col-md-6 col-12">
                    <h6 className="text-muted ml-4">Lender Details</h6>

                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="LoanID"
                          id="loanid"
                          placeholder="Loan ID"
                          aria-label="loan  "
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <h6 className="text-muted ml-2">Borrower Details</h6>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="First name"
                          id="firstname"
                          placeholder="First name"
                          aria-label="First name"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="Middle Name"
                          id="middlename"
                          placeholder="Middle Name"
                          aria-label="Middle Name"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="Last Name"
                          id="lastname"
                          placeholder="Last Name"
                          aria-label="Last Name"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="City"
                          id="city"
                          placeholder="City*"
                          aria-label="City"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="State"
                          id="State"
                          placeholder="State*"
                          aria-label="State"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="ZIP Code"
                          id="zipcode"
                          placeholder="ZIP Code*"
                          aria-label="ZIP Code"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-12">
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group"></div>
                    </div>
                    <div className="form-group mt-4 col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="loanamount"
                          id="loanamount"
                          placeholder="Loan Amount"
                          aria-label="loanamount"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <h6 className="text-muted ml-2">Co-Borrower Details</h6>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="First name"
                          id="firstname"
                          placeholder="First name"
                          aria-label="First name"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="Middle Name"
                          id="middlename"
                          placeholder="Middle Name"
                          aria-label="Middle Name"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control required"
                          name="Last Name"
                          id="lastname"
                          placeholder="Last Name"
                          aria-label="Last Name"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-12">
                      <div className="input-group">
                        <textarea
                          type="text"
                          className="form-control required h-100"
                          name="description"
                          multiline
                          rows={4}
                          id="description"
                          placeholder="Additional Legal  Description"
                          aria-label="State"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group col-lg-6 col-md-6 col-12">
                <h5 className="text-center font-weight-bold mt-4 mb-4 ml-4 ">
                  Certificate Preview
                </h5>

                <div className="row">
                  <div class="col-lg-12 col-md-12 col-12">
                    <div style={{ borderRadius: "0px" }} class="">
                      <div class="card-body card-block">
                        <div
                          style={{ border: "2px solid black", padding: "8px" }}
                        >
                          <div class="row">
                            <div
                              style={{
                                textAlign: "center",
                                borderRight: "2px solid black",
                              }}
                              class="col-6"
                            >
                              <p style={{ fontSize: "10px", fontWeight: 700 }}>
                                DEPARTMENT OF HOMELAND SECURITY FEDERAL
                                EMERGANCY MANAGEMENT AGENCY
                              </p>
                              <p style={{ fontSize: "10px", fontWeight: 700 }}>
                                STANDARD FLOOD HAZARD DETERMINATION FORM(SFHDF).
                              </p>
                            </div>
                            <div
                              style={{
                                textAlign: "center",
                                borderRight: "2px solid black",
                              }}
                              class="col-3"
                            >
                              <p style={{ fontSize: "10px", fontWeight: 700 }}>
                                Cust Num: 225199
                              </p>
                              <p style={{ fontSize: "10px", fontWeight: 700 }}>
                                Cost Cent:
                              </p>
                            </div>
                            <div style={{ textAlign: "center" }} class="col-3">
                              <p style={{ fontSize: "10px", fontWeight: 700 }}>
                                OMB Control No.:1660-004
                              </p>
                              <p style={{ fontSize: "10px", fontWeight: 700 }}>
                                Expires:10/31/18
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            border: "2px solid black",
                            padding: "0px",
                            paddingBottom: "0px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "14px",
                              fontWeight: 700,
                              textAlign: "center",
                            }}
                          >
                            Section 1
                          </p>
                        </div>
                        <div
                          style={{ border: "2px solid black", padding: "8px" }}
                        >
                          <div class="row">
                            <div
                              style={{
                                textAlign: "center",
                                borderRight: "2px solid black",
                              }}
                              class="col-5"
                            >
                              <p style={{ fontSize: "10px", fontWeight: 700 }}>
                                1.LENDER/SERVICER NAME AND ADDRESS
                              </p>
                              <p style={{ fontSize: "10px", fontWeight: 700 }}>
                                REFIT-SERVICES LLC-- RESEDENTIAL.
                              </p>
                              {/* <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Address1}</p> */}
                            </div>
                            <div class="col-7">
                              <p
                                style={{
                                  fontSize: "10px",
                                  fontWeight: 700,
                                  textAlign: "center",
                                }}
                              >
                                2.COLLATERAL DESCRIPTION(Building/Mobile
                                Home/Property)(See Instructions For More
                                Information)
                              </p>
                              {/* <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Borrower1_FirstName} {dataObject.Borrower1_LastName}</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Borrower2_FirstName} {dataObject.Borrower2_LastName}</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Property_StreetAddress}</p>
                        <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.Property_City},{dataObject.Property_State},{dataObject.Property_ZipCode}</p> */}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{ border: "2px solid black", padding: "8px" }}
                        >
                          <div class="row">
                            <div
                              style={{
                                textAlign: "center",
                                borderRight: "2px solid black",
                              }}
                              class="col-4"
                            >
                              <p style={{ fontSize: "10px", fontWeight: 700 }}>
                                3.LENDER/SERVICERID
                              </p>

                              {/* <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.LenderID}</p> */}
                            </div>
                            <div
                              style={{
                                textAlign: "center",
                                borderRight: "2px solid black",
                              }}
                              class="col-4"
                            >
                              <p
                                style={{
                                  fontSize: "10px",
                                  fontWeight: 700,
                                  textAlign: "center",
                                }}
                              >
                                4.Loan Identifier
                              </p>
                              {/* <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.LoanID}</p> */}
                            </div>
                            <div class="col-4">
                              <p
                                style={{
                                  fontSize: "10px",
                                  fontWeight: 700,
                                  textAlign: "center",
                                }}
                              >
                                5.Amount of Flood Insurance Required
                              </p>

                              {/* <p style={{fontSize:'10px',fontWeight:700}}>{dataObject.LoanAmount}</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingBottom: "18px" }}
                      >
                        {/* {!btndis ?  */}
                        <button
                          style={{ background: "#01966B", color: "white", borderRadius: "8px" }}
                          type="submit"
                          id="Id_BtnSubmit"
                          name="Id_BtnSubmit"
                          class="btn btn-md button"
                          // disabled={btndis}
                          // onClick={() => handleOriginalSubmit()}
                        >
                          Submit
                        </button>{" "}
                        {/* :{" "} */}
                            {/* <button
                            style={{ width: "25%", textAlign: "center" }}
                            type="submit"
                            id="Id_BtnSubmit"
                            name="Id_BtnSubmit"
                            class="btn btn-primary button"
                            disabled
                            >
                            Processing...
                            </button> */}
                        {/* }    */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
}
