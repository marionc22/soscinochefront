import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent  {

  username : String = "reyducul"

  watchedList: any =[];
  
  
  constructor(private http: HttpClient) {
  let username='javatechie'
  let password='jt143'
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  http.get('http://localhost:8080/watched',{headers}).subscribe(data => this.watchedList = data);
  }

  deleteWatched (id: Number) {
  let username='javatechie'
  let password='jt143'
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    this.http.delete(`http://localhost:8080/watched/${id}`, {headers})
    .subscribe(() => 'Delete successful');
    this.watchedList = this.watchedList.filter((movie: any) => movie.id != id)
}
  }




