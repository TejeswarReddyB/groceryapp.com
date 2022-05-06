import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  outputs1:any;
  outputs2:any;

  id1:any;
  //id2:any;

  constructor(private routes: ActivatedRoute,private auth: AuthenticateService) { 
    this.id1 = this.routes.snapshot.paramMap.get('catId')
    this.auth.getSubcategory(this.id1).subscribe( response=>{this.outputs1=response.data})
    // this.id2 = this.routes.snapshot.paramMap.get('subId')
    // this.auth.getProductsSubcategory(this.id2).subscribe( response=>{this.outputs2=response.data})
    
    
  

    
  }

  ngOnInit(): void {
    

  }


}
