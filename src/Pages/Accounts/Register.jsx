
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
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
          <p className="text-sm">Fill up this form to Register</p>
        </div>
        <form
          className="flex flex-col justify-start items-start gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Full Name</span>
            </div>
            <input
              className="input input-bordered w-full max-w-md"
              type="text"
              placeholder="Enter Full Name"
              {...register("fullName", { required: true })}
            />
          </label>

          <div className="flex gap-3 w-full max-w-md">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Gender</span>
              </div>
              <select
                className="select select-bordered w-full"
                {...register("gender", { required: true })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Date Of Birth</span>
              </div>
              <input
                className="input input-bordered w-full"
                type="date"
                placeholder="Date Of Birth"
                {...register("dob", { required: true })}
              />
            </label>
          </div>

          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Email</span>
            </div>
            <input
              className="input input-bordered w-full max-w-md"
              type="email"
              placeholder="Enter Email"
              {...register("email", { required: true })}
            />
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Employee ID</span>
            </div>
            <input
              className="input input-bordered w-full max-w-md"
              type="text"
              placeholder="Enter Employee ID"
              {...register("employeeId", { required: true })}
            />
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">
                Position In Organization
              </span>
            </div>
            <input
              className="input input-bordered w-full max-w-md"
              type="text"
              placeholder="Enter Position"
              {...register("position", { required: true })}
            />
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Password</span>
            </div>
            <input
              className="input input-bordered w-full max-w-md"
              type="password"
              placeholder="Enter Password"
              {...register("password", { required: true, minLength: 6 })}
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
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-default">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
