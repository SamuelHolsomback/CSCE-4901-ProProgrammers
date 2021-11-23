import React from "react";

const Sleeping = ({ data, setData, options }) => {
  //Keeping data

  const parse = (val) => {
    if (val < 10) {
      return `0${val}`;
    }
    return val;
  };

  const onChange = (e) => {
    if (e.target.name === "day" || e.target.type === "text") {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      const arr = e.target.value.split(":");
      setData({
        ...data,
        [e.target.name]: {
          hr: Number(arr[0]),
          mm: Number(arr[1]),
          ss: Number(arr[2]),
        },
      });
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="column">
      <h1 className="field">User Input</h1>
      <form className="ui form">
        <div className="field">
          <label> Days: </label>
          <select
            className="ui selection dropdown"
            name="day"
            onChange={onChange}
          >
            <option value="Select A Day">Select A Day</option>
            {options.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="field">
          <label> Time of Wake</label>
          <div className="ui input">
            <input
              type="time"
              step="1"
              value={`${parse(data.wakeTime.hr)}:${parse(
                data.wakeTime.mm
              )}:${parse(data.wakeTime.ss)}`}
              onChange={onChange}
              name="wakeTime"
            />
          </div>
        </div>
        <div className="field">
          <label> Time of Sleep</label>
          <div className="ui input">
            <input
              type="time"
              step="1"
              value={`${parse(data.sleepTime.hr)}:${parse(
                data.sleepTime.mm
              )}:${parse(data.sleepTime.ss)}`}
              name="sleepTime"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="field">
          <label> Enter Comments</label>
          <div className="ui input">
            <input
              type="text"
              placeholder="Enter Comment."
              name="comments"
              onChange={onChange}
            />
          </div>
        </div>
        <button className="positive ui button" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sleeping;
