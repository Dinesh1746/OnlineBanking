import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUIDComponent } from './change-uid.component';

describe('ChangeUIDComponent', () => {
  let component: ChangeUIDComponent;
  let fixture: ComponentFixture<ChangeUIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeUIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
