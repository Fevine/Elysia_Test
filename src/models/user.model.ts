// src/models/user.model.ts
import { prisma } from '../config/db'

export const UserModel = {
  findAll: () => prisma.user.findMany(),
  findById: (id: number) => prisma.user.findUnique({ where: { id } }),
  create: (data: { name: string; email: string }) =>
    prisma.user.create({ data }),
}
