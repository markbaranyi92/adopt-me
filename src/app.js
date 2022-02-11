//import React from "react";
import ReactDOM from "react-dom";
//prettier - require config
//eslint - npm run lint
//parcel - run/bundle - npm run dev

import Pet from "./Pet";

/* const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    ...[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)), //spread operator  ...
    React.createElement(Pet, {
      name: "Luna?????",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
}; */

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
