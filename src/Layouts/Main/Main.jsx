import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import SideNavbar from "../Shared/SideNavbar";
import useAuth from "../../Hooks/useAuth";


const Main = () => {
    const {user} = useAuth()
    return (
        <div>
            <Navbar></Navbar>
            <SideNavbar></SideNavbar>
            <div className={`${user? 'ml-[250px]' : 'ml-0' }  px-[2%] py-[2%]`}>
            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;