import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovementDetailComponent } from './movement-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule, 
    NgbModule],
  declarations: [MovementDetailComponent],
  exports: [MovementDetailComponent],
  bootstrap: []
})
export class MovementDetailModule { }
