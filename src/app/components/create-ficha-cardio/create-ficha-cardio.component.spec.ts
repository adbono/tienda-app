import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFichaCardioComponent } from './create-ficha-cardio.component';

describe('CreateFichaCardioComponent', () => {
  let component: CreateFichaCardioComponent;
  let fixture: ComponentFixture<CreateFichaCardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFichaCardioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFichaCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
