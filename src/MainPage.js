import { Page, TextView } from "tabris";

export default class AlbumPage extends Page {

  constructor() {
    super({
      topLevel: true,
      title: "Tabris ES6 Tests"
    });
    let textView = new TextView({
      left: 16, right: 16, top: 16,
    }).appendTo(this);
    this.on("change:text", (page, text) => {
      textView.set("text", text);
    });
  }

}
