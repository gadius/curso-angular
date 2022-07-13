import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post('https://ng-complete-guide-1b096-default-rtdb.firebaseio.com/posts.json',
    postData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  private fetchPost(){
    this.http.get('https://ng-complete-guide-1b096-default-rtdb.firebaseio.com/posts.json')
    .subscribe(posts => {
      console.log(posts);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }
}
