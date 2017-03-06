//import the Component and Input decorators from Angular
import { Component, Input } from '@angular/core';
//import Pet class from pet.ts
import { Pet } from './pet';

//create metadata with the @Component decorator to specify the selector name
@Component({
  selector: 'pets-detail',
  template: `
  <div class="details" *ngIf="pet">
    <h2>Detail View For: {{pet.name}}</h2>
    <img src={{pet.image}}/>
      <div>
      <ul>
        <li>Breed: {{pet.breed}}</li>
        <li>Age: {{pet.age}}</li>
        <li>Gender: {{pet.gender}}</li>
        <li>Intake Date: {{pet.intakeDate}}</li>
      </ul>
   </div>
   <div>
    <label>Edit Name: </label>
    <input [(ngModel)]="pet.name" placeholder="name">
  </div>`,
  styles: [`
  .details {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    clear: left;
  }`]
})

//export the class to make it available to other components
export class PetsDetailComponent {
  //declare that pet is an input, using @Input decorator
    @Input()
      pet: Pet;
}
