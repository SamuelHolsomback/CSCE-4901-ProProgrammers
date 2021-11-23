import React, { useState, useEffect } from "react";
import Bar from "./component/Progression";
import Sleeping from "./component/Sleeping";
import Header from "./component/Header";
function App() {
  const [calculated, setCalculated] = useState(0);
  const [data, setData] = useState({
    day: "",
    wakeTime: {
      hr: 0,
      mm: 0,
      ss: 0,
    },
    sleepTime: {
      hr: 0,
      mm: 0,
      ss: 0,
    },
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
    let hr = data.wakeTime.hr - data.sleepTime.hr;
    let min = data.wakeTime.mm - data.sleepTime.mm;
    let ss = data.wakeTime.ss - data.sleepTime.ss;
    setCalculated(hr + min / 60 + ss / 3600);
  }, [data.sleepTime, data.wakeTime]);
  return (
    <div className="container">
        <Header />
      <div className="ui placeholder segment">
      <div className="ui two column very relaxed stackable grid">
        <Sleeping data={data} setData={setData} options={options} />
        <Bar day={data.day} options={options} calculated={calculated} />
        </div>
      </div>
    </div>
  );
}

export default App;
