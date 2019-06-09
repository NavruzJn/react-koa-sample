import Router from 'koa-router';
import User from '../controllers/User';

const router = new Router();

router
  .prefix("/api/users")

  .get("/", async ctx => {
    try {
      ctx.response.body = await User.getUsers();
    } catch (error) {
      console.log("error", error);
      ctx.status = 402;
      ctx.body = "Users not found";
    }
  })

  .get("/:id", async ctx => {
    try {
      ctx.response.body = await User.getUser(ctx.params.id);
    } catch (error) {
      console.log("error", error);
      ctx.status = 402;
      ctx.body = "User not found";
    }
  })

  .put("/:id", async ctx => {
    try {
      ctx.response.body = await User.updateUser(ctx.params.id, ctx.request.body);
    } catch (error) {
      console.log("error", error);
      ctx.status = 402;
      ctx.body = "Users not found";
    }
  })

  .delete("/:id", async ctx => {
    try {
      ctx.response.body = await User.removeUser(ctx.params.id);
    } catch (error) {
      console.log("error", error);
      ctx.status = 402;
      ctx.body = "Users not found";
    }
  });

module.exports = router;
