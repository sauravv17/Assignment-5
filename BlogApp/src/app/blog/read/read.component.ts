import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostData } from './postdata.model';
import { map } from 'rxjs';
import { EditService } from '../services/edit-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private editService: EditService,
    private router: Router
  ) {}
  @Input()
  blogTitle: string = ' ';
  blogContent = '';
  fetchedPosts: PostData[] = [];
  firebaseUrl = 'https://blogapp-bde91-default-rtdb.firebaseio.com/posts.json';
  ngOnInit(): void {
    this.blogTitle = this.editService.getTitle();
    this.blogContent = this.editService.getContent();
  }

  onFetchPost() {
    this.fetchPosts();
    this.blogTitle = 'Your Blogs: ';
    this.blogContent = '';
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

  deleteAlert() {
    alert('All Blogs Deleted!!');
    this.blogTitle = '';
  }
  reload() {
    alert('Deleted');
    location.reload();
  }

  onDeletePost() {
    this.http.delete(this.firebaseUrl).subscribe((response) => {
      console.log('Posts deleted: ' + response);
    });
    this.deleteAlert();
  }
}
