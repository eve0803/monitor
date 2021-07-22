const Koa = require('koa');
const bodyParser = require("koa-bodyparser");
const app = new Koa();
const koaStatic = require("koa-static");
const path = require("path");
const Router = require('koa-router');
const router = new Router();
const Kcors = require("kcors");

import sample from './src/router/sample';
import myRouter from './src/router/index';
import errorMiddleware from './src/middleware/error';
import checkMiddleware from './src/middleware/check';

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};
// 路由配置
router.get('/', main);
router.get('/about', about);

app
  .use(router.routes())    //吧路由都引入进来
  .use(router.allowedMethods());

app.listen(9090);
