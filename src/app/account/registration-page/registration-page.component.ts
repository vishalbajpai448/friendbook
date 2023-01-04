import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private userAuthService:UserAuthService) { }

  ngOnInit(): void {
  }

  userRegistered(data:any)
  {
    this.userAuthService.registration(data).subscribe(
      (result)=>
    {
      console.log(result);
      
    });
  }


}
