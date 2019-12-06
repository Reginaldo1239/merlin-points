import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProdutoComponent } from './box-produto.component';

describe('BoxProdutoComponent', () => {
  let component: BoxProdutoComponent;
  let fixture: ComponentFixture<BoxProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
