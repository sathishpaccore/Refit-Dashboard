import React, { useEffect, useState } from "react";
import "../../Components/AdminSummary/AdminSummary.css";
import { retrieveTutorials } from "../../Actions/AdminSummary/AdminSummaryAction";
import { connect } from "react-redux";
// import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import Pagination from '../common/pagination';
import { paginate } from '../common/paginate';
import Header from "../Header/HomeHeader";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Switch from "react-switch";
import getusersService from "../../Services/API/getusersService";

function CreatedUserLIst() {
    const [data,setData] = useState([])
  const [page, setpage] = useState(1);
  const [count, setcount] = useState(10);
  const [page_size, setpage_size] = useState(10);
  const [showPassword, setShowPassword] = useState(false);
  const [pageSize,setPageSize] = useState(10);
  const [checked,setChecked] = useState(false)
  const [currentPage,setcurrentPage]= useState(1)
  const [PasswordIndex, setPasswordINdex] = useState('');
  const [passvis,setPassvis] = useState(true)
const [btndis,setBtndis] = useState(false)
  let navigate = useNavigate();
  
 
    useEffect(() => {
      getdata()
    }, []);

    const getdata = async() => {
        const obj ={
            UserID: sessionStorage.getItem("UserID")
        }
        const data = await getusersService.getusers(obj);
       
        setData(data.data)
    }
  const sendedit = (item) => {
    navigate('/edituser',{state:{data:item}})
  }
  const inactive = async(item) => {
      try {
         const obj = {
            "ClientID":item.ClientID,
            "LoginUser":sessionStorage.getItem("UserID"),
            "IsActive":item.isActive === true? 'False' : 'True'
          }
          const dert = await getusersService.deleteuser(obj);
          if(dert.status === 200){
            setBtndis(false);
            navigate('/dashboard')
      toast.success(dert.data, {
        position: toast.POSITION.TOP_RIGHT
      });
          }else{
            setBtndis(false)
            toast.error('something Went Wrong', {
              position: toast.POSITION.TOP_RIGHT
            });
          }
      } catch (ex) {
        
      }
  }
  const handlePageChange = (page) => {
    setcurrentPage(page)
 }
 const handleChange = async(item) => {
  let st = item.IsActive === true ? 'Deactivate' : 'Activate';
  const confirmBox = window.confirm(
    `Do you want to ${st}  User?`
  )

  if(confirmBox){
    try {
      const obj = {
         "ClientID":item.ClientID,
         "LoginUser":sessionStorage.getItem("UserID"),
         "IsActive":item.IsActive === true? 'False' : 'True'
       }

       const dert = await getusersService.deleteuser(obj);
       if(dert.status === 200){
        getdata()
         setBtndis(false)

        //  navigate('/dashboard')
   toast.success(dert.data, {
     position: toast.POSITION.TOP_RIGHT
   });
       }else{
         setBtndis(false)
         toast.error('something Went Wrong', {
           position: toast.POSITION.TOP_RIGHT
         });
       }
   } catch (ex) {
     
   }
  }
  
 }
 const sendcreateuser = () => {
  let dddata = [];
  const dd = data && data.length > 0 && data.map(l => {
    if(l.usertype === 'employe' && sessionStorage.getItem('UserID') === l.UserID){
      dddata.push(l)
    }
  })
  navigate('/createuser')
  // if(dddata && dddata.length > 4){
  //   toast.error('You will create only 4 employes', {
  //     position: toast.POSITION.TOP_RIGHT
  //   });
  // }else{
  //   navigate('/createuser')
  // }
  
}
const showpass = async(index) => {
  await setPassvis(!passvis)
    await setPasswordINdex(index)
}
  const pdata = paginate(data, currentPage, pageSize);
  return (
    <div>
        <div style={{ marginTop: "6rem" }}></div>
        <div  className="admdash mt-4 mt-lg-4 mt-md-4 mx-0 mx-lg-5 mx-md-3 row">
      <div className="border_radius_15px col-lg-12 d-lg-block d-md-block table-responsive">
        <div className="content">
          <div className="row">
            <div className="col-12">
              <div className="card">
              <div className="card-header">
                    <strong
                      className="card-title"
                      style={{ textAlign: "center" }}
                    >
                      Created Entity Users
                    </strong>
                    {sessionStorage.getItem("usertype") !== 'employe' ? <div style={{textAlign:'center',float:'right'}}>
                               <button
                               onClick={() => sendcreateuser()}
                
                type="submit"
                id="Id_BtnSubmit"
                name="Id_BtnSubmit"
                class="btn btn-primary button"
                
              >
                Create Entity User
              </button>
              </div> : null}
                  </div>
                <div className="card-body table-responsive">
                  <table id="adminGrid" className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" className="text_color_blue">
                          Name
                        </th>
                        <th scope="col" className="text_color_blue">
                          Email
                        </th>
                        <th scope="col" className="text_color_blue">
                          Password
                        </th>
                        <th scope="col" className="text_color_blue">
                          Role
                        </th>
                        <th scope="col" className="text_color_blue">
                          Active/Inactive
                        </th>
                        {/* <th scope="col" className="text_color_blue">
                          Email
                        </th>
                        <th scope="col" className="text_color_blue">
                          Alternate Email
                        </th>
                        <th scope="col" className="text_color_blue">
                          City
                        </th>
                        <th scope="col" className="text_color_blue">
                          ZipCode
                        </th> */}
                        <th scope="col" className="text_color_blue"></th>
                        <th scope="col" className="text_color_blue"></th>
                      </tr>
                    </thead>
                    
                        {pdata && pdata.length > 0 ? 
                            pdata.map((k,index) => {
                                return(
                                k.usertype === 'employe' && sessionStorage.getItem('UserID') === k.UserID ? 
                                <tbody id="tbody">
                                    <tr key={index}>
                        <td>{k.Name}</td>
                        <td>{k.Email}</td>
                        <td>{!passvis && PasswordIndex === index ? k.Password  : '*******'} <span onClick={() => showpass(index)} style={{cursor:'pointer'}}><i class="fa fa-eye"></i></span></td>
                        <td>{k.usertype}</td>
                       <td><Switch onChange={() => handleChange(k)} checked={k.IsActive} offColor='#FF0000' uncheckedIcon={false} /></td>
                       
                        <td>
                          <span onClick={() => sendedit(k)} style={{cursor:'pointer'}}><i style={{fontSize:'18px'}} class="fa fa-edit"></i></span>
                         
                        </td>
                       
                      </tr></tbody> : null
                                )
                            }) : <h4 style={{textAlign:'center',marginLeft:'20%'}}>No Users Found</h4>
                        }
                      
                    
                  </table>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: "40%",
                    marginBottom: "10px",
                  }}
                  className="mt-3"
                >
                 
                 <Pagination 
            itemsCount={data.length} 
            pageSize={pageSize}
            currentPage={currentPage} 
            onPageChange={(page) => handlePageChange(page)} 
          />
         
                  {/* <Stack spacing={2}>
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      pageCount={count}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    /> */}
                  {/* <Pagination
                count={count}
                page={page}
                showFirstButton
                showLastButton
                onChange={(value) => handlePageChange(value)}
              /> */}
                  {/* </Stack> */}
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

export default CreatedUserLIst;