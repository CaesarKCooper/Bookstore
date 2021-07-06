import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-searchedbook',
  templateUrl: './searchedbook.component.html',
  styleUrls: ['./searchedbook.component.css']
})
export class SearchedbookComponent implements OnInit {

books!: Book[]

bookName!: String;

  constructor(private data: BookserviceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.params[`name`]
    this.data.fetchBooksByName(name).subscribe(
      response => {
        this.books = response
      }
    )
  }

  viewDetails(id: number){
    this.router.navigate([`book`, id])
  
  }

}
