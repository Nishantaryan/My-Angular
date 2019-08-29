import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products=[
  {
     name:"Phone XL",
     price:799,
     description:"Great phone with best camera"

  },
  {
    name:"Phone Mini",
    price:699,
    description:"The Specs is top class"

 },
 {
  name:"Phone Standard",
  price:299,
  description:""

}
]
share()
{
  window.alert("The product has shared");
}

onNotify() {
  window.alert('You will be notified when the product goes on sale');
}

  constructor() { }

  ngOnInit() {
  }

}
