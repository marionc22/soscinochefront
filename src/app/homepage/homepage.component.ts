import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




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
  let username='javatechie'
  let password='jt143'
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  http.get('http://localhost:8080/movies',{headers}).subscribe(data => this.movieList = data);
  console.log(this.movieList)
}

  shuffle(){
    this.movieList = this.movieList.sort(() => Math.random() - 0.5)

  }

  
  
  username : String = "reyducul"

  addWatched(id: number) {
    let username='javatechie'
    let password='jt143'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    this.showWatched=id
    return this.http.post('http://localhost:8080/watched',
        {username: this.username,movie: {id: id} },{headers}
    ).subscribe(
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      
  }

  addToWatch(id: number) {
    let username='javatechie'
    let password='jt143'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    this.showToWatch=id
    return this.http.post('http://localhost:8080/towatch',
        {username: this.username,movie: {id: id}},{headers}
    ).subscribe(
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
    
  }

}