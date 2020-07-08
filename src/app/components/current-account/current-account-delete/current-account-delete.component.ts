import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccount } from 'src/app/models/current-account.model';
import { CurrentAccountService } from 'src/app/services/current-account.service';

@Component({
  selector: 'app-current-account-delete',
  templateUrl: './current-account-delete.component.html',
  styleUrls: ['./current-account-delete.component.scss']
})
export class CurrentAccountDeleteComponent implements OnInit {

  currentAccount: CurrentAccount;
  genericError: any;
  constructor(
    public activeModal: NgbActiveModal,
    private currentAccountService: CurrentAccountService
    ) {}

  ngOnInit(): void {
  }

  delete(){
    this.currentAccountService.deleteById(this.currentAccount.id).subscribe(response=>{
      this.activeModal.close("Cuenta Eliminada");
    },
    error=>{
      console.log(error.error.message);
      this.genericError = error.error.message;
    })
  }

}
