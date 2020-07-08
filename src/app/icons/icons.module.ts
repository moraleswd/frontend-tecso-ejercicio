import { NgModule } from '@angular/core';
 
import { FeatherModule } from 'angular-feather';
import { Eye, Edit, Trash2, AlertCircle, ArrowLeft } from 'angular-feather/icons';
 
const icons = {
  Eye,
  Edit,
  Trash2,
  AlertCircle,
  ArrowLeft
};
 
@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }