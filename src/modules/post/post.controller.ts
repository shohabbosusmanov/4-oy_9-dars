import { Controller, Get, Post, Put, Delete, Body, Param, Query } from "@nestjs/common";
import { PostService } from "./post.service";

@Controller("posts")
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Get()
    async getAll() {
        return this.postService.getAll();
    }

    @Get(":id")
    async getOne(@Param("id") id: number) {
        return this.postService.getOne(+id);
    }

    @Post()
    async create(@Body() data: any) {
        return this.postService.create(data);
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data: any) {
        return this.postService.update(+id, data);
    }

    @Delete("delete")
    async delete(@Query("id") id: number) {
        return this.postService.delete(+id);
    }
}
