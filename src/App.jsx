import Header from "./components/header/Header";
import "./App.css";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Collection from "./components/collection/Collection";
import Blogs from "./components/blogs/Blogs";
import landingImg from "./assets/teaimage.jpg";
import image from "./assets/Landing Main Image.png";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Hero image={landingImg} flow={true} btnText={"browse teas"} />
      <Services />
      <Collection />
      <Blogs />
      <Hero image={image} flow={false} btnText={"get a free consultant"} />
      <Footer />
    </>
  );
};

export default App;
