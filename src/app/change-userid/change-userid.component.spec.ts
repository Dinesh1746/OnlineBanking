import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUseridComponent } from './change-userid.component';

describe('ChangeUseridComponent', () => {
  let component: ChangeUseridComponent;
  let fixture: ComponentFixture<ChangeUseridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeUseridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
