import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccountCreateComponent } from './current-account-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule],
  declarations: [CurrentAccountCreateComponent],
  exports: [CurrentAccountCreateComponent],
  bootstrap: []
})
export class CurrentAccountCreateModule { }
