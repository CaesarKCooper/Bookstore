import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { BookComponent } from './book/book.component';
import { ComedyComponent } from './comedy/comedy.component';
import { SciencefictionComponent } from './sciencefiction/sciencefiction.component';
import { SearchedbookComponent } from './searchedbook/searchedbook.component';

const routes: Routes = [
  {path: '', component: AllbooksComponent },
  {path: 'allbooks', component: AllbooksComponent },
  {path: 'comedy', component: ComedyComponent},
  {path: 'sciencefiction', component: SciencefictionComponent},
  {path: 'book/:id', component: BookComponent},
  {path: 'searchedbook/:name', component: SearchedbookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
