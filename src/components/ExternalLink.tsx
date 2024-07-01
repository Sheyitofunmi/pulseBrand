import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

const ExternalLink: React.FC = () => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // logic to submit the keyword and fetch data
    console.log("Keyword submitted:", keyword);
    //  Trigger API call to monitor reputation based on `keyword`
  };

  const links = [
    { name: "Google Analytics", icon: "📊", to: "/google-analytics" },
    { name: "Facebook Ads", icon: "📘", to: "/facebook-ads" },
    { name: "Seranking", icon: "📈", to: "/seranking" },
    { name: "Instagram Ads", icon: "📸", to: "/instagram-ads" },
  ];

  return (
    <Card
      className="overflow-hidden bg-white rounded-xl p-3  w-full border border-gray-200"
      x-chunk="dashboard-05-chunk-4"
    >
      <CardHeader className=" ">
        <CardTitle className=" ">External Links</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="flex gap-5 justify-center md:justify-end items-center pb-6 mb-3"
        >
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter keyword to monitor"
            className="border border-gray-300 rounded-md p-2 "
          />
          <Button className="text-white rounded-md">Submit</Button>
        </form>
        <ul className="space-y-5">
          {links.map((link) => (
            <li key={link.name} className="flex items-center space-x-5">
              <span className="text-2xl">{link.icon}</span>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-base text-gray-800 hover:text-blue-600 transition-colors w-full flex justify-between items-center duration-200 ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                <div>{link.name}</div>
                <div>
                  <img src="/link.svg" alt="" className="h-8 w-8" />
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExternalLink;
