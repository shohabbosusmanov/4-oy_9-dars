import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { BookModule } from './modules/book/book.module';
import { ReviewModule } from './modules/review/review.module';
import { CommentModule } from './modules/comment/comment.module';
import { ConfigModule } from '@nestjs/config';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UserModule, PostModule, BookModule, ReviewModule, CommentModule, ConfigModule.forRoot({
    envFilePath: ".env",
    isGlobal: true
  })],
  controllers: [],
  providers: [ExceptionsHandler, PrismaService],
})
export class AppModule { }
