import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const _ = require("lodash");

  const countWords = (e) => {
    const text = e.target.value;
    setCount(_.words(text).length);
  };

  const debounced = _.debounce(countWords, 500);

  return (
    <div className="app">
      <textarea cols="100" rows="1" onChange={debounced}></textarea>
      <p>Word(s): {count}</p>
    </div>
  );
};

export default App;
