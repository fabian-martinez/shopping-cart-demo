import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
    this._cartService.currentDataCart$.subscribe(item=>{
      if(item)
      {
        this.items = item;
        this.totalQuantity = item.length;
        this.totalPrice = item.reduce((sum, current) => sum + (current.price * current.quantity), 0);
      }
    })
  }

  public items: Array<Item>
  public totalPrice:number = 0;
  public totalQuantity:number = 0;
  
  public remove(producto:Item)
  {
    this._cartService.removeElementCart(producto);
  }

}
