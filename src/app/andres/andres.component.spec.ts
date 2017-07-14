import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndresComponent } from './andres.component';

describe('AndresComponent', () => {
  let component: AndresComponent;
  let fixture: ComponentFixture<AndresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
