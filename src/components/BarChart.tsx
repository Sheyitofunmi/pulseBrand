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
      backgroundColor: "#333",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "#6C63FF",
      borderWidth: 1,
      callbacks: {
        title: () => "",
        label: function (context: TooltipItem<"bar">) {
          return `Mentions: ${context.raw}`;
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
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        callback: (value: any) => `${value}`,
      } as any,
    },
  },
};

const generateRandomData = () => {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20);
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      data: generateRandomData(),
      backgroundColor: "currentColor",
      borderColor: "currentColor",
      borderWidth: 1,
      borderRadius: 4,
      barThickness: 20,
    },
  ],
};

// BarChart component
const BarChartComponent: React.FC = () => {
  return (
    <div style={{ width: "100%", maxWidth: "800px" }}>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-start ">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 ">
              Social Media Mentions
            </CardTitle>
            <CardDescription className="">
              Based on Monitored Keywords
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="text-[#A3AED0] text-xs mb-4 pb-2">
            Monthly Overview
          </div>
          <div className="">
            <Bar options={options} data={data} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2024-06-27">June 27, 2024</time>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BarChartComponent;
