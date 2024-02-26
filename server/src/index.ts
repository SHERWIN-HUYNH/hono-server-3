import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { router as authRouter } from "./modules/auth/auth.controller";

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: [
      "http://localhost:5173",
      "https://hono-server-3.vercel.app",
    ],
    credentials: true,
  }),
);

app.route("/", authRouter);

app.post("/", async (c) => {
  const input = await c.req.json();
  return c.json(input);
});

serve(app, () => {
  console.log("Server is running on http://localhost:3000");
});
function cors(arg0: { origin: string[]; credentials: boolean; }): import("hono").MiddlewareHandler<import("hono").Env, "/api/*", {}> {
  throw new Error("Function not implemented.");
}

function logger(): import("hono").MiddlewareHandler<import("hono").Env, "/api/*", {}> {
  throw new Error("Function not implemented.");
}

