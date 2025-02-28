import { ComponentProps, FC } from "react";
import { Line } from "react-chartjs-2";
import { cn } from "../../common/utils/cn";

type BalanceHistoryChartProps = React.ComponentProps<"div">;
export const BalanceHistoryChart: FC<BalanceHistoryChartProps> = ({
  className = '',
}) => {
  const data : ComponentProps<typeof Line>["data"] = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: 'Balance History',
        data: [100, 300, 220, 450, 400, 700, 300, 550, 600], // Example data
        fill: true,
        borderColor: '#3B82F6', // Blue color
        tension: 0.4,
        pointStyle: false,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea, scales } = chart;

          if (!chartArea) {
            return "transparent";
          }

          const gradient = ctx.createLinearGradient(0, scales.y.bottom, 0, scales.y.top);
          gradient.addColorStop(1, 'rgba(45, 96, 255, 0.5)'); // Light blue at the bottom
          gradient.addColorStop(0.5, 'rgba(45, 96, 255, 0.25)'); // Transparent at the top
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0)'); // Transparent at the top

          return gradient;
        },
      },
    ],
  };
  
  const options: ComponentProps<typeof Line>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: true } },
      y: { 
        ticks: {
          stepSize: 200,
        },
        grid: { display: true }, 
        beginAtZero: true 
      },
    },
    plugins: {
      legend: { display: false },
      datalabels: { display: false },
    },
  };
  
  return (
    <div className={cn(
      "soar-balance-history-chart",
      className
    )}>
      <h3 className="text-xl font-medium mb-3">Balance History</h3>
      <div className="bg-white rounded-2xl p-6 h-[223px] lg:h-[276px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}