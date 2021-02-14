
import { Expression } from './Expression';

export class LiteralExpression implements Expression {

  private literal: boolean;
  constructor(literal: boolean) {
    this.literal = literal;
  }

  /**
   * 
   * @override
   */
  interpreta(ctx: Map<string, boolean>): boolean {
    return this.literal;
  }

}
