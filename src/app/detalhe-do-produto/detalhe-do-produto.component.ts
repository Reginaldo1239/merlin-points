import { Component, OnInit,Input,EventEmitter ,Output} from '@angular/core';


@Component({
  selector: 'app-detalhe-do-produto',
  templateUrl: './detalhe-do-produto.component.html',
  styleUrls: ['./detalhe-do-produto.component.scss']
})
export class DetalheDoProdutoComponent implements OnInit {
  @Input() visivel: boolean;
  @Input() nome;
  @Input() id;
  @Input() imagem;
  @Input() price;
  @Input() effect;
  pathImg="../assets/produtos/"
  constructor() { }
  @Output() acaoDeClick = new EventEmitter();
  ngOnInit() {
    this.visivel = false;
  }


 fechar(){
  this.acaoDeClick.emit();
  console.log('fechar')
 }
}
