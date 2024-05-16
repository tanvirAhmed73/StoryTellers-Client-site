import { Outlet } from "react-router-dom";
import Navbar from "../SharedItem/Navbar/Navbar";
import Footer from "../SharedItem/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;