"use strict";
exports.__esModule = true;
var IGenericService = /** @class */ (function () {
    function IGenericService() {
        this.models = new Array();
    }
    IGenericService.prototype.save = function (model, callback) {
        this.models.push(model);
        callback();
    };
    IGenericService.prototype.getAll = function (callback) {
        callback();
        return this.models;
    };
    IGenericService.prototype.getById = function (id, callback) {
        callback();
        return this.models[id - 1];
    };
    IGenericService.prototype["delete"] = function (id, callback) {
        this.models.splice(id - 1, 1);
        callback();
    };
    return IGenericService;
}());
exports.IGenericService = IGenericService;
