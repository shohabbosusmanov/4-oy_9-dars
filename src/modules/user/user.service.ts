import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.user.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true
            }
        });
    }

    async getOne(id: number) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true
            }
        });

        if (!user) {
            throw new NotFoundException("User not found");
        }

        return user;
    }

    async create(data: any) {
        const user = await this.prisma.user.create({
            data,
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true
            }
        });

        return user;
    }

    async update(id: number, data: any) {
        const existingUser = await this.prisma.user.findUnique({ where: { id } });

        if (!existingUser) {
            throw new NotFoundException("User not found");
        }

        const updatedUser = await this.prisma.user.update({
            where: { id },
            data,
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true
            }
        });

        return updatedUser;
    }

    async delete(id: number) {
        const existingUser = await this.prisma.user.findUnique({ where: { id } });

        if (!existingUser) {
            throw new NotFoundException("User not found");
        }

        return await this.prisma.user.delete({
            where: { id }, select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true
            }
        });

    }
}
