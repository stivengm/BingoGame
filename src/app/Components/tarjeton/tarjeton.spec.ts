import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeton } from './tarjeton';

describe('Tarjeton', () => {
  let component: Tarjeton;
  let fixture: ComponentFixture<Tarjeton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarjeton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarjeton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
