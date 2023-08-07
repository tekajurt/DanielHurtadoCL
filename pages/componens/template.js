import {  forwardRef} from "react";
import Footer from "./footer";
import Navbar from "./nav";
import Sidebar from "./sidebar";

const Template = forwardRef(({ children }, ref) => {
  
  return(
    <div className="container-fluid p-0 d-flex flex-column" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Sidebar className=""/> 
      <div className="containerPage  align-items-center bg-pasto text-dark d-flex flex-column" style={{ flex: 1 }}>
        {children}
      </div>
      <Footer/>
    </div>
  );
});

export default Template;
