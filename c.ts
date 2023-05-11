//import
import { Model, Operators } from "./m";
import { View } from "./v";

//Controller
class Controller {
  calModel: Model;
  calView: View;

  constructor(calModel: Model, calView: View) {
    this.calModel = calModel;
    this.calView = calView;
  }

  // Activate Calculator
  public active(): void {
    const typeResponse = this.calView.type();
    const validOperator: boolean = this.calModel.checkOperator(
      typeResponse.operator
    );

    if (validOperator) {
      let result: number | string = this.calModel.calculate(
        typeResponse.num1,
        typeResponse.operator as Operators,
        typeResponse.num2
      );
      this.calView.display(result);
    } else {
      let err =
        '\n Invalid operator! Please use one of the following: "+", "-", "*", "/", "%", "**" \n';
      this.calView.display(err);
    }
  }
}
//Create Objects
const calModel = new Model();
const calView = new View();
const calController = new Controller(calModel, calView);
//call
calController.active();
