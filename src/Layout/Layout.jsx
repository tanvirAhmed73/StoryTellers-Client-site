import { Outlet } from "react-router-dom";
import Navbar from "../SharedItem/Navbar/Navbar";
import Footer from "../SharedItem/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Layout = () => {
    const {loading} =useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;