import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddComponent } from "./addItem.component";
import { DeleteItemComponent } from "./deleteItem.component";
import { ItemComponent } from "./item.component";
// RECOMMENDED
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [BrowserModule, FormsModule,ButtonsModule.forRoot()],
  declarations: [AppComponent, AddComponent,DeleteItemComponent,ItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
