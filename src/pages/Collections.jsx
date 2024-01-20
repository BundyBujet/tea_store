import CollectionHero from "@/components/collectionHero/CollectionHero";
import Filter from "@/components/filter/Filter";
import FilterHeader from "@/components/filterHeader/FilterHeader";
import TeaCollection from "@/components/teaCollection/TeaCollection";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

const Collections = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const navbarStyle = {
    color: scrollPosition > 230 ? "black" : "white",
    marginTop: scrollPosition > 56 ? "-56px" : "0px",
  };
  return (
    <>
      <main>
        <FilterHeader style={navbarStyle} />
        <CollectionHero />
        <div className="p-4 uppercase text-xs md:text-md lg:text-2xl">
          <p>Home/Collection/Tea</p>
        </div>

        <div className="lg:flex gap-x-14 ">
          <aside className="hidden lg:block w-[30%]">
            <Filter />
            <div className="p-4 flex items-center gap-x-2">
              <label htmlFor="organic">Organic</label>
              <Switch id="organic" />
            </div>
          </aside>
          <TeaCollection />
        </div>
      </main>
    </>
  );
};

export default Collections;
