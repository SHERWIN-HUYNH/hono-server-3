import { Hono } from "hono";

export const router = new Hono();

router
  .get("/sign-in", async (c) => {
    return c.json({ hello: "world" }, 200);
  })
  .post("/sign-in", async (c) => {
    return c.json({ hello: "world" }, 200);
  });
