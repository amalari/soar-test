import { BalanceHistoryChart } from "../../balance/components/BalanceHistoryChart";
import { MyBalanceCards } from "../../balance/components/MyBalanceCards";
import { ExpenseChart } from "../../transaction/components/ExpenseChart";
import { QuickTransfer } from "../../transaction/components/QuickTransfer";
import { RecentTransactions } from "../../transaction/components/RecentTransactions";
import { WeeklyActivityChart } from "../../transaction/components/WeeklyActivityChart";

export const DashboardPage = () => {
  return (
    <div className="soar-dashboard-page p-3 md:px-10 md:py-7 w-full lg:w-[calc(100vw-250px)]">
      <div className="grid grid-cols-3 gap-7 mb-4">
        <MyBalanceCards className="col-span-3 xl:col-span-2" />
        <RecentTransactions className="col-span-3 xl:col-span-1" />
      </div>
      <div className="grid grid-cols-3 gap-7 mb-4">
        <WeeklyActivityChart className="col-span-3 xl:col-span-2" />
        <ExpenseChart className="col-span-3 xl:col-span-1" />
      </div>
      <div className="grid grid-cols-3 gap-7">
        <QuickTransfer className="col-span-3 xl:col-span-1" />
        <BalanceHistoryChart className="col-span-3 xl:col-span-2" />
      </div>
    </div>
  );
};
