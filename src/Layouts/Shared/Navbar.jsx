import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth";
import useGetProfile from "../../Hooks/useGetProfile";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../Reuseable/Loading";

const Navbar = () => {
    const [opendropdown, setDropDown] = useState(false)
  const { user, logOut } = useAuth();
  const [profile, loadProfile, reLoadProfile] = useGetProfile();
    const navigate = useNavigate()
  const handleLogOut = ()=>{
    logOut().then(()=>{
        setDropDown(!opendropdown)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logout successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reLoadProfile();
          navigate("/login", { replace: true });
    })
  }
  return (
    <div className="flex justify-between items-center px-[5%] py-3 bg-[#2397c8] text-white">
      <div>
        <img className="h-[60px]" src={logo} alt="" />
      </div>
      <div>
        {user ? (
          loadProfile ? <Loading /> : <div className="flex justify-end items-center gap-4">
          <div className="flex flex-col items-end justify-end gap-2">
            <h1 className="text-xl font-semibold">{profile?.fullName}</h1>
            <h1 className="text-sm">{profile?.position}</h1>
          </div>
          <div>
          <img onClick={()=>setDropDown(!opendropdown)}
              className="h-[50px] rounded-full"
              src={profile?.image}
              alt=""
            />
            <div className={`${opendropdown ? 'block' : 'hidden'}`}>
            <div className="w-[150px] px-2 py-2 rounded-md absolute top-[11%] right-[3%] z-2 bg-white text-default font-semibold shadow-md">
             <div className="flex flex-col gap-2 text-center">
             <Link to='/profile' onClick={()=>setDropDown(!opendropdown)} className="px-2 py-2 rounded-md border-2 border-blue-300">My Profile</Link>
             <button onClick={()=> handleLogOut()} className="px-2 py-2 rounded-md border-2 border-blue-300">Logout</button>
             </div>
            </div>
            </div>
          </div>
        </div>
        ) : (
          <Link
            className="px-3 py-2 rounded-md shadow-sm bg-[#2397c8] text-white border-white border-2"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
