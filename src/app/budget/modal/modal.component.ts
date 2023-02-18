import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  message: string = '';
  modalType: string = '';
  @Input() typeOfMessage: string = '';
  @ViewChild('content') content: any;

  constructor(private modalService: NgbModal) {}

  open(typeOfMessage: string) {
    this.modalType = typeOfMessage;
    this.modalService.open(this.content).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }
}
