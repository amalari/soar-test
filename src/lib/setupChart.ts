import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export const setupChart = () => {
  Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);
}
