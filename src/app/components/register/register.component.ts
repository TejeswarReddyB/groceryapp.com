import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  output:any;

  constructor(private authService:AuthenticateService) {

  
   }


  ngOnInit(): void {
  
  }

  onSubmit(data:any){
    
    this.authService.postRegister(data).subscribe( response=>{
      console.log(response)
    })
  
    
  }

}
