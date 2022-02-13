import ReactDOM from "react-dom";
//prettier - require config
//eslint - npm run lint
//parcel - run/bundle - npm run dev

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
