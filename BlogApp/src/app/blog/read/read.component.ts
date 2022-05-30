import { Component, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostData } from './postdata.model';
import { map } from 'rxjs';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  fetchedPosts: PostData[] = [];
  constructor(private http: HttpClient) {}
  firebaseUrl = 'https://blogapp-bde91-default-rtdb.firebaseio.com/posts.json';
  ngOnInit(): void {
    //this.fetchPosts();
  }

  onFetchPost() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http
      .get(this.firebaseUrl)
      .pipe(
        map((responseData) => {
          const postsArray: PostData[] = [];
          for (const key in responseData) {
            postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        this.fetchedPosts = posts;
      });
  }
}
