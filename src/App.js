import React, { useState, useEffect, useReducer } from "react";
import Bar from "./component/Progression";
import Sleeping from "./component/Sleeping";
import Header from "./component/Header";
import { ThemeContext, themes } from "./Context/ThemeContext";

const intial = themes.light;
// let theme;
const reducerTheme = (state = [], action) => {
  switch (action) {
    case "Dark":
      [action];
      break;
    case "Light":
      theme = themes.light;
      break;
    default:
      theme = themes.light;
      break;
  }
};
function App() {
  const [calculated, setCalculated] = useState(0);
  // const [them, dispatch] = useReducer(reducerTheme, intial);
  const [data, setData] = useState({
    day: "",
    hoursOfSleep: 0,
    comments: "",
  });

  const options = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    setCalculated((data.hoursOfSleep / 24) * 100);
  }, [data.hoursOfSleep]);
  return (
    <>
      <ThemeContext.Provider value={themes.dark}>
        <div className="container">
          <Header />
          <div className="ui placeholder segment">
            <div className="ui two column very relaxed stackable grid">
              <Sleeping data={data} setData={setData} options={options} />
              <Bar day={data.day} options={options} calculated={calculated} />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
