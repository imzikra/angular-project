import { Component, Input,HostListener,TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'add',
  template: `
 <button type="button" class="btn btn-primary" (click)="openModal(template)">Add</button>
<ng-template #template>
  <div class="modal-header">
    <h4 class="modal-title pull-left">Modal</h4>
    <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    This is a modal.
  </div>
</ng-template>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class AddComponent  {
modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    
  }
  
}
