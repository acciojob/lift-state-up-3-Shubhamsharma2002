import React from "react";

const ChildComponent1 = ({ setSelectedOption }) => {
  return (
    <div>
      <h2>Child Component 1</h2>

      <select onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Select</option>
        <option value="Option 1">Option 1</option>
      </select>
    </div>
  );
};

export default ChildComponent1;