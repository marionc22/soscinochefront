import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent  {

  username : String = "reyducul"

  watchedList: any =[];
  
  
  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/watched').subscribe(data => this.watchedList = data);
  }

  deleteWatched (id: Number) {
    
    this.http.delete(`http://localhost:8080/watched/${id}`)
    .subscribe(() => 'Delete successful');
    this.watchedList = this.watchedList.filter((movie: any) => movie.id != id)
}
  }




