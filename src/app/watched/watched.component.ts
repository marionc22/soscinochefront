import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent implements OnInit  {

  username= localStorage.getItem('username')
  password= localStorage.getItem('password')

  watchedList: any =[];
  
  
  constructor(private http: HttpClient, private router:Router) {
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
  http.get('http://localhost:8080/watched',{headers}).subscribe(data => this.watchedList = data);
  }

  ngOnInit(): void {
    if(this.username==null ){
      this.router.navigate(["/login"])
     }
  }

  deleteWatched (id: Number) {
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    this.http.delete(`http://localhost:8080/watched/${id}`, {headers})
    .subscribe(() => 'Delete successful');
    this.watchedList = this.watchedList.filter((movie: any) => movie.id != id)
}
  }




