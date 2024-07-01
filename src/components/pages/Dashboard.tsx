// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

// import { Progress } from "@/components/ui/progress";
import { CardsMetric } from "../CardsMetric";
import ExternalLink from "../ExternalLink";
import BarChart from "../BarChart";
import MentionsTabs from "../MentionsTabs";
import Card from "../Card";

export function Dashboard() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-3 pb-3">
          <CardsMetric />

          <Card />
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
