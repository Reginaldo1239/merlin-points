import { TestBed } from '@angular/core/testing';

import { ListarprodutosService } from './listarprodutos.service';

describe('ListarprodutosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarprodutosService = TestBed.get(ListarprodutosService);
    expect(service).toBeTruthy();
  });
});
