import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  outputs:any;
  id:any;

  constructor(private routes: ActivatedRoute,private auth: AuthenticateService) { 
    this.id = this.routes.snapshot.paramMap.get('catId')
    this.auth.getProducts(this.id).subscribe( response=>{this.outputs=response.data})
  }

  ngOnInit(): void {
  }

}
