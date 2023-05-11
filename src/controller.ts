import { CalculatorAble, Operators } from "./model";
import { ViewAble } from "./view";

export class Controller {
  private calModel: CalculatorAble;
  private calView: ViewAble;

  constructor(calModel: CalculatorAble, calView: ViewAble) {
    this.calModel = calModel;
    this.calView = calView;
  }

  calculate(num1: number, num2: number, operator: Operators) {
    const validOperator = this.calModel.checkOperator(operator);
    if (validOperator) {
      if (operator === "+") {
        this.calView.display(this.calModel.plus(num1, num2));
      } else if (operator === "-") {
        this.calView.display(this.calModel.plus(num1, num2));
      } else if (operator === "*") {
        this.calView.display(this.calModel.plus(num1, num2));
      } else if (operator === "/") {
        if (num2 === 0) {
          this.calView.showError("Cannot divide by Zero");
        } else {
          this.calView.display(this.calModel.plus(num1, num2));
        }
      } else if (operator === "%") {
        this.calView.display(this.calModel.plus(num1, num2));
      } else if (operator === "**") {
        this.calView.display(this.calModel.plus(num1, num2));
      } else {
        this.calView.showError("Cannot calculate");
      }
    } else {
      this.calView.showError(
        'Invalid operator! Please use one of the following: "+", "-", "*", "/", "%", "**"'
      );
    }
  }
}
