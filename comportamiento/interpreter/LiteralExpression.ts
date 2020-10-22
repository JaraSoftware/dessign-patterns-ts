
import { Expression } from './Expression';

export class LiteralExpression implements Expression {

  private literal: Boolean;
  constructor(literal: Boolean){
    this.literal = literal;
  }

  /**
   * 
   * @override
   */
  interpreta(ctx: Map<String, Boolean>): Boolean {
    return this.literal;
  }

}
