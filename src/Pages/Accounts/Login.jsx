import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
              {...register("employerId", { required: true })}
            />
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Password</span>
            </div>
            <input
              className="input input-bordered w-full max-w-md"
              type="text"
              placeholder="Enter Password Here"
              {...register("password", { required: true, min: 6 })}
            />
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
