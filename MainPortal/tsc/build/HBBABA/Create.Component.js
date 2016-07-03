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
var router_deprecated_1 = require('@angular/router-deprecated');
var agCommon_1 = require('agCommon');
var CreateComponent = (function () {
    function CreateComponent(router) {
        this.router = router;
        this.loginId_Input = new agCommon_1.agInputMeta();
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.backward = function () {
        console.log(this.loginId_Input.agClass);
    };
    CreateComponent.prototype.backward1 = function () {
        $("#widgetbody").css("display", "none");
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'CreateComponent',
            templateUrl: 'agCommon/Create.Component.html',
            directives: [agCommon_1.agInput]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
