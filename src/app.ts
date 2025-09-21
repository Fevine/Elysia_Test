import Elysia from "elysia"
import { openapi } from "@elysiajs/openapi"
import { swagger } from "@elysiajs/swagger"
import { cors } from "@elysiajs/cors"
import { userRoutes } from "./routes/user.route"

export const app = new Elysia()
  // Apply the openapi plugin
  .use(userRoutes)
  .use(openapi({}))
  .use(cors())
  .use(swagger())