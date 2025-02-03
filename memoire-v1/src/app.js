import Interface from "./interface.js";

export default class App {
  constructor() {
    this.init();
  }

  init() {
    console.log("App initialized");

    this.interface = new Interface();
  }
}
