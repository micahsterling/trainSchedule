export default class {
  /**
   * @param {HtmlTableElement} root The table element which will display the CSV data
   */
  constructor(root) {
    this.root = root;
  }

  /**
   * sets the table header
   * @param {string[]} headerColums list of headings to be used
  */
  setHeader(headerColums) {
    this.root.insertAdjacentHTML("afterbegin", `
      <thread>
        <tr>
          ${ headerColums.map(text => `<th>${text}</th>`).join(" ")}
        <tr>
      </tread>
    `);
  }

  /**
   * sets the table body
   * @param {string[][]} data A 2D array of data for the body
  */
  setBody(data) {
    const rowsHtml = data.map(row => {
      return `
        <tr>
          ${row.map(text => `<td>${text}</td>`).join(" ")}
        </tr>
      `;
    });
    this.root.insertAdjacentHTML("beforeend",`
      <tbody>
        <tr>
          ${ rowsHtml.join(" ")}
        <tr>
      </tbody>
    `);
  }
}