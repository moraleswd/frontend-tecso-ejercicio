import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovementComponent } from './movement.component';
import { MovementCreateComponent } from './movement-create/movement-create.component';
import { MovementCreateModule } from './movement-create/movement-create.module';
import { MovementDetailComponent } from './movement-detail/movement-detail.component';
import { MovementDetailModule } from './movement-detail/movement-detail.module';
import { FormsModule } from '@angular/forms';
import { MovementTypeService } from 'src/app/services/movement-type.service';
import { MovementService } from 'src/app/services/movement.service';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    MovementCreateModule,
    MovementDetailModule,
    NgbModule,
    IconsModule],
  declarations: [MovementComponent],
  exports: [MovementComponent],
  bootstrap: [
    MovementCreateComponent, 
    MovementDetailComponent
  ],
  providers:[
    MovementService,
    MovementTypeService
  ]
})
export class MovementModule { }
