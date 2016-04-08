import { Page, TextView } from "tabris";

const mediaFile = tabris.app.getResourceLocation("audio/media.wav");

export default class MainPage extends Page {

  constructor() {
    super({
      topLevel: true,
      title: "Tabris ES6 Tests"
    });
    this._sound = this._setupMedia(mediaFile);
    new tabris.Button({
      layoutData: {left: 10, top: 10, right: 10},
      text: "Play"
    }).on("select", () => {
      this._sound.play();
    }).appendTo(this);
  }

  addLabel(text) {
    new TextView({
      left: 16, right: 16, top: "prev() 8",
      text
    }).appendTo(this);
    this._sound.play();
  }

  _setupMedia(file) {
    let media = new Media(file, () => {
      console.log("Audio file loaded successfully");
    }, (err) => {
      console.error("Unable to play audio file: " + err.code + " - " + err.message);
    });
    this.on("dispose", function() {
      media.stop();
      media.release();
    });
    return media;
  }

}
