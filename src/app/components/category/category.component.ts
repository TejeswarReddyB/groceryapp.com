
import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  outputs:any;

  constructor(private auth: AuthenticateService) {
    this.auth.getCategory().subscribe( response=>{this.outputs=response.data})

    
  }

  ngOnInit(): void {
  }


}
