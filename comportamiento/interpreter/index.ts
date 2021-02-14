
import { AndExpression } from './AndExpression';
import { Expression } from './Expression';
import { LiteralExpression } from './LiteralExpression';
import { OrExpression } from './OrExpression';
import { VariableExpression } from './VariableExpression';

function main() {

  // A AND true => true && true = true
  let ctx = new Map<string, boolean>();
  ctx.set('A', true);

  let expr: Expression = new AndExpression(new VariableExpression('A'), new LiteralExpression(true));
  let result = expr.interpreta(ctx);
  console.log(`A AND true: ${result}`);

  // A AND false => true && false = false
  ctx.set('A', true);
  expr = new AndExpression(new VariableExpression('A'), new LiteralExpression(false));
  result = expr.interpreta(ctx);
  console.log(`A AND false: ${result}`);

  // A OR B => true && true = true
  ctx.set('B', false);
  ctx.set('A', false);
  expr = new OrExpression(new VariableExpression('A'), new VariableExpression('B'));
  result = expr.interpreta(ctx);
  console.log(`A OR B: ${result}`);

  // (A AND B) OR C => (false AND false) OR true
  ctx.set('A', true);
  ctx.set('B', true);
  ctx.set('C', false);
  expr = new OrExpression(new AndExpression(new VariableExpression('A'), new VariableExpression('B')), new VariableExpression('C'));
  result = expr.interpreta(ctx);
  console.log(`(A AND B) OR C: ${result}`);
}


main();
