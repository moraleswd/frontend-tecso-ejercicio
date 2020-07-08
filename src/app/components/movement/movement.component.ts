import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovementCreateComponent } from './movement-create/movement-create.component';
import { MovementDetailComponent } from './movement-detail/movement-detail.component';
import { Movement } from 'src/app/models/movement.model';
import { MovementService } from 'src/app/services/movement.service';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {

  listMovements: Array<Movement>;
  idAccount : number;
  constructor(
    private modalService: NgbModal,
    private movementService: MovementService,
    private location: Location,
    private activeRoute: ActivatedRoute
    ) {
      this.activeRoute.params.subscribe(params => {
        if(params['id']) {
          this.idAccount = params['id'];
        }
    })
    }

  goBack() {
    this.location.back();
  }
    
  
  create() {
    let modalRef = this.modalService.open(MovementCreateComponent, { size: 'lg' });
    modalRef.componentInstance.idAccount = this.idAccount;
    modalRef.result.then((result) => {
      this.movementService.findMovementsByAccount(this.idAccount).subscribe(response =>{
        this.listMovements = response;
      });
    }, (reason) => {
    });
  }

  detail(movement: Movement) {
    let modalRef = this.modalService.open(MovementDetailComponent, { size: 'lg' });
    modalRef.componentInstance.movement = movement;
  }

  ngOnInit(): void {
    this.movementService.findMovementsByAccount(this.idAccount).subscribe(response =>{
      this.listMovements = response;
    })
  }
}
