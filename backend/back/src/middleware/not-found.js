export default async (ctx, next) => {
  const path = `${ctx.request.method} ${ctx.request.path}`;
  const message = `No endpoint matched your request: ${path}`;
  ctx.notFound(message);
};
