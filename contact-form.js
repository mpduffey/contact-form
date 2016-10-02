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
var reactive_form_1 = require('modules/reactive-form/reactive-form');
var ContactForm = (function () {
    function ContactForm() {
        this.fieldObject = [
            { name: "prefix", type: "STRING", defaultValue: "Mr.", custom: { label: "Prefix", labelAbove: false, controlType: "select", options: ["Mr.", "Mrs.", "Miss", "Ms.", "Dr."], css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "firstName", type: "STRING", defaultValue: "", custom: { label: "First Name", labelAbove: false, css: { input: { width: "100px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "middleName", type: "STRING", defaultValue: "", custom: { label: "Middle", labelAbove: false, css: { input: { width: "100px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "lastName", type: "STRING", defaultValue: "", custom: { label: "Last Name", labelAbove: false, css: { input: { width: "100px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "suffix", type: "STRING", defaultValue: "", custom: { label: "Suffix", labelAbove: false, controlType: "input", options: [], css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "primaryAddress", type: "STRING", defaultValue: "", custom: { label: "Primary Address", labelAbove: false, css: { input: { width: "470px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "primaryCity", type: "STRING", defaultValue: "", custom: { label: "City", labelAbove: false, css: { input: { width: "270px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "primaryState", type: "STRING", defaultValue: "", custom: { label: "State", labelAbove: false, css: { input: { width: "95px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "primaryZip", type: "STRING", defaultValue: "", custom: { label: "Zip", labelAbove: false, css: { input: { width: "95px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "email", type: "STRING", defaultValue: "", custom: { label: "E-mail", css: { input: { width: "470px" }, group: { display: "block", "margin-right": "6px", "margin-bottom": "5px" } } } },
            { name: "homePhone", type: "STRING", defaultValue: "", custom: { label: "Home Phone", css: { input: { width: "154px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "mobilePhone", type: "STRING", defaultValue: "", custom: { label: "Mobile Phone", css: { input: { width: "153px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "officePhone", type: "STRING", defaultValue: "", custom: { label: "Office Phone", css: { input: { width: "153px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "fax", type: "STRING", defaultValue: "", custom: { label: "Fax Phone", labelAbove: true, inputType: "checkbox", css: { input: { height: "auto", width: "auto" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
        ];
        this.formObject = [
            {
                type: "fieldset",
                name: "Name Group",
                fields: [
                    { classField: this.fieldObject[0] },
                    { classField: this.fieldObject[1] },
                    { classField: this.fieldObject[2] },
                    { classField: this.fieldObject[3] },
                    { classField: this.fieldObject[4] }
                ]
            },
            {
                type: "fieldset",
                name: "Address Group",
                fields: [
                    { classField: this.fieldObject[5] },
                    { classField: this.fieldObject[6] },
                    { classField: this.fieldObject[7] },
                    { classField: this.fieldObject[8] }
                ]
            },
            {
                type: "fieldset",
                name: "Contact Group",
                fields: [
                    { classField: this.fieldObject[9] },
                    { classField: this.fieldObject[10] },
                    { classField: this.fieldObject[11] },
                    { classField: this.fieldObject[12] }
                ]
            },
            {
                type: "input",
                classField: this.fieldObject[13]
            }
        ];
    }
    ContactForm = __decorate([
        core_1.Component({
            selector: 'contact-form',
            template: "\n\t\t<h1>Contact Form</h1>\n\t\t<reactive-form [formObject]=\"formObject\"></reactive-form>\n\t",
            directives: [reactive_form_1.ReactiveForm]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactForm);
    return ContactForm;
}());
exports.ContactForm = ContactForm;
//# sourceMappingURL=contact-form.js.map