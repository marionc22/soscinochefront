import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-to-watch',
  templateUrl: './to-watch.component.html',
  styleUrls: ['./to-watch.component.css']
})
export class ToWatchComponent implements OnInit {
  toWatchList: any =[];
  username= localStorage.getItem('username')
  password= localStorage.getItem('password')
  constructor(private http: HttpClient, private router:Router ) {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
  http.get('http://localhost:8080/towatch',{headers}).subscribe(data => this.toWatchList = data);
  }
  


    ngOnInit(): void {
      if(this.username==null ){
        this.router.navigate(["/login"])
       }
    }
  
  addWatched (movieId:number, id: number) {
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
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
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    this.http.delete(`http://localhost:8080/towatch/${id}`,{headers})
    .subscribe(() => 'Delete successful');
    this.toWatchList = this.toWatchList.filter((movie: any) => movie.id != id)
}
  }