import FtrComponent from "../footer-comp/FtrComponent";
import { MapPin, Phone, Mail } from "lucide-react";

const listItem = [
  "Item 1",
  "Item 2",
  "Item 3",
  "item 4",
  "item 5",
  "item 6",
  "item 7",
  "item 8",
];
const listItem2 = ["Item 1", "Item 2", "Item 3"];
const listItem3 = ["Item 1", "Item 2", "Item 3"];

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-100 px-4 py-8 md:px-12 flex flex-col lg:flex-row lg:gap-x-12 lg:justify-between">
      <div className="flex flex-row gap-x-4 mb-4 justify-between">
        <FtrComponent title={"collection"} items={listItem} />
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-12">
          <FtrComponent title={"learn"} items={listItem2} />
          <FtrComponent title={"customer services"} items={listItem3} />
        </div>
      </div>
      <div>
        <span className="uppercase text-sm md:text-md font-medium">
          contact us
        </span>
        <div className="mt-4">
          <div className="flex gap-x-2 mb-2">
            <MapPin size={20} />
            <p>Gizay, Menouf, Menoufiya, Egypt</p>
          </div>
          <div className="flex gap-x-2 mb-2">
            <Mail size={20} />
            <p>Email: shatat@gmail.com</p>
          </div>
          <div className="flex gap-x-2 mb-2">
            <Phone size={20} />
            <p>Tel: +98 9173038406 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
