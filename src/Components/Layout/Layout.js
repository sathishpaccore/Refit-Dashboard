import React from "react";
import Header from "../Header/HomeHeader";
import Footer from "../Footer/Footer";


const Layout = () => {
  return ( 
    <>
        <Header />
           <main>{this.props.children}</main>
          <Footer />
    </>
   );
}
 
export default Layout;
