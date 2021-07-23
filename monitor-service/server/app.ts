const Koa = require('koa');
const bodyParser = require("koa-bodyparser");
const app = new Koa();
const koaStatic = require("koa-static");
const path = require("path");
const Router = require('koa-router');
const router = new Router();


import sample from './src/router/sample';
import myRouter from './src/router/index';

app.use(bodyParser());
if(process.env.NODE_ENV === 'development'){
  app.use(koaStatic(path.resolve(__dirname, "./public")));
}else{
  app.use(koaStatic(path.resolve(__dirname, "../public")));
}
// 路由配置
router.get("/", sample);
router.get("/myRouter", myRouter);
app
  .use(router.routes())    //吧路由都引入进来
  .use(router.allowedMethods());

app.listen(9090);
