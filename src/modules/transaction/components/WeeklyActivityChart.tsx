import { Bar } from "react-chartjs-2";
import { ComponentProps, FC, useEffect, useRef, useState } from "react";
import { cn } from "../../common/utils/cn";

const data: ComponentProps<typeof Bar>["data"] = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Withdraw",
      data: [500, 350, 320, 500, 100, 400, 400],
      backgroundColor: "#000000",
      borderRadius: 30,
      borderSkipped: false,
      barThickness: 15,
    },
    {
      label: "Deposit",
      data: [200, 100, 250, 350, 150, 220, 300],
      backgroundColor: "#396AFF",
      borderRadius: 30,
      borderSkipped: false,
      barThickness: 15,
    },
  ],
};

const options: ComponentProps<typeof Bar>["options"] = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      reverse: true,
      align: "end",
      labels: {
        color: "#666",
        usePointStyle: true,
        boxWidth: 15,
        boxHeight: 10,
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#000",
      bodyColor: "#000",
    },
    datalabels: {
      display: false,
    }
  },
  scales: {
    x: {
      ticks: {
        padding: 10,
      }
    },
    y: {
      ticks: {
        stepSize: 100,
      }
    }
  }
};

type WeeklyActivityChartProps = React.ComponentProps<"div">;
export const WeeklyActivityChart: FC<WeeklyActivityChartProps> = ({
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn(
      "soar-weekly-activity-chart",
      className
    )}>
      <h3 className="text-xl font-medium mb-3">Weekly Activity</h3>
      <div className="bg-white rounded-2xl p-6 flex justify-center items-center h-[320px]">
        {width > 0 && <Bar width={width} height={226} data={data} options={options} />}
      </div>
    </div>
  );
};
