import React from "react";

export const DataTable = ({ headers, rows }) => (
  <section style={{ display: "inline-table"}}>
    {headers ? headers : null }
    {rows}
  </section>
);

export const DataRow = ({ columns }) => {
  const columnElements = columns
    .map((column) => <div style={{display: "table-cell"}}>{column}</div>);

  return <div style={{display: "table-row"}}>{columnElements}</div>;
};

export const DataHeaders = ({ headers }) => {
  const headerElements = headers.map(header => <div style={{ display: "table-cell"}}>{header}</div>);

  return <div style={{ display: "table-header-group" }}>{headerElements}</div>
};

/*
<section display="inline-table">
  <div display="table-row">
    <div display="table-cell"></div>
  </div>
</section>
*/