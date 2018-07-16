import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeatilsComponent } from './product-deatils.component';

describe('ProductDeatilsComponent', () => {
  let component: ProductDeatilsComponent;
  let fixture: ComponentFixture<ProductDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
