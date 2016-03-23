import { Page, TextView } from "tabris";

export default class MainPage extends Page {

  constructor() {
    super({
      topLevel: true,
      title: "Tabris ES6 Tests"
    });
  }

  addLabel(text) {
    new TextView({
      left: 16, right: 16, top: "prev() 8",
      text
    }).appendTo(this);
  }

}
