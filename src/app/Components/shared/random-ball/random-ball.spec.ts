import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBall } from './random-ball';

describe('RandomBall', () => {
  let component: RandomBall;
  let fixture: ComponentFixture<RandomBall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomBall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomBall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
