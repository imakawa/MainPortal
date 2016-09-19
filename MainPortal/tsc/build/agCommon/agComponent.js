"use strict";
var agComponentMeta = (function () {
    function agComponentMeta() {
    }
    agComponentMeta.prototype.getAgId = function () { return this.agId; };
    agComponentMeta.prototype.setAgId = function (_agId) {
        if (_agId == undefined) {
            this.agId = "";
        }
        else {
            this.agId = _agId + 'asdfasdf';
        }
    };
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
exports.agComponentMeta = agComponentMeta;
