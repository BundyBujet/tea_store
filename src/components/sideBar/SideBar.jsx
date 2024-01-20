import { Button } from "../ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SideBar = ({ title, subHeader, children }) => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className={`${subHeader ? "lg:hidden" : "md:hidden"}`}
      >
        <Button variant="ghost" size="icon">
          {title}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between px-0 pb-0">
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
