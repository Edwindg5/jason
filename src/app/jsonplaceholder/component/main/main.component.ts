import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PostsService } from '../../services/posts.service';
import { Iposts } from '../../models/Iposts';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PostFormComponent } from '../post-form/post-form.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, CommonModule, PostFormComponent], 
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] 
})
export class Main implements OnInit {
  constructor(readonly postsService: PostsService) {}

  posts: Iposts[] = [];
  newObject: Iposts = { userId: 1, id: 1, title: 'string', body: 'string' };

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((value: Iposts[]) => {
      console.log(value);

      value.forEach((item: Iposts) => {
        console.log(item);
      });

      this.posts = value;
    });

    this.postsService.postPosts(this.newObject).subscribe((value: Iposts[]) => {
      console.log(value);
    });
  }
}
