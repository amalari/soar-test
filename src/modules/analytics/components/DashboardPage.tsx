import { MyBalanceCards } from "../../balance/components/MyBalanceCards";
import { RecentTransactions } from "../../transaction/components/RecentTransactions";
import { WeeklyActivityChart } from "../../transaction/components/WeeklyActivityChart";

export const DashboardPage = () => {
  return (
    <div className="soar-dashboard-page pl-4 md:px-10 py-7 w-full lg:w-[calc(100vw-250px)]">
      <div className="grid grid-cols-3 gap-7 mb-4">
        <MyBalanceCards className="col-span-3 xl:col-span-2" />
        <RecentTransactions className="col-span-3 xl:col-span-1" />
      </div>
      <div className="grid grid-cols-3 gap-7">
        <WeeklyActivityChart className="col-span-3 xl:col-span-2 h-[320px]" />
      </div>
    </div>
  );
};
