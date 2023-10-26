import { Injectable } from '@nestjs/common';
import {Book} from './book.dto';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class Bookservice{
    public books: Book[]=[];

    addbooks(book:Book):string{
        book.id=uuidv4();
        this.books.push(book);
        return "Books added"
    }

 deletebooks(bookId:string):string{
    let index=this.books.filter((book)=>{
        return book.id != bookId;
    })
    return "Books deleted"
 }
 findallbooks():Book[]{
    return this.books;

 }
 findonebook(bookId:string):string{
    let index=this.books.filter((book)=>{
        return book.id == bookId;
    })
    return "Books find"
 }


}

