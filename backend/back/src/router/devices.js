import Router from 'koa-router';
import Device from '../controllers/Device';

const router = new Router();

router
    .prefix("/api/devices")

    .get("/", async ctx => {
        try {
            ctx.response.body = await Device.getDevices();
        } catch (error) {
            console.log("error", error);
            ctx.status = 402;
            ctx.body = "Users not found";
        }
    })

    .get("/:id", async ctx => {
        try {
            ctx.response.body = await Device.getDevice(ctx.params.id);
        } catch (error) {
            console.log("error", error);
            ctx.status = 402;
            ctx.body = "User not found";
        }
    })

    .put("/:id", async ctx => {
        try {
            ctx.response.body = await Device.updateDevice(ctx.params.id, ctx.request.body);
        } catch (error) {
            console.log("error", error);
            ctx.status = 402;
            ctx.body = "Users not found";
        }
    })

    .delete("/:id", async ctx => {
        try {
            ctx.response.body = await Device.removeDevice(ctx.params.id);
        } catch (error) {
            console.log("error", error);
            ctx.status = 402;
            ctx.body = "Users not found";
        }
    });

module.exports = router;
