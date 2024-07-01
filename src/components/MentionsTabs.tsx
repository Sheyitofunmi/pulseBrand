import React, { useState, useEffect } from "react";
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
import { File, ListFilter, Search } from "lucide-react";
import { FaTwitter, FaStarHalfAlt } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Input } from "./ui/input";

type Mention = {
  platform: "Twitter";
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

const fetchTwitterMentions = async (keyword: string): Promise<Mention[]> => {
  // Placeholder for fetching Twitter mentions based on keyword
  //  API call logic
  return [
    {
      platform: "Twitter",
      username: "@liam_johnson",
      sentiment: 4.5,
      date: "2024-06-23",
      mentions: 5,
      content: `Great experience with the brand ${keyword}, highly recommend!`,
    },
    {
      platform: "Twitter",
      username: "@emma_brown",
      sentiment: 4.0,
      date: "2024-06-26",
      mentions: 12,
      content: `Really enjoyed the recent campaign involving ${keyword}!`,
    },
    {
      platform: "Twitter",
      username: "@michael_green",
      sentiment: 3.0,
      date: "2024-06-25",
      mentions: 7,
      content: `The latest product from ${keyword} has some pros and cons.`,
    },
    {
      platform: "Twitter",
      username: "@lucy_williams",
      sentiment: 2.5,
      date: "2024-06-24",
      mentions: 4,
      content: `${keyword} didn't meet my expectations this week.`,
    },
    {
      platform: "Twitter",
      username: "@david_james",
      sentiment: 5.0,
      date: "2024-06-27",
      mentions: 20,
      content: `${keyword} is doing an amazing job lately!`,
    },
    {
      platform: "Twitter",
      username: "@sophia_davis",
      sentiment: 1.5,
      date: "2024-06-15",
      mentions: 15,
      content: `Very disappointed with the latest update from ${keyword}.`,
    },
    {
      platform: "Twitter",
      username: "@alex_jones",
      sentiment: 3.5,
      date: "2024-06-20",
      mentions: 22,
      content: `${keyword} is good but has room for improvement.`,
    },
    {
      platform: "Twitter",
      username: "@mia_martin",
      sentiment: 4.5,
      date: "2024-06-25",
      mentions: 28,
      content: `Love the new features introduced by ${keyword}!`,
    },
    {
      platform: "Twitter",
      username: "@amelia_clark",
      sentiment: 3.0,
      date: "2024-06-18",
      mentions: 20,
      content: `${keyword} provided a decent experience overall.`,
    },
    {
      platform: "Twitter",
      username: "@logan_smith",
      sentiment: 2.5,
      date: "2024-03-05",
      mentions: 60,
      content: `Mixed reactions to ${keyword}'s performance this year.`,
    },
    {
      platform: "Twitter",
      username: "@ella_white",
      sentiment: 4.5,
      date: "2024-06-12",
      mentions: 90,
      content: `Absolutely loving the brand's consistency this year!`,
    },
    {
      platform: "Twitter",
      username: "@henry_moore",
      sentiment: 3.0,
      date: "2024-09-25",
      mentions: 85,
      content: `There are some areas for growth with ${keyword}.`,
    },
    {
      platform: "Twitter",
      username: "@grace_evans",
      sentiment: 4.5,
      date: "2024-05-14",
      mentions: 100,
      content: `Great performance throughout the year from ${keyword}.`,
    },
    {
      platform: "Twitter",
      username: "@charlotte_king",
      sentiment: 4.0,
      date: "2024-01-10",
      mentions: 120,
      content: `${keyword} has made significant progress this year.`,
    },
  ];
};

const MentionsTabs: React.FC = () => {
  const [mentions, setMentions] = useState<{
    week: Mention[];
    month: Mention[];
    year: Mention[];
  }>({
    week: [],
    month: [],
    year: [],
  });

  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const loadMentions = async () => {
    const mentionsData = await fetchTwitterMentions(keyword);
    setMentions({
      week: mentionsData.slice(0, 5),
      month: mentionsData.slice(0, 10),
      year: mentionsData,
    });
  };

  useEffect(() => {
    loadMentions();
  }, [keyword]);

  const renderRows = (mentionsData: Mention[]) =>
    mentionsData.map((mention, index) => (
      <TableRow key={index}>
        <TableCell>
          <FaTwitter className="inline-block text-blue-500" size={18} />
        </TableCell>
        <TableCell className="hidden sm:table-cell">
          {mention.username}
        </TableCell>
        <TableCell>
          <Rating score={mention.sentiment} />
        </TableCell>
        <TableCell className="hidden md:table-cell">{mention.date}</TableCell>
        <TableCell className="text-center">{mention.mentions}</TableCell>
        <TableCell className="hidden sm:table-cell">
          {mention.content}
        </TableCell>
      </TableRow>
    ));

  return (
    <div className="bg-white  rounded-xl pb-6 pt-3 px-4 border border-gray-200">
      <Tabs defaultValue="week">
        <div className="flex justify-between items-center p-4">
          <TabsList className="flex gap-4 bg-whiteBg rounded-2xl p-4">
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
          <div className="flex items-center">
            <div className="relative hidden md:block ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4  w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                value={keyword}
                onChange={handleKeywordChange}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-3  text-primary  gap-1 text-sm border-2 border-secondary  rounded-md"
                >
                  <ListFilter className="mr-2 h-4 w-4 text-primary" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>View</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>Week</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Month</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Year</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              size="sm"
              className="ml-3  gap-1 text-sm text-white rounded-md"
            >
              <File className="mr-2 h-4 w-4 text-white" />
              <span className="sr-only sm:not-sr-only">Export</span>
            </Button>
          </div>
        </div>
        <TabsContent value="week">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Twitter Mentions (Week)</CardTitle>
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
                    <TableHead className="text-center">Mentions</TableHead>
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
              <CardTitle>Twitter Mentions (Month)</CardTitle>
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
                    <TableHead className="hidden sm:table-cell text-center">
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
              <CardTitle>Twitter Mentions (Year)</CardTitle>
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
                    <TableHead className="text-end">Mentions</TableHead>
                    <TableHead className="hidden sm:table-cell text-center">
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
    </div>
  );
};

export default MentionsTabs;
