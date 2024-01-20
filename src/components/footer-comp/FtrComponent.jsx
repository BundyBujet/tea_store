import React from "react";

const FtrComponent = ({ title, items }) => {
  return (
    <div className="flex flex-col">
      <span className="uppercase mb-4 text-sm md:text-md font-medium">
        {title}
      </span>
      <ul className="capitalize text-sm">
        {items.map((item, index) => (
          <li key={index} className="pb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FtrComponent;
