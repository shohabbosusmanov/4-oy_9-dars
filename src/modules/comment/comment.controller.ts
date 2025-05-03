import { Controller, Get, Post, Put, Delete, Body, Param, Query } from "@nestjs/common";
import { CommentService } from "./comment.service";

@Controller("comments")
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Get()
    async getAll() {
        return this.commentService.getAll();
    }

    @Get(":id")
    async getOne(@Param("id") id: number) {
        return this.commentService.getOne(+id);
    }

    @Post()
    async create(@Body() data: any) {
        return this.commentService.create(data);
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data: any) {
        return this.commentService.update(+id, data);
    }

    @Delete("delete")
    async delete(@Query("id") id: number) {
        return this.commentService.delete(+id);
    }
}
