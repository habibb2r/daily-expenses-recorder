import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const { signin} = useAuth();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    console.log(data)
    await axiosSecure.post('/authenticateUser', data).then((res)=>{
      console.log(res.data);
      if(res.data.email){
          signin(res.data.email, data.password).then((res)=>{
            const user = res.user;
            if(user){
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Login Successful',
                timer: 1500,
                showConfirmButton: false
              });
              navigate('/')
            }
          })
      }
    })
  };
  console.log(errors);
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col justify-start items-center gap-3 px-[2%] py-[3%] bg-[#f4f9fc] mt-[5%] rounded-md shadow-md border-t-4 border-[#2696c5]">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-xl font-semibold text-default">
            Welcome to PureLedger
          </h1>
          <p className="text-sm">Please Login to continue</p>
        </div>
        <form
          className="flex flex-col justify-start items-start gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Employee ID</span>
            </div>
            <input
              className="input input-bordered w-full max-w-md"
              type="text"
              placeholder="Enter Employee ID Here"
              {...register("employeeId", { required: true })}
            />
          </label>
          
          <label className="form-control w-full max-w-md">
          <div className="label">
              <span className="label-text font-semibold">Password</span>
            </div>
          <div className="relative w-full max-w-md">
          
              <input
                className="input input-bordered  w-full pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password Here"
                {...register("password", {
                  required: true,
                  minLength: 4,
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </label>
          

          <div className="w-full">
            <input
              className="px-3 py-2 rounded-xl bg-[#2397c8] text-white w-full"
              type="submit"
            />
          </div>
        </form>
        <div>
          <p className="text-center">
            Don`t have an account?{" "}
            <Link to="/register" className="font-semibold text-default">
              Register Now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
