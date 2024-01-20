import logo from "../../assets/Icon.svg";
import SideBar from "../sideBar/SideBar";
import { User, ShoppingBag, Search } from "lucide-react";
import HomeSidebar from "../sidebarContent/HomeSidebar";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="px-4 py-2 lg:px-20 lg:py-8 md:px-6 md:py-4">
      <nav className="flex justify-between items-center">
        <div className="flex justify-center space-x-2">
          <img src={logo} alt="" />
          <h1>Shatat Tea</h1>
        </div>
        <SideBar title={<Menu className="h-4 w-4" />}>
          <HomeSidebar />
        </SideBar>
        <ul className="space-x-2 hidden md:flex  md:gap-x-2 lg:gap-x-8">
          <li className="uppercase md:text-sm cursor-pointer">
            <a href="#">Tea collection</a>
          </li>
          <li className="uppercase md:text-sm cursor-pointer">
            <a href="#">Accessories</a>
          </li>
          <li className="uppercase md:text-sm cursor-pointer">
            <a href="#">Blog </a>
          </li>
          <li className="uppercase md:text-sm cursor-pointer">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="hidden md:flex  lg:gap-x-10 md:gap-x-4">
          <Search className="cursor-pointer" />
          <User className="cursor-pointer" />
          <ShoppingBag className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
