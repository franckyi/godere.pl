import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLegoComponent } from './about-lego.component';

describe('AboutLegoComponent', () => {
  let component: AboutLegoComponent;
  let fixture: ComponentFixture<AboutLegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
