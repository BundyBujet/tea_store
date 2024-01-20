import { ArrowLeft, ChevronDown } from "lucide-react";
import SideBar from "../sideBar/SideBar";
import FilterSidebar from "../sidebarContent/FilterSidebar";
import { Link } from "react-router-dom";

const FilterHeader = ({ style }) => {
  return (
    <div className="lg:hidden ">
      <div
        className="w-full px-4 pt-4 pb-7 flex justify-between items-center fixed  text-neutral-50"
        style={style}
      >
        <Link to="/">
          <ArrowLeft />
        </Link>
        <div>
          <h2 className="text-2xl pl-4">Chai</h2>
        </div>
        <div className="flex gap-2 items-center uppercase">
          <span>
            <SideBar title="Filter" subHeader={true}>
              <FilterSidebar />
            </SideBar>
            <ChevronDown className="inline" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
