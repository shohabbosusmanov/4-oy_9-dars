import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ReviewService {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<any> {
        return this.prisma.review.findMany();
    }

    async getOne(id: number): Promise<any> {
        const review = await this.prisma.review.findUnique({
            where: { id }
        });

        if (!review) {
            throw new NotFoundException("Review not found");
        }

        return review;
    }

    async create(data: any): Promise<any> {
        return this.prisma.review.create({
            data
        });
    }

    async update(id: number, data: any): Promise<any> {
        const existingReview = await this.prisma.review.findUnique({ where: { id } });

        if (!existingReview) {
            throw new NotFoundException("Review not found");
        }

        return this.prisma.review.update({
            where: { id },
            data
        });
    }

    async delete(id: number): Promise<any> {
        const existingReview = await this.prisma.review.findUnique({ where: { id } });

        if (!existingReview) {
            throw new NotFoundException("Review not found");
        }

        return await this.prisma.review.delete({
            where: { id }
        });
    }
}
