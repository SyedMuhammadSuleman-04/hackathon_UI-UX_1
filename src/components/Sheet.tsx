"use client";

import { Button } from "@/components/ui/button";
import { TiThMenu } from "react-icons/ti";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "lucide-react";
import { NavigationMenuDemo } from "./NaviagationMenu";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button>
              <TiThMenu className="text-2xl text-black font-extrabold lg:hidden" />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
            </SheetHeader>
            <ul className="">
              <li className="grid grid-cols-1">
                <Link href={""}>
                  <NavigationMenuDemo />
                </Link>
                <Link href={""}>On Sale</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Brands</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
