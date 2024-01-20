import Blog from "../blog/Blog";
import img1 from "../../assets/blogImage/Image Holder (1).png";
import img2 from "../../assets/blogImage/Image Holder.png";
import { Button } from "../ui/button";

const Blogs = () => {
  return (
    <section className="px-4 py-8 bg-gray-100 mb-10">
      <div className="capitalize flex justify-center items-center pb-8 text-xl lg:text-2xl">
        <h2>last blog post</h2>
      </div>
      <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8">
        <Blog image={img1} flow={true} />
        <Blog image={img2} flow={false} />
      </div>
      <div className="mt-8 md:flex justify-center items-center lg:hidden">
        <Button variant="outline" className="w-48 border-black uppercase">
          browse all posts
        </Button>
      </div>
    </section>
  );
};

export default Blogs;
