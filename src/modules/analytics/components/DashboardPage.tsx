import { MyBalanceCards } from "../../balance/components/MyBalanceCards";

export const DashboardPage = () => {
  return (
    <div className="soar-dashboard-page mx-10 my-7">
      <div className="flex">
        <MyBalanceCards />
      </div>
    </div>
  );
};
