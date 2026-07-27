import React from "react";

const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <div>
      <h2>Child Component 2</h2>

      <select onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Select</option>
        <option value="Option 2">Option 2</option>
      </select>
    </div>
  );
};

export default ChildComponent2;