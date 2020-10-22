
import { Expression } from "./Expression";

export class AndExpression implements Expression {
 
  private expr1:Expression;
  private expr2: Expression;

  constructor(expr1: Expression, expr2: Expression){
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  /**
   * @override
   */
  interpreta(ctx: Map<String, Boolean>): Boolean {
    return this.expr1.interpreta(ctx) && this.expr2.interpreta(ctx);
  }

}
