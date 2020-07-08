import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccountDeleteComponent } from './current-account-delete.component';

@NgModule({
  imports: [
    CommonModule, 
    NgbModule],
  declarations: [CurrentAccountDeleteComponent],
  exports: [CurrentAccountDeleteComponent],
  bootstrap: []
})
export class CurrentAccountDeleteModule { }
