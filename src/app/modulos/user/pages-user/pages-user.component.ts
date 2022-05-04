import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { LoginService } from 'src/app/servicios/login.service';
import { UsersService } from 'src/app/servicios/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pages-user',
  templateUrl: './pages-user.component.html',
  styleUrls: ['./pages-user.component.css']
})
export class PagesUserComponent implements OnInit {

  lista:any;
  
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUser().subscribe(
      (data)=>{ 
        this.lista = data;
        console.log(data);
      },
      (err)=>{ 
        console.log(err);
        
      }
    )
  }
  deleteUsers(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Desea eliminar este registro!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delUsers(1).subscribe(
          {
            next: (data)=>{
              console.log(data);
              Swal.fire(
                'Good job!',
                data.message,
                'success'
              )
            },
            error:(err)=>{
              console.log(err);
              Swal.fire(
                'Error!',
                err.error.message,
                'success'
              )
            }
          }
        )
        
      }
    })
    
  }

}
