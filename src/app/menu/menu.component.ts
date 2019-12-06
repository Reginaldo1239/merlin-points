import { Component, OnInit } from '@angular/core';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faAngleDown = faAngleDown;
  constructor() { }

  ngOnInit() {
  }

}
