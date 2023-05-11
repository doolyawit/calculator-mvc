"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import
var m_1 = require("./m");
var v_1 = require("./v");
//Controller
var Controller = /** @class */ (function () {
    function Controller(calModel, calView) {
        this.calModel = calModel;
        this.calView = calView;
    }
    // Activate Calculator
    Controller.prototype.active = function () {
        var typeResponse = this.calView.type();
        var validOperator = this.calModel.checkOperator(typeResponse.operator);
        if (validOperator) {
            var result = this.calModel.calculate(typeResponse.num1, typeResponse.operator, typeResponse.num2);
            this.calView.display(result);
        }
        else {
            var err = '\n Invalid operator! Please use one of the following: "+", "-", "*", "/", "%", "**" \n';
            this.calView.display(err);
        }
    };
    return Controller;
}());
//Create Objects
var calModel = new m_1.Model();
var calView = new v_1.View();
var calController = new Controller(calModel, calView);
//call
calController.active();
