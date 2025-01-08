import useGetDashboardData from "../../Hooks/useGetDashboardData";
import Loading from "../../Reuseable/Loading";
import { Chart } from "react-google-charts";

const Dashboard = () => {
  const [dashboardData, isLoading] = useGetDashboardData();
  if (isLoading) {
    return <Loading />;
  }
  const options = {
    chart: {
      title: "Yearly Account Analysis",
    },
    bars: "vertical",
    colors: ["#1b9e77", "#d95f02", "#7570b3"],
    bar: { groupWidth: "85%" },
    legend: { position: "bottom" },
  };

  const data = [
    ["Months", "Debit", "Credit"], 
    ...(dashboardData?.monthlyData ?? []).map((item) => [
      item.month,
      item.debit,
      item.credit,
    ]),
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <div className="px-4 py-3 bg-[#f5dbda] rounded-md shadow-md">
          <h1 className="font-semibold text-end text-xl text-[#ea7979]">
            {dashboardData?.totalDebit} TK
          </h1>
          <div className="text-start pt-4">
            <h1 className="text-xl font-semibold">Total Debit</h1>
            <p className="text-sm">In this month</p>
          </div>
        </div>
        <div className="px-2 py-3 bg-[#f5dbda] rounded-md shadow-md">
          <h1 className="font-semibold text-end text-xl text-[#ea7979]">
            {dashboardData?.totalCredit} TK
          </h1>
          <div className="text-start pt-3">
            <h1 className="text-xl font-semibold">Total Credit</h1>
            <p>In this month</p>
          </div>
        </div>
        <div className="px-2 py-3 bg-[#f5dbda] rounded-md shadow-md">
          <h1 className="font-semibold text-end text-xl text-[#ea7979]">
            {dashboardData?.totalAmount} TK
          </h1>
          <div className="text-start pt-3">
            <h1 className="text-xl font-semibold">Total Amount</h1>
            <p>In this month</p>
          </div>
        </div>
      </div>
      <div className="mt-5 h-[350px]">
        <Chart chartType="Bar" data={data} height={"100%"} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
