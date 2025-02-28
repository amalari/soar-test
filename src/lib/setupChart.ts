import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Filler } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export const setupChart = () => {
  Chart.register(LineElement, PointElement, ArcElement, BarElement, CategoryScale, LinearScale, Filler, Tooltip, Legend, ChartDataLabels);
}
