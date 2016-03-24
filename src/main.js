import Hello from "./Hello.js";

let hello = new Hello("world");

let page = tabris.create("Page", {
  topLevel: true,
  title: "Hello"
}).open();

tabris.create("TextView", {
  top: 12, left: 12,
  text: hello.sayHello()
}).appendTo(page);

page.open();
