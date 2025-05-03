import { Controller, Get, Post, Put, Delete, Body, Param, Query } from "@nestjs/common";
import { ReviewService } from "./review.service";

@Controller("reviews")
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) { }

    @Get()
    async getAll() {
        return this.reviewService.getAll();
    }

    @Get(":id")
    async getOne(@Param("id") id: number) {
        return this.reviewService.getOne(+id);
    }

    @Post()
    async create(@Body() data: any) {
        return this.reviewService.create(data);
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data: any) {
        return this.reviewService.update(+id, data);
    }

    @Delete("delete")
    async delete(@Query("id") id: number) {
        return this.reviewService.delete(+id);
    }
}
