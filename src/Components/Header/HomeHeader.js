import React from "react";
import { Link } from "react-router-dom";

const homeHeader = (props) => {

  return (
    <>
      <section id="homeheader">
        <div className="container-fluid pl-0 pr-0">
          <nav className="bg_dark navbar navbar-expand-lg navbar-dark fixed-top scrolled">
            <div className="container-fluid">
              
                {" "}
                <img src="static/new/images/logo.png" alt="Home" />
              
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                
                <span style={{color:'white'}} className="navbar-toggler-icon"></span>
              </button>

              <div
                className="navbar-collapse text-center text-md-center collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mr-lg-5">
                  {props.page !== 'admin' ? 
                  <span style={{display:'flex'}}>
                    <li className="nav-item active">
                    <Link to="/dashboard" className="nav-link mr-lg-3 active">
                      <span><i style={{fontSize:'36px'}} class="fa fa-home"></i></span>
                    </Link>
                    </li>
                   <li className="nav-item active">
                   <Link to="/profilescreen" className="nav-link mr-lg-3 active">
                     <span><i style={{fontSize:'36px'}} class="fa fa-user"></i></span>
                     </Link>
                   </li>
                   {sessionStorage.getItem('UserType') !== 'employe' ? 
                      <li style={{marginTop:'4px'}} className="nav-item active">
                      <Link to="/createdUsersList" className="nav-link mr-lg-3 active">
                        <span><i style={{fontSize:'32px'}} class="fa fa-list"></i></span>
                      </Link>
                      </li> : null
                    }
                   
                  </span>
                   : null
                  }
                  {props.page === 'admin' ? 
                  <li className="nav-item active">
                    <Link to="/orgadmin" className="nav-link mr-lg-3 active">
                      <span><i style={{fontSize:'36px'}} class="fa fa-home"></i></span>
                    </Link>
                    </li> : null}
                  <li style={{marginTop:'8px'}} className="ml-auto ml-md-auto mr-auto mr-md-auto nav-item">
                    <Link
                      to="/logout"
                      className="btn btn-default pb-1 pl-3 pr-3 pt-1 text-center"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default homeHeader;
