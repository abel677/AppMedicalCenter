import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-pages-user',
  templateUrl: './pages-user.component.html',
  styleUrls: ['./pages-user.component.css']
})
export class PagesUserComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUser().subscribe(
      (data)=>{ 
        console.log(data);
        
      },
      (err)=>{ 
        console.log(err);
        
      }
    )
  }

}
