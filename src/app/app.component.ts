import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';
  
  public openCart:boolean = false;
  
  public cart(){ //Se usa para abrir o cerrar el carrito
    this.openCart = !this.openCart;
  }
}
