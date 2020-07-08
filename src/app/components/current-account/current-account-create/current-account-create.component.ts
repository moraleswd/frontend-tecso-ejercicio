import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccount } from 'src/app/models/current-account.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CurrencyTypeService } from 'src/app/services/currency-type.service';
import { CurrencyType } from 'src/app/models/currency-type';
import { CurrentAccountService } from 'src/app/services/current-account.service';

@Component({
  selector: 'app-current-account-create',
  templateUrl: './current-account-create.component.html',
  styleUrls: ['./current-account-create.component.scss']
})
export class CurrentAccountCreateComponent implements OnInit {

  currentAccount: CurrentAccount;
  listCurrency: Array<CurrencyType>;
  currentAccountForm: FormGroup;
  title: string;
  action: string;
  genericError: any;
  constructor(
    public activeModal: NgbActiveModal,
    private currentTypeService: CurrencyTypeService,
    private currentAccountService: CurrentAccountService
  ) {}
  
  ngOnInit(): void {

    this.currentTypeService.findAll().subscribe(response=>{
      this.listCurrency = response;
    });

    this.currentAccountForm = new FormGroup({
      id: new FormControl(''),
      balance: new FormControl(''),
      accountNumber: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      currencyType: new FormControl('', Validators.required)
    });

    //Es una creacion
    if(!this.currentAccount){
      this.title = "Crear Cuenta";
      this.action = "Crear";
    }else{
      this.title = "Modificar Cuenta";
      this.action = "Modificar";
      this.currentAccountForm.setValue(this.currentAccount);
    }
    
  }

  compareFn(c1: CurrencyType, c2: CurrencyType): boolean {
      return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  get accountNumber(): any {
    return this.currentAccountForm.get('accountNumber');
  }

  get currencyType(): any {
    return this.currentAccountForm.get('currencyType');
  }

  save(){
    this.currentAccountService.save(this.currentAccountForm.value).subscribe(() =>{
      this.activeModal.close("Cuenta Modificada");
    },
    error=>{
      console.log(error.error.message);
      this.genericError = error.error.message;
      this.currentAccountForm.controls['accountNumber'].setErrors({'generic': true});
    })
  }
}
