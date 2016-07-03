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
var HBBABAComponent = (function () {
    function HBBABAComponent(router) {
        this.router = router;
        this.Employees = [
            { id: 11, name: 'Mr. Nice567' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
    }
    HBBABAComponent.prototype.CreateData = function () {
        this.router.navigate(['Create']);
    };
    HBBABAComponent.prototype.EditData = function () {
        $("#tblHeader").hide();
        this.Employees = [
            { id: 11, name: 'Mr. Nice5997' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
    };
    HBBABAComponent.prototype.DeleteData = function () {
        $("#tblHeader").html("データを削除しました。");
        $("#tblHeader").show();
        this.Employees = [
            { id: 11, name: 'Mr. Nice123' },
            { id: 12, name: 'Narco123' }
        ];
    };
    HBBABAComponent.prototype.RefreshData = function () {
        $("#tblHeader").html("最新のデータを取得しました。");
        $("#tblHeader").show();
    };
    HBBABAComponent.prototype.ngOnInit = function () {
        $("#tblHeader").hide();
    };
    HBBABAComponent = __decorate([
        core_1.Component({
            selector: 'HBBABA03',
            templateUrl: 'http://localhost/tsc/HBBABA/HBBABA.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], HBBABAComponent);
    return HBBABAComponent;
}());
exports.HBBABAComponent = HBBABAComponent;
