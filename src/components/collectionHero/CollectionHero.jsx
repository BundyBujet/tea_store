import teaHero from "../../assets/teaHero.png";

const CollectionHero = () => {
  return (
    <div className="min-h-[180px] ">
      <img
        src={teaHero}
        alt="image of tea cup "
        className="w-full h-full min-h-[180px] object-cover"
      />
    </div>
  );
};

export default CollectionHero;
