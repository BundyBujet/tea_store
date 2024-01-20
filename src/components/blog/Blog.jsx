const Blog = ({ image, flow }) => {
  return (
    <article
      className={`flex gap-x-4 ${
        flow ? "flex-row" : "flex-row-reverse"
      } lg:flex-row h-74`}
    >
      <div className="w-full">
        <img
          src={image}
          alt="blog image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col md:justify-center ">
        <h2 className="pb-2 uppercase md:text-2xl">
          how to steep tea like a pro
        </h2>
        <p className="text-xs md:text-md lg:text-lg pb-2 md:text-xl md:font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          vero facilis dolor iusto iste voluptatum nostrum veniam dolorum cum
          dicta et excepturi labore repellat praesentium quaerat, rerum
          accusantium a amet!
        </p>
        <span className=" uppercase md:font-bold">read more</span>
      </div>
    </article>
  );
};

export default Blog;
