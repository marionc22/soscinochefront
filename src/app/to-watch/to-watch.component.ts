import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-to-watch',
  templateUrl: './to-watch.component.html',
  styleUrls: ['./to-watch.component.css']
})
export class ToWatchComponent implements OnInit {
  username : String = "reyducul"
  toWatchList: any =[];

  constructor(private http: HttpClient) {
  let username='javatechie'
  let password='jt143'
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  http.get('http://localhost:8080/towatch',{headers}).subscribe(data => this.toWatchList = data);
  }
  

  ngOnInit(){
  }
  addWatched (movieId:number, id: number) {
    let username='javatechie'
  let password='jt143'
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    this.http.post('http://localhost:8080/watched',
    {username: this.username,movie: {id: movieId}},{headers}
).subscribe(
  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
  });
    this.http.delete(`http://localhost:8080/towatch/${id}`,{headers})
    .subscribe(() => 'Delete successful');
    this.toWatchList = this.toWatchList.filter((movie: any) => movie.id != id)
}
    deleteWatched (id: Number) {
      let username='javatechie'
  let password='jt143'
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    this.http.delete(`http://localhost:8080/towatch/${id}`,{headers})
    .subscribe(() => 'Delete successful');
    this.toWatchList = this.toWatchList.filter((movie: any) => movie.id != id)
}
  }