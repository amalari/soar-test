import { Pie } from "react-chartjs-2";
import { ComponentProps, FC } from "react";

import { cn } from "../../common/utils/cn";

const data: ComponentProps<typeof Pie>["data"] = {
  labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
  datasets: [
    {
      data: [30, 15, 20, 35], // Persentase masing-masing kategori
      backgroundColor: ["#2C2F55", "#F28C28", "#111111", "#3D7EFF"],
      borderWidth: 6,
      borderColor: "#fff",
    },
  ],
};

const options: ComponentProps<typeof Pie>["options"] = {
  rotation: -50,
  plugins: {
    legend: {
      display: false, // Menyembunyikan legend default
    },
    datalabels: {
      color: "#fff", // Warna teks di dalam Pie Chart
      font: {
        size: 12,
      },
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels?.[ctx.dataIndex] || "";
        return `${value}%\n${label}`; // Menampilkan persen + label
      },
      textAlign: "center",
      anchor: "center",
      align: "center",
    },
  },
};


type ExpenseChartProps = React.ComponentProps<"div">;

export const ExpenseChart: FC<ExpenseChartProps> = ({
  className = "",
}) => {
  return (
    <div className={cn(
      "soar-weekly-activity-chart",
      className
    )}>
      <h3 className="text-xl font-medium mb-3">Expense Statistics</h3>
      <div className="bg-white rounded-2xl p-6 h-[320px]">
        <Pie  data={data} options={options} />
      </div>
    </div>
  )
};