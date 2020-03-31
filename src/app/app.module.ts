import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddComponent } from "./addItem.component";
import { DeleteItemComponent } from "./deleteItem.component";
import { ItemComponent } from "./item.component";
import{DemoModalServiceStaticComponent} from './modal.component'
// RECOMMENDED
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsModalRef } from "ngx-bootstrap/modal/public_api";
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [BrowserModule, FormsModule,ButtonsModule.forRoot(),ModalModule.forRoot()],
  declarations: [AppComponent, AddComponent,DeleteItemComponent,ItemComponent,DemoModalServiceStaticComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
