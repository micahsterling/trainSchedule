export default class {
  /**
   * @param {HtmlTableElement} root The table element which will display the CSV data
   */
  constructor(root) {
    this.root = root;
  }
  /**\
   * clear exsiting and replaces it with new uploaded data
   * @param {string[]} data list of headings to be used and body of the table
   */

  update(data) {
    this.clear();
    this.setTable(data);
    sortTable(2)
  }

  // clears all contents of the table
  clear() {
    this.root.innerHTML = " ";
  }

  /**
   * sets the table
   * @param {string[]} data list of headings to be used and body of the table
  */
  setTable(data) {
    const unique = new Set();
    const rowsHtml = data.map((row,index) => {
      if (index === 0) {
        return `      
          ${ row.map((text,i) => `<th onclick="sortTable(${i})">${text}</th>`).join(" ")}
        `
      } else {
        if (unique.has(row[2]) ) {
          return ""
        } else {
            unique.add(row[2])
          return `
            <tr>
              ${row.map((text) => `<td>${text}</td>`).join(" ")}
            </tr>
          `;
        }
      }
    });
    this.root.insertAdjacentHTML("beforeend",`
      ${ rowsHtml.join(" ")}
    `);
  }
}