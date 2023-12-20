import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { trpc } from '@elysiajs/trpc'
import {appRouter} from "./trpc/type";



const app = new Elysia()
    .use(cors())
    .use(
        trpc(appRouter, {
            endpoint: '/v2/trpc'
        })
    )
    .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
