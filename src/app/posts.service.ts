import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsService {
  loadedPosts = [];
  baseUrl = 'https://ng-complete-guide-1b096-default-rtdb.firebaseio.com/posts.json';
  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    this.http
      .post<Post>(
        this.baseUrl,
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        this.baseUrl
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  deletePost(){
    return this.http.delete(this.baseUrl);
  }
}
