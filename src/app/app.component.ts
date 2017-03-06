import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
//import Pet class from pet.ts
import { Pet } from './pet';
import { PetsService } from './pets.service';



// double curly braces (interpolation): a kind of one-way data binding
@Component({
  selector: 'pet-data',
  // edit pet’s name after adding two-way data binding to <input> element using built-in ngModel directive from FormsModule
  // template: `
  // <h1>{{title}}</h1>
  // <h2>Detail View For: {{pet.name}}</h2>
  // <img src={{pet.image}}/>
  // <div><ul>
  //     <li>Breed: {{pet.breed}}</li>
  //     <li>Age: {{pet.age}}</li>
  //     <li>Gender: {{pet.gender}}</li>
  //     <li>Intake Date: {{pet.intakeDate}}</li>
  // </ul></div>
  // <div>
  //   <label>Edit Name: </label>
  //   <input [(ngModel)]="pet.name" placeholder="name">
  // </div>`
  template: `
  <h1>{{title}}</h1>
  <div class="adoption-list">
    <h2>Pets For Adoption</h2>
    <ul class="pets">
      <li *ngFor="let pet of pets" [class.selected]="pet === selectedPet" (click)="onSelect(pet)">
        <span class="badge">{{pet.id}}</span> {{pet.name}}
        <img class="thumbnail" src="{{pet.image}}"/>
      </li>
    </ul>
  </div>
  
  <!--bind selectedPet property to the pet property of the PetsDetailComponent
  must declare a target property to be an input property; pet property will be target, in [] -->
  
  <pets-detail [pet]="selectedPet"></pets-detail>
  `,
  styles: [`
  .adoption-list {
    display: inline-block;
    vertical-align: top;
    width: 30%;
  }
  .details {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    clear: left;
  }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .pets {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .thumbnail {
    float: right;
    border-radius: 3px;
    width: 60px;
    height: 60px;
  }
  .pets li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 3.6em;
    border-radius: 3px;
  }
  .pets li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .pets li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .pets .text {
    position: relative;
    top: -3px;
  }
  .pets .badge {
    display: inline-block;
    font-size: 13px;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 3px 0 0 3px;
  }
`],
providers: [PetsService] //must register a provider so Angular knows how to create a new instance of PetsService
})

export class AppComponent implements OnInit { 
  title = 'Pet Adoption Center'; 
  // create an unitialized pets property, array of pet Objects
  pets: Pet[];
  selectedPet: Pet;
  // define a private petsService property and identify it as a PetsService injection site
  // creates new instance of the PetsService when Angular creates a new AppComponent.
  constructor(private petsService: PetsService) { }
  
  onSelect(pet: Pet): void {
    this.selectedPet = pet;
  }
  getPets(): void {
    // this.pets = this.petsService.getPets();
    // reconfigure using promises to make getPets() method asynchronous
    // pass callback function as an argument to the Promise's then method
    this.petsService.getPets().then(pets => this.pets = pets);
  }
  ngOnInit(): void {
    this.getPets();
  }

}


