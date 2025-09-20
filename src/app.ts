import Elysia from "elysia"
import { openapi } from "@elysiajs/openapi"
import { swagger } from "@elysiajs/swagger"
import { cors } from "@elysiajs/cors"

export const app = new Elysia()
  // Apply the openapi plugin
  .use(openapi({}))
  .use(cors())
  .use(swagger())