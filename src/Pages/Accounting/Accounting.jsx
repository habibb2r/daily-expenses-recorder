import { useForm } from "react-hook-form";
import { useState } from "react";
// import { Link } from "react-router-dom";
import useGetProfile from "../../Hooks/useGetProfile";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";

const Accounting = () => {
  const [profile, loadProfile, reLoadProfile] = useGetProfile();
  const axiosSecure = useAxiosSecure()
  const [accountHeads, setAccountHeads] = useState([
    "Transportation",
    "Office Maintenance",
    "Courier Cost",
    "Stationary",
    "Food",
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const modalForm = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const entryData = {
        date : data.date,
        accountHead : data.accountHead,
        amount : data.amount,
        accountType: data.accountType,
        email: profile?.email,
        employeeId: profile?.employeeId

    }
    axiosSecure.post('/accounting', entryData).then((res)=>{
        console.log(res.data);
        if(res.data.insertedId){
            reLoadProfile();
            reset();
            Swal.fire({
                title: "Entry Added Successfully",
                icon: "success",
                timer: 2000,
            })
        }
    })
  };

  const onAddHeadSubmit = (data) => {
    if (data.newHead) {
      setAccountHeads((prev) => [...prev, data.newHead]);
      modalForm.reset(); 
      document.getElementById("my_modal_2").close();
    }
  };

  return (
    <div className="flex justify-center items-start gap-10 px-10 py-5">
    
      <div className="flex flex-col justify-start items-start gap-3 bg-[#f4f9fc] px-8 py-6 rounded-md shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold">Add Accounting</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Choose Date</span>
            </div>
            <input
              type="date"
              className="input input-bordered w-full"
              {...register("date", { required: true })}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Account Type</span>
            </div>
            <select
              className="select select-bordered w-full"
              {...register("accountType", { required: true })}
            >
              <option value="">Select Account Type</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Choose Head</span>
            </div>
            <select
              className="select select-bordered w-full"
              {...register("accountHead", { required: true })}
            >
              <option value="">Select Head</option>
              {accountHeads.map((head, index) => (
                <option key={index} value={head}>
                  {head}
                </option>
              ))}
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Amount</span>
            </div>
            <input
              type="number"
              placeholder="Enter Amount"
              className="input input-bordered w-full"
              {...register("amount", { required: true, min: 0 })}
            />
          </label>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
          >
            Submit
          </button>
        </form>
      </div>

    
      <div className="flex flex-col justify-start items-start gap-3 bg-[#f4f9fc] px-8 py-6 rounded-md shadow-md border border-gray-200 w-1/3">
        <h2 className="text-lg font-semibold">Account Heads</h2>
        <ul className="flex flex-col gap-2 w-full">
          {accountHeads.map((head, index) => (
            <li
              key={index}
              className="bg-blue-100 text-gray-700 px-3 py-2 rounded-md"
            >
              {head}
            </li>
          ))}
        </ul>
        <button
          className="text-default font-semibold"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Add Accounts Head
        </button>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <div className="flex flex-col justify-center items-start gap-3 px-3 py-2">
              <h1 className="text-lg font-semibold text-default pb-2 border-b-2 border-blue-200">
                Add Account Head
              </h1>
              <form
                onSubmit={modalForm.handleSubmit(onAddHeadSubmit)}
                className="flex flex-col gap-4"
              >
                <label className="form-control w-full">
                  <span className="label-text font-semibold">Account Type</span>
                  <select
                    className="select select-bordered w-full"
                    {...modalForm.register("accountType", { required: true })}
                  >
                    <option value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                  </select>
                </label>
                <label className="form-control w-full">
                  <span className="label-text font-semibold">Type Name</span>
                  <input
                    type="text"
                    placeholder="Enter account head name"
                    className="input input-bordered w-full"
                    {...modalForm.register("newHead", { required: true })}
                  />
                </label>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
                >
                  Add Head
                </button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Accounting;
