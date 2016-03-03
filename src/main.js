
let t0 = Date.now();
require("babel-polyfill/dist/polyfill.min.js");
let t1 = Date.now();

import MainPage from "./MainPage.js";

let text = `Time to load polyfill: ${t1 - t0} ms`;

new MainPage().open().set("text", text);
