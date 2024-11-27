import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AvatarIcon,
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import SideBar from "../SideBar/SideBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);

  const handleNavigate=()=>{
    if(auth.user){
      auth.user.role==="ROLE_ADMIN"?navigate("/admin/withdrawal"):navigate("/profile")
    }
  }
  return (
    <>
      <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Sheet className="">
            <SheetTrigger>
              <Button
                className="rounded-full h-11 w-11"
                variant="ghost"
                size="icon"
              >
                <DragHandleHorizontalIcon className=" h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-72  border-r-0 flexs flex-col  justify-center"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <div className="text-3xl flex justify-center  items-center gap-1">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="data:image/jpeg;base64,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" />
                    </Avatar>
                    <div>
                      <span className="font-bold text-yellow-700">SafeCrypto</span>
                      <span>Stocks</span>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <SideBar />
            </SheetContent>
          </Sheet>

          <p
            onClick={() => navigate("/")}
            className="text-sm lg:text-base cursor-pointer"
          >
            SafeCryptoStocks
          </p>
          <div className="p-0 ml-9">
            <Button
              variant="outline"
              onClick={() => navigate("/search")}
              className="flex items-center gap-3"
            >
              {" "}
              <MagnifyingGlassIcon className="left-2 top-3 " />
              <span>Search</span>
            </Button>
          </div>
        </div>
        <div>
          <Avatar className="cursor-pointer" onClick={handleNavigate}>
            {!auth.user ? (
              <AvatarIcon className=" h-8 w-8" />
            ) : (
              <AvatarFallback>{auth.user?.fullName[0].toUpperCase()}</AvatarFallback>
            )}
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Navbar;
