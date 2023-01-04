import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.userAuthService.GET('posts').subscribe((data:any) =>{
      console.log(data);
    })

  }

}
