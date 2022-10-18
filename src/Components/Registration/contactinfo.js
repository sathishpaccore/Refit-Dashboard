import React,{useState,useEffect} from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const ContactInfo = (props) => {
    const [btndis,setBtndis] = useState(false);
    const [array,setarray] = useState([]);
    
    const [dataObject, setDataObject] = useState({
        Address1: '',
        Address2: '',
        AlternateEmail: '',
        AlternatePhone: '',
        City: '',
    Email: '',
    FaxNumber: '',
    Phone: '',
    State: 'Alabama',
    ZipCode: '',
    });
    let navigate = useNavigate();
    useEffect(() => {
        if (Object.keys(props.contactdata).length > 1) {
            getprevdata()
           
          }
       
      }, []);
      const getprevdata = async() => {
            await setDataObject({
                ...dataObject,
                Email: props.contactdata.Email,
                AlternateEmail:props.contactdata.AlternateEmail,
                Address1:props.contactdata.Address1,
                Address2:props.contactdata.Address2,
                Phone:props.contactdata.Phone,
                AlternatePhone:props.contactdata.AlternatePhone,
                FaxNumber:props.contactdata.FaxNumber,
                City:props.contactdata.City,
                ZipCode:props.contactdata.ZipCode
              })
      }
    const saveregdata = async() => {
        setBtndis(true);
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(dataObject.Email)){
            setBtndis(false)
            toast.error('Invalid Email', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else if(dataObject.Address1?.length < 10){
            setBtndis(false)
            toast.error('Invalid Address', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else if(dataObject.Phone?.length !== 10){
            setBtndis(false)
            toast.error('Invalid Phone Number', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else if(dataObject.FaxNumber?.length !==10){
            setBtndis(false)
            toast.error('Invalid Fax Number', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else if(!dataObject.City){
            setBtndis(false)
            toast.error('Enter City', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else if(dataObject.ZipCode?.length < 4){
            setBtndis(false)
            toast.error('Invalid Zip Codes', {
              position: toast.POSITION.TOP_RIGHT
            });
          }else {
         
          const obj = {
            "Email": dataObject.Email,
            "AlternateEmail" :dataObject.AlternateEmail,
            "Phone": dataObject.Phone,
            "AlternatePhone": dataObject.AlternatePhone,
            "FaxNumber": dataObject.FaxNumber,
             "Address1": dataObject.Address1,
              "Address2": dataObject.Address2,
              "City": dataObject.City,
              "State": dataObject.State,
              "ZipCode": dataObject.ZipCode,
          }
        props.func(obj)
           
        }
    }
    const sendprev = () => {
        
        props.prev(1);
    
}
    return ( 
        <div class="admform3" style={{width:'50%',marginLeft:'25%',backgroundColor:'white'}}>
      <div class="content admin_register reg" style={{ backgroundColor: "white" }}>
        <div>
          <div class="row">
            <div class="col-12">
              <div style={{borderRadius:'0px'}} class="card">
                <div class="card-body card-block">
                <div style={{textAlign:'center',fontSize:'24px',marginBottom:'10px'}}><b>Contact Information</b></div>
                  <div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Email</span>
                    </div>
                    <input type="email" name="email" class="form-control" value={dataObject.Email}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Email: e.target.value,
                    })
                  }
                  required placeholder="Email" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Alternate Email</span>
                    </div>
                    <input type="email" name="alternateemail" class="form-control" value={dataObject.AlternateEmail}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      AlternateEmail: e.target.value,
                    })
                  } required placeholder="Alternate Email" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Address</span>
                    </div>
                    <textarea
                  class="form-control"
                  rows="2"
                  placeholder="Address *"
                  
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
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Address 2</span>
                    </div>
                    <textarea
                  class="form-control"
                  rows="2"
                  placeholder="Address2 *"
                  
                  name="Cont_Address1"
                  required
                  value={dataObject.Address2}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Address2: e.target.value,
                    })
                  }
                ></textarea>
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Phone Number</span>
                    </div>
                    <input type="number" name="alternateemail" class="form-control" value={dataObject.Phone}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      Phone: e.target.value,
                    })
                  }
                  required placeholder="Phone Number" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Alternate Phone</span>
                    </div>
                    <input type="number" name="alternateemail" class="form-control" value={dataObject.AlternatePhone}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      AlternatePhone: e.target.value,
                    })
                  
                  }
                  required placeholder="Alternate Phone Number" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Fax</span>
                    </div>
                    <input type="number" name="fax" class="form-control"  value={dataObject.FaxNumber}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      FaxNumber: e.target.value,
                    })
                  }
                  required placeholder="Fax Number" />
                  </div>
                  
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">City</span>
                    </div>
                    <input type="text" name="city" class="form-control"  value={dataObject.City}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      City: e.target.value,
                    })
                  }
                  required placeholder="City" />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">State</span>
                    </div>
                    <select
                  class="form-control"
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
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Zip Code</span>
                    </div>
                    <input type="number" name="zipcode" class="form-control"   value={dataObject.ZipCode}
                  onChange={(e) =>
                    setDataObject({
                      ...dataObject,
                      ZipCode: e.target.value,
                    })
                  }
                  required placeholder="Zip Code" />
                  </div>
                  </div>
                  <div style={{marginTop:'30px'}}>
                  <div class="flex-container">

<div class="flex-child magenta">
<button
               
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-previous button"
                disabled={btndis}
                onClick={() => sendprev()}
              >
                Previous
              </button>
</div>

<div class="flex-child green">
<button
               style={{width:'100px'}}
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-primary button"
                disabled={btndis}
                onClick={() => saveregdata()}
              >
                Next
              </button>
</div>

</div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     );
}
 
export default ContactInfo;