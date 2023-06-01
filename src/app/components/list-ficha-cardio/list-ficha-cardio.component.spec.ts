import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFichaCardioComponent } from './list-ficha-cardio.component';

describe('ListFichaCardioComponent', () => {
  let component: ListFichaCardioComponent;
  let fixture: ComponentFixture<ListFichaCardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFichaCardioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFichaCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
