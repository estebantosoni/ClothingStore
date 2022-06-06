import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraganciaComponent } from './fragancia.component';

describe('FraganciaComponent', () => {
  let component: FraganciaComponent;
  let fixture: ComponentFixture<FraganciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraganciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraganciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
