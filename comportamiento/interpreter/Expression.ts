
export interface Expression {
  interpreta(ctx: Map<String, Boolean>): Boolean;
}
