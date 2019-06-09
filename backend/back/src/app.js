import Koa from 'koa';
import Http from 'http';
import cors from '@koa/cors';
import respond from 'koa-respond';
import body from 'koa-body';
import serve from 'koa-static';

import middleware from './middleware';
import router from './router';
import logger from './util/logger';
import db from './db/connect';

const log = logger('[App Server]');

export async function createServer() {
  log.debug('Creating server...');
  const app = new Koa();

  db.mongoConnect();

  app
      .use(cors())
      .use(middleware.errorHandler)
      .use(serve(process.cwd() + '/static'))
      .use(respond())
      .use(body({ multipart: true }))
      .use(middleware.httpLogger)
      .use(router())
      .use(middleware.notFound);

  app.on('error', (e, ctx) => {
    log.error(e.message);
    ctx.send(e.statusCode || 400, { error: e.message });
  });

  const server = Http.createServer(app.callback());

  log.debug('Server created, ready to listen...');
  return server;
}
