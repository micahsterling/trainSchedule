import TableCsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csvRoot");
const tableCsv = new TableCsv(tableRoot);

tableCsv.update([
  [4500,"don",34],
  [550,"mike",40],
  [4500,"don",34],
],["id","name","age"]);

