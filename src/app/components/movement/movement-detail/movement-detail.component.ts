import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Movement } from 'src/app/models/movement.model';

@Component({
  selector: 'app-movement-detail',
  templateUrl: './movement-detail.component.html',
  styleUrls: ['./movement-detail.component.scss']
})
export class MovementDetailComponent implements OnInit {

  movement: Movement;
  
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
