import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class BookService {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<any> {
        return this.prisma.book.findMany();
    }

    async getOne(id: number): Promise<any> {
        const book = await this.prisma.book.findUnique({
            where: { id }
        });

        if (!book) {
            throw new NotFoundException("Book not found");
        }

        return book;
    }

    async create(data: any): Promise<any> {
        return this.prisma.book.create({
            data
        });
    }

    async update(id: number, data: any): Promise<any> {
        const existingBook = await this.prisma.book.findUnique({ where: { id } });

        if (!existingBook) {
            throw new NotFoundException("Book not found");
        }

        return this.prisma.book.update({
            where: { id },
            data
        });
    }

    async delete(id: number): Promise<any> {
        const existingBook = await this.prisma.book.findUnique({ where: { id } });

        if (!existingBook) {
            throw new NotFoundException("Book not found");
        }

        return await this.prisma.book.delete({
            where: { id }
        });
    }
}
