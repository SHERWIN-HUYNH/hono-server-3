import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { router as authRouter } from "./modules/auth/auth.controller";

const app = new Hono().basePath("/api");

app.route("/", authRouter);

app.post("/", async (c) => {
  const input = await c.req.json();
  return c.json(input);
});

serve(app, () => {
  console.log("Server is running on http://localhost:3000");
});
