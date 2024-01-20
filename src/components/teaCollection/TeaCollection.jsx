import Card from "../card/Card";
import imageHolder from "../../assets/Image Holder.png";

const teaCollection = [
  {
    img: imageHolder,
    title: {
      collection: "Cinnamon chai tea",
      name: "Shatat Tea",
    },
    price: 29.99,
  },
  {
    img: imageHolder,
    title: {
      collection: "Cinnamon chai tea",
      name: "Shatat Tea",
    },
    price: 29.99,
  },
  {
    img: imageHolder,
    title: {
      collection: "Cinnamon chai tea",
      name: "Shatat Tea",
    },
    price: 29.99,
  },
  {
    img: imageHolder,
    title: {
      collection: "Cinnamon chai tea",
      name: "Shatat Tea",
    },
    price: 29.99,
  },
  {
    img: imageHolder,
    title: {
      collection: "Cinnamon chai tea",
      name: "Shatat Tea",
    },
    price: 29.99,
  },
  {
    img: imageHolder,
    title: {
      collection: "Cinnamon chai tea",
      name: "Shatat Tea",
    },
    price: 29.99,
  },
  {
    img: imageHolder,
    title: {
      collection: "Cinnamon chai tea",
      name: "Shatat Tea",
    },
    price: 29.99,
  },
  {
    img: imageHolder,
    title: {
      collection: "Cinnamon chai tea",
      name: "Shatat Tea",
    },
    price: 29.99,
  },
];

const TeaCollection = () => {
  return (
    <div className="p-4 lg:col-span-2">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 lg:gap-y-12 justify-items-center ">
        {teaCollection.map((item, index) => (
          <Card
            img={item.img}
            title={item.title}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TeaCollection;
