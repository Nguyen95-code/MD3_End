import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.scss']
})
export class ReadBookComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.showListBook();
  }

  showListBook() {
    this.bookService.getList().subscribe(next => {
      this.books = next;
    });
  }

  reReadBook(id: number) {
    this.books[id].read = false;
    this.bookService.edit(id + '', this.books[id]).subscribe(() => {
      console.log('Sửa thành công');
    }, error1 => {
      console.log('Lỗi ' + error1);
    });
  }

}
