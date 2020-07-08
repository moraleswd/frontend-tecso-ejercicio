import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccountDeleteComponent } from './current-account-delete/current-account-delete.component';
import { CurrentAccountCreateComponent } from './current-account-create/current-account-create.component';
import { CurrentAccountDetailComponent } from './current-account-detail/current-account-detail.component';
import { CurrentAccount } from 'src/app/models/current-account.model';
import { CurrentAccountService } from 'src/app/services/current-account.service';

@Component({
  selector: 'app-current-account',
  templateUrl: './current-account.component.html',
  styleUrls: ['./current-account.component.scss']
})
export class CurrentAccountComponent implements OnInit {

  listAccounts: Array<CurrentAccount>;
  
  constructor(
    private modalService: NgbModal,
    private currentAccountService: CurrentAccountService
    ) {}

  delete(currentAccount: CurrentAccount) {
    let modalRef = this.modalService.open(CurrentAccountDeleteComponent, { size: 'lg' });
    modalRef.componentInstance.currentAccount = currentAccount;
    modalRef.result.then((result) => {
      this.currentAccountService.findAll().subscribe(response =>{
        this.listAccounts = response;
      });
    }, (reason) => {
    });
  }

  
  create() {
    let modalRef = this.modalService.open(CurrentAccountCreateComponent, { size: 'lg' });
    modalRef.result.then((result) => {
      this.currentAccountService.findAll().subscribe(response =>{
        this.listAccounts = response;
      });
    }, (reason) => {
    });
  }

  detail(currentAccount: CurrentAccount) {
    let modalRef = this.modalService.open(CurrentAccountDetailComponent, { size: 'lg' });
    modalRef.componentInstance.currentAccount = currentAccount;
  }

  edit(currentAccount: CurrentAccount) {
    let modalRef = this.modalService.open(CurrentAccountCreateComponent, { size: 'lg' });
    modalRef.componentInstance.currentAccount = currentAccount;
    modalRef.result.then((result) => {
      this.currentAccountService.findAll().subscribe(response =>{
        this.listAccounts = response;
      });
    }, (reason) => {
    });
  }

  ngOnInit(): void {
    this.currentAccountService.findAll().subscribe(response =>{
      this.listAccounts = response;
    })
  }
}
