import compose from 'koa-compose';
import users from './users';
import device from './devices'

function combineRoutes(routes) {
  if (!Array.isArray(routes)) routes = [].prototype.slice.call(arguments);

  const middleware = [];
  routes.forEach(router => {
    middleware.push(router.routes());
    if (router.allowedMethods) middleware.push(router.allowedMethods());
  });

  return compose(middleware);
}

const routes = [users, device];

export default () => combineRoutes(routes);
