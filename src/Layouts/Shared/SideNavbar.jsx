import { CiVideoOn } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="w-[250px] bg-[#e4f1f7] h-screen fixed top-[12%] left-0">
      <div className="px-[3%] py-[4%]">
        <h1 className="font-semibold text-default text-2xl">Accounting</h1>
        <div className="flex flex-col justify-start gap-3 mt-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex justify-between items-center gap-5 px-3 py-2 rounded-md ${
                isActive
                  ? "bg-[#d1e9f3] border-l-4 border-blue-700 font-semibold"
                  : ""
              }`
            }
          >
            <div className="flex items-center gap-2">
              <GoHome />
              <p className="">Dashboard</p>
            </div>
            <MdKeyboardArrowRight />
          </NavLink>

          <NavLink
            to="/accounting"
            className={({ isActive }) =>
              `flex justify-between items-center gap-5 px-3 py-2 rounded-md ${
                isActive
                  ? "bg-[#d1e9f3] border-l-4 border-blue-700 font-semibold"
                  : ""
              }`
            }
          >
            <div className="flex items-center gap-2">
              <CiVideoOn />
              <p className="">Accounting</p>
            </div>
            <MdKeyboardArrowRight />
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `flex justify-between items-center gap-5 px-3 py-2 rounded-md ${
                isActive
                  ? "bg-[#d1e9f3] border-l-4 border-blue-700 font-semibold"
                  : ""
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FiEdit />
              <p className="">Reports</p>
            </div>
            <MdKeyboardArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
