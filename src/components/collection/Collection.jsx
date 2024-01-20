import ImageHolder from "../../assets/collection/Image Holder.png";
import ImageHolder1 from "../../assets/collection/Image Holder (1).png";
import ImageHolder2 from "../../assets/collection/Image Holder (2).png";
import ImageHolder3 from "../../assets/collection/Image Holder (3).png";
import ImageHolder4 from "../../assets/collection/Image Holder (4).png";
import ImageHolder5 from "../../assets/collection/Image Holder (5).png";
import ImageHolder6 from "../../assets/collection/Image Holder (6).png";
import ImageHolder7 from "../../assets/collection/Image Holder (7).png";
import ImageHolder8 from "../../assets/collection/Image Holder (8).png";

const Collection = () => {
  return (
    <section className="px-4 py-8">
      <div className="flex justify-center pb-4 text-lg md:text-4xl lg:py-8">
        <h2>Our Collection</h2>
      </div>
      <div className="grid grid-cols-2 gap-x-4 md:grid-cols-3 lg:gap-y-8 ">
        <div className="flex flex-col items-center gap-y-4 mt-4 uppercase text-xs lg:text-xl">
          <img src={ImageHolder} alt="Tea Sample 1" />
          <p>Tea sample 1</p>
        </div>

        <div className="flex flex-col items-center gap-y-4 mt-4 uppercase text-xs lg:text-xl">
          <img src={ImageHolder1} alt="Tea Sample 2" />
          <p>Tea sample 2</p>
        </div>

        <div className="flex flex-col items-center gap-y-4 mt-4 uppercase text-xs lg:text-xl">
          <img src={ImageHolder2} alt="Tea Sample 3" />
          <p>Tea sample 3</p>
        </div>

        <div className="flex flex-col items-center gap-y-4 mt-4 uppercase text-xs lg:text-xl">
          <img src={ImageHolder3} alt="Tea Sample 4" />
          <p>Tea sample 4</p>
        </div>

        <div className="flex flex-col items-center gap-y-4 mt-4 uppercase text-xs lg:text-xl">
          <img src={ImageHolder4} alt="Tea Sample 5" />
          <p>Tea sample 5</p>
        </div>

        <div className="flex flex-col items-center gap-y-4 mt-4 uppercase text-xs lg:text-xl">
          <img src={ImageHolder5} alt="Tea Sample 6" />
          <p>Tea sample 6</p>
        </div>

        <div className="flex flex-col items-center gap-y-4 mt-4 uppercase text-xs lg:text-xl">
          <img src={ImageHolder6} alt="Tea Sample 7" />
          <p>Tea sample 7</p>
        </div>

        <div className="flex flex-col items-center gap-y-4 mt-4 uppercase text-xs lg:text-xl">
          <img src={ImageHolder7} alt="Tea Sample 8" />
          <p>Tea sample 8</p>
        </div>

        <div className="flex flex-col items-center gap-y-4 mt-4 uppercase text-xs lg:text-xl">
          <img src={ImageHolder8} alt="Tea Sample 9" />
          <p>Tea sample 9</p>
        </div>
      </div>
    </section>
  );
};

export default Collection;
