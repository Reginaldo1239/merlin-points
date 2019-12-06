import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
import { faSearch,faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {
  faSearch= faSearch;
  faTimes= faTimes;
  @Input() visivel ;
  @Output() fechar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  
  }
  fecharMenu(){
    
    this.fechar.emit('fechar');
      console.log('aa');
  }


}
