import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiWorkstationComponent } from './multi-workstation.component';

describe('MultiWorkstationComponent', () => {
  let component: MultiWorkstationComponent;
  let fixture: ComponentFixture<MultiWorkstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiWorkstationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiWorkstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
