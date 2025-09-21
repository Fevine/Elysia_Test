import { Elysia, t } from 'elysia'
import * as UserController from '../controllers/user.controller'

export const userRoutes = new Elysia({ prefix: '/users' })
    .get('/', UserController.getUsers)
    .get('/:id', UserController.getUserById)
    .post(
        '/',
        UserController.createUser,
        {
            // Validation with Elysia schema
            body: t.Object({
                name: t.String(),
                email: t.String({ format: 'email' })
            })
        }
    )
