import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayComponent } from './multiplay.component';

describe('MultiplayComponent', () => {
  let component: MultiplayComponent;
  let fixture: ComponentFixture<MultiplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
