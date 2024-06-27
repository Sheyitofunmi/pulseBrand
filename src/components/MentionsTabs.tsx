import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { File, ListFilter } from "lucide-react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaStarHalfAlt,
} from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Mention = {
  platform: "Twitter" | "Instagram" | "LinkedIn" | "Google";
  username: string;
  sentiment: number;
  date: string;
  mentions: number;
  content: string;
};

const Rating = ({ score }: { score: number }) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <AiFillStar key={index} className="text-yellow-500" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, index) => (
        <AiOutlineStar key={index} className="text-gray-300" />
      ))}
    </div>
  );
};

const socialMediaIcon = (
  platform: "Twitter" | "Instagram" | "LinkedIn" | "Google"
) => {
  switch (platform) {
    case "Twitter":
      return <FaTwitter className="text-blue-400" />;
    case "Instagram":
      return <FaInstagram className="text-pink-500" />;
    case "LinkedIn":
      return <FaLinkedin className="text-blue-700" />;
    case "Google":
      return <FaGoogle className="text-red-600" />;
    default:
      return null;
  }
};

const MentionsTabs: React.FC = () => {
  const [filter, setFilter] = useState<{
    [key in "LinkedIn" | "Twitter" | "Instagram" | "Google"]: boolean;
  }>({
    LinkedIn: true,
    Twitter: true,
    Instagram: true,
    Google: true,
  });

  const mentions: { week: Mention[]; month: Mention[]; year: Mention[] } = {
    week: [
      {
        platform: "Twitter",
        username: "@liam_johnson",
        sentiment: 4.5,
        date: "2024-06-23",
        mentions: 5,
        content: "Great experience with the brand, highly recommend!",
      },
      {
        platform: "Instagram",
        username: "@olivia_smith",
        sentiment: 2.0,
        date: "2024-06-24",
        mentions: 3,
        content: "Had some issues with the product, not satisfied.",
      },
      {
        platform: "LinkedIn",
        username: "Noah Williams",
        sentiment: 3.0,
        date: "2024-06-25",
        mentions: 8,
        content: "Mixed feelings about the brand's new initiative.",
      },
      {
        platform: "Twitter",
        username: "@emma_brown",
        sentiment: 4.0,
        date: "2024-06-26",
        mentions: 12,
        content: "Really enjoyed the recent campaign!",
      },
      {
        platform: "Google",
        username: "Ethan Harris",
        sentiment: 4.0,
        date: "2024-06-27",
        mentions: 10,
        content: "Very helpful and responsive support team.",
      },
    ],
    month: [
      {
        platform: "Instagram",
        username: "@alex_jones",
        sentiment: 5.0,
        date: "2024-06-01",
        mentions: 30,
        content: "Amazing customer service this month!",
      },
      {
        platform: "Twitter",
        username: "@sophia_davis",
        sentiment: 1.5,
        date: "2024-06-15",
        mentions: 15,
        content: "Very disappointed with the latest update.",
      },
      {
        platform: "LinkedIn",
        username: "Lucas Wilson",
        sentiment: 3.5,
        date: "2024-06-20",
        mentions: 22,
        content: "Good but room for improvement.",
      },
      {
        platform: "Instagram",
        username: "@mia_martin",
        sentiment: 4.5,
        date: "2024-06-25",
        mentions: 28,
        content: "Love the new features introduced!",
      },
      {
        platform: "Google",
        username: "Amelia Clark",
        sentiment: 3.0,
        date: "2024-06-18",
        mentions: 20,
        content: "Decent experience overall.",
      },
    ],
    year: [
      {
        platform: "Google",
        username: "Grace Evans",
        sentiment: 4.5,
        date: "2024-05-14",
        mentions: 100,
        content: "Great performance throughout the year.",
      },
      {
        platform: "LinkedIn",
        username: "Charlotte King",
        sentiment: 4.0,
        date: "2024-01-10",
        mentions: 120,
        content: "The brand has made significant progress this year.",
      },
      {
        platform: "Twitter",
        username: "@logan_smith",
        sentiment: 2.5,
        date: "2024-03-05",
        mentions: 60,
        content: "Mixed reactions to their yearly performance.",
      },
      {
        platform: "Instagram",
        username: "@ella_white",
        sentiment: 4.5,
        date: "2024-06-12",
        mentions: 90,
        content: "Absolutely loving the brand's consistency!",
      },
      {
        platform: "LinkedIn",
        username: "Henry Moore",
        sentiment: 3.0,
        date: "2024-09-25",
        mentions: 85,
        content: "There are some areas for growth.",
      },
    ],
  };

  const renderRows = (data: Mention[]) => {
    return data
      .filter((mention) => filter[mention.platform])
      .map((mention, index) => (
        <TableRow key={index}>
          <TableCell>
            <div className="flex items-center gap-2">
              {socialMediaIcon(mention.platform)}
              <span className="font-medium">{mention.platform}</span>
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            {mention.username}
          </TableCell>
          <TableCell>
            <Rating score={mention.sentiment} />
          </TableCell>
          <TableCell className="hidden md:table-cell">{mention.date}</TableCell>
          <TableCell className="text-right">{mention.mentions}</TableCell>
          <TableCell className="hidden sm:table-cell">
            {mention.content}
          </TableCell>
        </TableRow>
      ));
  };

  return (
    <Tabs defaultValue="week">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={filter.LinkedIn}
                onCheckedChange={(checked) =>
                  setFilter((prev) => ({ ...prev, LinkedIn: checked }))
                }
              >
                LinkedIn
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filter.Twitter}
                onCheckedChange={(checked) =>
                  setFilter((prev) => ({ ...prev, Twitter: checked }))
                }
              >
                Twitter
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filter.Instagram}
                onCheckedChange={(checked) =>
                  setFilter((prev) => ({ ...prev, Instagram: checked }))
                }
              >
                Instagram
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filter.Google}
                onCheckedChange={(checked) =>
                  setFilter((prev) => ({ ...prev, Google: checked }))
                }
              >
                Google
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Export</span>
          </Button>
        </div>
      </div>
      <TabsContent value="week">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Social Media Mentions (Week)</CardTitle>
            <CardDescription>Recent mentions of your brand.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Platform</TableHead>
                  <TableHead className="hidden sm:table-cell text-center">
                    Username
                  </TableHead>
                  <TableHead>Sentiment</TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Date
                  </TableHead>
                  <TableHead className="text-end">Mentions</TableHead>
                  <TableHead className="hidden sm:table-cell text-center">
                    Content
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-center">
                {renderRows(mentions.week)}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="month">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Social Media Mentions (Month)</CardTitle>
            <CardDescription>Recent mentions of your brand.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Platform</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Username
                  </TableHead>
                  <TableHead>Sentiment</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Mentions</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Content
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{renderRows(mentions.month)}</TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="year">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Social Media Mentions (Year)</CardTitle>
            <CardDescription>Recent mentions of your brand.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Platform</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Username
                  </TableHead>
                  <TableHead>Sentiment</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Mentions</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Content
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{renderRows(mentions.year)}</TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default MentionsTabs;
