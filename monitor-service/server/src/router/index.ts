import { Context } from 'koa';
const main = (ctx:Context) => {
  ctx.response.body = 'indexxxxx';
};

export default main;