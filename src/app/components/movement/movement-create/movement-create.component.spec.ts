import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAccountCreateComponent } from './current-account-create.component';

describe('CurrentAccountCreateComponent', () => {
  let component: CurrentAccountCreateComponent;
  let fixture: ComponentFixture<CurrentAccountCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAccountCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAccountCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
