import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

type DataType = {
  average: number;
  today: number;
};

const data: DataType[] = [
  { average: 400, today: 240 },
  { average: 300, today: 139 },
  { average: 200, today: 980 },
  { average: 278, today: 390 },
  { average: 189, today: 480 },
  { average: 239, today: 380 },
  { average: 349, today: 430 },
];

const configAtom = atomWithStorage("config", {
  style: "default",
  theme: "zinc",
  radius: 0.5,
});

function useConfig() {
  return useAtom(configAtom);
}

export const CardsMetric: React.FC = () => {
  const [] = useConfig();

  return (
    <Card
      className="sm:col-span-2 bg-white rounded-xl "
      x-chunk="dashboard-05-chunk-0"
    >
      <CardHeader className="pb-3">
        <CardTitle>Exercise Minutes</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Your exercise minutes are ahead of where you normally are.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Average
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Today
                            </span>
                            <span className="font-bold">
                              {payload[1].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#ED6C3C"
                strokeWidth={2}
                activeDot={{
                  r: 6,
                  style: { fill: "#ED6C3C", opacity: 0.55 },
                }}
              />
              <Line
                type="monotone"
                dataKey="today"
                stroke="#6EC8F7"
                strokeWidth={2}
                activeDot={{
                  r: 8,
                  style: { fill: "#6EC8F7" },
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
