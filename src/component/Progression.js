import React from "react";
import { Progress } from "semantic-ui-react";
const Bar = ({ day, options, calculated }) => {
  const percent = ((calculated / 24) * 100).toFixed(1);
  return (
    <div className="column">
      <h1 className="field">Analysis</h1>
      {options.map((option, index) => {
        return (
          <div className="content" key={index}>
            <label>{option}</label>
            <Progress percent={day === option ? percent : 0} color="green">
              {`${day === option ? percent : 0}%`}
            </Progress>
          </div>
        );
      })}
    </div>
  );
};

export default Bar;
