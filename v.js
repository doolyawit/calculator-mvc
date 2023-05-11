"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
//import
var readline_sync_1 = require("readline-sync");
//View
var View = /** @class */ (function () {
    function View() {
    }
    //Input
    View.prototype.type = function () {
        var num1 = (0, readline_sync_1.questionFloat)("🤖 Type First Number : ");
        var operator = (0, readline_sync_1.question)("🤖 Enter operator +  -  *  /  %  **  : ");
        var num2 = (0, readline_sync_1.questionFloat)("🤖 Type Second Number : ");
        return { num1: num1, operator: operator, num2: num2 };
    };
    //show output
    View.prototype.display = function (result) {
        if (typeof result === "number") {
            console.log("\uD83E\uDD14 Result is :  ".concat(result));
        }
        else {
            throw new Error(result);
        }
    };
    return View;
}());
exports.View = View;
