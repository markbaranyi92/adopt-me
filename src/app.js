//import React from "react";
import ReactDOM from "react-dom";
//prettier - require config
//eslint - npm run lint
//parcel - run/bundle - npm run dev

import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Birdog" breed="Cockatiel" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
