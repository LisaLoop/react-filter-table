import React from "react";

import { DataTable, DataRow, DataHeaders } from "../components/data-table";
import Select from "../components/select";

const defaultFilterValues = {
  coloring: "Any",
  mood: "Any",
  gonads: "Any",
  currentActivity: "Any"
};

const filterCatColor = (cat, state) =>
  state === "Any"
    ? true
    : cat.coloring === state;

const filterCatMood = (cat, state) =>
  state === "Any"
    ? true
    : cat.mood === state;

const catFilters = {
  coloring: filterCatColor,
  mood: filterCatMood,
  gonads: (cat, state) =>
    state === "Any"
      ? true
      : cat.gonads === state,
  // currentActivity: (cat, state) => cat.currentActivity === state,
};

export default ({ cats }) => {
  const [filteredCats, setFilteredCats] = React.useState(cats);
  const [filterValues, setFilterValues] = React.useState(defaultFilterValues);
  const catRows = filteredCats.map(cat => <DataRow columns={[cat.name, cat.age, cat.coloring, cat.mood, cat.gonads, cat.currentActivity]} />);

  React.useEffect(() => {
    const nextFilteredCats = cats.filter(cat => {
      for (let property in catFilters) {
        const state = filterValues[property];
        const test = catFilters[property];
        if (!test(cat, state)) return false;
      }
      return true;
    });

    setFilteredCats(nextFilteredCats);
  }, [cats, filterValues]);

  const GonadHeader = (
    <label>
      <b>Gonads</b>
      <select onChange={(e) => setFilterValues({ ...filterValues, gonads: e.target.value })}>
        <option>Any</option>
        <option>Missing</option>
        <option>Intact</option>
      </select>
    </label>
  );

  const MoodHeader = (
    <label>
      <b>Mood</b>
      <select onChange={(e) => setFilterValues({ ...filterValues, mood: e.target.value })}>
        <option>Any</option>
        <option>Hungry</option>
        <option>Annoyed</option>
        <option>Angry</option>
        <option>Horny</option>
        <option>Impatient</option>
        <option>Sleepy</option>
      </select>
    </label>
  );

  const ColoringHeader = <Select
    label="Coloring"
    onSelect={value => setFilterValues({ ...filterValues, coloring: value })}
    options={[
      { value: "Any" },
      { value: "Tabby" },
      { value: "Tuxedo" },
      { value: "Tortoiseshell" },
      { value: "Calico" },
    ]}
  />;

  const catHeaders = <DataHeaders headers={
    [
      <b>Name</b>,
      <b>Age</b>,
      ColoringHeader,
      MoodHeader,
      GonadHeader,
      <b>Activity</b>,
    ]} />;

  return (
    <DataTable
      headers={catHeaders}
      rows={catRows} />
  );
};