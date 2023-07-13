import { ComponentFixture, TestBed } from '@angular/core/testing';

import { partidosComponent } from './partidos.component';

describe('partidosComponent', () => {
  let component: partidosComponent;
  let fixture: ComponentFixture<partidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ partidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(partidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
