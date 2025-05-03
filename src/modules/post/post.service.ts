import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<any> {
        return await this.prisma.post.findMany();
    }

    async getOne(id: number): Promise<any> {
        const post = await this.prisma.post.findUnique({
            where: { id },

        });

        if (!post) {
            throw new NotFoundException("Post not found");
        }

        return post;
    }

    async create(data: any): Promise<any> {
        return this.prisma.post.create({
            data,

        });
    }

    async update(id: number, data: any): Promise<any> {
        const existingPost = await this.prisma.post.findUnique({ where: { id } });

        if (!existingPost) {
            throw new NotFoundException("Post not found");
        }

        return this.prisma.post.update({
            where: { id },
            data,

        });
    }

    async delete(id: number): Promise<any> {
        const existingPost = await this.prisma.post.findUnique({ where: { id } });

        if (!existingPost) {
            throw new NotFoundException("Post not found");
        }

        return await this.prisma.post.delete({
            where: { id },
        });
    }
}
