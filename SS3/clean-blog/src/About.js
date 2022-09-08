import Navigation from "./Navigation";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="Home">
      <Navigation />
      <Header
        image="url('assets/img/about-bg.jpg')"
        heading="About Me"
        subheading="This is what I do."
      />
      <Content />
      <Footer />
    </div>
  );
};

export default About;
