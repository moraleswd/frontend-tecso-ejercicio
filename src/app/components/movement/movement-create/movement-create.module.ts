import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovementCreateComponent } from './movement-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule],
  declarations: [MovementCreateComponent],
  exports: [MovementCreateComponent],
  bootstrap: []
})
export class MovementCreateModule { }
