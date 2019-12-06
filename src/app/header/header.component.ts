import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars }from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faBars = faBars;
  faShoppingCart = faShoppingCart;
   abrirMenu= false;
  constructor() { }

  ngOnInit() {
  }
  abrir(){
    console.log('ete')
      if(this.abrirMenu){
        this.abrirMenu =false;
      }else{
        this.abrirMenu= true;
      }
   
  }
}
