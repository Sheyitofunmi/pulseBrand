import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Progress } from "@/components/ui/progress";
import { CardsMetric } from "../CardsMetric";
import ExternalLink from "../ExternalLink";
import BarChart from "../BarChart";
import MentionsTabs from "../MentionsTabs";

export function Dashboard() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <CardsMetric />

          <Card
            x-chunk="dashboard-05-chunk-1"
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <CardHeader className="pb-4 flex items-center">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-blue-400 text-3xl mr-3"
              />
              <div>
                <CardDescription className="text-gray-600">
                  Keyword: "BrandName"
                </CardDescription>
                <CardTitle className="text-2xl font-semibold">
                  Twitter
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700">
              <div className="text-sm">Positive Mentions: 75%</div>
              <div className="text-sm">Negative Mentions: 15%</div>
              <div className="text-sm">Neutral Mentions: 10%</div>
            </CardContent>
            <CardFooter className="pt-4">
              <Progress
                value={75}
                aria-label="75% positive mentions"
                className="bg-blue-400"
              />
            </CardFooter>
          </Card>

          <Card
            x-chunk="dashboard-05-chunk-2"
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <CardHeader className="pb-4 flex items-center">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-pink-400 text-3xl mr-3"
              />
              <div>
                <CardDescription className="text-gray-600">
                  Keyword: "BrandName"
                </CardDescription>
                <CardTitle className="text-2xl font-semibold">
                  Instagram
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700">
              <div className="text-sm">Positive Mentions: 65%</div>
              <div className="text-sm">Negative Mentions: 20%</div>
              <div className="text-sm">Neutral Mentions: 15%</div>
            </CardContent>
            <CardFooter className="pt-4">
              <Progress
                value={65}
                aria-label="65% positive mentions"
                className="bg-pink-400"
              />
            </CardFooter>
          </Card>
        </div>
        <MentionsTabs />
      </div>

      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 ">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 ">
          <ExternalLink />
          <BarChart />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
