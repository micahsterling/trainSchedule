import TableCsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csvRoot");
const tableCsv = new TableCsv(tableRoot);

tableCsv.setHeader(["id","name","age"]);
tableCsv.setBody([
  [4500,"don",34],
  [4500,"don",34],
  [4500,"don",34],
]);