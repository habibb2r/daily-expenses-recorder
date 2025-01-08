import React from "react";
import { MdDateRange } from "react-icons/md";
import useGetDailyReports from "../../Hooks/useGetDailyReports";
import Loading from "../../Reuseable/Loading";

const Reports = () => {
  const [dailyReports, loadDailyReports, reLoadDailyReports] =
    useGetDailyReports();
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const getDayWithSuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };
  console.log(dailyReports);
  const formattedDate = `${getDayWithSuffix(day)} ${month}, ${year}`;

  return (
    <div className="bg-[#f9fafb] px-8 py-6 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Daily Report</h2>
        <div className="text-gray-600 text-xl flex items-center gap-2">
          <span>{formattedDate}</span>
          <MdDateRange />
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-600">
        <thead>
          <tr className="bg-gray-100 text-gray-700 font-semibold">
            <th className="py-2 px-3">Serial</th>
            <th className="py-2 px-3">Accounts Head</th>
            <th className="py-2 px-3">Date</th>
            <th className="py-2 px-3">Debit</th>
            <th className="py-2 px-3">Credit</th>
          </tr>
        </thead>
       {

        loadDailyReports ? <Loading></Loading> :  <tbody>
        {dailyReports?.map((item, index) => (
          <tr
            key={item.id}
            className="border-b hover:bg-gray-50 transition-colors font-semibold"
          >
            <td className="py-2 px-3">{index + 1}</td>
            <td className="py-2 px-3">{item.accountHead}</td>
            <td className="py-2 px-3">{item.date}</td>
            <td className="py-2 px-3">
              {item.accountType === "Debit" ? item.amount : "-"}
            </td>
            <td className="py-2 px-3">
              {item.accountType === "Credit" ? item.amount : "-"}
            </td>
          </tr>
        ))}
      </tbody>
       }
      </table>
    </div>
  );
};

export default Reports;
