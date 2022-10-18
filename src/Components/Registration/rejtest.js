<div class="registrationContainer">
<div>
  <div class="form-group">
    <div class="row">
      <div class="col-12 col-sm-12">
        {/* <!-- Login Information Start --> */}
        <div>
          <div class="row">
            <div class="col-11">
              <p class="sideheader">
                <b>Login Information</b>
              </p>
              <hr />
            </div>
            <div class="col-1 col-sm-1"></div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Name
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control inputControl"
                  placeholder="Name *"
                  id="Cont_Name"
                  name="Cont_Name"
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Login_name: e.target.value,
                    })
                  }
                  value={dataObject.Login_name}
                  aria-describedby="inputGroup-sizing-default"
                  required
                />
              </div>
            </div>
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    LenderID
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control inputControl"
                  placeholder="LenderID *"
                  name="Cont_LenderID"
                  id="Cont_LenderID"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.Login_LenderID}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Login_LenderID: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    UserID
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control inputControl"
                  placeholder="UserID *"
                  id="UserID"
                  name="UserID"
                  value={dataObject.Login_UsesrID}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Login_UsesrID: e.target.value,
                    })
                  }
                  aria-describedby="inputGroup-sizing-default"
                  required
                />
              </div>
            </div>
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Password
                  </span>
                </div>
                <input
                  tabindex="1"
                  size="40"
                  type="password"
                  class="form-control inputControl"
                  placeholder="Password *"
                  id="Cont_Password"
                  name="Cont_Password"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.Login_password}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Login_password: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Login Information End-->
                          <!-- Account Information Start --> */}
        <div>
          <div class="row">
            <div class="col-11">
              <p class="sideheader">
                <b>Account Information</b>
              </p>
              <hr />
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Login Account Identifier
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control inputControl"
                  placeholder="Login Account Identifier *"
                  id="Cont_LoginAccountIdentifier"
                  name="Cont_LoginAccountIdentifier"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.Account_AccountIdentifier}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Account_AccountIdentifier: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Internal Account Identifier
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control inputControl"
                  placeholder="Internal Account Identifier *"
                  id="Cont_InternalAccountIdentifier"
                  name="Cont_InternalAccountIdentifier"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.Account_InternalAccountIdentifier}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Account_InternalAccountIdentifier: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Login Account Password
                  </span>
                </div>
                <input
                  type="password"
                  class="form-control inputControl"
                  placeholder="Login Account Password *"
                  id="Cont_LoginAccountPassword"
                  name="Cont_LoginAccountPassword"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.Account_AccountPassword}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Account_AccountPassword: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            {/* <div class="col-sm-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Login Account LenderID
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control inputControl"
                  placeholder="Login Account Lender ID *"
                 
                  value={dataObject.Account_LenderID}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Account_LenderID: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div> */}
          </div>
        </div>
        {/* <!-- Account Information End -->

                          <!-- Contact Information Start --> */}

        <div>
          <div class="row">
            <div class="col-11">
              <p class="sideheader">
                <b>Contact Details</b>
              </p>
              <hr />
            </div>
            <div class="col-1"></div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Email
                  </span>
                </div>
                <input
                  type="email"
                  class="form-control inputControl"
                  placeholder="Email *"
                  id="Cont_Email1"
                  name="Cont_Email1"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.Email}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Email: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Alternate Email
                  </span>
                </div>
                <input
                  type="email"
                  class="form-control inputControl"
                  placeholder="Alternate Email"
                  id="Cont_Alternateemail"
                  name="Cont_Alternateemail"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.AlternateEmail}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      AlternateEmail: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Address
                  </span>
                </div>
                <textarea
                  class="form-control inputControl"
                  rows="2"
                  placeholder="Address *"
                  id="Cont_Address1"
                  name="Cont_Address1"
                  required
                  value={dataObject.Address1}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Address1: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>

            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Address2
                  </span>
                </div>
                <textarea
                  class="form-control inputControl"
                  rows="2"
                  placeholder="Address2"
                  id="Cont_Address2"
                  name="text"
                  value={dataObject.Address2}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Address2: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Phone Number
                  </span>
                </div>
                <input
                  type="number"
                  class="form-control inputControl"
                  placeholder="Phone Number *"
                  id="Cont_Phonenumber"
                  name="Cont_Phonenumber"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.Phone}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Phone: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Alternate Phone Number
                  </span>
                </div>
                <input
                  type="number"
                  class="form-control inputControl"
                  placeholder="Alternate Phone Number"
                  id="Cont_Landline"
                  name="Cont_Landline"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.AlternatePhone}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      AlternatePhone: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Fax
                  </span>
                </div>
                <input
                  type="number"
                  class="form-control inputControl"
                  placeholder="Fax *"
                  id="Cont_Fax"
                  name="Cont_Fax"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.FaxNumber}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      FaxNumber: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    City
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control inputControl"
                  placeholder="City *"
                  id="Cont_City"
                  name="Cont_City"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.City}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      City: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="Cont_State"
                  >
                    State
                  </span>
                </div>
                {/* <!-- <input type="text" class="form-control" placeholder="State *" aria-describedby="inputGroup-sizing-default"> --> */}
                <select
                  class="form-control inputControl"
                  id="state"
                  value={dataObject.State}
                  onChange={(e) =>
                    
                    setDataObject({
                      ...dataObject,
                      State: e.target.value,
                    })
                  }
                >
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
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
                  <option value="MS">Mississippi</option>
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
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">
                    South Carolina
                  </option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington </option>
                  <option value="WV">
                    West Virginia
                  </option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>
            {/* <!-- 
      <div class="col-sm-4 noPadding">
        
      </div> --> */}

            <div class="col-sm-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    ZipCode
                  </span>
                </div>
                <input
                  type="number"
                  class="form-control inputControl"
                  placeholder="ZipCode *"
                  id="Cont_Zipcode"
                  name="Cont_Zipcode"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.ZipCode}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      ZipCode: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-11">
              <p class="sideheader">
                <b>Configuration </b>
              </p>
              <hr />
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row">
            {MyCheckBoxList.map((k,index) => {
              return(
                <div class="input-group leftControlGroup">
                <input
                  type="checkbox"
                  onChange={() => chonchange(k,index)}
                  value={k.name}
                  
                />{" "}
                &nbsp;{k.name}
              </div>
              )
            })}
            {/* <div class="col-sm-4 noPadding">
              <div class="input-group leftControlGroup">
                <input
                  type="checkbox"
                  name="AutomatedAddress"
                  id="AutomatedAddress"
                  value="1"
                  
                />{" "}
                &nbsp;Automated Address
              </div>
            </div>

            <div class="col-sm-6 col-4 noPadding">
              <div class="input-group leftControlGroup">
                <input
                  type="checkbox"
                  name="FloodCertification"
                  id="FloodCertification"
                  value="FloodCertification"
                  onChange={(e) => setarray([...array, e.target.value])}
                />{" "}
                &nbsp;Flood Certification
              </div>
            </div>

            <div class="col-sm-6 col-4 noPadding">
              <div class="input-group rightControlGroup">
                <input
                  type="checkbox"
                  name="LOLCertification"
                  id="LOLCertification"
                  value="1"
                  disabled
                />{" "}
                &nbsp;LOL Certification
              </div>
            </div> */}
          </div>

          {/* <div class="row">
            <div class="col-11">
              <p class="sideheader">
                <b>Action Type</b>
              </p>
              <hr />
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row">
            <div class="col-12">
              <div id="dynamic_div"> </div>
              <input
                type="hidden"
                id="hiddenRequesttype"
              />
            </div>
          </div> */}

          <div class="row">
            <div class="col-11">
              <p class="sideheader">
                <b>Pricing </b>
              </p>
              <hr />
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Manual Certification
                  </span>
                </div>
                <input
                  type="number"
                  class="form-control inputControl"
                  placeholder="Manual Certification *"
                  id="Manual_Certification"
                  minlength="1"
                  name="Manual_Certification"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.ManualCertCost}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      ManualCertCost: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="lblAutomated_Certification"
                  >
                    Automated Certification
                  </span>
                </div>
                <input
                  type="number"
                  class="form-control inputControl"
                  placeholder="Automated Certification *"
                  id="Automated_Certification"
                  minlength="1"
                  name="Automated_Certification"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.AutomatedCertCost}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      AutomatedCertCost: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-6 noPadding">
              <div class="input-group leftControlGroup">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    LOL Certification
                  </span>
                </div>
                <input
                  type="number"
                  class="form-control inputControl"
                  placeholder="LOL Certification *"
                  name="LOL_Certification"
                  id="LOL_Certification"
                  minlength="1"
                  aria-describedby="inputGroup-sizing-default"
                  value={dataObject.LOLCertCost}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      LOLCertCost: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-6 noPadding">
              <div class="input-group rightControlGroup">
                <div class="input-group-prepend"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Configuration End --> */}

        <div style={{float:'right',marginRight:'40px'}} class="row">
          {/* <div class="col-sm-6 col-md-4 col-4 noPadding"></div>
          <div class="col-sm-6 col-md-4 col-8 noPadding"> */}
            <div class="input-group mb-2 buttonContainer">
              {/* <!-- <button class="btn btn-primary btn-sm" type="button" id="button_2">Submit</button> --> */}
              {!btndis ? 
              <div style={{width:'80%'}}>
              <button
             
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-primary button"
                disabled={btndis}
                onClick={() => saveregdata()}
              >
                Save
              </button>
              {/* <button
                type="submit"
                id="Id_BtnUpdate"
                name="Id_BtnUpdate"
                class="btn btn-primary button"
              >
                Update
              </button> */}
              </div>: 
              <div>
              <button
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-primary button"
                disabled
              >
                Processing...
              </button>
              {/* <button
                type="submit"
                id="Id_BtnUpdate"
                name="Id_BtnUpdate"
                class="btn btn-primary button"
              >
                Update
              </button> */}
              </div>}
            {/* </div> */}
          </div>

          <div class="col-sm-6 col-md-4 col-4 noPadding"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>