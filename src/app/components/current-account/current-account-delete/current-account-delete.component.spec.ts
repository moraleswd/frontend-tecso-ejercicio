import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAccountDeleteComponent } from './current-account-delete.component';

describe('CurrentAccountDeleteComponent', () => {
  let component: CurrentAccountDeleteComponent;
  let fixture: ComponentFixture<CurrentAccountDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAccountDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAccountDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
