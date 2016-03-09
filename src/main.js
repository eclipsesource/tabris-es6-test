"use strict";
var t0, t1;
t0 = Date.now();
var tabris_ng_1 = require('./tabris-ng');
t1 = Date.now();
console.log("loaded tabris-ng in " + (t1 - t0) + " ms");
var app_components_1 = require('./app.components');
var tabris = require('tabris');
t0 = Date.now();
console.log('BOOTSTRAPPING...');
tabris_ng_1.bootstrap(app_components_1.AppComponent, []).then(function (appRef) {
    console.log('ANGULAR BOOTSTRAP DONE.');
    t1 = Date.now();
    console.log("bootstrapped in " + (t1 - t0) + " ms");
    tabris.ui.find("Page")[0].open();
}, function (err) {
    console.log('ERROR BOOTSTRAPPING ANGULAR');
    var errorMessage = err.message + "\n\n" + err.stack;
    console.log(errorMessage);
});
