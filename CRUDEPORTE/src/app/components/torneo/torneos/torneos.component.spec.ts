import { ComponentFixture, TestBed } from '@angular/core/testing';

import { torneosComponent } from './torneos.component';

describe('torneosComponent', () => {
  let component: torneosComponent;
  let fixture: ComponentFixture<torneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ torneosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(torneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
