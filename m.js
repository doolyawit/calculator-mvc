"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
//import
var lodash_1 = require("lodash");
//Model
var Model = /** @class */ (function () {
    function Model() {
    }
    //Do Calculate
    Model.prototype.calculate = function (num1, operator, num2) {
        if (operator === "+") {
            return num1 + num2;
        }
        else if (operator === "-") {
            return num1 - num2;
        }
        else if (operator === "*") {
            return num1 * num2;
        }
        else if (operator === "/") {
            if (num2 === 0) {
                return "\n Cannot divide by Zero  \n"; // math law cannot divide(/)  by zero
            }
            else {
                return num1 / num2;
            }
        }
        else if (operator === "%") {
            if (num2 === 0) {
                return "\n Cannot mod by Zero  \n"; // math law cannot mod(%) by zero
            }
            else {
                return num1 % num2;
            }
        }
        else if (operator === "**") {
            return Math.pow(num1, num2);
        }
        else {
            return "\n Cannot Calculate  \n";
        }
    };
    //Check valid operator
    Model.prototype.checkOperator = function (operator) {
        // check input operator --> //lodash .include()
        var opList = ["+", "-", "*", "/", "%", "**"];
        return lodash_1.default.includes(opList, operator);
    };
    return Model;
}());
exports.Model = Model;
