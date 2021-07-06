import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

books!: Book[];

bookName!: String;

  constructor(private data: BookserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

getAllBooks(){
  this.data.fetchAllBooks().subscribe(
    response => {
      this.books = response
    }
  )
}

searchBook(name: String){
this.router.navigate([`searchedbook`, name])
}

viewDetails(id: number){
  this.router.navigate([`book`, id])

}

}
