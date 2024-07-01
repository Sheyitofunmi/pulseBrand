import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbComponent: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {pathnames.length > 0 ? (
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <NavLink to="/dashboard">Home</NavLink>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage className="text-2xl">Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        )}

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <BreadcrumbItem key={to}>
              <BreadcrumbPage>{decodeURIComponent(value)}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <BreadcrumbItem key={to}>
              <BreadcrumbLink asChild>
                <NavLink to={to}>{decodeURIComponent(value)}</NavLink>
              </BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
