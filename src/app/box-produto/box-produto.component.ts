import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-box-produto',
  templateUrl: './box-produto.component.html',
  styleUrls: ['./box-produto.component.scss']
})
export class BoxProdutoComponent implements OnInit {

  pathImg="../assets/produtos/"

  @Input() nome;
  @Input() id;
  @Input() imagem;
  @Input() price;
  @Input() effect;

    @Output() abrir :EventEmitter<any> = new EventEmitter();
  constructor() { }
 
  ngOnInit() {
  }

  detalheProduto(){
    this.abrir.emit('id');
  }
  
 
} 
