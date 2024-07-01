import * as React from "react";
import {
  Card as UiCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CustomCardProps {
  title: string;
  value: string;
  trendValue: string;
  trendSrc: string;
  trendAlt: string;
  trendColor: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  value,
  trendValue,
  trendSrc,
  trendAlt,
  trendColor,
}) => {
  return (
    <UiCard
      x-chunk="dashboard-05-chunk-1"
      className="bg-white border-none rounded-xl p-3 w-full border border-gray-200 flex-1"
    >
      <CardHeader className="md:px-3">
        <CardTitle className="text-xs text-[#7F8C8D] capitalize">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="md:p-1">
        <div className="text-center flex gap-4 md:justify-between items-center">
          <p className="text-3xl md:text-lg xl:text-3xl font-semibold text-[#2B2B2B]">
            {value}
          </p>
          <div className="flex items-center justify-center mt-2 text-xs">
            <img src={trendSrc} alt={trendAlt} className="w-3 h-3 mr-1" />
            <p className={`text-xs ${trendColor}`}>{trendValue}</p>
          </div>
        </div>
      </CardContent>
    </UiCard>
  );
};

const Card: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-2 ">
      <CustomCard
        title="Mentions"
        value="1,125"
        trendValue="+120"
        trendSrc="/positive.svg"
        trendAlt="Positive trend"
        trendColor="text-green-500"
      />
      <CustomCard
        title="Disapproval"
        value="22%"
        trendValue="-5.4%"
        trendSrc="/nagative.svg"
        trendAlt="Negative trend"
        trendColor="text-red-500"
      />
      <CustomCard
        title="Engagements"
        value="350"
        trendValue="+15%"
        trendSrc="/positive.svg"
        trendAlt="Positive trend"
        trendColor="text-green-500"
      />
      <CustomCard
        title="Tracked"
        value="235"
        trendValue="+35"
        trendSrc="/positive.svg"
        trendAlt="Positive trend"
        trendColor="text-green-500"
      />
    </div>
  );
};

export default Card;
