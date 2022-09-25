import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App" style={{ height: "2000px" }}>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo
        temporibus distinctio sunt veniam! Quam, saepe voluptas quisquam ab illo
        non beatae molestiae rem distinctio eos aut adipisci, cum a?
      </p>

      {backToTopButton && <button onClick={scrollToTop}>^</button>}
    </div>
  );
};

export default App;
