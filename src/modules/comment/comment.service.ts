import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<any> {
        return this.prisma.comment.findMany();
    }

    async getOne(id: number): Promise<any> {
        const comment = await this.prisma.comment.findUnique({
            where: { id }
        });

        if (!comment) {
            throw new NotFoundException("Comment not found");
        }

        return comment;
    }

    async create(data: any): Promise<any> {
        return this.prisma.comment.create({
            data
        });
    }

    async update(id: number, data: any): Promise<any> {
        const existingComment = await this.prisma.comment.findUnique({ where: { id } });

        if (!existingComment) {
            throw new NotFoundException("Comment not found");
        }

        return this.prisma.comment.update({
            where: { id },
            data
        });
    }

    async delete(id: number): Promise<any> {
        const existingComment = await this.prisma.comment.findUnique({ where: { id } });

        if (!existingComment) {
            throw new NotFoundException("Comment not found");
        }

        return await this.prisma.comment.delete({
            where: { id }
        });
    }
}
