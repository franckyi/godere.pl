import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrondBlackComponent } from './grond-black.component';

describe('GrondBlackComponent', () => {
  let component: GrondBlackComponent;
  let fixture: ComponentFixture<GrondBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrondBlackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrondBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
