export default class {
  /**
   * @param {HtmlTableElement} root The table element which will display the CSV data
   */
  constructor(root) {
    this.root = root;
  }
  setHeader(headerColums) {
    this.root.insertAdjacentHTML("afterbegin", `
      <thread>
        <tr>
          ${ headerColums.map(text => `<th>${text}</th>`).join(" ")}
        <tr>
      </tread>
    `);
  }
}