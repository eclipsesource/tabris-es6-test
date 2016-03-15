delete window.Promise;
_require("./polyfill.min.js");

var page = new tabris.Page({ topLevel: true }).open();

function addLabel(message) {
  new tabris.TextView({
    left: 8, right: 8, top: "prev() 8", text: message
  }).appendTo(page);
}

addLabel("fetch");
addLabel("loading...");

fetch("http://192.168.6.141:8080/package.json")
  .then(function(res) { return res.json(); })
  .then(function(json) { addLabel("loaded: " + json.name); })
  .catch(function(err) { addLabel("ERROR: " + err); });

function _require(id) {
  var t0 = Date.now();
  var result = require(id);
  var t1 = Date.now();
  console.log("loaded " + id + " in " + (t1 - t0) + " ms");
  return result;
}
