import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css']
})
export class ComedyComponent implements OnInit {

books!: Book[];

bookName!: String

  constructor(private data: BookserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooksByCategory()
  }

getAllBooksByCategory(){
  this.data.fetchBooksByCategoryId(1).subscribe(
    response =>{
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
