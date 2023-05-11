//import
import _ from "lodash";

//Literal Type
export type Operators = "+" | "-" | "*" | "/" | "%" | "**";

//Model
export class Model {
  //Do Calculate
  public calculate(
    num1: number,
    operator: Operators,
    num2: number
  ): number | string {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      if (num2 === 0) {
        return "\n Cannot divide by Zero  \n"; // math law cannot divide(/)  by zero
      } else {
        return num1 / num2;
      }
    } else if (operator === "%") {
      if (num2 === 0) {
        return "\n Cannot mod by Zero  \n"; // math law cannot mod(%) by zero
      } else {
        return num1 % num2;
      }
    } else if (operator === "**") {
      return num1 ** num2;
    } else {
      return "\n Cannot Calculate  \n";
    }
  }
  //Check valid operator
  public checkOperator(operator: string): boolean {
    // check input operator --> //lodash .includes()
    const opList: Operators[] = ["+", "-", "*", "/", "%", "**"];
    return _.includes(opList, operator);
  }
}
