import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Collection from "@/components/collection/Collection";
import Blogs from "@/components/blogs/Blogs";
import image from "../assets/Landing Main Image.png";
import landingImg from "../assets/teaimage.jpg";

const Home = () => {
  return (
    <>
      <Hero image={landingImg} flow={true} btnText={"browse teas"} />
      <Services />
      <Collection />
      <Blogs />
      <Hero image={image} flow={false} btnText={"get a free consultant"} />
    </>
  );
};

export default Home;
