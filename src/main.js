var page = new tabris.Page({
  title: "Fetch",
  topLevel: true
}).open();

addLabel("loading...");

fetch("http://192.168.6.141:8080/package.json")
  .then(function(res) { return res.json(); })
  .then(function(json) { addLabel("loaded: " + json.name); })
  .catch(function(err) { addLabel("ERROR: " + err); });

function addLabel(message) {
  new tabris.TextView({
    left: 8, right: 8, top: "prev() 8", text: message
  }).appendTo(page);
}
