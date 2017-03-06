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
//import the Component and Input decorators from Angular
var core_1 = require('@angular/core');
//import Pet class from pet.ts
var pet_1 = require('./pet');
//create metadata with the @Component decorator to specify the selector name
var PetsDetailComponent = (function () {
    function PetsDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pet_1.Pet)
    ], PetsDetailComponent.prototype, "pet", void 0);
    PetsDetailComponent = __decorate([
        core_1.Component({
            selector: 'pets-detail',
            template: "\n  <div class=\"details\" *ngIf=\"pet\">\n    <h2>Detail View For: {{pet.name}}</h2>\n    <img src={{pet.image}}/>\n      <div>\n      <ul>\n        <li>Breed: {{pet.breed}}</li>\n        <li>Age: {{pet.age}}</li>\n        <li>Gender: {{pet.gender}}</li>\n        <li>Intake Date: {{pet.intakeDate}}</li>\n      </ul>\n   </div>\n   <div>\n    <label>Edit Name: </label>\n    <input [(ngModel)]=\"pet.name\" placeholder=\"name\">\n  </div>",
            styles: ["\n  .details {\n    display: inline-block;\n    vertical-align: top;\n    width: 50%;\n    clear: left;\n  }"]
        }), 
        __metadata('design:paramtypes', [])
    ], PetsDetailComponent);
    return PetsDetailComponent;
}());
exports.PetsDetailComponent = PetsDetailComponent;
//# sourceMappingURL=pets-detail.component.js.map