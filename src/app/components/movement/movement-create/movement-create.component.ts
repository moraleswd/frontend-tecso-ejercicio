import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Movement } from 'src/app/models/movement.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MovementService } from 'src/app/services/movement.service';
import { MovementType } from 'src/app/models/movement-type';
import { MovementTypeService } from 'src/app/services/movement-type.service';
import { CurrentAccount } from 'src/app/models/current-account.model';

@Component({
  selector: 'app-movement-create',
  templateUrl: './movement-create.component.html',
  styleUrls: ['./movement-create.component.scss']
})
export class MovementCreateComponent implements OnInit {

  movement: Movement;
  listMovementType: Array<MovementType>;
  movementForm: FormGroup;
  title: string;
  action: string;
  genericError: any;
  idAccount: number;
  constructor(
    public activeModal: NgbActiveModal,
    private movementTypeService: MovementTypeService,
    private movementService: MovementService
  ) {}
  
  ngOnInit(): void {

    this.movementTypeService.findAll().subscribe(response=>{
      this.listMovementType = response;
    });

    this.movementForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(''),
      currentAccount: new FormControl(''),
      description: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      amount: new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]),
      movementType: new FormControl('', Validators.required)
    });

    //Es una creacion
    if(!this.movement){
      this.title = "Agregar Movimiento";
      this.action = "Agregar";
    }

    this.movementForm.controls['currentAccount'].setValue(new CurrentAccount(this.idAccount));
    
  }

  compareFn(c1: MovementType, c2: MovementType): boolean {
      return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  get accountNumber(): any {
    return this.movementForm.get('accountNumber');
  }

  get description(): any {
    return this.movementForm.get('description');
  }

  get amount(): any {
    return this.movementForm.get('amount');
  }

  get movementType(): any {
    return this.movementForm.get('movementType');
  }

  save(){
    this.movementService.save(this.movementForm.value).subscribe(() =>{
      this.activeModal.close("Movimiento Modificado");
    },
    error=>{
      console.log(error.error.message);
      this.genericError = error.error.message;
      this.movementForm.controls['description'].setErrors({'generic': true});
    })
  }
}
