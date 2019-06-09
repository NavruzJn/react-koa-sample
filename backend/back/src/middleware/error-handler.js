export default async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.app.emit('error', (e, ctx));
  }
};
