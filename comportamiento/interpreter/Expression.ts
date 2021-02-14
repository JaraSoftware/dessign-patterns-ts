
export interface Expression {
  interpreta(ctx: Map<string, boolean>): boolean;
}
