import * as React from "react";
import Button from "@mui/material/Button";
import SideNav from "./SideNav";
import Box from '@mui/material/Box';

export default function Account() {
  return (
    <Box>
        {/* <SideNav /> */}
        <div className="container" style={{ background: "#ffffff" }}>
      <div className="row">
        <div className="form-group col-lg-6 col-md-6 col-12">
          <div className="row mt-4">
            <div className="form-group col-lg-12 col-md-12 col-12">
              <h5 className="ml-2">Account Settings</h5>
            </div>
            <div className="form-group col-lg-12 col-md-12 col-12">
              <label className="text-muted ml-2">First Name</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control required"
                  name="Usman"
                  id="usman"
                  placeholder="Usman"
                  aria-label="Usman"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
            <div className="form-group col-lg-12 col-md-12 col-12">
              <label className="text-muted ml-2">Last Name</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control required"
                  name="Ndako"
                  id="ndako"
                  placeholder="Ndako"
                  aria-label="ndako"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
            <div className="form-group col-lg-12 col-md-12 col-12">
              <label className="text-muted ml-2">Email</label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control required"
                  name="Email"
                  id="email"
                  placeholder="usmanndako@gmail.com"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>

            <div className="form-group col-lg-12 col-md-12 col-12">
              <label className="text-muted ml-2">Phone Number</label>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="input-group">
                    <select
                      className="form-control required"
                      placeholder="State"
                      name="Property_State"
                      id="Loan_State"
                      required
                    >
                      <option value="">Select </option>
                      <option value="+234">+234</option>
                      <option value="+91">+91</option>
                      <option value="+95">+95</option>
                      <option value="+99">+99</option>
                      <option value="+66">+66</option>
                      <option value="+65">+65</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control required"
                      name="Phone"
                      id="phone"
                      placeholder="08065650633"
                      aria-label="Phone*"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group col-lg-12 col-md-12 col-12">
              <label className="text-muted ml-2">Address</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control required"
                  name="Address"
                  id="address"
                  placeholder="No. 93 Skyfield Apartments"
                  aria-label="Address"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
            <div className="form-group col-lg-12 col-md-12 col-12">
              <label className="text-muted ml-2">City</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control required"
                  name="City"
                  id="city"
                  placeholder="Yaba"
                  aria-label="City"
                  aria-describedby="basic-addon1"
                  value={""}
                  required
                />
              </div>
            </div>
            
            <div className="form-group col-lg-12 col-md-12 col-12">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
              <label className="text-muted ml-2">State</label>

                  <div className="input-group">
                    <select
                      className="form-control required"
                      placeholder="State"
                      name="State"
                      id="State"
                      required
                    >
                       <option value="">Select State</option>
                                          <option value="AL">Alabama</option>
                                          <option value="AK">Alaska</option>
                                          <option value="AZ">Arizona</option>
                                          <option value="AR">Arkansas</option>
                                          <option value="CA">California</option>
                                          <option value="CO">Colorado</option>
                                          <option value="CT">
                                            Connecticut
                                          </option>
                                          <option value="DE">Delaware</option>
                                          <option value="FL">Florida</option>
                                          <option value="GA">Georgia </option>
                                          <option value="HI">Hawaii</option>
                                          <option value="ID">Idaho</option>
                                          <option value="IL">Illinois</option>
                                          <option value="IN">Indiana</option>
                                          <option value="IA">Iowa</option>
                                          <option value="KS">Kansas</option>
                                          <option value="KY">Kentucky</option>
                                          <option value="LA">Louisiana</option>
                                          <option value="ME">Maine</option>
                                          <option value="MD">Maryland</option>
                                          <option value="MA">
                                            Massachusetts
                                          </option>
                                          <option value="MI">Michigan</option>
                                          <option value="MN">Minnesota</option>
                                          <option value="MS">
                                            Mississippi
                                          </option>
                                          <option value="MO">Missouri</option>
                                          <option value="MT">Montana</option>
                                          <option value="NE">Nebraska</option>
                                          <option value="NV">Nevada</option>
                                          <option value="NH">
                                            New Hampshire
                                          </option>
                                          <option value="NJ">New Jersey</option>
                                          <option value="NM">New Mexico</option>
                                          <option value="NY">New York </option>
                                          <option value="NC">
                                            North Carolina
                                          </option>
                                          <option value="ND">
                                            North Dakota
                                          </option>
                                          <option value="OH">Ohio</option>
                                          <option value="OK">Oklahoma</option>
                                          <option value="OR">Oregon</option>
                                          <option value="PA">
                                            Pennsylvania
                                          </option>
                                          <option value="RI">
                                            Rhode Island
                                          </option>
                                          <option value="SC">
                                            South Carolina
                                          </option>
                                          <option value="SD">
                                            South Dakota
                                          </option>
                                          <option value="TN">Tennessee</option>
                                          <option value="TX">Texas</option>
                                          <option value="UT">Utah</option>
                                          <option value="VT">Vermont</option>
                                          <option value="VA">Virginia</option>
                                          <option value="WA">
                                            Washington{" "}
                                          </option>
                                          <option value="WV">
                                            West Virginia
                                          </option>
                                          <option value="WI">Wisconsin</option>
                                          <option value="WY">Wyoming</option>

                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
              <label className="text-muted ml-2">Country</label>

                  <div className="input-group">
                    <select
                      className="form-control required"
                     
                      name="Property_State"
                      id="Loan_State"
                      required
                    >
                      <option value="">Select Country </option>
                      <option value="+234">+234</option>
                      <option value="+91">+91</option>
                      <option value="+95">+95</option>
                      <option value="+99">+99</option>
                      <option value="+66">+66</option>
                      <option value="+65">+65</option>
                    </select>
                  </div>
                </div>
            </div>
             
            </div>
            
          </div>
        </div>
        <div className="form-group col-lg-3 col-md-3 col-12"></div>
        <div className="form-group col-lg-2 col-md-2 col-12">
        <div className="row mt-4 ml-4">
            <div className="form-group col-lg-12 col-md-12 col-12">
            <Button variant="contained"      
        style={{ background: "#01966B", color: "white", borderRadius: "8px" }}> Update
      </Button>
            </div>
        </div>
        
        </div>
      </div>
    </div>
    </Box>
   
  );
}
