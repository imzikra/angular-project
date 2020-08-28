import { Component, Input,HostListener,TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'textbox',
  template: `
  <span ng-hide="editing">
    {{name}} <button ng-click="editing = true">Edit</button>
  </span>
  <span ng-show="editing">
    <input type="text" ng-model="name"> 
    <button ng-click="editing = false">Save</button>
  </span>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ItemBoxComponent  {
modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    
  }
  
}
