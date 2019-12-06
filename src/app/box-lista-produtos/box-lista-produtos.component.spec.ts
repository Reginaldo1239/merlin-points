import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxListaProdutosComponent } from './box-lista-produtos.component';

describe('BoxListaProdutosComponent', () => {
  let component: BoxListaProdutosComponent;
  let fixture: ComponentFixture<BoxListaProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxListaProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxListaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
