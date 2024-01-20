import Filter from "../filter/Filter";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "@/components/ui/switch";

const FilterSidebar = () => {
  return (
    <div className="relative mt-4">
      <FilterTitle title={"sort your selected items"} />
      <div className="flex flex-col gap-y-4 px-4 my-2">
        <div className="flex items-center gap-x-2 ">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Black tea
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Black tea
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Black tea
          </label>
        </div>
      </div>
      <FilterTitle title={"select by your flavor"} />
      <Filter />
      <div className="p-4 flex items-center gap-x-2">
        <label htmlFor="organic">Organic</label>
        <Switch id="organic" />
      </div>
    </div>
  );
};

export default FilterSidebar;

import React from "react";

const FilterTitle = ({ title }) => {
  return (
    <div className="bg-gray-100 px-4 py-2">
      <h2 className="font-medium capitalize text-sm md:text-md">{title}</h2>
    </div>
  );
};
