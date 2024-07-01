import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Chart options
const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#333",
      bodyColor: "#333",
      borderColor: "#D1D5DB",
      borderWidth: 1,
      callbacks: {
        title: () => "",
        label: function (context: TooltipItem<"bar">) {
          return `Mention: ${context.raw}`;
        },
      },
      position: "nearest" as "nearest",
      yAlign: "top",
      caretPadding: 10,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      stacked: false,
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        callback: (value: any) => `${value}`,
      } as any,
      stacked: false,
    },
  },
};

const generateRandomData = () => {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 300) + 50);
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const data: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "Negative Mentions",
      data: generateRandomData(),
      backgroundColor: "#D1D5DB",
      borderColor: "#D1D5DB",
      borderWidth: 1,
      borderRadius: 4,
      barThickness: 20,
    },
    {
      label: "Positive Mentions",
      data: generateRandomData(),
      backgroundColor: "#17CF97",
      borderColor: "#17CF97",
      borderWidth: 1,
      borderRadius: 4,
      barThickness: 20,
    },
  ],
};

const BarChartComponent: React.FC = () => {
  return (
    <div
      style={{ width: "100%", maxWidth: "800px" }}
      className="bg-white rounded-xl p-3  w-full border border-gray-200"
    >
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-start">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2">
              Engagement Analysis
            </CardTitle>
            <CardDescription className="text-xs pt-2">
              Based on Recent Data
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="text-[#A3AED0] text-xs mb-4 pb-2">
            Monthly Overview
          </div>
          <div>
            <Bar options={options} data={data} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2024-06-30">June 30, 2024</time>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BarChartComponent;
