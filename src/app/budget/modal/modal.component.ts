import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  message: string = '';
  @Input() typeOfMessage: string = '';
  @ViewChild('content') content: any;

  constructor(private modalService: NgbModal) {}

  open(typeOfMessage: string, message: string) {
    this.message = message;
    this.modalService.open(this.content).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

/*   open(typeOfMessage: string) {
    this.message = typeOfMessage;
    this.modalService.open(this.content).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  } */
}





/* @Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  pages : any;

  constructor( private modalService: NgbModal ) { }

  ngOnInit(): void {

  }

  closeResult!: string;

  open(content: any) {
    this.modalService.open(content)
  }
} */

/*
import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})

export class ModalComponent implements OnInit {

  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myButton') myButton!: ElementRef;

  @Input() pages: boolean = false

  options: object = {
    keyboard: false,
    backdrop: true,
    focus: true
  };

  toggleModal() {
    this.myModal.nativeElement.classList.toggle('show');
    this.myModal.nativeElement.classList.toggle('d-block');
    document.body.classList.toggle('modal-open');
  }

  ngOnInit(): void {
    document.addEventListener('click', ({target}) => {
      const condition1 = this.myModal.nativeElement.classList.contains("show")
      const condition2 = !this.myModal.nativeElement.contains(target)
      const condition3 = !this.myButton.nativeElement.contains(target)

      if (condition1 && condition2 && condition3) this.toggleModal()
    })
  }
}
*/

