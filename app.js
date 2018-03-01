const Koa = require('koa');
const _ = require('koa-route')
const app = new Koa();
const {parse, visit} = require('excel-formula-parser');

// Just parrot back the formula
function parseFormula (ctx) {
  var formula = ctx.request.query.formula;
  var ast = parse(formula);
  ctx.body = ast;
}

app.use(_.get('/parse', parseFormula))

app.listen(process.env.PORT || 3000);
