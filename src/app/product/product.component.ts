import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productData: any;
  ratingData: any = [1,2,3,4,5];
  percentage: number;


  constructor(private sharedService: SharedService) { 
  }

  ngOnInit() {  
    this.sharedService.getProductJson().subscribe((data)=>{
      this.productData = data;
      console.log(this.productData);
        //this.dummyData = JSON.parse(JSON.stringify(this.productData));
        // this.productData.forEach(ele => {
        //  ele.rating = Math.round(ele.rating);          
        // });      
      
    })
  }
  getColor(data){    
    console.log('rating:::',data);
    if(data.rating){
      this.percentage =  data.rating*20;
    }  
     else{
      this.percentage =  0;
    }
    return this.percentage + '%';
  }

}
