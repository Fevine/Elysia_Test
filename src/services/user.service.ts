import { UserModel } from '../models/user.model'

export const findAll = () => UserModel.findAll()
export const findById = (id: number) => UserModel.findById(id)
export const create = (data: { name: string; email: string }) => UserModel.create(data)
