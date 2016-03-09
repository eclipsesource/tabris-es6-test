let promiseBefore = Promise;
let t0 = Date.now();
require("babel-polyfill/dist/polyfill.min.js");
let t1 = Date.now();
let promiseAfter = Promise;

require("whatwg-fetch");

import MainPage from "./MainPage.js";

let page = new MainPage().open();

page.addLabel(`
Time to load polyfill: ${t1 - t0} ms.
Promise was of type ${typeof promiseBefore}.
Promise was ${promiseBefore === promiseAfter ? 'not replaced' : 'replaced'} by the polyfill.
`.trim());

fetch("https://freegeoip.net/json/")
  .then(res => res.json())
  .then(json => page.addLabel(`IP: ${json.ip}, City: ${json.city}`))
  .catch(err => page.addLabel(`ERROR: ${err}`));
