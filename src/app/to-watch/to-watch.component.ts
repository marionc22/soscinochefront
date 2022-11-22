import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-watch',
  templateUrl: './to-watch.component.html',
  styleUrls: ['./to-watch.component.css']
})
export class ToWatchComponent {

  username : String = "reyducul"

  toWatchList: any =[];
  
  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/towatch').subscribe(data => this.toWatchList = data);
  }

  deleteWatched (id: Number) {
    
    this.http.delete(`http://localhost:8080/towatch/${id}`)
    .subscribe(() => 'Delete successful');
    this.toWatchList = this.toWatchList.filter((movie: any) => movie.id != id)
}
  }
  

