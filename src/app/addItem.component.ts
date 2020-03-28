import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <form>
  <label for="fname">Name:</label><br>
   <input #name type="text" id="fname" name="name" (keyup)="getName(name.value)" >
  </form>
  <h1>Hello {{name.value}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  getName(name : string){
    this.name = name;
  }
}
