
import { Expression } from './Expression';

export class VariableExpression implements Expression {

  variable: String;

  constructor(variable: String) {
    this.variable = variable;
  }

  /**
   * @override
   */
  interpreta(ctx: Map<String, Boolean>): Boolean {
    let value = ctx.get(this.variable);
    if(value === undefined) value = false;
    return value;
  }

}
