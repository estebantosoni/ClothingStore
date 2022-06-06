import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndumentariaComponent } from './indumentaria.component';

describe('IndumentariaComponent', () => {
  let component: IndumentariaComponent;
  let fixture: ComponentFixture<IndumentariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndumentariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndumentariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
