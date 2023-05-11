import { question, questionFloat } from "readline-sync";
import { Controller } from "./controller";
import { Calculator, Operators } from "./model";

export interface ViewAble {
  display(result: number): void;
  showError(message: string): void;
}

export class View implements ViewAble {
  private controller = new Controller(new Calculator(), this);

  public listenerInput() {
    const num1: number = questionFloat("🤖 Type First Number : ");
    const operator: string = question(
      "🤖 Enter operator +  -  *  /  %  **  : "
    );
    const num2: number = questionFloat("🤖 Type Second Number : ");
    this.controller.calculate(num1, num2, operator as Operators);
  }

  public display(result: number): void {
    console.log(`🤔 Result is :  ${result}`);
  }

  public showError(message: string): void {
    console.log("error: ", message);
  }
}

(() => {
  const view = new View();
  view.listenerInput();
})();
