import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'demo-modal-service-static',
  template: `<button type="button" class="btn btn-primary" (click)="openModal(template)">Create template modal</button>
 
<ng-template #template>
  <div class="modal-header">
    <h4 class="modal-title pull-left">Add Item</h4>
    <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  <
  </div>
</ng-template>`
})
export class DemoModalServiceStaticComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}