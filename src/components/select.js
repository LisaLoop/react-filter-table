import React from "react";

export default ({ label = "", options, onSelect }) =>
  <label>
    <b>{label}</b>
    <select onChange={e => onSelect(e.target.value)}>
      {options.map(({ value, label = value }) => <option value={value}>{label}</option>)}
    </select>
  </label>;