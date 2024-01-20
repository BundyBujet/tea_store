import logo from "../../assets/Icon.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "@radix-ui/react-separator";
import { User, ShoppingBag, Search, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between px-0 pb-0">
        <div>
          <div className="relative mt-4 mx-4">
            <Search className="absolute top-0 bottom-0 w-4 h-4 my-auto left-3" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 "
            />
          </div>

          <div className="flex items-center gap-2 mt-6 px-2 mx-2">
            <User className="mb-1" />

            <div className="leading-4">
              <p className="font-medium uppercase">User Profile</p>
              <span className="text-gray-500 text-[0.7rem]">
                We know you as a Guest User
              </span>
            </div>
          </div>
          <div className="flex  items-center gap-2 mt-6 px-2 mx-2">
            <ShoppingBag className="mb-1" />

            <div className="leading-4">
              <p className="font-medium uppercase">your bag</p>
              <span className="text-gray-500 text-[0.7rem]">
                <span className="text-amber-500">(3)</span>
                items have been added
              </span>
            </div>
          </div>
        </div>
        <div>
          <Separator className="my-8 bg-gray-400 h-[0.1rem] w-[90%] m-auto" />

          <ul className="uppercase flex flex-col gap-y-4 font-medium px-2 mx-2">
            <li>tea collection</li>
            <li>accessories</li>
            <li>blog</li>
            <li>contact us</li>
          </ul>
        </div>
        <div className="bg-gray-200 flex flex-col gap-y-4 relative px-4 py-8 mt-4">
          <div className="flex  items-center gap-x-2">
            <img src={logo} alt="logo" />
            <h2>Shatat tea</h2>
          </div>
          <div>
            <p className="font-thin text-sm">
              We offer loose tea leaves of the best quality for your business.
              With a choice of more than 450 different kinds of loose tea, we
              can make a sophisticated selection that fits exactly in your kind
              of establishment.
            </p>
          </div>
          <div className="text-[9px]">
            <span>
              ALL RIGHTS RESERVED BY<h2 className="inline"> SHATAT TEA </h2>Co.
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
