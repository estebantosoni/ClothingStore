import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPopiComponent } from './mini-popi.component';

describe('MiniPopiComponent', () => {
  let component: MiniPopiComponent;
  let fixture: ComponentFixture<MiniPopiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniPopiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
