import { Component } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
  providers: [PostService]
})
export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  hobbies: string[];
  showHobbies:boolean;
  posts: Post[];

  constructor(private postService:PostService){
    this.name = 'Gugan'; 
    this.email= 'shanmgugan@gmail.com';
    this.address={area:'choolaimedu',city:'chennai',state:'TN'};
    this.hobbies=['TV','Cricket',"Movie"];
    this.showHobbies = false;

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  toggleHobby(){
    if(this.showHobbies == false)
      this.showHobbies = true;
    else
      this.showHobbies = false;
  }
  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
}
interface address{
  area:string;
  city:string;
  state:string;
}
interface Post{
  id: number;
  title: string;
  body: string;
}
