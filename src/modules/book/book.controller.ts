import { Controller, Get, Post, Put, Delete, Body, Param, Query } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("books")
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Get()
    async getAll() {
        return this.bookService.getAll();
    }

    @Get(":id")
    async getOne(@Param("id") id: number) {
        return this.bookService.getOne(+id);
    }

    @Post()
    async create(@Body() data: any) {
        return this.bookService.create(data);
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data: any) {
        return this.bookService.update(+id, data);
    }

    @Delete("delete")
    async delete(@Query("id") id: number) {
        return this.bookService.delete(+id);
    }
}
