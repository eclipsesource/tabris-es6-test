"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var tabris_ng_1 = require('tabris-ng');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tabris.ng';
        this.label = '';
    }
    AppComponent.prototype.onSelect = function () {
        this.label = 'Totally Rock!';
    };
    AppComponent = __decorate([
        tabris_ng_1.Component({
            selector: 'my-app',
            template: "\n    <Page topLevel=\"true\" title=\"{{title}}\">\n      <Button centerX=\"0\" centerY=\"0\"\n          font=\"24px Roboto\"\n          text=\"Native Widgets\"\n          (select)=\"onSelect()\">\n      </Button>\n      <TextView top=\"prev() 16\" centerX=\"0\"\n          font=\"bold 32px Roboto\"\n          [text]=\"label\">\n      </TextView>\n    </Page>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
