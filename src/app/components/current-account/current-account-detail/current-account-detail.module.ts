import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccountDetailComponent } from './current-account-detail.component';



@NgModule({
  imports: [
    CommonModule, 
    NgbModule],
  declarations: [CurrentAccountDetailComponent],
  exports: [CurrentAccountDetailComponent],
  bootstrap: []
})
export class CurrentAccountDetailModule { }
