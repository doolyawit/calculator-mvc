//import
import { question, questionFloat } from "readline-sync";

//View
export class View {
  //Input
  public type(): { num1: number; operator: string; num2: number } {
    const num1: number = questionFloat("🤖 Type First Number : ");
    const operator: string = question(
      "🤖 Enter operator +  -  *  /  %  **  : "
    );
    const num2: number = questionFloat("🤖 Type Second Number : ");
    return { num1, operator, num2 };
  }

  //show output
  public display(result: number | string): void {
    if (typeof result === "number") {
      console.log(`🤔 Result is :  ${result}`);
    } else {
      throw new Error(result);
    }
  }
}
