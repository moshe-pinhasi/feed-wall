import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import 'rxjs/Rx';

@Injectable()
export class PostsService {

  private path: string = '/posts';

  constructor(private apiService: ApiService) {}

  createPost(post) {
    return this.apiService.post(this.path, post)
  }

  getPosts() {
    return this.apiService.get(this.path)
  }

}
