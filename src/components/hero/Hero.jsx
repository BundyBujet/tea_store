import { Button } from "../ui/button";

const Hero = ({ image, flow, btnText }) => {
  return (
    <main
      className={`flex flex-col ${
        flow ? "md:flex-row" : "md:flex-row-reverse"
      }  md:h-[628px] `}
    >
      <section className="md:w-full lg:w-[70%]">
        <img
          src={image}
          alt="spoon with tea"
          className="w-full h-full object-cover"
        />
      </section>
      <section className="md:pt-20 md:pl-8 p-4 lg:py-20 lg:px-28 lg:flex lg:justify-center lg:items-center">
        <div className="flex flex-col gap-y-4">
          <h2 className="w-4/5 lg:text-lg">
            Every day is unique, just like our tea
          </h2>
          <p className="lg:w-[70%] text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing ad sint odit
            earum dolore numquam.
            <br />
            Lorem ipsum dolor sit amet,consectetur adipisicing consequatur quos
            cupiditate.
          </p>
          <div>
            <Button variant={flow ? "" : "outline"} className="uppercase w-52 ">
              {btnText}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
