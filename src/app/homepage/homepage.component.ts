import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent   {
  searchText = '';
  movieList: any = [];

 showWatched: number = -1
showToWatch: number = -1
  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/movies').subscribe(data => this.movieList = data);
    console.log(this.movieList)
  }

  shuffle(){
    this.movieList = this.movieList.sort(() => Math.random() - 0.5)

  }

  
  
  username : String = "reyducul"

  addWatched(id: number) {
    console.log(this.showWatched)
    console.log(id)
    this.showWatched=id
    return this.http.post('http://localhost:8080/watched',
        {username: this.username,movie: {id: id}},
    ).subscribe(
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      
  }

  addToWatch(id: number) {
    this.showToWatch=id
    return this.http.post('http://localhost:8080/towatch',
        {username: this.username,movie: {id: id}},
    ).subscribe(
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
    
  }

}