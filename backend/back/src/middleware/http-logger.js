import logger from '../util/logger';

const size = 120;
const log = logger('[HTTP Logger]');

function handler(body) {
  if (typeof body !== 'object') body = { body };
  body = JSON.stringify(body);

  body = body.length > size ? body.substring(0, size) + '...' : body;
  return body;
}

export default async (ctx, next) => {
  const start = Date.now();
  await next();
  const end = Date.now() - start;

  const resBody = handler(ctx.body);
  const reqBody = handler(ctx.request.body);
  const startMsg = `${ctx.method} ${ctx.path} :: ${ctx.status}`;

  log.info(`${startMsg} :: ${reqBody} <--> ${resBody} :: [Length:${ctx.length}] :: ${end}ms`);
};
