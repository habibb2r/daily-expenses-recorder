import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import SideNavbar from "../Shared/SideNavbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SideNavbar></SideNavbar>
            <div className="ml-[250px] px-[2%] py-[2%]">
            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;