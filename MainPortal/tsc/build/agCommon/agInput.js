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
        this.agMeta.agId = this.agId;
        this.agMeta.agClass = this.agClass;
        this.agMeta.agStyle = this.agStyle;
        this.agMeta.agName = this.agName;
        this.agMeta.agType = this.agType;
        this.agMeta.agPlaceHolder = this.agPlaceHolder;
        this.agMeta.agValue = this.agValue;
        this.agMeta.agInit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', agInputMeta)
    ], agInput.prototype, "agMeta", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agStyle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agPlaceHolder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agValue", void 0);
    agInput = __decorate([
        core_1.Component({
            selector: 'agInput',
            template: "<input [(id)]=\"agMeta.agId\" \n                    [(class)]=\"agMeta.agClass\"\n                    [(style)]=\"agMeta.agStyle\"\n                    [(name)]=\"agMeta.agName\"\n                    [(type)]=\"agMeta.agType\" \n                    [(placeholder)]=\"agMeta.agPlaceHolder\"\n                    [(ngModel)]=\"agMeta.agValue\"\n                    (click)=\"agMeta.agClick()\"\n                    (keydown)=\"agMeta.agKeyDown()\"\n                    (keyup)=\"agMeta.agKeyUp()\"\n                    (mousedown)=\"agMeta.agMouseDown()\"\n                    (mouseup)=\"agMeta.agMouseUp()\"/>"
        }), 
        __metadata('design:paramtypes', [])
    ], agInput);
    return agInput;
}());
exports.agInput = agInput;
var agComponentMeta = (function () {
    function agComponentMeta() {
    }
    agComponentMeta.prototype.agInit = function () {
        if (this.agId == undefined) {
            this.agId = "";
        }
        if (this.agClass == undefined) {
            this.agClass = "";
        }
        if (this.agStyle == undefined) {
            this.agStyle = "";
        }
    };
    agComponentMeta.prototype.agClick = function () {
    };
    agComponentMeta.prototype.agKeyDown = function () {
    };
    agComponentMeta.prototype.agKeyUp = function () {
    };
    agComponentMeta.prototype.agMouseDown = function () {
    };
    agComponentMeta.prototype.agMouseUp = function () {
    };
    return agComponentMeta;
}());
var agInputType;
(function (agInputType) {
    agInputType[agInputType["button"] = 0] = "button";
    agInputType[agInputType["checkbox"] = 1] = "checkbox";
    agInputType[agInputType["file"] = 2] = "file";
    agInputType[agInputType["hidden"] = 3] = "hidden";
    agInputType[agInputType["image"] = 4] = "image";
    agInputType[agInputType["password"] = 5] = "password";
    agInputType[agInputType["radio"] = 6] = "radio";
    agInputType[agInputType["reset"] = 7] = "reset";
    agInputType[agInputType["submit"] = 8] = "submit";
    agInputType[agInputType["text"] = 9] = "text";
})(agInputType || (agInputType = {}));
var agInputMeta = (function (_super) {
    __extends(agInputMeta, _super);
    function agInputMeta() {
        _super.apply(this, arguments);
    }
    agInputMeta.prototype.agInit = function () {
        _super.prototype.agInit.call(this);
        if (this.agType == undefined) {
            this.agType = agInputType[agInputType.text];
        }
        if (this.agValue == undefined) {
            this.agValue = "";
        }
        if (this.agName == undefined) {
            this.agName = "";
        }
        if (this.agPlaceHolder == undefined) {
            this.agPlaceHolder = "";
        }
    };
    return agInputMeta;
}(agComponentMeta));
exports.agInputMeta = agInputMeta;
