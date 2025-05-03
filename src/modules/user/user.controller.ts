import { Controller, Get, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getAll() {
        return this.userService.getAll();
    }

    @Get(":id")
    async getOne(@Param("id") id: number) {
        return this.userService.getOne(+id);
    }

    @Post()
    async create(@Body() data: any) {
        return this.userService.create(data);
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data: any) {
        return this.userService.update(+id, data);
    }

    @Delete("delete")
    async delete(@Query("id") id: number) {
        return this.userService.delete(+id);
    }
}
