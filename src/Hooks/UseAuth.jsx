import { useContext } from "react";
import { AuthContext } from "../../src/Provider/AuthProvider";


const UseAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default UseAuth;