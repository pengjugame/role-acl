"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../core");
var utils_1 = require("../utils");
var EqualsCondition = /** @class */ (function () {
    function EqualsCondition() {
    }
    EqualsCondition.prototype.evaluate = function (args, context) {
        if (!args) {
            return true;
        }
        if (!context) {
            return false;
        }
        if (utils_1.default.type(args) !== 'object') {
            throw new core_1.AccessControlError('EqualsCondition expects type of args to be object');
        }
        return Object.keys(args).every(function (key) {
            return utils_1.default.matchesAnyElement(args[key], function (elm) { return elm === context[key]; });
        });
    };
    return EqualsCondition;
}());
exports.EqualsCondition = EqualsCondition;