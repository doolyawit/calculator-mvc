export interface CalculatorAble {
  plus(number1: number, number2: number): number;
  checkOperator(operator: string): boolean;
}

export type Operators = "+" | "-" | "*" | "/" | "%" | "**";

export class Calculator implements CalculatorAble{
  plus(x: number, y: number): number {
    return x + y;
  }

  checkOperator(operator: string): boolean {
    return ["+", "-", "*", "/", "%", "**"].includes(operator)
  }
}
