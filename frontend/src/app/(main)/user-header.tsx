"use client";
import { Input } from "@/components/ui/input";
import { Badge, MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";

export const Navigation = () => {
  return (
    <div className="flex w-full h-17 bg-black justify-between py-3 px-22 items-center fixed z-10 top-0">
      <div className="flex gap-3 items-center">
        <img src="logo.png" alt="logo" />
        <div className="flex flex-col items-start">
          <div className="flex">
            <h4 className="text-[#FAFAFA] text-xl leading-7 font-semibold ">
              Nom
            </h4>
            <h4 className="text-[#EF4444] text-xl leading-7 font-semibold">
              Nom
            </h4>
          </div>
          <p className="leading-4 text-xs font-normal text-[#F4F4F5]">
            Swift delivery
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[12.8px]">
        <button className="bg-white text-black text-sm leading-4 font-medium h-9 justify-center items-center rounded-full px-3 py-2">
          Sign up
        </button>
        <button className="bg-[#EF4444] text-white text-sm leading-4 font-medium h-9 justify-center items-center rounded-full px-3 py-2">
          Log in
        </button>
      </div>
      <div className="flex items-center gap-[12.813px]">
        <AlertDialog>
          <AlertDialogTrigger className="flex items-center gap-1 py-2 px-3 h-9 rounded-full bg-[#fff]">
            <MapPin color="red" size="20px" />
            <p className=" text-red-500 text-nowrap">Delivery address:</p>
            <Input
              type="search"
              placeholder="Add location"
              className="border-none focus-visible:border-none focus-visible:ring-0"
            ></Input>
            <ChevronRight size="20px" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delivery address</AlertDialogTitle>
              <AlertDialogDescription>
                <Textarea
                  placeholder="Please provide specific address details such as building number,
                entrance, and apartment number"
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Deliver here</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className="flex size-9 justify-center items-center gap-2 rounded-full bg-[#F4F4F5]">
          <ShoppingCart size="16px" />
        </div>
        <div className="flex size-9 justify-center items-center gap-2 rounded-full bg-[#EF4444]">
          <User color="white" size="16px" />
        </div>
      </div>
    </div>
  );
};
