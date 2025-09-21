import * as UserService from '../services/user.service'

// GET /users
export const getUsers = async () => {
    return await UserService.findAll()
}

// GET /users/:id
export const getUserById = async ({ params }: any) => {
    const user = await UserService.findById(Number(params.id))
    if (!user) {
        return { error: 'User not found' }
    }
    return user
}

// POST /users
export const createUser = async ({ body }: any) => {
    return await UserService.create(body)
}
