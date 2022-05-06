import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  outputs:any;
  id:any;

  constructor(private routes: ActivatedRoute,private auth: AuthenticateService) { 
    this.id = this.routes.snapshot.paramMap.get('_id')
    this.auth.getProductDetail(this.id).subscribe( response=>{this.outputs=response.data})
  }

  ngOnInit(): void {
  }

}
