import { Outlet } from "react-router-dom";
import Navbar from "../SharedItem/Navbar/Navbar";
import Footer from "../SharedItem/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAudioBooks from "../Hooks/useAudioBooks";

const Layout = () => {
    const {loading} =useContext(AuthContext)
    const [audioBooks, isLoading] = useAudioBooks();

    if (isLoading || loading) {
        return <span className="loading loading-dots loading-lg">Loading audio books...</span>;
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