import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccount } from 'src/app/models/current-account.model';

@Component({
  selector: 'app-current-account-detail',
  templateUrl: './current-account-detail.component.html',
  styleUrls: ['./current-account-detail.component.scss']
})
export class CurrentAccountDetailComponent implements OnInit {

  currentAccount: CurrentAccount;
  
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
