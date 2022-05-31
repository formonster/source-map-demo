const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('koa-cors');
const koaBody = require('koa-body');

const { getSourceMap } = require('./sourceMap');

const app = new Koa();
const router = new Router();

app.use(koaBody());
app.use(cors());

router.get('/', (ctx, next) => {
  ctx.body = 'Hello Koa'
});

router.post('/sourceMap', async (ctx, next) => {
  console.log('ctx.request.body', ctx.request.body);
  const sourceInfo = await getSourceMap(ctx.request.body)
  console.log('sourceInfo', sourceInfo);
  ctx.body = sourceInfo
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('🚀 http://localhost:3000');
});
