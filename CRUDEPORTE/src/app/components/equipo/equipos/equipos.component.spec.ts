import { ComponentFixture, TestBed } from '@angular/core/testing';

import { equiposComponent } from './equipos.component';

describe('equiposComponent', () => {
  let component: equiposComponent;
  let fixture: ComponentFixture<equiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ equiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(equiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
