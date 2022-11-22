import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-watch',
  templateUrl: './to-watch.component.html',
  styleUrls: ['./to-watch.component.css']
})
export class ToWatchComponent implements OnInit {

  username : String = "reyducul"

  toWatchList: any =[];
  
  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/towatch').subscribe(data => this.toWatchList = data);
    
  }
  ngOnInit(){
  }

  addWatched (movieId:number, id: number) {
    this.http.post('http://localhost:8080/watched',
    {username: this.username,movie: {id: movieId}},
).subscribe(
  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
  });
    this.http.delete(`http://localhost:8080/towatch/${id}`)
    .subscribe(() => 'Delete successful');
    this.toWatchList = this.toWatchList.filter((movie: any) => movie.id != id)
    
}
  

    deleteWatched (id: Number) {
    
    this.http.delete(`http://localhost:8080/towatch/${id}`)
    .subscribe(() => 'Delete successful');
    this.toWatchList = this.toWatchList.filter((movie: any) => movie.id != id)
}
  }
  

