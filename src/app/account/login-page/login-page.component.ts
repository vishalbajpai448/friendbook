import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userAuthService:UserAuthService ,private route:Router) { }

  ngOnInit(): void {
  }

  userLogin(loginData:any)
  {
    // if (this.userAuthService.userLogin(loginData))
    // {}
     this.userAuthService.userLogin(loginData).subscribe((data)=>{

      if(data.isActive) {
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('token', JSON.stringify(data.token));
        this.route.navigate(['home']);
      }
    });
  }

}
