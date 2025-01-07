import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-5 py-3 bg-[#2397c8] text-white">
            <div><img className="h-[60px]" src={logo} alt="" /></div>
            <div>
                <Link className="px-3 py-2 rounded-md shadow-sm bg-[#2397c8] text-white border-white border-2" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;