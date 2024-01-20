import { Coffee, ShieldCheck, Truck, SwatchBook } from "lucide-react";
import { Button } from "../ui/button";

const Services = () => {
  return (
    <section className="bg-gray-200 mt-14 px-4 py-8">
      <div className="grid grid-cols-2 uppercase md:grid-cols-4 lg:px-14 lg:gap-x-4">
        <div className="flex justify-center items-center text-xs lg:text-lg">
          <Coffee size={40} className="mr-2" />
          <p>450+ kind of tea</p>
        </div>
        <div className="flex justify-center items-center text-xs lg:text-lg">
          <ShieldCheck size={40} className="mr-2" />
          <p>Certified organic tea </p>
        </div>
        <div className="flex justify-center items-center text-xs lg:text-lg">
          <Truck size={40} className="mr-2" />
          <p>Faster Shipping</p>
        </div>
        <div className="flex justify-center items-center text-xs lg:text-lg">
          <SwatchBook size={40} className="mr-2" />
          <p>Sample for all tea</p>
        </div>
      </div>
      <div className="mt-8 md:flex justify-center items-center ">
        <Button variant="outline" className="w-48 border-black">
          learn more
        </Button>
      </div>
    </section>
  );
};

export default Services;
