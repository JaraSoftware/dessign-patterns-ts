
import { Expression } from './Expression';

export class VariableExpression implements Expression {

  variable: string;

  constructor(variable: string) {
    this.variable = variable;
  }

  /**
   * @override
   */
  interpreta(ctx: Map<string, boolean>): boolean {
    let value = ctx.get(this.variable);
    if (value === undefined) value = false;
    return value;
  }

}
