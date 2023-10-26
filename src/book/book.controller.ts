import { Controller,Get, Param,Delete, Post, Body,ParseIntPipe, UseGuards,UseInterceptors } from "@nestjs/common";

import { Bookservice } from "./book.services";
import { Bookinterceptor } from "./book.interceptor";

import { Book } from "./book.dto";
import { Bookguard } from "./book.guard";
@Controller("book")

export class Bookcontroller{
  constructor(private bookservices:Bookservice){

  }

  @Get("/find")
  getallbooks():Book[]{
    return this.bookservices.findallbooks();
  }

  @Delete("/delete/:id")
  deletebook(@Param("id") bookId:string):string{
    return this.bookservices.deletebooks(bookId);
  }

  @Post('/add')
  // @UseGuards(new Bookguard())
  @UseInterceptors(Bookinterceptor)
  addbooks(@Body() book:Book):string{
    return this.bookservices.addbooks(book);
  }
  @Get('/findone/:id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return "this is for find one book"
}
}