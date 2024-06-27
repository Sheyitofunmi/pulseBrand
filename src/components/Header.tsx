import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import BreadcrumbComponent from "./BreadcrumbComponent";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DatePicker } from "./DatePicker";
import { Checkbox } from "./ui/checkbox";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <NavLink
              to="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </NavLink>
            <NavLink
              to="/"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Home
            </NavLink>
            <NavLink
              to="/orders"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
            </NavLink>
            <NavLink
              to="/products"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Package className="h-5 w-5" />
              Products
            </NavLink>
            <NavLink
              to="/customers"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Users2 className="h-5 w-5" />
              Customers
            </NavLink>
            <NavLink
              to="/settings"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Settings
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>
      <BreadcrumbComponent />
      <div className="relative ml-auto flex-1 md:grow-0">
        <DatePicker />
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Monitor</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Brand Reputation Monitoring</SheetTitle>
            <SheetDescription>
              Monitor social media ratings and reputation for your brand.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="keywords" className="">
                Keywords
              </Label>
              <Input
                id="keywords"
                placeholder="Enter keywords to monitor"
                className="col-span-3"
              />
            </div>
            <div className="grid  items-start gap-4">
              <Label className="">Platforms:</Label>
              <div className="col-span-3 gap-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Checkbox id="linkedin" />
                  <Label htmlFor="linkedin">LinkedIn</Label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <Checkbox id="twitter" />
                  <Label htmlFor="twitter">Twitter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="instagram" />
                  <Label htmlFor="instagram">Instagram</Label>
                </div>
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Start Monitoring</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
