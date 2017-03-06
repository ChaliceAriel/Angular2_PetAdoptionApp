"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pets_service_1 = require('./pets.service');
// double curly braces (interpolation): a kind of one-way data binding
var AppComponent = (function () {
    // define a private petsService property and identify it as a PetsService injection site
    // creates new instance of the PetsService when Angular creates a new AppComponent.
    function AppComponent(petsService) {
        this.petsService = petsService;
        this.title = 'Pet Adoption Center';
    }
    AppComponent.prototype.onSelect = function (pet) {
        this.selectedPet = pet;
    };
    AppComponent.prototype.getPets = function () {
        var _this = this;
        // this.pets = this.petsService.getPets();
        // reconfigure using promises to make getPets() method asynchronous
        // pass callback function as an argument to the Promise's then method
        this.petsService.getPets().then(function (pets) { return _this.pets = pets; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPets();
    };
    AppComponent = __decorate([
        core_1.Component({
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
            template: "\n  <h1>{{title}}</h1>\n  <div class=\"adoption-list\">\n    <h2>Pets For Adoption</h2>\n    <ul class=\"pets\">\n      <li *ngFor=\"let pet of pets\" [class.selected]=\"pet === selectedPet\" (click)=\"onSelect(pet)\">\n        <span class=\"badge\">{{pet.id}}</span> {{pet.name}}\n        <img class=\"thumbnail\" src=\"{{pet.image}}\"/>\n      </li>\n    </ul>\n  </div>\n  \n  <!--bind selectedPet property to the pet property of the PetsDetailComponent\n  must declare a target property to be an input property; pet property will be target, in [] -->\n  \n  <pets-detail [pet]=\"selectedPet\"></pets-detail>\n  ",
            styles: ["\n  .adoption-list {\n    display: inline-block;\n    vertical-align: top;\n    width: 30%;\n  }\n  .details {\n    display: inline-block;\n    vertical-align: top;\n    width: 50%;\n    clear: left;\n  }\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .pets {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .thumbnail {\n    float: right;\n    border-radius: 3px;\n    width: 60px;\n    height: 60px;\n  }\n  .pets li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 3.6em;\n    border-radius: 3px;\n  }\n  .pets li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .pets li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .pets .text {\n    position: relative;\n    top: -3px;\n  }\n  .pets .badge {\n    display: inline-block;\n    font-size: 13px;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 3px 0 0 3px;\n  }\n"],
            providers: [pets_service_1.PetsService] //must register a provider so Angular knows how to create a new instance of PetsService
        }), 
        __metadata('design:paramtypes', [pets_service_1.PetsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map