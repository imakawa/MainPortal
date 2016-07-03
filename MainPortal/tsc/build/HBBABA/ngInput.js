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
var core_1 = require('@angular/core');
var agInput = (function () {
    function agInput() {
    }
    agInput.prototype.ngOnInit = function () {
        this.datamodel += this.place;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "place", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "datamodel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], agInput.prototype, "agclass", void 0);
    agInput = __decorate([
        core_1.Component({
            selector: 'agInput',
            template: '<input type="text" id="form-field-1" placeholder="{{datamodel}}" class="col-xs-10 col-sm-10" />'
        }), 
        __metadata('design:paramtypes', [])
    ], agInput);
    return agInput;
}());
exports.agInput = agInput;
var agInputMeta = (function () {
    function agInputMeta() {
    }
    return agInputMeta;
}());
exports.agInputMeta = agInputMeta;
