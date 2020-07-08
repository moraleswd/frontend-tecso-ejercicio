import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccountComponent } from './current-account.component';
import { CurrentAccountDeleteModule } from './current-account-delete/current-account-delete.module';
import { CurrentAccountDeleteComponent } from './current-account-delete/current-account-delete.component';
import { CurrentAccountCreateComponent } from './current-account-create/current-account-create.component';
import { CurrentAccountCreateModule } from './current-account-create/current-account-create.module';
import { CurrentAccountDetailComponent } from './current-account-detail/current-account-detail.component';
import { CurrentAccountDetailModule } from './current-account-detail/current-account-detail.module';
import { FormsModule } from '@angular/forms';
import { CurrencyTypeService } from 'src/app/services/currency-type.service';
import { IconsModule } from 'src/app/icons/icons.module';
import { CurrentAccountService } from 'src/app/services/current-account.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule,
    CurrentAccountDeleteModule,
    CurrentAccountCreateModule,
    CurrentAccountDetailModule,
    NgbModule,
    IconsModule],
  declarations: [CurrentAccountComponent],
  exports: [CurrentAccountComponent],
  bootstrap: [
    CurrentAccountDeleteComponent, 
    CurrentAccountCreateComponent, 
    CurrentAccountDetailComponent
  ],
  providers:[
    CurrentAccountService,
    CurrencyTypeService
  ]
})
export class CurrentAccountModule { }
