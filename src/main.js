
import MainPage from "./MainPage.js";

var page = new MainPage().open();

fetch("https://raw.githubusercontent.com/eclipsesource/tabris-js/master/package.json")
  .then(res => res.json())
  .then(json => page.addLabel(`Current version: ${json.version}`))
  .catch(err => page.addLabel(`ERROR: ${err}`));

page.addLabel("loading...");
