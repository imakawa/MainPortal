"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var agInput = (function () {
    function agInput() {
    }
    agInput.prototype.ngOnInit = function () {
        this.agMetaData.id = this.agId + "123";
        this.agMetaData.text = this.agText;
        console.log(this.agMetaData);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', agInputMeta)
    ], agInput.prototype, "agMetaData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "datamodel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agclass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agText", void 0);
    agInput = __decorate([
        core_1.Component({
            selector: 'agInput',
            template: "<input id=\"{{place}}\" \n                    type=\"text\" \n                    placeholder=\"{{agMetaData.id}}\"\n                    [(ngModel)]=\"agMetaData.text\"\n                    class=\"col-xs-10 col-sm-10\" \n                    (mousedown)=\"agMetaData.agMouseDown()\"\n                    (mouseup)=\"agMetaData.agMouseUp()\"/>"
        }), 
        __metadata('design:paramtypes', [])
    ], agInput);
    return agInput;
}());
exports.agInput = agInput;
var agComponentMeta = (function () {
    function agComponentMeta(name) {
        console.log(name);
    }
    agComponentMeta.prototype.agMouseDown = function () {
        console.log("1111");
    };
    agComponentMeta.prototype.agMouseUp = function () {
        console.log("2222");
    };
    return agComponentMeta;
}());
var agInputMeta = (function (_super) {
    __extends(agInputMeta, _super);
    function agInputMeta() {
        _super.call(this, "Rhino");
    }
    return agInputMeta;
}(agComponentMeta));
exports.agInputMeta = agInputMeta;
