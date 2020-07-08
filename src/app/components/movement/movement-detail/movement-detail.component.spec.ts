import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAccountDetailComponent } from './current-account-detail.component';

describe('CurrentAccountDetailComponent', () => {
  let component: CurrentAccountDetailComponent;
  let fixture: ComponentFixture<CurrentAccountDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAccountDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
