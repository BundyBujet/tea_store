import React from "react";

const Card = ({ img, title, price }) => {
  return (
    <div className="max-w-[264px] flex flex-col gap-y-2">
      <div>
        <img src={img} alt="tea image" className="w-full h-full" />
      </div>
      <div className="text-center">
        <span>{title.name}</span>
        <p className="text-xs md:text-md">{title.collection}</p>
      </div>
      <div className="flex justify-center">{price}/50 g</div>
    </div>
  );
};

export default Card;
