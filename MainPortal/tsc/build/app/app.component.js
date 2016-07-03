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
var AnagetUser_1 = require('./AnagetUser');
var app_service_1 = require('./app.service');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Login_Service_1 = require('./Login.Service');
var AppComponent = (function () {
    function AppComponent(http, loginService) {
        this.loginService = loginService;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new AnagetUser_1.AnagetUser(1, '', '');
        this.submitted = false;
        this.tasks = [];
        this.active = true;
    }
    AppComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.loginService.AuthAnagetUser(this.model, this.subname);
    };
    AppComponent.prototype.subname = function (data) {
        if (data) {
            document.location.href = "/Home/About";
        }
        else {
            alert("ログイン検証失敗！");
        }
    };
    Object.defineProperty(AppComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'tsc/app/app.component.html',
            providers: [http_1.JSONP_PROVIDERS, http_2.HTTP_PROVIDERS, app_service_1.HeroService, Login_Service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [http_2.Http, Login_Service_1.LoginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
